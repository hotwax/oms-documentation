import { CONFIG } from "../src/config/index.js";
import { getTargetMonth, extractPRRefsWithLinks, extractLinkedIssueNumbers } from "../src/utils/index.js";
import { fetchMonthlyReleases, fetchContext } from "../src/services/github.js";
import { refreshRepoContextCache, runOrganizer } from "../src/agents/organizer.js";
import { runSummarizer } from "../src/agents/summarizer.js";
import { runSynthesizer } from "../src/agents/synthesizer.js";
import { 
    loadPendingPRFAQs, 
    identifyProductUpdateMatches, 
    runProductUpdater, 
    markFAQAsCompleted 
} from "../src/agents/product_updater.js";
import { 
    loadRepoContextCache, 
    appendToRepoContextCache, 
    saveRawContext, 
    saveClusterMatrix,
    getRawContextFilePath,
    saveAgentPrompt,
    saveReleaseNotes,
    saveProductUpdate
} from "../src/storage/index.js";
import fs from "fs";
import path from "path";

(async () => {
    const targetMonth = getTargetMonth(CONFIG.MONTH);
    console.log(`📅 Target Month: ${targetMonth}`);
    console.log(`🚀 Starting Stage 0: Discovery & Fetching...`);

    const repoMetadata = {};
    const itemMetadata = [];
    const repoCache = loadRepoContextCache();

    const repos = CONFIG.SOURCE_REPOS.split(",").map(r => r.trim());

    const rawContextPath = getRawContextFilePath(targetMonth);
    const skipFetching = CONFIG.DRY_RUN && fs.existsSync(rawContextPath);

    if (skipFetching) {
        console.log(`📡 [DRY RUN] Raw context found at ${rawContextPath}. Skipping Stage 0 fetching...`);
        // Reconstruct itemMetadata for Phase 1 from raw context
        const rawData = fs.readFileSync(rawContextPath, 'utf8').split('\n').filter(Boolean).map(JSON.parse);
        for (const item of rawData) {
            itemMetadata.push({
                id: item.id,
                repo: item.repo,
                title: item.title,
                labels: item.labels,
                type: item.type,
                body: item.body || "",
                linkedIssues: item.linkedIssues || [],
                linkedIssueIds: item.linkedIssues?.map(i => i.number) || []
            });
        }
        // Reconstruct repoMetadata from cache
        for (const repoFull of repos) {
            const repoContext = repoCache[repoFull];
            const [owner, repo] = repoFull.split("/");
            repoMetadata[repoFull] = { 
                owner, 
                repo,
                description: repoContext?.description || "No description provided.",
                relations: repoContext?.relations || "No relations identified."
            };
        }
    } else {
        // 0.1 Pre-fetch missing repository context in batch
        await refreshRepoContextCache(repos, repoCache);

        for (const repoFull of repos) {
            const [owner, repo] = repoFull.split("/");
            
            const repoContext = repoCache[repoFull];
            repoMetadata[repoFull] = { 
                owner, 
                repo,
                description: repoContext?.description || "No description provided.",
                relations: repoContext?.relations || "No relations identified."
            };
            
            console.log(`Fetching updates from ${repoFull}...`);

            try {
                const releases = await fetchMonthlyReleases(owner, repo, targetMonth);

                for (const release of releases) {
                    const prRefs = extractPRRefsWithLinks(release.body, owner, repo);
                    
                    for (const prRef of prRefs) {
                        console.log(`  Fetching context for #${prRef.number}...`);
                        const context = await fetchContext(owner, repo, prRef.number);
                        
                        if (context) {
                            const linkedIssueNumbers = context.type === 'PR' ? extractLinkedIssueNumbers(context.body) : [];
                            const linkedIssues = [];
                            for (const issueNum of linkedIssueNumbers) {
                                console.log(`    Fetching linked Issue #${issueNum}...`);
                                const issueDetails = await fetchContext(owner, repo, issueNum);
                                if (issueDetails) linkedIssues.push(issueDetails);
                            }
                            
                            const itemData = {
                                id: `${repoFull}#${prRef.number}`,
                                repo: repoFull,
                                type: context.type,
                                number: prRef.number,
                                title: context.title,
                                labels: context.labels,
                                body: context.body,
                                files: context.files,
                                linkedIssues,
                                releaseTag: release.tag_name
                            };

                            itemMetadata.push({
                                id: itemData.id,
                                repo: itemData.repo,
                                title: itemData.title,
                                labels: itemData.labels,
                                type: itemData.type,
                                body: itemData.body,
                                linkedIssues: itemData.linkedIssues,
                                linkedIssueIds: linkedIssues.map(i => i.number)
                            });

                            saveRawContext(targetMonth, itemData);
                        }
                    }
                }
            } catch (error) {
                console.error(`  Error in ${repoFull}: ${error.message}`);
            }
        }
    }

    // saveRepoMetadata(targetMonth, repoMetadata);
    console.log(`✅ Stage 0 Complete.`);

    // --- PHASE 1: ORGANIZER AGENT ---
    console.log(`\n🧠 Starting Phase 1: Organizer Agent...`);
    const matrixResult = await runOrganizer(targetMonth, repoMetadata, itemMetadata);
    
    const repoLogicalNames = matrixResult.repoLogicalNames || {};
    for (const [repoId, logicalName] of Object.entries(repoLogicalNames)) {
        if (repoMetadata[repoId]) repoMetadata[repoId].logicalName = logicalName;
    }

    const matrix = { 
        clusters: matrixResult.clusters || [], 
        noiseItemIds: matrixResult.noiseItemIds || [] 
    };

    saveClusterMatrix(targetMonth, matrix);
    
    // --- PHASE 2: CLUSTER SUMMARIZER ---
    console.log(`\n✨ Starting Phase 2: Cluster Summarizer Agent...`);
    const clusterSummaries = [];
    
    
    const rawData = fs.readFileSync(rawContextPath, 'utf8').split('\n').filter(Boolean).map(JSON.parse);
    const rawDataMap = new Map(rawData.map(d => [d.id, d]));

    for (const cluster of matrix.clusters) {
        console.log(`  Summarizing Cluster: ${cluster.name}...`);
        const clusterItems = cluster.itemIds.map(id => rawDataMap.get(id)).filter(Boolean);
        if (clusterItems.length === 0) continue;

        const summaryText = await runSummarizer(targetMonth, cluster, clusterItems);
        clusterSummaries.push({
            name: cluster.name,
            summary: summaryText,
            prReferences: clusterItems.map(item => ({
                repo: item.repo,
                number: item.number,
                url: `https://github.com/${item.repo}/pull/${item.number}`
            }))
        });
    }

    // --- PHASE 3: CONFORMITY AGENT ---
    console.log(`\n🖋️  Starting Phase 3: Conformity Agent (Synthesis)...`);
    const finalNotes = await runSynthesizer(targetMonth, clusterSummaries);

    saveReleaseNotes(targetMonth, finalNotes);

    // --- PHASE 4: PRODUCT UPDATE GENERATION ---
    console.log(`\n📽️  Starting Phase 4: Product Update Generation...`);
    const pendingFAQs = loadPendingPRFAQs();
    if (pendingFAQs.length > 0) {
        console.log(`  Found ${pendingFAQs.length} pending PR FAQs. Matching with clusters...`);
        const matches = await identifyProductUpdateMatches(targetMonth, matrix.clusters, pendingFAQs);
        
        if (matches.length > 0) {
            console.log(`  Found ${matches.length} matches. Generating product updates...`);

            for (const match of matches) {
                const faq = pendingFAQs[match.faqIndex];
                const clusterIndices = Array.isArray(match.clusterIndices) ? match.clusterIndices : [match.clusterIndex];
                
                for (const clusterIdx of clusterIndices) {
                    const cluster = matrix.clusters[clusterIdx];
                    if (!cluster) continue;

                    console.log(`  Drafting product update for: ${faq.title} (Matched with cluster: ${cluster.name})...`);
                    const clusterItems = cluster.itemIds.map(id => rawDataMap.get(id)).filter(Boolean);
                    
                    const productUpdate = await runProductUpdater(targetMonth, cluster, clusterItems, faq);
                    const safeTitle = faq.title.replace(/[^a-z0-9]/gi, '_').toLowerCase();
                    
                    saveProductUpdate(targetMonth, safeTitle, productUpdate);
                }

                if (!CONFIG.DRY_RUN) {
                    markFAQAsCompleted(faq, targetMonth);
                }
            }
        } else {
            console.log("  No matches found between PR FAQs and this month's clusters.");
        }
    } else {
        console.log("  No pending PR FAQs found.");
    }
})();

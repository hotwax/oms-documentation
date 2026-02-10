import fs from 'fs';
import path from 'path';


const targetMonth = '2026-01'; // Based on the metadata
const dataDir = path.join('data', 'raw', targetMonth, 'test');
const rawContextPath = path.join(dataDir, 'raw_context.jsonl');
const clusterMatrixPath = path.join(dataDir, 'cluster_matrix.json');


if (!fs.existsSync(rawContextPath) || !fs.existsSync(clusterMatrixPath)) {
    console.error('Files not found');
    process.exit(1);
}

const rawData = fs.readFileSync(rawContextPath, 'utf8').split('\n').filter(Boolean).map(JSON.parse);
const matrix = JSON.parse(fs.readFileSync(clusterMatrixPath, 'utf8'));

const matrixIds = new Set();
if (matrix.clusters) {
    matrix.clusters.forEach(c => {
        if (c.itemIds) c.itemIds.forEach(id => matrixIds.add(id));
    });
}
if (matrix.noiseItemIds) {
    matrix.noiseItemIds.forEach(id => matrixIds.add(id));
}
if (matrix.needClarificationItemIds) {
    matrix.needClarificationItemIds.forEach(id => matrixIds.add(id));
}

const missing = rawData.filter(item => !matrixIds.has(item.id));
const accounted = rawData.filter(item => matrixIds.has(item.id));

console.log(`Total Raw PRs: ${rawData.length}`);
console.log(`Total Accounted for: ${accounted.length}`);
console.log(`Total Missing: ${missing.length}`);

if (missing.length > 0) {
    console.log('\nFirst 5 Missing PRs:');
    missing.slice(0, 5).forEach(m => console.log(`- ${m.id}: ${m.title}`));

    console.log('\nLast 5 Missing PRs:');
    missing.slice(-5).forEach(m => console.log(`- ${m.id}: ${m.title}`));
    
    // Check if they are all from a specific repo
    const missingByRepo = {};
    missing.forEach(m => {
        missingByRepo[m.repo] = (missingByRepo[m.repo] || 0) + 1;
    });
    console.log('\nMissing by Repo:', missingByRepo);
}

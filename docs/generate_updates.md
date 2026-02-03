# Generate Updates Script Documentation

This document provides a detailed overview of the `scripts/generate_updates.js` script, which automates the generation of monthly release notes for HotWax Commerce by aggregating data from various GitHub repositories and processing it using Gemini AI models.

## Architectural Overview

The script follows a tiered processing pipeline consisting of a discovery stage and three AI-driven phases:

1.  **Stage 0: Discovery & Streaming Fetch**: Identifies relevant releases and PRs for the target month, fetches context, and streams raw data to disk.
2.  **Phase 1: Organizer Agent (Batched)**: Uses a high-context model to group PRs into logical clusters and filter out noise.
3.  **Phase 2: Cluster Summarizer**: Summarizes each cluster into a cohesive release note entry (Problem, Solution, Impact).
4.  **Phase 3: Conformity Agent (Synthesis)**: Finalizes the document structure, applies style guide rules, and generates the final Markdown file.

---

## Tiered Model Configuration

The script uses a specialized configuration for different tasks to balance performance and efficiency:

| Agent | Model | Purpose |
| :--- | :--- | :--- |
| **ORGANIZER** | `gemma-3-27b-it` | High context, logical grouping, and naming. |
| **SUMMARIZER** | `gemma-3-27b-it` | Efficient summarization of individual clusters. |
| **SYNTHESIZER** | `gemma-3-27b-it` | Final document assembly and styling. |

---

## Function Reference

### `getTargetMonth()`
Determines the month for which release notes should be generated.

**Logic Flow:**
```mermaid
graph TD
    A[Start] --> B{MONTH Env Var set?}
    B -- Yes --> C[Return MONTH]
    B -- No --> D[Get Current Date]
    D --> E[Calculate Previous Month]
    E --> F[Format as YYYY-MM]
    F --> G[Return Formatted Month]
```

### `isInTargetMonth(publishedAt, targetMonth)`
Checks if a release publication date matches the target month.

**Logic Flow:**
```mermaid
graph TD
    A[Start] --> B[Parse publishedAt Date]
    B --> C[Extract YYYY-MM]
    C --> D{Matches targetMonth?}
    D -- Yes --> E[Return true]
    D -- No --> F[Return false]
```

### `fetchMonthlyReleases(owner, repo, targetMonth)`
Fetches all releases from a specific repository that were published during the target month.

**Logic Flow:**
```mermaid
graph TD
    A[Start] --> B[Call GitHub API: listReleases]
    B --> C[Filter releases using isInTargetMonth]
    C --> D[Return filtered releases]
```

### `extractPRRefsWithLinks(text, owner, repo)`
Extracts Pull Request references (numbers and URLs) from a given text (e.g., release body).

**Logic Flow:**
```mermaid
graph TD
    A[Start] --> B[Initialize prRefs array]
    B --> C[Find shorthand refs #123]
    C --> D[Find full GitHub URL refs]
    D --> E[Remove duplicates]
    E --> F[Return prRefs with numbers and URLs]
```

### `fetchContext(owner, repo, refNumber)`
Attempt to fetch detailed information for a reference number, checking for PRs first, then Issues.

**Logic Flow:**
```mermaid
graph TD
    A[Start] --> B[Try fetching Pull Request]
    B -- Success --> C[Fetch PR Files]
    C --> D{Body empty?}
    D -- Yes --> E[Fetch Bot Summary]
    E --> F[Return PR Data]
    D -- No --> F
    B -- Failure --> G[Try fetching Issue]
    G -- Success --> H[Return Issue Data]
    G -- Failure --> I[Return null]
```

### `fetchRepoReadme(owner, repo)`
Fetches the first 500 characters of the repository's README file.

**Logic Flow:**
```mermaid
graph TD
    A[Start] --> B[Call GitHub API: getReadme]
    B --> C[Decode Base64 content]
    C --> D[Truncate to 500 characters]
    D --> E[Return Readme text]
```

### `fetchBotSummary(owner, repo, issueNumber)`
Retrieves a summary of changes from a Gemini bot comment on a PR/Issue.

**Logic Flow:**
```mermaid
graph TD
    A[Start] --> B[List comments for PR/Issue]
    B --> C[Find comment by Gemini bot]
    C --> D{Found?}
    D -- Yes --> E[Extract 'Summary of Changes' section]
    E --> F[Return cleaned summary]
    D -- No --> G[Return null]
```

### `extractLinkedIssueNumbers(text)`
Identifies linked issue numbers from text using keywords like "closes" or "fixes".

**Logic Flow:**
```mermaid
graph TD
    A[Start] --> B[Regex match keywords + #number]
    B --> C[Extract matching numbers]
    C --> D[Return unique numbers]
```

### `analyzeWithGemini(prompt, models, retries)`
Communicates with Gemini AI models with support for fallback models and retries.

**Logic Flow:**
```mermaid
graph TD
    A[Start] --> B{Dry Run?}
    B -- Yes --> C[Return Mock Response]
    B -- No --> D[5s delay to manage RPM]
    D --> E[Iterate through attempts]
    E --> F[Iterate through models]
    F --> G[Call Gemini API]
    G -- Success --> H[Return response text]
    G -- Failure --> I{Rate limited?}
    I -- Yes --> J[Exponential backoff wait]
    J --> E
    I -- No --> K[Wait 2s]
    K --> F
```

### `loadRepoContextCache()`
Loads previously generated repository summaries from `agents/repo-context.md`.

**Logic Flow:**
```mermaid
graph TD
    A[Start] --> B{Cache file exists?}
    B -- No --> C[Return empty object]
    B -- Yes --> D[Read file content]
    D --> E[Parse sections by Repo Name]
    E --> F[Extract Description & Relations]
    F --> G[Return cache object]
```

### `appendToRepoContextCache(repoFull, description, relations)`
Appends a new repository summary to the cache file.

**Logic Flow:**
```mermaid
graph TD
    A[Start] --> B[Format Entry string]
    B --> C[Append to agents/repo-context.md]
```

### `summarizeReadme(repoFull, readme)`
Uses Gemini to generate a description and relations summary based on a repository's README.

**Logic Flow:**
```mermaid
graph TD
    A[Start] --> B[Construct prompt with README content]
    B --> C[Call analyzeWithGemini]
    C --> D[Parse response for Description & Relations]
    D --> E[Return Summary object]
```
### `delay(ms)`
Creates a non-blocking delay using a Promise and setTimeout.

**Logic Flow:**
```mermaid
graph TD
    A[Start] --> B[Wait for ms]
    B --> C[Resolve Promise]
```

### `sleep(ms)`
A synchronous fallback delay using `SharedArrayBuffer` (used sparingly).

**Logic Flow:**
```mermaid
graph TD
    A[Start] --> B[Block execution for ms]
    B --> C[Continue]
```

---

## Master Execution Flow

The following diagram illustrates the complete end-to-end execution of the script.

```mermaid
graph TD
    Start([Start]) --> Init[Initialize Env & Octokit]
    Init --> GetMonth[getTargetMonth]
    
    subgraph Stage_0 [Stage 0: Discovery & Fetching]
        GetMonth --> LoopRepos[Loop through SOURCE_REPOS]
        LoopRepos --> CacheCheck{Cache hit in repo-context.md?}
        CacheCheck -- No --> FetchReadme[fetchRepoReadme]
        FetchReadme --> SumReadme[summarizeReadme]
        SumReadme --> SaveCache[appendToRepoContextCache]
        SaveCache --> FetchRel[fetchMonthlyReleases]
        CacheCheck -- Yes --> FetchRel
        
        FetchRel --> LoopRel[Loop through Releases]
        LoopRel --> ExtPR[extractPRRefsWithLinks]
        ExtPR --> LoopPR[Loop through PR Refs]
        LoopPR --> FetchCtx[fetchContext]
        FetchCtx --> BodyCheck{Body empty?}
        BodyCheck -- Yes --> FetchBot[fetchBotSummary]
        FetchBot --> ExtIssues[extractLinkedIssueNumbers]
        BodyCheck -- No --> ExtIssues
        ExtIssues --> LoopIssues[Loop through Linked Issues]
        LoopIssues --> FetchIssueCtx[fetchContext for Issue]
        FetchIssueCtx --> StoreRaw[Stream raw metadata to .jsonl]
    end

    subgraph Phase_1 [Phase 1: Organizer Agent]
        StoreRaw --> BatchedPrompts[Batch item metadata]
        BatchedPrompts --> CallGemini1[analyzeWithGemini: Logic Grouping]
        CallGemini1 --> Clusters[Generate Clusters & Noise Filter]
    end

    subgraph Phase_2 [Phase 2: Cluster Summarizer]
        Clusters --> LoopClusters[Loop through Clusters]
        LoopClusters --> LoadRaw[Load raw PR context from disk]
        LoadRaw --> CallGemini2[analyzeWithGemini: Summarize Cluster]
        CallGemini2 --> ClusterDoc[Store cohesive entries]
    end

    subgraph Phase_3 [Phase 3: Conformity Agent]
        ClusterDoc --> LoadStyle[Load styleguide.md]
        LoadStyle --> CallGemini3[analyzeWithGemini: Synthesis]
        CallGemini3 --> FinalOutput[Write final Markdown file to drafts/]
    end
    
    FinalOutput --> End([End])
```

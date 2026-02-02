# Consolidated Release Notes Generator

The `generate_updates.js` script automates the process of creating consolidated monthly release notes for HotWax Commerce applications. It fetches raw release data from multiple GitHub repositories and uses Google Gemini AI to transform it into a professional, narrative-driven format.

## Prerequisites

### Dependencies
The script require the following npm packages:
- `@octokit/rest`: For interacting with the GitHub API.
- `@google/generative-ai`: For processing content with Gemini.

### Environment Variables
The following environment variables must be set:
- `GITHUB_TOKEN`: A GitHub Personal Access Token with permissions to read repository releases.
- `GEMINI_API_KEY`: An API key from Google AI Studio.
- `SOURCE_REPOS`: A comma-separated list of repositories (e.g., `hotwax/receiving,hotwax/oms`).
- `MONTH` (Optional): The target month in `YYYY-MM` format. Defaults to the previous month.

## Workflow

The script follows a 5-step process:

1.  **Fetching Data**: Connects to GitHub and retrieves all releases published within the target month for each repository specified in `SOURCE_REPOS`.
2.  **Grouping & Mapping**: Organizes releases by their corresponding "User Facing App" name (e.g., `hotwax/receiving` maps to "Receiving App"). Any unmapped repository is categorized under "OMS".
3.  **AI Transformation**:
    -   Reads a local `style guide.md` (if present) to enforce branding and tone.
    -   Sends the consolidated raw notes to Gemini with a detailed prompt.
    -   Enforces a **Problem -> Solution -> Impact** structure for every feature.
4.  **Post-Processing**: The script scans the AI-generated text for GitHub issue/PR patterns (e.g., `#123`) and re-injects the correct markdown links based on the original release data.
5.  **Output**: Generates a markdown file in the `drafts/` directory named `YYYY-MM.md`.

## Usage

To run the script, ensure you have your environment variables exported or in a `.env` file (if using a loader), then run:

```bash
node scripts/generate_updates.js
```

> [!NOTE]
> Ensure the script is executed in an environment that supports ES Modules, or rename it to `.mjs`.

## Configuration

### Repository Mapping
Repository to App Name mappings are defined in the `repoToAppMap` constant within the script. If you add new repositories to the HotWax ecosystem, update this map to ensure they are correctly categorized in the final notes.

### Model Selection
The script attempts to use Gemini models defined in `GEMINI_MODELS` (e.g., `gemini-2.0-flash`). If the first model fails, it automatically falls back to the next one in the list.

# Codex Prompt for Repository README Generation

Use the following prompt in Codex, Cursor, or ChatGPT to generate a `README.md` that provides high-quality context for the AI release notes workflow.

---

## The Prompt

```markdown
I want you to generate a high-quality `README.md` for this repository. This README is critical for an autonomous AI-driven release notes workflow that uses it to understand the repository's purpose and categorize its changes.

Please analyze the codebase and generate a README with the following structure and specific details:

### 1. Repository Overview
- **Logical Name**: The name of the repository and if its a sanskrit word then the sanskrit defenition.
- **Business Purpose**: A 2-3 sentence summary of what this repository does from a business perspective.

### 2. Core Responsibilities & Business Logic
- List the main domains or business rules handled here (e.g., "Order Fulfillment", "Inventory Synchronization", "User Authentication").
- **[CRITICAL for Moqui Repos]**: Specifically detail the core business logic and workflows implemented in this component.

### 3. Dependencies & Architecture
- **Tech Stack**: Major frameworks and libraries used.
- **Dependency Map**:
    - **[If this is an App repo]**: List the primary backend services, API endpoints, or external integrations it communicates with.
    - **[If this is a Moqui repo]**: List the specific Moqui component dependencies and external services it relies on.

### 4. Technical Context
- How to run the project locally (briefly).
- Any specific environment variables or configurations that define its operational context.

The goal is to provide enough technical and business context so that another AI (using this README as a source) can accurately classify PRs and group them into feature clusters.
```

---

## Instructions for Use

1. **Open your repository** in your preferred AI tool (Codex, Cursor, etc.).
2. **Paste the prompt** above.
3. **Refine the output** if necessary, ensuring the "Logical Name" and "Dependencies" sections are clear.
4. **Save** as `README.md` in the root of the repo.

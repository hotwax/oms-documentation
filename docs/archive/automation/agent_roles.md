# Agent Roles and Responsibilities

This document outlines the roles, responsibilities, and model tiers for the AI agents used in the HotWax Commerce Release Notes automation workflow.

The workflow is divided into three distinct phases, each handled by an "agent" with a specific persona and capability requirement.

---

## 🧠 Phase 1: Organizer Agent
**Persona**: Lead Architect  
**Model Tier**: `ORGANIZER` (e.g., Gemini 2.0 Flash)

The Organizer Agent is responsible for high-level structure and strategic filtering. It looks at the "big picture" before any writing begins.

### Key Responsibilities:
- **Logical Mapping**: Analyzes repository READMEs to map technical GitHub repository names to business-friendly names (e.g., `hotwax/bopis` → `BOPIS App`).
- **Feature Clustering**: Patterns-matches PRs and Issues across multiple repositories to group them into logical "Feature Clusters" or "Themes".
- **Noise Reduction**: Intelligently identifies and filters out low-value technical updates such as version bumps, chore tasks, and trivial dependency updates.

---

## ✨ Phase 2: Cluster Summarizer Agent
**Persona**: Feature Summarizer  
**Model Tier**: `SUMMARIZER` (e.g., Gemma 2-9b-it)

The Summarizer Agent handles the repetitive, high-volume task of distilling technical details into readable summaries. This phase uses lightweight models for efficiency.

### Key Responsibilities:
- **Distillation**: Processes raw PR descriptions and linked issues to create a cohesive narrative for each cluster.
- **Structural Integrity**: Ensures every summary follows the mandatory **Problem - Solution - Impact** framework.
- **Narrative Style**: Maintains a consistent active voice and ensures brevity (3-4 sentences per cluster).

---

## 🖋️ Phase 3: Synthesizer Agent
**Persona**: Final Editor (Conformity Agent)  
**Model Tier**: `SYNTHESIZER` (e.g., Gemini 1.5 Pro)

The Synthesizer Agent is the final gatekeeper of quality and tone. It uses the highest-capability model to ensure the final document is professional and coherent.

### Key Responsibilities:
- **Synthesis & Assembly**: Compiles the summarized clusters under the logical module headers established in Phase 1.
- **Contextual Introduction**: Writes a concise high-level summary of the entire month's progress.
- **Style Guide Enforcement**: Cross-references the final output against `.gemini/styleguide.md` to ensure formatting, tone, and vocabulary alignment.
- **Final Polish**: Ensures smooth transitions and overall document flow.

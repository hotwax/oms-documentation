---
name: update-skill
description: Use this skill to update an existing agent skill or create a new one when workflows, instructions, or reusable expertise need to be formalized for Gemini.
---

# Update Skill

This skill provides instructions for maintaining and evolving Gemini agent skills used in this workspace.

## Use This Skill When

- A workflow is being repeated and should become a reusable skill.
- An existing skill is unclear, outdated, or missing important context.
- New tools, conventions, or domain knowledge should be captured for future use.

## Workflow

1. Identify whether the request belongs in an existing skill or a new one.
2. Prefer the standard Gemini skill structure:
   - `skill-name/SKILL.md`
   - `skill-name/scripts/`
   - `skill-name/references/`
   - `skill-name/assets/`
3. Keep `SKILL.md` concise. Put large reference material in `references/` and only load it when needed.
4. Ensure the frontmatter contains:
   - `name`
   - `description`
5. Use lowercase, hyphen-separated names and keep the directory name aligned with `name`.
6. Write instructions that tell Gemini when to use the skill, what workflow to follow, and which bundled resources to consult.

## Maintenance Rules

- Store workspace skills under `.gemini/skills/` or `.agents/skills/`.
- Do not keep active skills in ad hoc locations like `SKILLS/` if Gemini is expected to discover them automatically.
- Avoid extra files such as `README.md` unless they are directly required for the skill to function.
- Preserve reusable assets and scripts beside the skill instead of embedding large content into `SKILL.md`.

# Workspace Context

## Agent Skills

- Workspace skills for Gemini belong in `.gemini/skills/`.
- Each skill should live in its own folder and expose `.gemini/skills/<skill-name>/SKILL.md`.
- The older `SKILLS/` directory is not part of Gemini's standard workspace skill discovery path.

## Current Workspace Skills

- `update-skill`: [`.gemini/skills/update-skill/SKILL.md`](/Users/adityapatel/Documents/GitHub/oms-documentation/.gemini/skills/update-skill/SKILL.md)

## Reloading In Gemini CLI

- Run `gemini skills list` to confirm discovery.
- Run `gemini skills reload` after adding or editing skills.

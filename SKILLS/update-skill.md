---
name: update-skill
description: Guidelines for updating existing skills or creating new ones based on feedback, discovery, and evolving requirements.
---

# Update Skill

This skill provides instructions for maintaining and evolving the AI's capabilities by updating existing skills or creating new ones.

## Identifying Evolution Needs

As you work, you should identify opportunities to refine your internal instructions.

### Update an Existing Skill if:
- **Feedback received**: The user provides feedback on a specific workflow or behavior that is governed by a skill.
- **Error correction**: You discover a recurring error or inefficiency in a skill's instructions.
- **Enhanced context**: New tools or domain-specific knowledge become available that improve a skill's effectiveness.

### Create a New Skill if:
- **New patterns**: You identify a consistent multi-step workflow that is not yet documented.
- **Domain specialization**: You are working in a new sub-domain (e.g., a specific framework or toolset) that requires specialized instructions.
- **Modularization**: An existing skill becomes too broad and should be split into smaller, more focused skills.

## Maintenance Guidelines

When modifying or creating a skill file in the `SKILLS/` directory:

1.  **Frontmatter**: Ensure every skill file starts with a YAML frontmatter section containing `name` and `description`.
2.  **Naming**: Use lowercase, hyphen-separated names (e.g., `git-workflow.md`).
3.  **Clarity**: Use clear, actionable instructions. Focus on "how-to" and "when-to" use specific tools or approaches.
4.  **Formatting**: Follow standard Markdown practices. Use headers to organize content and bullet points for lists.

## Workflow for Skill Updates

1.  **Analyze**: Determine the scope of the change and whether it belongs in an existing skill or a new one.
2.  **Implementation**: Update the relevant file using `replace_file_content` or `write_to_file`.
3.  **Communication**: Briefly inform the user about the update to the skill and the rationale behind it.

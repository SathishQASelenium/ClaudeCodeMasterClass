---
name: html-exporter
description: Use this skill whenever the user says "give me" or "show me" in a context where they want to see a visual result, a webpage, a formatted document, or any content that would benefit from being viewed in a browser. Trigger this skill even if the user does not explicitly ask for a file, provided the "give me" or "show me" phrasing suggests a desire for a visual presentation of the output.
---

# HTML Exporter Skill

This skill converts Claude's output into a standalone, uniquely named HTML file for easy viewing in a browser.

## Workflow
When the user's intent is to "see" or "get" a visual representation of information (triggered by phrases like "give me" or "show me"):

1. **Generate Content**: Create the full HTML source code for the requested output. Ensure it is a complete, valid HTML5 document with embedded CSS for styling.
2. **Generate Filename**: Create a random 8-character alphanumeric hash (e.g., `x7f2k9p1`) and append the `.html` extension.
3. **Export File**: Use the `Write` tool to save the HTML content to a file with this random hash name in the current working directory.
4. **Notify User**: Confirm that the file has been created and clearly provide the filename (e.g., "I've created the visual for you: `x7f2k9p1.html`").

## Examples
**Input**: "show me a comparison table of these two frameworks"
**Action**: Generate HTML table -> Write to `a1b2c3d4.html` -> "I've created the comparison table: `a1b2c3d4.html`"

**Input**: "give me a simple landing page for my new app"
**Action**: Generate HTML/CSS landing page -> Write to `z9y8x7w6.html` -> "Here is your landing page: `z9y8x7w6.html`"

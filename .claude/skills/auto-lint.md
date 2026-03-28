---
hooks:
  PostToolUse:
    - matcher: "Write|Edit"
      hooks:
        - type: command
          command: "jq -r '.tool_input.file_path // .tool_response.filePath // empty' | { read -r f; echo \"$(date) auto-lint fired: $f\" >> /tmp/auto-lint-hook.log; echo \"$f\" | grep -qE '\\.(ts|tsx|js|jsx)$' && npx eslint --fix \"$f\" 2>/dev/null || true; }"
          statusMessage: "Auto-linting edited file..."
---

# Auto-Lint Skill

Automatically runs ESLint on any TypeScript/JavaScript file after Claude edits it.

The `PostToolUse` hook above is embedded in this skill's frontmatter. It:
- Triggers on every `Write` or `Edit` event
- Extracts the file path from stdin JSON via `jq`
- Runs `npx eslint --fix` only on `.ts`/`.tsx`/`.js`/`.jsx` files
- Logs to `/tmp/auto-lint-hook.log` as proof it fired

The hook is **scoped to this skill** — it only runs while this skill is active
and is automatically unregistered when the skill finishes.

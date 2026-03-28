# Auto-Lint Skill

When invoked, this skill sets up a PostToolUse hook that automatically
runs ESLint on any TypeScript/JavaScript file after Claude edits it.

## What this skill does

It writes a hook into `.claude/settings.json` that:
- Triggers on `Write` or `Edit` tool events
- Extracts the file path from the hook's stdin JSON
- Runs `npx eslint --fix` only on `.ts`/`.tsx`/`.js`/`.jsx` files
- Logs a sentinel line to `/tmp/auto-lint-hook.log` as proof it fired

## Hook configuration added by this skill

```json
{
  "hooks": {
    "PostToolUse": [
      {
        "matcher": "Write|Edit",
        "hooks": [
          {
            "type": "command",
            "command": "jq -r '.tool_input.file_path // .tool_response.filePath // empty' | { read -r f; echo \"$(date) auto-lint fired: $f\" >> /tmp/auto-lint-hook.log; echo \"$f\" | grep -qE '\\.(ts|tsx|js|jsx)$' && npx eslint --fix \"$f\" 2>/dev/null || true; }",
            "statusMessage": "Auto-linting edited file..."
          }
        ]
      }
    ]
  }
}
```

## Usage

Invoke this skill with `/auto-lint` to activate the hook for this project.

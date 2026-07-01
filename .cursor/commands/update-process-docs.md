# Update Process Docs

Use the **process-updater** skill. **Do not modify application code.**

Sync docs after completed work:

```
[PASTE: what was done, or "review git diff and update docs"]
```

Update:
- `docs/WORKLOG.md` — always
- `docs/TASKS.md` + relevant `docs/tasks/PHASE-*.md` — always
- `docs/DECISIONS.md` — only if a decision changed
- `docs/CHANGELOG.md` — only if user-visible behavior changed
- `docs/PROCESS.md` — only if workflow changed

Return a short summary of doc updates and remaining open items.

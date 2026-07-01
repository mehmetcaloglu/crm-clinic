# Code Review

Use the **code-review** skill. Review the current implementation or diff with structured, severity-tagged findings.

Scope:

```
[PASTE: git diff summary, file paths, phase name, or "uncommitted Phase 0 changes"]
```

Inspect changed files plus `AGENTS.md`, architecture/data-model/security rules, and the relevant `docs/tasks/PHASE-*.md`.

Check:
- phase scope and MVP order (no early integrations)
- architecture layers (no business logic in UI; provider-neutral domain)
- `workspace_id` / RLS / tenant isolation
- Contact vs ContactIdentity separation (when CRM data touched)
- KVKK-sensitive data handling (surface level — escalate to **privacy-security-reviewer** for deep security pass)
- loading / empty / error states on changed UI
- Next.js App Router patterns
- tests and manual verification gaps

Run when available: `npm run lint`, `npm run build` (and `npm test` / typecheck if configured).

Output: findings grouped by **critical / major / minor / suggestion**, file references, manual test suggestions, verdict. For release go/no-go, use **qa-release-checklist** separately.

Do not modify application code unless I explicitly ask for fixes.

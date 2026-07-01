# Release Checklist

Use the **qa-release-checklist** skill. Run pre-release verification for:

```
[PASTE: Phase 0 / Phase 1 / staging deploy / production]
```

Run: typecheck, lint, build, tests (if available). Walk manual scenarios: auth, workspace isolation, contact CRUD, notes/status, appointments/packages if in scope, empty/error states, no committed secrets.

Output: checklist with pass/fail, risks/blockers, go/no-go recommendation. Update `docs/WORKLOG.md` with QA summary if I ask.

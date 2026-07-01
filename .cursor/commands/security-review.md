# Security Review

Use the **privacy-security-reviewer** skill. Review recent changes (or specified scope) for healthcare-adjacent CRM risks.

Focus:
- workspace isolation and RLS
- role permissions
- sensitive data in logs/errors
- secrets in repo
- ContactIdentity matching (no unsafe auto-merge)
- webhook signature/idempotency if integration code touched
- no auto medical advice / no auto-send without human approval

Scope:

```
[PASTE: git diff summary, file paths, or "last session changes"]
```

Output: critical issues, recommendations, tests to add, merge recommendation. Fix only if I ask.

# Maintainability & Clean Code Standards

## Core Rule
Write maintainable, self-documenting, and durable code. Keep functions small, names clear, configuration decoupled, and modules strictly focused. Always follow the Plan -> Act -> Verify workflow.

---

## 1. Single Responsibility & Function Size
- **Rule**: Each function or class must perform one well-defined job.
- **Limit**: Keep functions short and readable (aim for under 30 lines per function where practical).
- **Practice**: If a function handles multiple operations (validation, database fetching, data mapping, and logging), decompose it into focused helper functions.

---

## 2. Clear & Descriptive Naming
- **Rule**: Use explicit, descriptive names that communicate intent without abbreviations.
- **Practice**:
  - Prefer `isUserLoggedIn` or `hasValidSession` over `flag` or `u`.
  - Prefer `fetchCustomerSubscription()` over `getData()`.
  - Name booleans with clear prefixes such as `is`, `has`, `should`, or `can`.

---

## 3. Zero Magic Values
- **Rule**: Never use magic numbers, raw strings, or arbitrary timeouts embedded directly in business logic.
- **Practice**: Define named constants or configuration objects (e.g., `const MAX_RETRY_ATTEMPTS = 3`, `const DEFAULT_TIMEOUT_MS = 5000`).

---

## 4. Fail-Fast & Defensive Error Handling
- **Rule**: Detect invalid state or missing parameters early and fail immediately with actionable error messages.
- **Practice**:
  - Never swallow errors silently or leave empty `catch` blocks.
  - Return informative error details explaining what failed and why.

---

## 5. Environment & Configuration
- **Rule**: Keep configuration variables decoupled from business logic.
- **Practice**: Externalize endpoints, feature flags, and settings into environment variables or platform configuration modules. Never hardcode credentials, secrets, or environment-dependent values in source code.

---

## 6. Code Documentation
- **Rule**: Write comments that explain **WHY** something is done, not **WHAT** the code does.
- **Practice**: Clean code with descriptive naming explains what is happening. Use comments to document non-obvious constraints, business rules, bug workarounds, or architectural decisions.

---

## 7. Plan -> Act -> Verify Workflow
- **Rule**: Always maintain clear execution boundaries.
- **Practice**:
  - Review or update `task.md` or `implementation_plan.md` before and after major changes.
  - Pair each refactor or new module with verification (automated tests or manual proof).

---

## 8. Knowledge Items & Reuse
- **Rule**: Check established repository patterns before building complex features.
- **Practice**:
  - Review knowledge items in the workspace or agent knowledge base prior to designing new subsystems.
  - Document newly discovered architectural patterns, shared utilities, or non-obvious fixes as reusable knowledge items after completing work.

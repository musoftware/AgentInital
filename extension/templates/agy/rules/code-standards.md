# Code Quality, Safety & Engineering Standards

## Core Rule
Write reliable, defensive, secure, and production-ready code. Always test and verify changes before declaring a task complete.

---

## 1. Type Safety & Validation
- Use strict typing where applicable (TypeScript, strict Python type annotations, etc.).
- Validate external inputs, environment variables, and user payloads at boundaries using runtime schemas.

## 2. Defensive Error Handling
- Never silence errors with empty `catch` blocks.
- Log meaningful context (operation, parameters, error message) when exceptions occur.
- Return structured error responses with descriptive error messages.

## 3. Clean Project Organization
- Keep file sizes manageable (< 300-400 lines where practical).
- Group related features into clear, discoverable directories (e.g. `services/`, `controllers/`, `components/`, `utils/`).
- Follow idiomatic conventions for the language and framework in use.

## 4. Verification & Testing
- Always verify changes locally before committing.
- Check linter and build status (`npm run build`, `npm run lint`, etc.).

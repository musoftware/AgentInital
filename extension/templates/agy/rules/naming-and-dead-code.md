# Naming Standards & Dead Code Hygiene

## Core Rule
Identifiers are executable documentation. Dead code is technical debt. Keep names descriptive and the repository free of unused artifacts.

---

## 1. Descriptive Intent-Revealing Names
- Boolean identifiers must clearly indicate state with prefixes such as `is`, `has`, `should`, or `can` (e.g., `isActive`, `hasPermission`).
- Function and method names must combine a descriptive action verb with a target noun (e.g., `calculateTotal`, `validateEmailAddress`).
- Eliminate vague generic placeholders (e.g., `data`, `info`, `manager`, `helper`, `utils`, `temp`, `flag`, `val`).
- Never use cryptic abbreviations. Favor full descriptive terms (e.g., `user` instead of `usr`, `customer` instead of `cust`).

---

## 2. Zero Dead Code Tolerance
- Never commit commented-out code blocks; version control retains all historical implementations.
- Remove all temporary diagnostic prints, ad-hoc console logs, and debugging breakpoints before completing a task.
- Eliminate unused imports, unreferenced variables, and dead functions. Linters and compiler checks must pass cleanly with zero warnings.

---

## 3. The Clean Repository Rule
- Leave every modified file cleaner than you found it.
- When modifying an existing file, clean up adjacent minor code smells: clarify poor variable names, eliminate dead imports, or reinforce type annotations.

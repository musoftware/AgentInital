# Anti-Nesting & Flat Code Architecture

## Core Rule
Maximum nesting depth is 2 levels. Deeply nested blocks create cognitive load (arrow anti-pattern). Always flatten logic.

---

## 1. Mandatory Guard Clauses
- Check failure, invalid, and edge cases at the very top of any function.
- Return, continue, or break early. Keep the primary execution path at the base indentation level.
- Never wrap the majority of a function inside a success branch. Invert the condition and exit early.

---

## 2. One Level, One Decision
- Each function should make one primary decision. If a second nested decision is required, extract it to a focused helper function.
- Function length should ideally stay between 5 and 20 lines, and should not exceed 30 lines without clear architectural justification.

---

## 3. Ban Redundant Else Blocks
- Prefer independent `if` statements without `else` after a guard clause.
- Following an early return, continue, or break, an `else` branch is redundant and introduces unnecessary nesting.

---

## 4. Eliminate Duplicate Branches
- Never duplicate logic blocks across symmetric conditions (e.g., true vs false, buy vs sell, active vs inactive).
- Unify symmetric flows using variables, sign arithmetic, lookup tables, or mapping functions.

---

## 5. Fail Fast With Actionable Context
- Validate inputs immediately at function entrypoints.
- Throw or return informative errors explaining precisely what parameter failed and why.

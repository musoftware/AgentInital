# YAGNI, KISS & Anti-Over-Engineering

## Core Rule
Build strictly what is needed for the current requirement. Working, obvious code is vastly superior to speculative abstractions designed for hypothetical future needs.

---

## 1. YAGNI (You Aren't Gonna Need It)
- Never introduce configuration flags, abstract base layers, or plugin hooks for hypothetical future features.
- If a behavior is not explicitly specified in the active task, do not implement it.
- Delete unused or dead code immediately. Never leave commented-out code blocks in the codebase.

---

## 2. KISS (Keep It Simple)
- Prefer straightforward, readable code over clever metaprogramming, dynamic reflection, or complex generics.
- Write code that any team member or contributor can understand within minutes.
- Choose obvious local solutions over grand, multi-file architectural frameworks.

---

## 3. Rule of Three
- First occurrence: Write the implementation directly inline.
- Second occurrence: Tolerate localized duplication.
- Third occurrence: Extract to a shared utility or common abstraction.
- Never generalize or introduce shared abstractions before the third distinct use case.

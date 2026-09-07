# Immutability & Pure Functions

## Core Rule
Shared mutable state is the primary cause of system defects and race conditions. Prefer immutable data structures, pure transformations, and explicit side effects.

---

## 1. Zero Shared Mutable State
- Never mutate function arguments in place. Always return a newly constructed object, collection, or state copy.
- Enforce read-only or frozen structures for constants, records, and domain models wherever the language supports it.
- Favor value objects and immutable collections over stateful, mutable entity instances.

---

## 2. Pure Functions by Default
- Write core functions such that identical inputs always produce identical outputs with zero hidden side effects.
- Isolate side effects (network requests, database writes, file system access) to system boundaries, keeping internal business calculations pure.
- Pure functions enable deterministic testing without complex mocking layers.

---

## 3. Explicit Naming by Effect
- Functions that perform I/O, database mutations, or state modification must use active mutation verbs in their names (e.g., `save`, `send`, `update`, `delete`).
- Pure transformation functions must use descriptive query or calculation verbs (e.g., `calculate`, `format`, `parse`, `validate`).

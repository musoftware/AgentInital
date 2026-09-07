# Flat Conditionals & Table-Driven Logic

## Core Rule
Long if-else ladders and branching switch statements are maintenance liabilities. Replace repetitive branching with declarative data structures.

---

## 1. Lookup Tables Over Branching Chains
- When logic checks multiple sequential thresholds or tier comparisons, replace the conditional ladder with a lookup table.
- Define tiers, rates, or strategy mappings as constant data structures at the module boundary.
- Iterate over the lookup structure or use index lookups to find the matching entry.

---

## 2. Dispatch Tables
- For conditionals branching on type, string identifier, or event name, use dispatch tables or handler maps.
- Map keys directly to dedicated handler functions.
- This adheres to the Open-Closed Principle: adding new variants requires adding a table entry, not modifying branching logic.

---

## 3. Pipeline & Filter Chains
- Avoid chaining sequential validation or filtering steps with nested conditional blocks.
- Decompose individual validation rules into distinct, single-purpose evaluator functions or filter interfaces.
- Compose evaluators into a sequential pipeline or list; adding a new rule requires zero changes to the orchestrator.

---

## 4. Pure Functional Evaluators
- A complex state update must not nest multiple conditional checks together.
- Decompose complex workflows into small, pure evaluator helpers.
- Each helper receives input state, performs a single evaluation, and returns the resulting state without hidden mutations.

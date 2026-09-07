# Project Agent Guidelines & Rules

Welcome to the project repository. All AI assistants, agents, and contributors working on this codebase must follow the active engineering standards and rules.

## Active Rules & Guidelines

Detailed rules are maintained in individual markdown files under `.agents/rules/`:

1. **[Simple English](file:///.agents/rules/simple-english.md)**: Clear, simple, plain English in all communication, comments, and documentation.
2. **[Human UI Design](file:///.agents/rules/no-pills.md)**: Clean, authentic UI. No AI slop, no excessive pill badges, no generic gradient tropes.
3. **[DRY Principles](file:///.agents/rules/dry.md)**: Don't Repeat Yourself, single source of truth, modular reusable logic.
4. **[SOLID Principles](file:///.agents/rules/solid.md)**: Decoupled, extensible architecture following SRP, OCP, LSP, ISP, and DIP.
5. **[No Mocks / Real Testing](file:///.agents/rules/no-mocks.md)**: Real integration tests over brittle, deep mock layers.
6. **[Code Standards](file:///.agents/rules/code-standards.md)**: Strict types, defensive error handling, clean structure, and rigorous verification.
7. **[Handling Illogical Requests](file:///.agents/rules/handling-illogical-requests.md)**: Clarify contradictory, infeasible, or ambiguous requests with structured multiple-choice options before implementing.
8. **[No Emojis / Dedicated Icons](file:///.agents/rules/no-emojis.md)**: Never use raw emojis in UI, code, or documentation. Use dedicated icon libraries or clean SVGs instead.
9. **[Maintainability Standards](file:///.agents/rules/maintainability.md)**: Clean code, 30-line function limits, descriptive naming, decoupled configuration, and Plan -> Act -> Verify workflow.
10. **[Security & Secrets](file:///.agents/rules/security.md)**: Zero hardcoded secrets, input sanitization, safe execution sinks, and least-privilege access.
11. **[Data & Contracts](file:///.agents/rules/data-and-contracts.md)**: Atomic persistence, safe schema evolution, and predictable boundary contracts.
12. **[Observability & Diagnostics](file:///.agents/rules/observability.md)**: Structured diagnostics, contextual logging, health verification, and zero silent failures.
13. **[Anti-Nesting & Flat Code](file:///.agents/rules/anti-nesting.md)**: Max 2 levels of nesting, mandatory guard clauses, early returns, and no arrow antipatterns.
14. **[Flat Conditionals](file:///.agents/rules/flat-conditionals.md)**: Replace long if/else ladders with lookup tables, dictionary dispatch, and pipeline evaluators.
15. **[Simplicity First](file:///.agents/rules/simplicity-first.md)**: Pure functions over heavy OOP, flat execution, composition over inheritance, and isolated side effects.
16. **[YAGNI & KISS](file:///.agents/rules/yagni-kiss.md)**: Build only what is needed today, rule of three, delete dead code, and avoid over-engineering.
17. **[Immutability & Pure Functions](file:///.agents/rules/immutability.md)**: Zero shared mutable state, immutable collections, pure functions by default, and explicit mutation verbs.
18. **[Naming & Dead Code Hygiene](file:///.agents/rules/naming-and-dead-code.md)**: Intent-revealing names, zero dead/commented code, clean imports, and the Boy Scout rule.
19. **[Dependency Direction](file:///.agents/rules/dependency-direction.md)**: Depend on abstractions not concretions, Law of Demeter, and Ports & Adapters architecture.
20. **[Visual Hierarchy & UX](file:///.agents/rules/visual-hierarchy-and-ux.md)**: Clear focal points, 3-level typography scale, intentional whitespace, action priority, and predictable user feedback.

---

## Workflow Expectations
- Review existing code and architectural patterns before proposing changes.
- Keep modifications clean, minimal, and focused on the request.
- Test and verify all work thoroughly.

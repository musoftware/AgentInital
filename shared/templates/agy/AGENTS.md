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

---

## Workflow Expectations
- Review existing code and architectural patterns before proposing changes.
- Keep modifications clean, minimal, and focused on the request.
- Test and verify all work thoroughly.

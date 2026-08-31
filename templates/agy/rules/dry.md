# DRY (Don't Repeat Yourself) Principles

## Core Rule
Every piece of knowledge, business logic, configuration, or structural pattern must have a **single, unambiguous, authoritative representation** within the system.

---

## Guidelines

1. **Single Source of Truth**
   - Centralize configurations, constants, API endpoints, and schemas.
   - Do not hardcode strings, URLs, or magic numbers across multiple components or files.

2. **Extract Reusable Logic**
   - If the same logic or transformation appears in more than one place, extract it into a dedicated utility function, helper, or service.
   - For UI frameworks: extract repeated layout patterns and UI atoms into reusable components.

3. **Avoid Copy-Paste Coding**
   - Never duplicate code blocks with minor adjustments.
   - Parameterize differences via function arguments, options objects, or component props.

4. **DRY vs. Premature Abstraction (Rule of Three)**
   - Don't create complex abstractions for one-off code.
   - Refactor and generalize when the second or third repetition appears.
   - Ensure the abstraction is genuinely sharing domain logic, not just coincidentally identical lines.

5. **Shared Types & Schemas**
   - Define data contracts and types once. Share them across API clients, services, and validation schemas (e.g. Zod / TypeScript interfaces / Pydantic models).

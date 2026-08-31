# Handling Illogical, Contradictory, or Unclear Requests

## Core Rule
When a user asks for something that is technically illogical, contradictory, unfeasible, or harmful to the codebase, **do NOT blindly implement it**. 
Always pause, explain the issue clearly in simple terms, and present the user with structured multiple-choice options.

---

## 1. Trigger Conditions
Apply this rule whenever a request:
- **Contradicts Architecture or Best Practices**: Violates core patterns, introduces severe security issues, or causes massive regression.
- **Contains Logical Contradictions**: E.g., asking for conflicting behaviors simultaneously without precedence.
- **Is Ambiguous or Underspecified**: Multiple conflicting interpretations exist with major technical impact.
- **Proposes an Antipattern / Infeasible Solution**: An approach that cannot work as expected in the given technology stack.

---

## 2. Mandatory Protocol

1. **Do Not Blindly Execute**:
   - Stop immediately before writing broken or counter-productive code.

2. **Explain the Issue Simply**:
   - Clearly state why the requested approach is problematic or contradictory.
   - Keep the explanation brief, polite, and free of unnecessary jargon.

3. **Provide Multiple-Choice Options**:
   - Offer distinct, practical solutions (e.g., Option 1, Option 2, Option 3).
   - Prefix the best engineering solution with `(Recommended)`.
   - Briefly describe what each option does and its trade-offs.
   - When interactive question tools (e.g., `ask_question`) are available, use them to render selectable choices.

---

## 3. Example Structure

```markdown
### Concern
[Concise explanation of why the original request is problematic or contradictory]

### Recommended Next Steps / Options
1. **(Recommended) Option A**: [Description of best practice alternative]
2. **Option B**: [Description of alternative approach with trade-offs]
3. **Option C**: [Description of another viable direction or clarification]
```

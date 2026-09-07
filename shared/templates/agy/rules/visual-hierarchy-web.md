# Visual Hierarchy & UX Standards (Web)

## Core Rule
Design serves the content. The visitor must understand what the site does and who it is for within 5 seconds. Every layout decision supports that clarity and removes friction — not the other way around.

---

## 1. First Impression — Clear Purpose Immediately

The homepage or entry view answers three questions without scrolling:
- What does this do?
- Who is it for?
- What should I do next?

One H1 states the purpose directly. No welcome messages. No generic taglines. Every element after the H1 builds on this primary message.

**Von Restorff Effect**: Only one element on the page gets the primary accent color — the main call-to-action button. If everything stands out, nothing does.

---

## 2. Reduce Choices — Hick's Law

Every additional option slows the user's decision.
- Navigation menus: maximum 5–7 top-level items. Group related items under dropdowns only if necessary.
- Never show 15+ options in a flat list. Group them into labeled categories first.
- Forms: ask only what is needed right now. Defer optional fields to a second step.
- Product pages: highlight one recommended option clearly. Let the user explore alternatives on demand.

---

## 3. Chunk Content — Miller's Law

Working memory holds 7 ± 2 items at once. Long walls of content overwhelm.
- Break every content block into named sections: heading + short body.
- Cards work because each card is one chunk: title + description + one action.
- Step-by-step flows: no more than 5–7 fields per step.
- Navigation groups: no more than 7 items per group.

---

## 4. Match User Expectations — Jakob's Law

Users spend 99% of their time on other sites. They expect your site to work like those.
- Cart icon: top right.
- Logo: top left, links to homepage.
- Search: top center or top right, always visible.
- Primary navigation: horizontal top bar on desktop, hamburger only on mobile.

Do not invent new patterns for navigation without a strong reason. Familiarity reduces cognitive load.

---

## 5. Button Size and Placement — Fitts's Law

The larger and closer a target is to the cursor or finger, the faster and easier it is to hit.
- Primary action buttons must be large enough to tap comfortably: minimum 44×44px on mobile, 36px height on desktop.
- Place the primary action where the user's attention naturally lands after completing the preceding content.
- Keep destructive actions (Delete, Cancel Subscription) small, visually subdued, and physically separated from the primary action — never adjacent.
- Bottom-right placement for step-by-step dialogs. Top-right or sticky header for workspace toolbars.

---

## 6. Show System State — Doherty Threshold & Nielsen #1

The system must respond in under 400ms for the interaction to feel instant. If an operation takes longer:
- Show a skeleton loader matching the layout — not a generic centered spinner.
- Show a progress bar with percentage or step count for multi-stage operations.
- **Perceived speed matters more than actual speed.** A skeleton loader makes a 2-second wait feel shorter than a blank screen.

Always show the user where they are:
- Active navigation item highlighted.
- Breadcrumbs on deep pages.
- Step indicators ("Step 2 of 5") on multi-step flows.
- Live counts next to any loaded data — never leave the user wondering "did anything load?"

---

## 7. Progress Drives Completion — Zeigarnik & Goal Gradient

Users remember incomplete tasks. They are more motivated as they get closer to the goal.
- Show progress bars on multi-step forms: "2 of 5 steps complete."
- Never hide progress. Even "Step 1 of 3" reduces abandonment.
- Show partial completion state visually — checked steps, filled progress rings.
- Goal Gradient: speed up the experience near the end. Fewer fields, simpler steps, clearer success message as the user approaches completion.

---

## 8. Visual Hierarchy — Lead the Eye

The user must see the most important element first without searching.
- Establish importance order before designing: what must the user see first, second, third?
- Express that order through size, contrast, color, and whitespace — not decoration.
- **F-pattern**: text-heavy pages, data tables, search results.
- **Z-pattern**: landing overviews, modal summaries, cards.
- Consistent text alignment: left-align body copy, labels, table cells. Right-align numerical data and currency. Never center-align multi-line paragraphs.

---

## 9. Grouping — Gestalt Laws

Proximity and shared background create perceived groups without borders.
- Items placed close together (4–8px gap) are understood as related.
- Items with a shared background (card, panel) are understood as a group even if spaced apart.
- Use whitespace as a grouping tool — not just empty space. A 32px gap between sections is a visual separator.
- Consistent spacing scale: 4px, 8px, 16px, 24px, 32px, 48px, 64px. No arbitrary values.

---

## 10. Progressive Disclosure — Solve Hick and Miller Together

Show only what the user needs right now. Reveal advanced options on demand.
- Show essential fields first. Put advanced settings behind "Show advanced options."
- Show the primary action first. Show secondary and destructive actions only when relevant.
- Collapse infrequently used sections (accordion, tab, modal). Keep the main view clean.
- Never overwhelm the first view of any screen with every possible option.

---

## 11. Consistency — Nielsen #4 & Jakob's Law Combined

Same element, same behavior, everywhere.
- If a button is blue and labeled "Save" on one screen, it must be blue and labeled "Save" on every screen.
- Icon meanings do not change. A trash icon always means delete.
- Spacing, color, and typography tokens come from a single source. Never apply values ad hoc.

---

## 12. Error Prevention and Recovery — Nielsen #5 & #9

Prevent errors before they happen:
- Disable the submit button until required fields are filled.
- Show character limits before the user hits them.
- Confirm destructive actions with a clear modal: "Delete Campaign? This cannot be undone." with Cancel on the left and Delete on the right.

When errors happen:
- Show the message next to the field that caused it.
- Use plain language: "Enter an email with an @ symbol" — not "Invalid input."
- Validate on blur, not while the user is actively typing for the first time.
- Always provide a way forward: a Retry button, a Back link, or a support contact.

---

## 13. Accessibility — Baseline Requirement

Design to WCAG 2.2 AA minimum:
- Color contrast: 4.5:1 for normal text, 3:1 for large text and UI components.
- Every meaningful image has alt text. Decorative images use `alt=""`.
- All interactive elements are reachable by keyboard.
- Every input has a persistent visible label above it — not only placeholder text.
- Never remove focus outlines without a high-contrast visible replacement.
- HTML5 input types: `type="email"`, `type="tel"`, `type="number"` — so browsers provide correct keyboards and native validation.
- Enable autocomplete on standard fields: `autocomplete="email"`, `autocomplete="name"`.

---

## 14. Peak-End Rule — Make the Last Moment Count

Users judge an entire experience by its strongest moment and its final moment — not the average.
- The success screen after purchase or sign-up is as important as the homepage. Design it with care.
- Error messages are often the last thing a user sees before leaving. Make them helpful, not alarming.
- Empty states are not edge cases — they are often the first thing new users see. Give them a direct action.
- Never end a flow on a blank screen or a generic "Done."

---

## 15. Responsive Layout and Performance — Non-Negotiable

The site must work at the same quality on mobile (360px), tablet, and desktop.
- Use flexible grids and fluid images.
- Minimum touch target: 44×44px on mobile.
- Never hide critical content or actions on mobile.
- Time to interactive: under 2 seconds on standard mobile connection.
- Compress images. Use WebP or AVIF. Enable caching. Minimize render-blocking scripts.
- Use a CDN for static assets.

---

## 16. Content Clarity

- Links and buttons describe the destination or result: "Download pricing guide (PDF)" — not "Click here."
- Visited links are visually distinct from unvisited links.
- Buttons use action verbs: "Submit Application", "Start Free Trial" — not "OK" or "Submit."
- One H1 per page. Short paragraphs (3–5 lines). Numbered or bulleted lists for sequential information.
- Never use filler text that adds no meaning.

---

## 17. Nielsen's 10 Usability Heuristics — Full Reference

These 10 principles evaluate any interface. Every screen must satisfy all of them.

**1. Visibility of System Status**
The user always knows what the system is doing right now — during the action, not before or after.

This is NOT a colored pill badge labeled "Active" or "Online." That is a decoration, not status.

Real system status means:
- While a task is running: a live counter incrementing ("Sent 47 of 200"), a progress bar moving, or a log line appearing in real time.
- While data is loading: a skeleton loader that matches the shape of the content — not a blank screen or a generic spinner.
- While a step-by-step flow is in progress: a step indicator ("Step 2 of 5") that updates as the user moves forward.
- After an operation completes: a clear result ("Done — 142 messages sent. 3 failed.") — not silence.
- The Start button becomes disabled and changes label ("Running...") while a task is active. The Stop button becomes enabled. The user can always tell whether something is running or not — without guessing.

The UI must never look idle while a background task is active.

**2. Match Between System and the Real World**
Speak the user's language — not the system's language.
- Use words the user knows: "Your order" not "Transaction record."
- Use real-world metaphors: a trash icon means delete, a folder icon means a collection.
- Error messages use plain language: "Your session expired. Please log in again." — not "401 Unauthorized."

**3. User Control and Freedom**
Give the user an exit from every action without penalty.
- Every multi-step form has a visible Back button.
- Destructive actions have an Undo option or a grace period before executing.
- Modals and dialogs always have a visible close control (X button or Cancel).
- Never trap the user in a flow with no escape.

**4. Consistency and Standards**
Same element, same label, same behavior — everywhere.
- A Save button is always labeled "Save," always in the same color, always in the same position.
- Icons carry fixed meanings. Never repurpose an icon for a different action on a different screen.
- Design tokens (colors, spacing, type sizes) come from one shared source. Never apply values ad hoc.

**5. Error Prevention**
Prevent errors before they happen — this is more valuable than good error messages.
- Disable the submit button until required fields are valid.
- Show character limits before the user hits them, not after.
- Show a confirmation dialog before any irreversible action: "Delete this campaign? This cannot be undone."
- Use smart defaults: pre-fill known values, suggest the most likely option.

**6. Recognition Rather Than Recall**
Do not force the user to remember information from a previous screen.
- Show the user's previous selections inline, not in a separate review screen.
- Show recent or saved items in search and form fields.
- Breadcrumbs on deep pages so the user always knows their path.
- Labels stay visible on form fields — never replace them with placeholder-only inputs.

**7. Flexibility and Efficiency of Use**
Support both beginners and power users.
- Keyboard shortcuts for frequent actions (Ctrl+S, Ctrl+Enter, Escape).
- Bulk actions for users who work with large data sets.
- Advanced filters available but collapsed by default — visible to expert users without cluttering beginner views.
- Quick-access shortcuts or pinned actions for the most common tasks.

**8. Aesthetic and Minimalist Design**
Remove anything that does not serve the current goal.
- Every element on a screen must earn its place. If removing it does not hurt the user, remove it.
- Do not add decorative elements, stock illustrations, or filler text to fill empty space.
- Information hierarchy: the most important content gets the most visual weight. Secondary content recedes.
- Noise reduces signal. The fewer elements compete for attention, the clearer the primary action becomes.

**9. Help Users Recognize, Diagnose, and Recover From Errors**
Error messages are a last resort — make them genuinely useful.
- Place error text directly next to the field or action that caused it.
- State what went wrong in plain language.
- State how to fix it: "Enter a valid email address (example: name@domain.com)."
- Provide a direct action to recover: Retry, Go Back, or Contact Support.
- Never show a generic "Something went wrong" without a next step.

**10. Help and Documentation**
If the interface requires explanation, the explanation must be easy to find and act on.
- Contextual help: tooltip or inline hint next to complex fields.
- Help content answers task-based questions: "How do I add a team member?" — not "About the Users module."
- Empty states explain what to do: "No campaigns yet. Create your first campaign to get started." with a direct action button.
- Error states link to relevant help: "Payment failed. See why payments fail →"

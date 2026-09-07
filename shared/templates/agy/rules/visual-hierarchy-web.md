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

# Visual Hierarchy & UX Standards

## Core Rule
Visual hierarchy must guide the user's focus effortlessly using scale, contrast, proximity, and spacing—not visual noise or decorative boxes. Every interface must have a single primary action, immediate state feedback, and zero dead ends.

---

## 1. The 3-Level Typographic Hierarchy
- **Level 1 (Primary / Focal Point)**: Page title, primary modal header, or key metric value (e.g., 24px–32px, bold/semibold, highest contrast).
- **Level 2 (Secondary / Structural)**: Section headers, card titles, column labels, and active values (e.g., 16px–18px, medium/semibold).
- **Level 3 (Tertiary / Contextual)**: Body copy, field descriptions, captions, and metadata (e.g., 13px–15px, regular, muted text).
- **The 3-Size Rule**: Use no more than 3 distinct font sizes within a single component or content card.
- **Differentiate by Weight and Tone**: Use font weight (semibold vs regular) and contrast (primary text vs muted text) to create separation before changing font sizes.

---

## 2. Spacing & Proximity (Gestalt Law)
- **Proximity Defines Relationship**: Place related items close together (4px–8px gap) and separate distinct sections with generous whitespace (24px–32px gap).
- **Whitespace Over Borders**: Use whitespace and layout proximity as the primary grouping mechanism before adding nested borders, cards, or background fills.
- **Consistent Spacing Scale**: Stick strictly to a 4px / 8px spacing scale (4px, 8px, 12px, 16px, 24px, 32px, 48px, 64px). Never use arbitrary pixel values like `17px` or `29px`.

---

## 3. Action Hierarchy & The Single Primary CTA
- **One Primary Action per View**: Provide only one dominant call-to-action button on any screen, section, or modal dialog.
- **Secondary Actions Stay Quiet**: Use neutral borders, subtle ghost buttons, or muted text for secondary and tertiary actions (e.g., "Cancel", "Back", "Export").
- **Destructive Action Isolation**: Style destructive actions (e.g., "Delete", "Revoke") in subdued red/destructive tones, separate them from primary creation flows, and require confirmation.
- **Scanning Placement**: Place primary actions where natural scanning concludes (bottom-right for step-by-step forms and dialogs; top-right or sticky header for workspace toolbars).

---

## 4. Visual Weight & Scannability
- **Reserve High Accent Colors for Intent**: Use primary brand or accent colors strictly for active selections, interactive links, and the primary call-to-action. Never use accent colors as background decoration.
- **Align for Scanning Paths**:
  - Use F-patterns for text-heavy content, lists, and data tables.
  - Use Z-patterns for landing pages, modal overviews, and card summaries.
- **Consistent Text Alignment**: Keep body copy, labels, and table cells left-aligned (or right-aligned for numerical data and currency). Never center-align paragraphs or multi-line forms.

---

## 5. Interaction States & Immediate Feedback
- **5 Mandatory States**: Every interactive control (button, input, row, card) must define 5 distinct visual states:
  1. Default (idle)
  2. Hover (cursor over element)
  3. Active (mouse pressed down / tap)
  4. Focus-visible (keyboard navigation outline)
  5. Disabled or Loading (reduced opacity, cursor not-allowed, or spinner)
- **Accessible Keyboard Focus**: Never remove focus outlines (`outline-none`) without providing a distinct, high-contrast replacement ring (`focus-visible:ring-2`).
- **Snappy Micro-Interactions**: Keep transition durations between 150ms and 200ms with ease-out timing. Avoid sluggish or distracting animations.

---

## 6. Form Ergonomics & Error Prevention
- **Persistent Top Labels**: Always place field labels above inputs. Never rely solely on placeholder text that disappears when typing starts.
- **Validation Timing**: Validate fields on blur (`onBlur`) or after form submission. Do not show error states while the user is actively typing their first entry.
- **Actionable Error Messages**: Place error text directly below the invalid input field in high-contrast red text. Explain exactly what went wrong and how to fix it (e.g., "Enter an email with an @ symbol" instead of "Invalid input").
- **Safe Click Targets**: Ensure interactive targets meet minimum touch sizes (minimum 44px × 44px on mobile, 36px on desktop).

---

## 7. Progressive Disclosure & Cognitive Load
- **Limit Initial Choices**: Show only essential options first. Reveal advanced settings, deep filters, or secondary parameters on demand using tabs, accordions, or disclosure panels.
- **Chunk Complex Workflows**: Break lengthy multi-field tasks into clear, numbered steps or sequential stages with visible progress indicators.
- **Reversible Actions**: Provide an "Undo" toast or grace period for non-destructive operations. Provide an explicit modal check for irreversible deletions.

---

## 8. Graceful System States (Zero Dead Ends)
- **Loading Skeletons**: Use structural skeleton loaders matching the layout instead of generic centered spinning wheels or blank white screens.
- **Empty States with Direct Actions**: When a list or table is empty, show a clean outline icon, a short 1-sentence explanation, and a primary button to create or import the first record.
- **Clear Recovery Paths on Error**: If a request or operation fails, display the error clearly with a prominent "Retry" or "Return to Dashboard" button. Never leave the user stuck.

# Visual Hierarchy & UX Standards (Desktop & Mobile Apps)

## Core Rule
Visual hierarchy guides the user's eye using size, contrast, proximity, and color — not decorative noise. Every screen must have a single clear primary action, permanent state feedback, and no dead ends.

---

## 1. Screen-Level Layout Zones

Every action screen splits into fixed functional zones. Never mix zones.

- **Left (Context)**: Who or what is the subject? Account selector, source list, or session info. Always visible — never hidden in a dropdown or collapsible panel.
- **Top (Input)**: What data does this action need? File upload, URL input, count display, and quick controls.
- **Center (Results)**: Live output. The running log, data table, or progress list. Background stays neutral — no colored panels here.
- **Bottom (Actions)**: Start, Stop, Delay, and settings. Colored background to visually separate this zone from the results area.

Layout direction follows the natural work order: **top → center → bottom**, **left → right**.

---

## 2. Entry-Point Screens (Launcher / Menu)

When a screen is a top-level menu:
- Use **large buttons** with the icon on top and a short label below. No nested menus or toolbars at this level.
- Buttons are **equal in size** by default. If one action is used far more than others, give it double the width — size alone communicates priority.
- Keep the window **fixed size**, centered on screen. Do not add resize support unless the layout is designed for it. Resizing breaks fixed proportions.

---

## 3. Typography — 3 Levels Only

- **Level 1**: Window title, form section header, key status value. Largest, highest contrast.
- **Level 2**: Group label, column header, active field label. Medium size, semibold.
- **Level 3**: Body text, descriptions, metadata, counts. Smallest, muted color.

Use no more than 3 distinct font sizes in any single window. Differentiate using **weight** and **contrast** before increasing size.

---

## 4. Spacing & Grouping

- **Proximity = relationship**: Keep related controls close (4–8px). Separate distinct sections with clear space (16–24px).
- **Group and label sections**: Use a visible border or background + a section title to group related controls. Never scatter controls in an unlabeled flat area.
- **Always show live counts**: Any loaded data must show its count immediately next to the relevant controls. The user must never wonder "did anything load?"

---

## 5. Button Placement Rules

Placement has fixed meaning — never reverse it:

| Position | Meaning |
|---|---|
| Left | Primary action — Start, Upload, Login |
| Right | Secondary or destructive — Stop, Reset, Delete |
| Bottom panel | Execution controls — Start, Stop, Delay settings |
| Top panel | Data controls — Upload, Clear, Count display |

- **Destructive actions** (Delete, Reset, Revoke): place on the right, use a subdued destructive color, and require confirmation before executing.

---

## 6. Color — Functional, Not Decorative

- Use a **distinct background color** only on active control zones (top input panel, bottom action panel). The results area stays neutral.
- The color contrast tells the user: "these panels are where you act — the center is where you watch."
- Reserve accent colors for active states and the primary action button only. Never use them as decorative fills.

---

## 7. Interaction States

Every interactive control must define these states visually:

1. **Default** — idle, ready
2. **Hover** — highlight or slight color shift
3. **Active / Pressed** — clear visual press feedback
4. **Disabled** — reduced opacity, not clickable
5. **Running / Loading** — progress indicator or button label change (e.g., "Running..." with a spinner)

Running operations must show continuous feedback — a progress bar, a live log, or a counter incrementing. Never leave the screen looking idle while a background task is active.

---

## 8. Form Controls

- Place labels **above** inputs, not only inside them as placeholder text.
- Show validation errors **below** the relevant field, in red, with a clear message — not just "Invalid".
- Minimum control height: **32px desktop / 44px mobile**. Never use controls smaller than this.
- Group related inputs inside a named section. Do not mix unrelated inputs in the same row.

---

## 9. System States — No Dead Ends

- **Empty list**: Show a short message explaining why it is empty and what the user should do next. Add a direct action button (e.g., "Upload a file to start").
- **Operation failed**: Display the error in plain language. Provide a "Retry" button. Never leave the user on a broken screen with no way forward.
- **Operation complete**: Show a clear success message with the result count (e.g., "Done — 142 messages sent").
- **Operation running**: Show a live counter or progress bar. Disable the Start button. Enable the Stop button.

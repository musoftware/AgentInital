# Human UI Design & Anti-AI Slop Guidelines

## Core Rule
Eliminate generic AI-generated design clichés ("AI slop") and build authentic, bespoke, human, and production-grade user interfaces.

---

## 1. Eliminate The "Pill" & Badge Addiction
- **Stop putting pill-shaped badges above every headline** (e.g. `✨ Introducing Version 2.0 ✨` or `🚀 AI Powered Solution`).
- Reserve badges strictly for true status indicators (e.g., `Active`, `Pending`, `Failed`).
- Do NOT use pills as decorative noise or section sub-headers.

---

## 2. Eliminate AI Template Clichés
- **No Generic Purple/Blue Neon Gradients**: Avoid the default generic AI gradient mesh (`linear-gradient(135deg, #6366f1, #a855f7)`). Use curated, intentional color palettes tailored to the brand domain.
- **No Pointless Bento Grids**: Do not force every feature section into an asymmetric 4-box bento grid with random floating glass icons.
- **No Fake Floating Glass Cards**: Avoid decorative blurred glass cards (`backdrop-blur-md bg-white/10`) hovering aimlessly with no actionable data.
- **No Decorative Star/Sparkle Icons**: Remove unnecessary emoji/sparkle icons (`✨`, `⚡`, `🔮`) cluttering titles.

---

## 3. Real, Production-Grade UI Principles
1. **Typography Hierarchy**:
   - Use high-quality, distinct typography (e.g., Inter, Plus Jakarta Sans, Outfit, Geist, JetBrains Mono for code).
   - Establish a clear hierarchy using font weight, scale, and line height rather than excessive borders and backgrounds.

2. **Intentional Whitespace**:
   - Give content room to breathe without excessive empty padding.
   - Group related elements logically using proximity rather than wrapping everything in nested bordered boxes.

3. **Subtle & Purposeful Motion**:
   - Micro-interactions on buttons, inputs, and state changes (150ms - 250ms ease-out).
   - No slow, dizzying 3D scroll effects or perpetual bouncing animations.

4. **Functional Color Roles**:
   - Background, Surface, Primary, Muted, Border, and semantic status colors (Success, Warning, Destructive).
   - High contrast ratios (WCAG AA compliant).

# Human UI Design & Anti-AI Slop Guidelines

## Core Rule
Eliminate generic AI-generated design clichés ("AI slop"), noisy card fatigue, buzzword copy overload, and synthetic templates. Build authentic, bespoke, human, responsive, accessible, and production-grade user interfaces.

---

## 1. Eliminate Card Fatigue & Visual Noise
- **Stop Wrapping Everything in Cards**: Do not force every single sentence, bullet point, or trivial feature into a bordered, shadowed card.
- **Maintain High Signal-to-Noise Ratio**: Minimize visual containers, glowing borders, and redundant wrapper boxes. Let typography, proximity, and whitespace structure the content.
- **No Pointless Bento Grids**: Do not force timelines, tables, sequential steps, or dense data into an asymmetric 4–6 box bento grid. Choose the layout that best fits the data (e.g., clean tables, linear lists, tabbed views, or editorial layouts).
- **No Fake Floating Glass**: Avoid decorative blurred glass cards (`backdrop-blur-md bg-white/10`) hovering aimlessly with no actionable data.

---

## 2. Eliminate Copywriting Clichés & Text Inflation ("The AI Voice")
- **No Buzzword Soup**: Strictly avoid empty corporate filler phrases:
  - *"In today's fast-paced digital world / landscape..."*
  - *"Unlock your potential / Supercharge your workflow..."*
  - *"Seamless integration / Cutting-edge solutions / Game-changing platform..."*
  - *"Not only does it do X, but it also empowers you to do Y."*
- **No Em Dash Addiction**: Avoid excessive em dashes (`—`) artificially connecting fragmented thoughts in titles and subheaders.
- **Write Concrete, Product-Specific Copy**: State exactly what the tool does in clear, human, and measurable terms with real domain terminology.

---

## 3. Eliminate The "Pill Badge" & Decorative Sparkle Spam
- **Stop Putting Pill Badges Above Every Heading**: (e.g., `✨ Introducing Version 2.0 ✨` or `🚀 AI-Powered Solution`).
- **Reserve Badges for Real Status**: Use badges strictly for meaningful state indicators (`Active`, `Pending`, `Failed`, `Verified`).
- **No Decorative Emojis/Sparkles**: Remove random sparkle (`✨`), lightning (`⚡`), and rocket (`🚀`) icons cluttering headers and buttons.

---

## 4. Eliminate Synthetic Visual Homogeneity & Color Traps
- **No Default Purple/Indigo Neon Mesh**: Avoid the generic AI gradient combo (`linear-gradient(135deg, #6366f1, #a855f7)`) on dark slate backgrounds with purple ambient blur orbs.
- **No Pure Pitch-Black Halation (`#000000`)**: Avoid `#000000` with pure `#ffffff` text, which causes eye fatigue and text vibration (halation). Use rich, layered dark surfaces (`#0c0d0e`, `#0f172a`, `#111827`).
- **Intentional Brand Palettes**: Use curated, domain-specific color systems (e.g., warm off-whites, deep navy, slate monochrome, terracotta, forest greens).
- **Distinct Typography**: Avoid unadjusted default Inter everywhere. Pair distinctive heading typefaces (Plus Jakarta Sans, Outfit, Cabinet Grotesk, Geist) with crisp, readable body typefaces.

---

## 5. Accessibility (a11y) & Readability Standards
- **Strict WCAG AA Contrast (4.5:1 Minimum)**: Never use unreadable light-grey on white or low-contrast dark-grey on dark backgrounds.
- **Accessible Interactive Elements**:
  - Every icon-only button must have an explicit `aria-label` or screen-reader title.
  - Never remove keyboard focus outlines (`outline-none`) without providing an explicit, high-contrast replacement focus state (`focus-visible:ring-2`).
- **Readable Font Sizes**: Minimum 14px for body content, with appropriate line-height (`1.5` to `1.75`).

---

## 6. Mobile Reality Over "Screenshot-Only" Layouts
- **Touch-Friendly Targets**: Ensure all clickable elements, inputs, and buttons meet minimum mobile touch target sizes (at least `44px × 44px`).
- **Resilient Breakpoints**: Test and ensure layouts gracefully stack on mobile screens without broken horizontal scroll, overlapping badges, or hidden buttons.
- **Mobile Input Usability**: Accommodate virtual keyboards and native form interactions.

---

## 7. Eliminate Fake Social Proof & Meaningless Metrics
- **No Generic Stat Counters**: Avoid floating cards with unverified claims (`"10,000+ Teams"`, `"99.9% Efficiency"`, `"5x Faster"`).
- **Authentic Social Proof**: Use verifiable customer quotes, real case studies, logo grids, or actual domain metrics.

---

## 8. Real Production-Grade UI Principles
1. **Typography Hierarchy**: Establish visual rhythm using scale, weight, and line height rather than nested borders and boxes.
2. **Intentional Whitespace**: Give elements breathing room and use proximity to group related items naturally.
3. **Subtle & Purposeful Motion**: Micro-interactions on buttons, inputs, and states (150ms–250ms ease-out). No dizzying scroll effects or perpetual bouncing.
4. **Functional Color Roles**: Define semantic tokens for background, surface, primary, muted, border, and statuses (Success, Warning, Destructive).

# No Emojis & Use Dedicated Icon Libraries

## Core Rule
Never use raw Unicode emojis in user interfaces, buttons, headers, notifications, or production code. When visual symbols or icons are needed, always use a dedicated, professional icon library (or inline SVG icons).

---

## 1. Why Raw Emojis Are Prohibited
- **Inconsistent Rendering**: Emojis render differently (and often poorly) across operating systems (Windows, macOS, Android, Linux, iOS).
- **Unprofessional Appearance**: Emojis give a casual, unpolished, AI-generated impression ("AI slop") rather than a clean, bespoke product feel.
- **Accessibility & Styling Limitations**: Emojis cannot be styled with CSS (e.g. `currentColor`, stroke width, custom sizing, dual-tone colors) and can interfere with screen readers.

---

## 2. Guidelines

1. **Strictly Avoid Emojis**:
   - Do NOT use emojis in UI titles, navigation items, buttons, alerts, badges, or toast messages.
   - Do NOT use emojis in code comments, logs, or user-facing strings.

2. **Use Dedicated Icon Libraries**:
   - Choose a cohesive, high-quality icon set appropriate for the project stack:
     - **React / Next.js / Vue / Svelte**: `lucide-react`, `lucide-vue-next`, `@heroicons/react`, `radix-ui/react-icons`, `@tabler/icons-react`.
     - **Blade / Laravel / HTML**: Blade Heroicons, Blade Lucide, FontAwesome (SVG), or custom SVGs.
     - **Flutter / Mobile**: Material Icons, Cupertino Icons, Lucide Flutter.
   - Keep stroke width, size, and styling consistent throughout the entire application.

3. **Inline Clean SVGs**:
   - If a library is not available, use optimized, semantic SVG icons with `currentColor` fill or stroke.

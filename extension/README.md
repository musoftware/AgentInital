# Aigent - AI Rules & Guidelines Initializer (Extension)

An extension for **Google Antigravity IDE** and **VS Code** that lets you initialize battle-tested AI coding rules, markdown standards, and anti-AI-slop design guidelines with a single click.

---

## ⚡ Features

- **One-Click Rule Initialization**: Generates `.agents/rules/*.md` and `AGENTS.md`.
- **Right-Click Context Menu**: Right-click any folder in the Explorer to initialize rules there.
- **Rule Picker**: Add individual rules (`simple-english.md`, `no-pills.md`, `dry.md`, `solid.md`, `no-mocks.md`, `code-standards.md`).
- **Antigravity & VS Code Compatible**: Works identically in both environments.

---

## 🛠 Commands

Open the Command Palette (`Ctrl+Shift+P` or `Cmd+Shift+P`) and search for:

- **`Aigent: Initialize AI Rules & Guidelines (Antigravity)`**
- **`Aigent: Re-initialize AI Rules (Force Overwrite)`**
- **`Aigent: Add Specific Rule...`**
- **`Aigent: Open Rules Folder`**

---

## 📦 Packaging & Installation

To package the extension into a `.vsix` file:
```bash
npm install -g @vscode/vsce
npm run vscode:prepublish
vsce package
```

Then in Antigravity or VS Code:
1. Go to the Extensions view (`Ctrl+Shift+X`).
2. Click the `...` (More Actions) menu in the top-right corner of the Extensions view.
3. Select **Install from VSIX...** and pick the generated `.vsix` file.

# Aigent (`aigent`)

A unified suite (CLI tool + Antigravity/VS Code Extension) to initialize essential AI coding rules, markdown guidelines, and anti-AI-slop design standards for **Google Antigravity**, **Cursor**, **Claude**, and **VS Code**.

---

## 📁 Repository Structure

```
AgentInital/
├── cli/                          # Node.js CLI tool (`aigent`)
│   ├── bin/cli.js                # Executable binary
│   ├── src/index.js              # Runner logic
│   └── package.json
├── extension/                    # VS Code & Google Antigravity Extension
│   ├── src/extension.js          # Extension entrypoint & commands
│   ├── package.json
│   └── README.md
├── shared/                       # Shared rule templates
│   └── templates/
│       └── agy/
│           ├── rules/
│           │   ├── simple-english.md
│           │   ├── no-pills.md
│           │   ├── dry.md
│           │   ├── solid.md
│           │   ├── no-mocks.md
│           │   ├── code-standards.md
│           │   ├── handling-illogical-requests.md
│           │   ├── no-emojis.md
│           │   ├── maintainability.md
│           │   ├── security.md
│           │   ├── data-and-contracts.md
│           │   ├── observability.md
│           │   ├── anti-nesting.md
│           │   ├── flat-conditionals.md
│           │   ├── simplicity-first.md
│           │   ├── yagni-kiss.md
│           │   ├── immutability.md
│           │   ├── naming-and-dead-code.md
│           │   └── dependency-direction.md
│           └── AGENTS.md
├── package.json                  # Monorepo root with npm workspaces
└── README.md
```

---

## 📜 Included AI Rules & Standards

| Rule File | Description |
|-----------|-------------|
| `.agents/rules/simple-english.md` | Clear, concise, plain English in all responses, comments, and docs |
| `.agents/rules/no-pills.md` | Human UI design rules; eliminates AI clichés, badge spam, and generic tropes |
| `.agents/rules/dry.md` | Don't Repeat Yourself, single source of truth, reusable logic |
| `.agents/rules/solid.md` | SOLID software design principles (SRP, OCP, LSP, ISP, DIP) |
| `.agents/rules/no-mocks.md` | Real integration testing over brittle, deep mock setups |
| `.agents/rules/code-standards.md` | Type safety, defensive error handling, verification checklist |
| `.agents/rules/handling-illogical-requests.md` | Clarify contradictory, infeasible, or ambiguous requests with structured options |
| `.agents/rules/no-emojis.md` | Prohibit raw emojis and mandate dedicated icon libraries |
| `.agents/rules/maintainability.md` | Clean code, 30-line function limits, descriptive naming, decoupled configs, and Plan -> Act -> Verify workflow |
| `.agents/rules/security.md` | Zero hardcoded secrets, input sanitization, safe execution sinks, and least privilege |
| `.agents/rules/data-and-contracts.md` | Atomic persistence, safe schema evolution, and predictable boundary contracts |
| `.agents/rules/observability.md` | Structured diagnostics, contextual logging, health verification, and zero silent failures |
| `.agents/rules/anti-nesting.md` | Max 2 levels nesting, mandatory guard clauses, and early returns |
| `.agents/rules/flat-conditionals.md` | Table-driven logic, lookup tables, dictionary dispatch, and pipeline evaluators |
| `.agents/rules/simplicity-first.md` | Pure functions over heavy OOP, flat execution, composition over inheritance, and isolated side effects |
| `.agents/rules/yagni-kiss.md` | Build only what is needed, rule of three, delete dead code, and avoid over-engineering |
| `.agents/rules/immutability.md` | Zero shared mutable state, immutable collections, pure functions, and explicit mutation verbs |
| `.agents/rules/naming-and-dead-code.md` | Intent-revealing names, zero dead/commented code, clean imports, and the Boy Scout rule |
| `.agents/rules/dependency-direction.md` | Depend on abstractions not concretions, Law of Demeter, and Ports & Adapters architecture |
| `AGENTS.md` | Root index file connecting and referencing all rules |

---

## 1. Installation in Google Antigravity IDE

You can install and use Aigent in Antigravity IDE using any of the following methods:

### Method A: One-Command Terminal Install (Fastest)
From the repository root, build the package and install it directly into Antigravity IDE:
```bash
npm run extension:package
npm run extension:install:agy
```

Or run the Antigravity IDE CLI directly:
```bash
antigravity-ide --install-extension extension/aigent-vscode-1.1.0.vsix --force
```

### Method B: Graphical Install via Antigravity IDE Interface
1. Build the `.vsix` package if not already built:
   ```bash
   npm run extension:package
   ```
2. In Antigravity IDE, open the Extensions sidebar (`Ctrl+Shift+X` on Windows/Linux or `Cmd+Shift+X` on macOS).
3. Click the `...` (Views and More Actions) menu icon at the top of the Extensions pane.
4. Select **Install from VSIX...**.
5. Select the file: `extension/aigent-vscode-1.1.0.vsix`.

### Method C: Global Zero-Extension Setup
To apply all rules globally across all Antigravity workspaces without installing an extension:
```bash
npm run sync:all
```
This automatically syncs all active rules directly into your global Antigravity configuration directory (`~/.gemini/config/rules/` and `~/.gemini/config/AGENTS.md`).

---

## 2. Using the Antigravity Extension

Once installed in Antigravity IDE:

### Via Command Palette
Open the Command Palette (`Ctrl+Shift+P` / `Cmd+Shift+P`) and choose:
- **`Aigent: Initialize AI Rules & Guidelines (Antigravity)`**: Creates `.agents/rules/` and `AGENTS.md` in your current workspace root.
- **`Aigent: Re-initialize AI Rules (Force Overwrite)`**: Overwrites existing rule files with latest templates.
- **`Aigent: Add Specific Rule...`**: Opens a picker to choose and add an individual rule file.
- **`Aigent: Open Rules Folder`**: Quick shortcut to open `.agents/rules/`.

### Via File Explorer
Right-click any folder in the Explorer sidebar and click:
- **`Aigent: Initialize AI Rules & Guidelines (Antigravity)`**

---

## 3. Using the CLI (`aigent`)

### Global Setup
From the repository root, link the CLI globally:
```bash
npm run cli:link
```

### Usage
In any project folder on your machine:
```bash
aigent --init
```

To preview without writing files:
```bash
aigent --init --dry-run
```

To force overwrite existing files:
```bash
aigent --init --force
```

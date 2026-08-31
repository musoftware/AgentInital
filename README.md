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
│           │   └── code-standards.md
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
| `AGENTS.md` | Root index file connecting and referencing all rules |

---

## 💻 1. Using the CLI (`aigent`)

### Setup
From the repository root, link the CLI globally:
```bash
npm run cli:link
```

### Usage
In any project folder:
```bash
aigent --init
```

---

## 🧩 2. Using the VS Code / Antigravity Extension

The extension works identically inside both **Google Antigravity IDE** and **VS Code**.

### Commands Available:
- `Aigent: Initialize AI Rules & Guidelines (Antigravity)`
- `Aigent: Re-initialize AI Rules (Force Overwrite)`
- `Aigent: Add Specific Rule...`
- `Aigent: Open Rules Folder`
- **Right-Click in Explorer**: Right-click any folder to initialize rules directly.

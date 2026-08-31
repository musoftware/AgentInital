# Aigent CLI (`aigent`)

A lightweight, zero-dependency Node.js CLI tool to initialize essential AI coding rules, design standards, and markdown files (`.agents/rules/*.md`) for **Google Antigravity**, **Cursor**, **Claude**, and other modern AI coding assistants.

---

## Features

- **Zero Dependencies**: Fast, lightweight, and starts in milliseconds.
- **Modular Rule Files**: Generates clean, isolated markdown files for each standard.
- **Antigravity Ready**: Automatically configures the `.agents/rules/` directory and root `AGENTS.md`.
- **Customizable**: Supports `--init`, `--init=agy`, `--force`, and `--dry-run`.

---

## Included Rules & Templates

| File | Purpose |
|------|---------|
| `.agents/rules/simple-english.md` | Plain, clear, jargon-free English in docs, comments, and answers |
| `.agents/rules/no-pills.md` | Human UI design rules; eliminates AI clichés, badge spam, and generic tropes |
| `.agents/rules/dry.md` | Don't Repeat Yourself, single source of truth, reusable architecture |
| `.agents/rules/solid.md` | SOLID software design principles (SRP, OCP, LSP, ISP, DIP) |
| `.agents/rules/no-mocks.md` | Real integration testing over brittle, deep mock setups |
| `.agents/rules/code-standards.md` | Type safety, defensive error handling, verification checklist |
| `AGENTS.md` | Root overview file indexing all active rules |

---

## Installation

### 1. Global Installation (Directly from source)
Run from this repository root:
```bash
npm link
```
*Or install globally:*
```bash
npm install -g .
```

---

## Usage

In any new or existing project directory, simply run:

```bash
aigent --init
```

### Options

```bash
# Initialize Antigravity rules (Default)
aigent --init

# Explicit profile selection
aigent --init=agy

# Overwrite existing rule files
aigent --init --force

# Preview files that will be created without writing them
aigent --init --dry-run

# Show help
aigent --help

# Show version
aigent --version
```

---

## Generated Folder Structure

```
your-project/
├── .agents/
│   └── rules/
│       ├── simple-english.md
│       ├── no-pills.md
│       ├── dry.md
│       ├── solid.md
│       ├── no-mocks.md
│       └── code-standards.md
└── AGENTS.md
```

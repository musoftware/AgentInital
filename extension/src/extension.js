const vscode = require('vscode');
const fs = require('fs');
const path = require('path');

/**
 * Get templates directory path (supports packaged and development modes)
 */
function getTemplatesDir(context) {
  const localTemplates = path.join(context.extensionPath, 'templates', 'agy');
  const sharedTemplates = path.resolve(context.extensionPath, '..', 'shared', 'templates', 'agy');

  if (fs.existsSync(localTemplates)) {
    return localTemplates;
  }
  if (fs.existsSync(sharedTemplates)) {
    return sharedTemplates;
  }
  return localTemplates;
}

/**
 * Rules that belong to each project category.
 * null means "copy all available rules".
 */
const RULE_CATEGORIES = {
  'Desktop App': [
    'simple-english.md',
    'handling-illogical-requests.md',
    'dry.md',
    'solid.md',
    'no-mocks.md',
    'code-standards.md',
    'maintainability.md',
    'security.md',
    'data-and-contracts.md',
    'observability.md',
    'anti-nesting.md',
    'flat-conditionals.md',
    'simplicity-first.md',
    'yagni-kiss.md',
    'immutability.md',
    'naming-and-dead-code.md',
    'dependency-direction.md'
  ],
  'Mobile App': [
    'simple-english.md',
    'handling-illogical-requests.md',
    'dry.md',
    'solid.md',
    'no-mocks.md',
    'code-standards.md',
    'maintainability.md',
    'security.md',
    'data-and-contracts.md',
    'observability.md',
    'anti-nesting.md',
    'flat-conditionals.md',
    'simplicity-first.md',
    'yagni-kiss.md',
    'immutability.md',
    'naming-and-dead-code.md',
    'dependency-direction.md',
    'no-pills.md',
    'no-emojis.md',
    'visual-hierarchy-and-ux.md'
  ],
  'Web App': [
    'simple-english.md',
    'handling-illogical-requests.md',
    'dry.md',
    'solid.md',
    'no-mocks.md',
    'code-standards.md',
    'maintainability.md',
    'security.md',
    'data-and-contracts.md',
    'observability.md',
    'anti-nesting.md',
    'flat-conditionals.md',
    'simplicity-first.md',
    'yagni-kiss.md',
    'immutability.md',
    'naming-and-dead-code.md',
    'dependency-direction.md',
    'no-pills.md',
    'no-emojis.md',
    'visual-hierarchy-web.md'
  ],
  'All Rules': null
};

/**
 * Show a category picker then initialize only the matching rules.
 */
async function pickCategoryAndInit(targetUri, context, force = false) {
  const categoryItems = Object.keys(RULE_CATEGORIES).map(label => ({ label }));

  const picked = await vscode.window.showQuickPick(categoryItems, {
    placeHolder: 'Select the project type to initialize rules for'
  });

  if (!picked) return;

  const allowedFiles = RULE_CATEGORIES[picked.label];
  return initializeRules(targetUri, context, force, allowedFiles);
}

/**
 * Copy rules (and AGENTS.md) into the target workspace.
 * allowedFiles — array of filenames to copy, or null to copy all.
 */
async function initializeRules(targetUri, context, force = false, allowedFiles = null) {
  let targetPath;

  if (targetUri && targetUri.fsPath) {
    targetPath = targetUri.fsPath;
  } else {
    const workspaceFolders = vscode.workspace.workspaceFolders;
    if (!workspaceFolders || workspaceFolders.length === 0) {
      vscode.window.showErrorMessage('Aigent: No open workspace folder found. Please open a folder first.');
      return;
    }
    targetPath = workspaceFolders[0].uri.fsPath;
  }

  const templatesDir = getTemplatesDir(context);
  const rulesTemplateDir = path.join(templatesDir, 'rules');
  const agentsTemplateFile = path.join(templatesDir, 'AGENTS.md');

  if (!fs.existsSync(templatesDir)) {
    vscode.window.showErrorMessage(`Aigent: Templates directory not found at ${templatesDir}`);
    return;
  }

  const targetAgentsDir = path.join(targetPath, '.agents');
  const targetRulesDir = path.join(targetAgentsDir, 'rules');
  const targetAgentsMd = path.join(targetPath, 'AGENTS.md');

  if (!fs.existsSync(targetRulesDir)) {
    fs.mkdirSync(targetRulesDir, { recursive: true });
  }

  let createdCount = 0;
  let skippedCount = 0;

  if (fs.existsSync(rulesTemplateDir)) {
    const allFiles = fs.readdirSync(rulesTemplateDir).filter(f => f.endsWith('.md'));
    const filesToCopy = allowedFiles ? allFiles.filter(f => allowedFiles.includes(f)) : allFiles;

    for (const file of filesToCopy) {
      const destFile = path.join(targetRulesDir, file);
      if (fs.existsSync(destFile) && !force) {
        skippedCount++;
      } else {
        const content = fs.readFileSync(path.join(rulesTemplateDir, file), 'utf8');
        fs.writeFileSync(destFile, content, 'utf8');
        createdCount++;
      }
    }
  }

  if (fs.existsSync(agentsTemplateFile)) {
    if (fs.existsSync(targetAgentsMd) && !force) {
      skippedCount++;
    } else {
      const content = fs.readFileSync(agentsTemplateFile, 'utf8');
      fs.writeFileSync(targetAgentsMd, content, 'utf8');
      createdCount++;
    }
  }

  const message = force
    ? `Aigent: Initialized ${createdCount} rule file(s) (Overwritten).`
    : `Aigent: Initialized ${createdCount} rule file(s). (${skippedCount} skipped)`;

  const action = await vscode.window.showInformationMessage(message, 'Open AGENTS.md', 'View Rules Folder');

  if (action === 'Open AGENTS.md') {
    const doc = await vscode.workspace.openTextDocument(targetAgentsMd);
    await vscode.window.showTextDocument(doc);
  } else if (action === 'View Rules Folder') {
    vscode.commands.executeCommand('revealFileInOS', vscode.Uri.file(targetRulesDir));
  }
}

/**
 * Add a specific individual rule
 */
async function addSingleRule(context) {
  const workspaceFolders = vscode.workspace.workspaceFolders;
  if (!workspaceFolders || workspaceFolders.length === 0) {
    vscode.window.showErrorMessage('Aigent: No open workspace folder found.');
    return;
  }
  const targetPath = workspaceFolders[0].uri.fsPath;
  const templatesDir = getTemplatesDir(context);
  const rulesTemplateDir = path.join(templatesDir, 'rules');

  if (!fs.existsSync(rulesTemplateDir)) {
    vscode.window.showErrorMessage('Aigent: Rules templates directory not found.');
    return;
  }

  const ruleFiles = fs.readdirSync(rulesTemplateDir).filter(f => f.endsWith('.md'));

  const items = ruleFiles.map(file => {
    let description = 'AI Guideline';
    if (file === 'simple-english.md') description = 'Simple, clear, jargon-free English';
    if (file === 'no-pills.md') description = 'Human UI design, eliminate AI slop, card fatigue & buzzwords';
    if (file === 'dry.md') description = "Don't Repeat Yourself & single source of truth";
    if (file === 'solid.md') description = 'SOLID architecture principles';
    if (file === 'no-mocks.md') description = 'Real integration tests over brittle mocks';
    if (file === 'code-standards.md') description = 'Type safety, defensive error handling';
    if (file === 'handling-illogical-requests.md') description = 'Clarify illogical or ambiguous requests with multiple-choice options';
    if (file === 'no-emojis.md') description = 'No raw emojis, use dedicated icon libraries';
    if (file === 'maintainability.md') description = 'Clean code, function limits, naming, and config standards';
    if (file === 'security.md') description = 'Secrets management, input sanitization, and auth security';
    if (file === 'data-and-contracts.md') description = 'Atomic persistence, schema evolution, and typed contracts';
    if (file === 'observability.md') description = 'Structured diagnostics, contextual logging, and health checks';
    if (file === 'anti-nesting.md') description = 'Max 2 levels nesting, guard clauses, and flat execution';
    if (file === 'flat-conditionals.md') description = 'Table-driven logic, lookup tables, and handler dispatch';
    if (file === 'simplicity-first.md') description = 'Pure functions, flat architecture, composition over inheritance';
    if (file === 'yagni-kiss.md') description = 'Build only what is needed, rule of three, no premature abstractions';
    if (file === 'immutability.md') description = 'Zero shared mutable state, pure functions, and explicit effect verbs';
    if (file === 'naming-and-dead-code.md') description = 'Intent-revealing names, zero dead/commented code, clean imports';
    if (file === 'dependency-direction.md') description = 'Inversion of control, Law of Demeter, and Ports & Adapters';
    if (file === 'visual-hierarchy-and-ux.md') description = 'Visual hierarchy, typography scale, whitespace, and UX flow';

    return {
      label: file,
      description: description,
      fileName: file
    };
  });

  const selected = await vscode.window.showQuickPick(items, {
    placeHolder: 'Select a rule file to add to .agents/rules/'
  });

  if (!selected) return;

  const targetRulesDir = path.join(targetPath, '.agents', 'rules');
  if (!fs.existsSync(targetRulesDir)) {
    fs.mkdirSync(targetRulesDir, { recursive: true });
  }

  const destFile = path.join(targetRulesDir, selected.fileName);
  const content = fs.readFileSync(path.join(rulesTemplateDir, selected.fileName), 'utf8');
  fs.writeFileSync(destFile, content, 'utf8');

  const action = await vscode.window.showInformationMessage(`Aigent: Added ${selected.fileName}`, 'Open File');
  if (action === 'Open File') {
    const doc = await vscode.workspace.openTextDocument(destFile);
    await vscode.window.showTextDocument(doc);
  }
}

/**
 * Audit active file for AI Slop, accessibility issues, and rule violations
 */
let outputChannel;
function getOutputChannel() {
  if (!outputChannel) {
    outputChannel = vscode.window.createOutputChannel('Aigent AI Slop Audit');
  }
  return outputChannel;
}

function auditCurrentFile() {
  const editor = vscode.window.activeTextEditor;
  if (!editor) {
    vscode.window.showWarningMessage('Aigent: No active file open to audit.');
    return;
  }

  const document = editor.document;
  const text = document.getText();
  const lines = text.split(/\r?\n/);
  const findings = [];

  const emojiRegex = /[\u{1F300}-\u{1F9FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}]/u;
  const buzzwords = [
    /\bsupercharge\b/i,
    /\bunleash\b/i,
    /\bunlock the power\b/i,
    /\bseamless integration\b/i,
    /\bin today's fast-paced\b/i,
    /\bgame-changing platform\b/i,
    /\bnot only .*? but also\b/i
  ];

  lines.forEach((line, index) => {
    const lineNum = index + 1;

    // 1. Raw Emojis
    if (emojiRegex.test(line)) {
      findings.push({
        line: lineNum,
        severity: 'Warning',
        message: 'Raw emoji detected. Replace with a dedicated SVG or icon library (e.g., Lucide/Heroicons).'
      });
    }

    // 2. Default purple/indigo AI gradient
    if (/from-purple-500 to-indigo-600|#6366f1|#a855f7/i.test(line)) {
      findings.push({
        line: lineNum,
        severity: 'Warning',
        message: 'Generic purple/indigo AI gradient detected. Use an intentional, brand-specific color palette.'
      });
    }

    // 3. Pitch black background (#000000 / bg-black)
    if (/#000000\b|bg-black\b/i.test(line) && !/border|text/i.test(line)) {
      findings.push({
        line: lineNum,
        severity: 'Info',
        message: 'Pitch black background (#000000) causes visual halation. Consider layered dark tones (#0c0d0e, #0f172a).'
      });
    }

    // 4. Missing outline replacement
    if (/outline-none/i.test(line) && !/focus-visible:ring|focus:ring/i.test(line)) {
      findings.push({
        line: lineNum,
        severity: 'Error',
        message: 'Keyboard outline disabled without visible focus ring replacement (accessibility violation).'
      });
    }

    // 5. Copywriting buzzwords
    for (const pattern of buzzwords) {
      if (pattern.test(line)) {
        findings.push({
          line: lineNum,
          severity: 'Warning',
          message: `AI copywriting cliché detected (${line.trim().slice(0, 40)}...). Use concrete, direct terms.`
        });
        break;
      }
    }
  });

  const channel = getOutputChannel();
  channel.clear();
  channel.appendLine(`=======================================================`);
  channel.appendLine(`🔍 Aigent AI Slop & UI Audit Report: ${path.basename(document.fileName)}`);
  channel.appendLine(`Path: ${document.fileName}`);
  channel.appendLine(`Total Lines: ${lines.length} | Findings: ${findings.length}`);
  channel.appendLine(`=======================================================\n`);

  if (findings.length === 0) {
    channel.appendLine(`✔ Clean! No common AI slop, accessibility, or design clichés detected.`);
    vscode.window.showInformationMessage(`Aigent Audit: 0 issues found in ${path.basename(document.fileName)}! 🎉`);
  } else {
    findings.forEach(f => {
      channel.appendLine(`[Line ${f.line}] [${f.severity}] ${f.message}`);
    });
    channel.appendLine(`\n-------------------------------------------------------`);
    channel.appendLine(`Refer to .agents/rules/no-pills.md & no-emojis.md for full guidelines.`);
    channel.show(true);
    vscode.window.showWarningMessage(`Aigent Audit: Found ${findings.length} potential AI slop / accessibility issue(s). Check Output channel.`);
  }
}

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
  const initCmd = vscode.commands.registerCommand('aigent.init', (uri) => {
    return pickCategoryAndInit(uri, context, false);
  });

  const initForceCmd = vscode.commands.registerCommand('aigent.initForce', (uri) => {
    return pickCategoryAndInit(uri, context, true);
  });

  const addSingleRuleCmd = vscode.commands.registerCommand('aigent.addSingleRule', () => {
    return addSingleRule(context);
  });

  const auditFileCmd = vscode.commands.registerCommand('aigent.auditFile', () => {
    return auditCurrentFile();
  });

  const openRulesFolderCmd = vscode.commands.registerCommand('aigent.openRulesFolder', () => {
    const workspaceFolders = vscode.workspace.workspaceFolders;
    if (!workspaceFolders || workspaceFolders.length === 0) return;
    const rulesDir = path.join(workspaceFolders[0].uri.fsPath, '.agents', 'rules');
    if (fs.existsSync(rulesDir)) {
      vscode.commands.executeCommand('revealFileInOS', vscode.Uri.file(rulesDir));
    } else {
      vscode.window.showWarningMessage('Aigent: .agents/rules folder does not exist yet. Run "Aigent: Initialize AI Rules" first.');
    }
  });

  context.subscriptions.push(initCmd, initForceCmd, addSingleRuleCmd, auditFileCmd, openRulesFolderCmd);
}

function deactivate() {}

module.exports = {
  activate,
  deactivate
};

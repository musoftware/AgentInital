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
 * Initialize all rules in the target workspace directory
 */
async function initializeRules(targetUri, context, force = false) {
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

  // Copy individual rule files
  if (fs.existsSync(rulesTemplateDir)) {
    const files = fs.readdirSync(rulesTemplateDir);
    for (const file of files) {
      if (file.endsWith('.md')) {
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
  }

  // Copy root AGENTS.md
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
    if (file === 'no-pills.md') description = 'Human UI design, eliminate AI slop & pill badges';
    if (file === 'dry.md') description = "Don't Repeat Yourself & single source of truth";
    if (file === 'solid.md') description = 'SOLID architecture principles';
    if (file === 'no-mocks.md') description = 'Real integration tests over brittle mocks';
    if (file === 'code-standards.md') description = 'Type safety, defensive error handling';

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
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
  const initCmd = vscode.commands.registerCommand('aigent.init', (uri) => {
    return initializeRules(uri, context, false);
  });

  const initForceCmd = vscode.commands.registerCommand('aigent.initForce', (uri) => {
    return initializeRules(uri, context, true);
  });

  const addSingleRuleCmd = vscode.commands.registerCommand('aigent.addSingleRule', () => {
    return addSingleRule(context);
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

  context.subscriptions.push(initCmd, initForceCmd, addSingleRuleCmd, openRulesFolderCmd);
}

function deactivate() {}

module.exports = {
  activate,
  deactivate
};

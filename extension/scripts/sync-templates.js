import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const sharedDir = path.resolve(__dirname, '../../shared/templates');
const extTemplatesDir = path.resolve(__dirname, '../templates');

if (fs.existsSync(sharedDir)) {
  fs.cpSync(sharedDir, extTemplatesDir, { recursive: true, force: true });
  console.log('✔ Templates successfully synced to extension directory.');
} else {
  console.warn('⚠ Shared templates directory not found at', sharedDir);
}

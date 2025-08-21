import fs from 'fs';

const raw = fs.readFileSync('./lint-report.json', 'utf8');

if (!raw || raw.trim() === '') {
  console.error('❌ lint-report.json ist leer!');
  process.exit(1);
}

let report;
try {
  report = JSON.parse(raw);
} catch (err) {
  console.error('❌ JSON konnte nicht geparst werden:', err.message);
  process.exit(1);
}

const issues = report[0]?.warnings ?? [];

// Zähle alle Blöcke anhand von geschweiften Klammern
const totalBlocks = fs.readFileSync('./.temp-all.css', 'utf8')
  .split('}')
  .filter(b => b.includes('{')).length;

const duplicateWarnings = issues.filter(w =>
  w.rule === 'custom/no-duplicate-style-blocks'
);

const duplicatedBlocks = duplicateWarnings.length;
const percentage = ((duplicatedBlocks / totalBlocks) * 100).toFixed(1);

console.log(`\n🚨 Duplikate: ${duplicatedBlocks} von ${totalBlocks} Blöcken`);
console.log(`📊 Duplicated Style Blocks: ${percentage}%\n`);

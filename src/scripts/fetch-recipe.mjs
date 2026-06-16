#!/usr/bin/env node

import { fetchTranscript } from 'youtube-transcript';
import { writeFileSync, existsSync } from 'fs';
import { resolve } from 'path';

const url = process.argv[2];

if (!url) {
  console.error('❌  Usage: npm run fetch-recipe -- <youtube-url>');
  process.exit(1);
}

const videoId = url.match(/(?:v=|\/)([\w-]{11})(?:[?&/]|$)/)?.[1];
if (!videoId) {
  console.error('❌  Invalid YouTube URL');
  process.exit(1);
}

// Fetch transcript
console.log(`📥  Fetching transcript for video ${videoId}...`);
let transcriptItems;
try {
  transcriptItems = await fetchTranscript(videoId);
} catch (err) {
  console.error(`❌  Failed to fetch transcript: ${err.message}`);
  process.exit(1);
}

const fullTranscript = transcriptItems
  .map(item => item.text)
  .join(' ')
  .replace(/\s+/g, ' ')
  .trim();

console.log(`✅  Transcript fetched (${fullTranscript.length} chars)`);

// --- Generate slug from a short prefix ---
const slugBase = `recipe-${videoId}`;
const slug = slugBase;

// --- Build frontmatter with transcript hidden ---
const frontmatter = [
  '---',
  `title: "${videoId}"`,
  `author: "canale youtube"`,
  `youtube: "${url}"`,
  'date: ' + new Date().toISOString().slice(0, 10),
  'tags:',
  '  - vegetale',
  '  - vegan',
  'transcript: >',
  `  ${fullTranscript.replace(/\n/g, ' ').replace(/"/g, '\\"')}`,
  '---',
  '',
].join('\n');

// --- Body placeholder ---
const body = [
  '# Titolo della Ricetta',
  '',
  '## Descrizione',
  '',
  'Breve descrizione della ricetta.',
  '',
  '## Ingredienti',
  '',
  '- ingrediente 1',
  '- ingrediente 2',
  '',
  '## Procedimento',
  '',
  '1. Passaggio 1',
  '2. Passaggio 2',
  '',
  '## Note',
  '',
  '- ...',
  '',
  '## Tempo',
  '',
  '- Preparazione:',
  '- Cottura:',
  '- Totale:',
  '',
  '## Porzioni',
  '',
  '...',
  '',
].join('\n');

const content = frontmatter + body;

const filePath = resolve(process.cwd(), `src/content/recipes/${slug}.md`);
if (existsSync(filePath)) {
  console.error(`⚠️  File already exists: ${filePath}`);
  process.exit(1);
}

writeFileSync(filePath, content, 'utf-8');
console.log(`📝  Created: ${filePath}`);
console.log('');
console.log('✏️  Now edit the file to fill in title, author, ingredients, steps, etc.');
console.log('   The full transcript is stored in the frontmatter (transcript field)');
console.log('   and will NOT be displayed on the page.');

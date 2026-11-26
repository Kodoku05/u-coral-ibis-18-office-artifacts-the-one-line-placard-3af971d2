const { mkdirSync, writeFileSync } = require('node:fs');

const placard = "Correction fluid, c. 1300 BCE, chalk and gum. Applied to royal genealogies to make all four princes firstborn. Gift of the youngest prince.";

mkdirSync('/output', { recursive: true });
writeFileSync('/output/entry.txt', placard, 'utf8');

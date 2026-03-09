const fs = require('fs');
const path = require('path');

const requiredFiles = [
    'public/theroadto/index.html'
];

let hasError = false;

console.log('Verifying static landing pages exist...');

for (const file of requiredFiles) {
    const fullPath = path.join(process.cwd(), file);
    if (!fs.existsSync(fullPath)) {
        console.error(`\x1b[31mError: Required static file missing: ${file}\x1b[0m`);
        console.error(`\x1b[33mStatic campaign pages must be built and placed in the /public directory before building the main application.\x1b[0m`);
        hasError = true;
    } else {
        console.log(`\x1b[32m✓ Found ${file}\x1b[0m`);
    }
}

if (hasError) {
    process.exit(1);
}

console.log('All static landing pages verified.');

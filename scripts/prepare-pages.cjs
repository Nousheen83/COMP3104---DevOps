const { copyFileSync } = require('node:fs');
const { resolve } = require('node:path');

// Keep the homepage and serve the same SPA for GitHub Pages fallback requests.
const buildDir = resolve(__dirname, '..', 'build');
copyFileSync(resolve(buildDir, 'index.html'), resolve(buildDir, '404.html'));
console.log('GitHub Pages fallback prepared: build/404.html');

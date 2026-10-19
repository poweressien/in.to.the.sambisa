import { build } from 'esbuild';
await build({ entryPoints: ['src/main.js'], bundle: true, minify: true, format: 'iife', outfile: 'game.js', target: ['es2019'], legalComments: 'none' });
console.log('built');

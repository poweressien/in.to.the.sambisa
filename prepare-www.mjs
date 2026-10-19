// Copies the web game into www/ (the folder Capacitor packages into the APK)
import { rmSync, mkdirSync, cpSync } from 'node:fs';
rmSync('www', { recursive: true, force: true });
mkdirSync('www', { recursive: true });
for (const f of ['index.html', 'style.css', 'game.js']) cpSync(f, 'www/' + f);
cpSync('audio', 'www/audio', { recursive: true });
console.log('www ready');

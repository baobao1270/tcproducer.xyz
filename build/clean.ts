import fs from 'fs';
import path from 'path';
import { PROJECT_ROOT } from './consts';

const dictoriesToClean = [
  '.vite-ssg-temp',
  'dist',
];

dictoriesToClean.forEach(dir => {
  const target = path.join(PROJECT_ROOT, dir);
  if (!fs.existsSync(target)) { return; }

  console.log(`Cleaning ${target}`);
  fs.rmSync(target, { recursive: true });
});

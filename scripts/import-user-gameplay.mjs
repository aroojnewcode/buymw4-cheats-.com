/**
 * @deprecated Use `node scripts/sync-cheat-media.mjs` — sources URLs from src/config/cheat-media.ts.
 *
 * Legacy entry point kept so old docs/commands still work.
 */
import { spawnSync } from 'node:child_process';

const result = spawnSync(process.execPath, ['scripts/sync-cheat-media.mjs'], {
  stdio: 'inherit',
  cwd: process.cwd(),
});
process.exit(result.status ?? 1);

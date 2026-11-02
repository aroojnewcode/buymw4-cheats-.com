# buymw4cheats.com

Modern Warfare cheats site for PC — aimbot, ESP, wallhack, radar, loot ESP and loadout changer.

## Cheat screenshots

All product hero sliders, tier galleries, and blog card images use the **11 Supabase webp URLs** defined in [`src/config/cheat-media.ts`](src/config/cheat-media.ts). Optional offline copies: `node scripts/sync-cheat-media.mjs` (writes `public/images/gameplay/*.webp`).

## Localhost

| URL | Command |
|-----|---------|
| http://127.0.0.1:4321/ | `npm run dev -- --host 127.0.0.1 --port 4321` |
| http://127.0.0.1:4322/ | `npm run build` then `npm run preview -- --host 127.0.0.1 --port 4322` |

Run from `D:\buymw4cheats-net` with `TEMP` / `npm_config_cache` on D: if C: is low on space.

## Cloudflare Workers deploy

Static output lives in `dist/` (gitignored). Workers Builds must produce it before upload.

- **Deploy command** (dashboard): `npx wrangler deploy` — `wrangler.toml` runs `npm ci && npm run build` first via `[build]`.
- **Alternative**: Build command `npm ci && npm run build`, deploy command `npx wrangler deploy` (no double build if you remove the `[build]` block).
- **Node**: `.node-version` is `22.12.0` (matches `package.json` engines).
- Local one-shot: `npm run deploy`.

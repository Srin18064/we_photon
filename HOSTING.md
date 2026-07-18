# WePhoton Hosting Plan — GitHub Pages + wephoton.in

The Next.js site in `wephoton-next/` deploys to GitHub Pages as a static
export, served at **https://wephoton.in** (GoDaddy domain).

## Architecture

```
push to main (wephoton-next/**)
        │
        ▼
GitHub Actions (.github/workflows/deploy-pages.yml)
  npm ci → next build (static export) → upload out/
        │
        ▼
GitHub Pages CDN ── HTTPS (auto-renewed cert) ── wephoton.in
```

- `wephoton-next/next.config.ts` sets `output: "export"` (pure static,
  no server), `images.unoptimized` (Pages has no image server), and
  `trailingSlash` (clean URLs like `/contact/`).
- Deploys are atomic: a new build replaces the old one only after it
  uploads completely.

## DNS (GoDaddy) — already correct, no action needed

Verified live as of 7 July 2026:

| Type  | Name | Value                                                             | Status |
| ----- | ---- | ----------------------------------------------------------------- | ------ |
| A     | @    | 185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153 | ✅ set |
| CNAME | www  | wephoton.in                                                        | ✅ set |

Custom domain is verified in the repo, HTTPS is enforced, and the
certificate auto-renews (current one expires 2026-08-07; GitHub renews it
automatically).

If DNS is ever rebuilt from scratch in GoDaddy: add the four A records on
`@`, point `www` at `srin18064.github.io` (CNAME), then re-enter
`wephoton.in` under **Repo → Settings → Pages → Custom domain**.

## Go-live steps

1. **Merge this branch (and the `nextjs-redesign` branch) into `main`.**
   The workflow triggers on any push to `main` touching `wephoton-next/`
   and deploys automatically. The first Actions deploy also switches the
   Pages source from "Deploy from a branch" to "GitHub Actions" — after
   that, the old static site at the repo root is no longer served.
2. **Or preview before merging:** Repo → Actions → "Deploy to GitHub
   Pages" → Run workflow → select a branch. This publishes that branch's
   site to wephoton.in immediately (it replaces the live site, so only
   do this when you're ready).
3. Confirm at https://wephoton.in — hard-refresh (Ctrl+Shift+R); DNS
   doesn't change, so there is no propagation wait.

## Routine updates

Edit files in `wephoton-next/`, push to `main` (directly or via PR).
Every push deploys automatically in ~2 minutes. Watch progress under the
**Actions** tab.

## Rollback

- **Preferred:** revert the bad commit on `main` (`git revert <sha>`) and
  push — the workflow redeploys the previous state.
- **Fast:** Actions tab → open the last good "Deploy to GitHub Pages"
  run → "Re-run all jobs".

## Platform limits to remember

- GitHub Pages is **static only**: no server code, so the contact form
  sends via the visitor's email app (mailto). To collect submissions
  server-side later, plug in a form service (Formspree, Web3Forms, or a
  small API elsewhere) — one change in
  `wephoton-next/components/contact-form.tsx`.
- Soft limits: 1 GB site, 100 GB bandwidth/month, 10 builds/hour —
  far above this site's needs.
- Old root-level site files stay in git history; they can be deleted
  from `main` once the redesign is live (deletion of those files is
  already staged locally).

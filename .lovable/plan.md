## Goal

Clone `azmisal-Corp/code-craft-portfolio` (TanStack Start) into this workspace and migrate it to a plain **React 19 + TypeScript + Vite 7 + Tailwind v4** SPA, deployable on Vercel.

## Source repo (verified)

- 4 routes: `index`, `about`, `projects`, `contact`
- Components: `SiteHeader`, `SiteFooter`, `ProjectCard`, `SectionHeading`, full shadcn `ui/`
- Hooks + `lib/utils.ts`
- Styles: `src/styles.css` (Tailwind v4 + design tokens)
- No server functions, no auth, no DB — pure static portfolio. Clean SPA migration.

## Target stack

- React 19, TypeScript, Vite 7
- Tailwind CSS v4 via `@tailwindcss/vite`
- `react-router-dom` v6 for client-side routing
- `@tanstack/react-query` kept (already used; harmless)
- shadcn/ui + Radix (unchanged)
- Deployment: Vercel static SPA

## Migration steps

1. **Strip TanStack Start**
   - Remove deps: `@tanstack/react-router`, `@tanstack/react-start`, `@tanstack/router-plugin`, `@cloudflare/vite-plugin`, `@lovable.dev/vite-tanstack-config`
   - Delete: `src/router.tsx`, `src/server.ts`, `src/start.ts`, `src/routeTree.gen.ts`, `wrangler.jsonc`
   - Delete `src/routes/` after porting content

2. **Add SPA shell**
   - `index.html` at project root with `<div id="root">` + `src/main.tsx` mount
   - `src/main.tsx`: `BrowserRouter` + `QueryClientProvider` + `<App />`
   - `src/App.tsx`: `<Routes>` for `/`, `/about`, `/projects`, `/contact`, plus 404
   - Shared layout component wrapping `SiteHeader` / `<Outlet />` / `SiteFooter`

3. **Port pages** from cloned `src/routes/*.tsx` to `src/pages/*.tsx`
   - Strip `createFileRoute` + `head()` wrappers
   - Replace per-route `head()` meta with `react-helmet-async` (added) so each page sets its own title/description/OG tags
   - Replace `<Link to="...">` from `@tanstack/react-router` with `react-router-dom`'s `Link`/`NavLink`

4. **Port shared assets verbatim**
   - `src/components/**` (incl. `ui/`), `src/hooks/**`, `src/lib/utils.ts`, `src/styles.css`
   - Keep design tokens / Tailwind v4 setup exactly as-is

5. **Vite config**
   - New `vite.config.ts` using `@vitejs/plugin-react` + `@tailwindcss/vite` + `vite-tsconfig-paths`
   - Drop TanStack/Cloudflare plugins

6. **Vercel readiness**
   - Add `vercel.json` with SPA rewrite: all routes → `/index.html`
   - Build command `vite build`, output `dist`
   - Update `package.json` scripts: `dev`, `build`, `preview`

7. **Verify**
   - Build runs clean
   - Manually click through `/`, `/about`, `/projects`, `/contact`, a bad URL (404)
   - Console + network clean in preview

## Things I will NOT do

- Won't push to your GitHub repo. (You mentioned a `dev` branch — Lovable's GitHub integration handles syncing; pushing from here isn't part of this task.)
- Won't redesign the portfolio — purely a stack migration, visuals preserved.
- Won't keep TanStack file-based routing or SSR.

## Caveats

- Lovable's tooling is tuned for TanStack Start. After this migration, future Lovable AI edits will work on a plain Vite SPA — most things still work, but TanStack-specific guidance in the system won't apply.
- Going from SSR to CSR means initial HTML is empty until JS loads — fine for a portfolio, worse for SEO than SSR. `react-helmet-async` mitigates per-page meta but crawlers see no pre-rendered content. If SEO matters, we'd want to revisit (e.g. `vite-plugin-ssg`).

# Mohd Mufeet – Freelance Developer Portfolio

Personal portfolio for Mohd Mufeet, a Freelance Full Stack Developer based in
Kanpur, Uttar Pradesh, India. This is an individual developer's website, not an
agency site. Public claims and project details follow the source documentation
in [`Docs/`](./Docs/README.md).

## Stack

- Next.js App Router, React, TypeScript (strict), and Tailwind CSS
- Zod for typed runtime validation
- Geist Sans and Geist Mono through `next/font`
- npm lockfile with pinned package versions

Pinned versions: Next.js 16.4.3, React/React DOM 19.3.0, TypeScript 5.9.3,
Tailwind CSS 4.3.3, ESLint 9.39.5, and Zod 4.6.7. The exact full dependency
tree is recorded in `package-lock.json`.

The contact pipeline will use Supabase and Resend after their accounts and
environment variables are configured. No credentials belong in the repository.

## Local development

Use Node.js 24 LTS and npm:

```bash
npm ci
cp .env.example .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Available checks:

```bash
npm run lint
npm run typecheck
npm run build
```

The environment template intentionally contains empty values. The public domain,
contact email, WhatsApp number, and integration credentials are not configured.
Features depending on those values remain hidden or inactive.

## Project layout

- `src/app/` — Next.js routes and root layout
- `src/components/` — reusable UI (added by implementation phases)
- `src/config/` — typed site content and confirmed links
- `src/lib/content.ts` — the public content access layer
- `src/types/` — Zod schemas and inferred content types
- `Docs/` — requirements, architecture, security, and implementation plan

GitHub Actions runs lint, type-check, and production build checks on pushes to
`main` and pull requests. Vercel, Supabase, and Resend setup still requires
owner-controlled accounts and configuration.

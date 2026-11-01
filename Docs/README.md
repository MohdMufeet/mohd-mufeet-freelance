# Mohd Mufeet – Freelance Developer Portfolio

Personal website for **Mohd Mufeet – Freelance Full Stack Developer (MERN Stack)**, based in Kanpur, Uttar Pradesh, India. It presents real projects, builds trust honestly, and turns visitors into freelance enquiries.

> **Status:** Phases 1–4 are implemented. The six documented development service groups were approved on 2026-11-01; service copy still needs review before launch. Further implementation proceeds phase by phase after owner approval (see `AGENTS.md`).

This is a personal brand site, **not** an agency site.

## Links

- Current portfolio: https://mufeetportfolio.netlify.app/
- GitHub: https://github.com/MohdMufeet
- LinkedIn: https://www.linkedin.com/in/mohd-mufeet/
- Client Blog Platform (project): https://blog-for-client-fhod.vercel.app/

## Planned stack

Next.js (App Router), React, TypeScript, Tailwind CSS, shadcn/ui, Lucide React, Framer Motion, React Hook Form, Zod, Supabase, Resend, Vercel, GitHub. Exact versions will be pinned in Phase 1 and recorded here.

## Documentation

| File | Contents |
|---|---|
| `AGENTS.md` | Rules and workflow for AI coding agents |
| `docs/01-PROJECT-OVERVIEW.md` | Scope, feature status, conventions, open questions |
| `docs/02-BRAND-AND-BUSINESS-STRATEGY.md` | Positioning, claims policy, conversion strategy |
| `docs/03-FUNCTIONAL-REQUIREMENTS.md` | Functional and non-functional requirements |
| `docs/04-DESIGN-SYSTEM.md` | Tokens, typography, components, motion |
| `docs/05-UI-UX-STRUCTURE.md` | Sitemap, layouts, navigation, hero, case study template |
| `docs/06-TECHNICAL-ARCHITECTURE.md` | Stack, folders, data flow, schema, env vars, ADRs |
| `docs/07-CONTENT-AND-COPY.md` | All public copy with approval status |
| `docs/08-SOCIAL-MEDIA-INTEGRATION.md` | Social/contact link config and rules |
| `docs/09-SERVICES-AND-SCALABILITY.md` | Service model, expansion process, future roadmap |
| `docs/10-CONTACT-AND-LEAD-GENERATION.md` | Form, validation, API contract, rate limits |
| `docs/11-SEO-AND-PERFORMANCE.md` | Metadata, structured data, performance budgets |
| `docs/12-SECURITY-AND-VALIDATION.md` | Security controls |
| `docs/13-TESTING-STRATEGY.md` | Tests and definition of done |
| `docs/14-IMPLEMENTATION-ROADMAP.md` | Ten phases with acceptance criteria |

Reading order for newcomers: `01` → `02` → `06` → `05` → `04` → `03` → `10` → `07` → rest.

## Getting started

From the project root, run `npm ci`, copy `.env.example` to `.env.local`, then
run `npm run dev`. The environment values are intentionally empty; external
integrations and contact channels remain inactive until configured.

Environment variables are listed in `06-TECHNICAL-ARCHITECTURE.md` §7. Never
commit secrets.

## Contributing / agent workflow

1. Read all docs.
2. Submit an implementation plan and wait for approval.
3. Work phase by phase; report honestly; keep docs updated.

## Open questions

The owner-input register is in `docs/01-PROJECT-OVERVIEW.md` §9. Blocking items include: public email, WhatsApp number, production domain, KAP Controls details, Client Blog Platform details, About content, Supabase/Resend setup, and privacy-notice wording.

## License

To be decided by the owner. No license is granted until one is added.

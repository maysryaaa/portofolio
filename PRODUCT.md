# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary: recruiters, companies, lecturers, academic staff, and peers evaluating May Surya Beni Juliasari for internships, freelance web work, collaboration, or general profile discovery. Secondary: anyone who wants to know her profile and work.

## Product Purpose

A single-page personal portfolio that introduces May, shows her education and projects, and gives visitors a direct way to contact her. Success means a visitor understands who she is, what she can build, and how to reach her within one scroll.

## Positioning

A student developer's portfolio where the interface craft is the proof: the site itself demonstrates the Astro, React, and Tailwind skills it lists, rather than only describing them.

## Operating Context

Visitors arrive from a shared link, a CV, or social profiles, usually on mobile. They scan for role, projects, education, and contact; the site is read in one pass and rarely revisited. Content is in Indonesian.

## Capabilities and Constraints

- Single page built with Astro, React, Tailwind CSS v4, and Phosphor Icons; shadcn/ui-style components are written by hand.
- Section order is fixed by the PRD: Navbar, Hero, About, Projects, Education, Contact, Footer (social links).
- Only `Navbar` and `Contact` hydrate on the client; the rest renders statically.
- All copy, projects, education, email, and social links live in `src/data/site.ts`. Profile, campus, email, and social links are real; project list and thumbnails are samples that the owner will replace.
- Email is `maysryaaa@gmail.com`; location is Lampung, Indonesia.
- No demo links exist yet for the first two projects; GitHub is the fallback destination.
- Node 22.23.4 minimum; dev server must run in the background.

## Brand Commitments

- The owner chose `#fc8eac` as the color anchor for this redesign.
- Voice: first person, calm, direct Indonesian; no hype, no inflated claims.
- Real name, campus, email, and social handles must be preserved.

## Evidence on Hand

- `PRD.MD` defines scope, features, and section order.
- `src/data/site.ts` holds the real profile, campus, email, Instagram, and GitHub.
- `public/images/profile.png` is the current profile photo.
- Project thumbnails in `public/images/projects/` are samples, not real screenshots.
- No testimonials, employer logos, metrics, or client names exist; future work must not invent them.

## Product Principles

1. Proof over claims: show interface craft in the site itself.
2. One scroll, no dead ends: every section moves the visitor toward contact.
3. Content stays editable in one data file; structure stays simple.
4. Mobile-first reading, fast static output, minimal JavaScript.
5. Personal and specific, never a generic template.

## Accessibility & Inclusion

No product-specific standard established. Keep semantic landmarks, visible focus, readable contrast, and reduced-motion support.

# AGENTS.md

## Baca dulu

- `PRD.MD` adalah sumber kebenaran ruang lingkup, urutan section, dan desain. Ikuti struktur §5: Navbar → Hero → About Me → Projects → Experience → Education → Contact → Footer (Social Links).
- Ini website **single page** (`src/pages/index.astro`). Section baru = komponen di `src/components/sections/`, bukan route baru.

## Stack & struktur

- Astro 7 + React 19 + Tailwind CSS v4 (via `@tailwindcss/vite`) + Phosphor Icons. Komponen shadcn/ui ditulis manual di `src/components/ui/` (`components.json` memakai `iconLibrary: phosphor`).
- Semua teks, proyek, pendidikan, email, dan sosial media ada di **`src/data/site.ts`**. Profil, kampus, email, dan sosial media sudah data asli. Proyek yang tampil hanya website ini, dengan thumbnail berupa ilustrasi.
- Foto profil: `public/images/profile.png`; thumbnail proyek: `public/images/projects/`.
- Token warna, font, dan animasi global ada di `src/styles/global.css`.
- Hydration minimal: hanya `Navbar` dan `Contact` yang punya directive `client:*`. Section lain dirender statis; jangan tambahkan `client:load` tanpa kebutuhan interaktif.
- Efek reveal memakai `[data-reveal]` + IntersectionObserver di `Layout.astro`. Hanya sembunyikan konten jika `html.js` aktif agar tetap terbaca tanpa JS. Jangan taruh `data-reveal` di dalam island React yang di-hydrate (mis. `Contact`); bungkus island dari Astro, karena penambahan class sebelum hydrate memicu hydration mismatch.

## Perintah

- Dev server: `npm run astro -- dev --background` (jangan foreground). Kelola dengan `npm run astro -- dev status|stop|logs`.
- Typecheck: `npm run astro -- check` (sudah terpasang: `@astrojs/check` + `typescript`).
- Verifikasi akhir: `npm run astro -- check && npm run build`.
- Node minimal `22.23.4` (lihat `engines`).

## Konvensi

- Nama file/komponen baru: **kebab-case**, mis. `hero-section.astro`, `social-links.tsx`.
- Import ikon Phosphor **per file** dari `@phosphor-icons/react/dist/csr/<Nama>` dengan suffix `Icon`, mis. `import { ArrowRightIcon } from "@phosphor-icons/react/dist/csr/ArrowRight"`. Impor barrel (`@phosphor-icons/react`) membuat build lambat dan nama tanpa suffix deprecated.
- Tulis sesingkat dan sesederhana mungkin: KISS, DRY, SOLID. Jangan tambah dependency tanpa kebutuhan nyata.
- Styling pakai utility Tailwind; hindari CSS global tambahan di `Layout.astro`.
- Gunakan `cn()` dari `src/lib/utils.ts` untuk menggabungkan class pada komponen UI.

## Git commit

- Format: `<prefix>: <2-6 kata>` — subjek saja, **tanpa body/footer**.
- Prefix: `feat`, `fix`, `docs`, `style`, `refactor`, `chore`.
- Contoh: `feat: tambah hero section`, `fix: perbaiki layout mobile`.

## Dokumentasi

- https://docs.astro.build
- [Framework components](https://docs.astro.build/en/guides/framework-components/) (React di Astro)
- [Styling & Tailwind](https://docs.astro.build/en/guides/styling/)

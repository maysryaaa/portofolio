# Personal Portfolio — May Surya Beni Juliasari

Website portfolio satu halaman untuk menampilkan profil, proyek, pendidikan, dan kontak. Dibangun dengan Astro, React, Tailwind CSS, komponen shadcn/ui, dan Phosphor Icons. Spesifikasi lengkap ada di [`PRD.MD`](./PRD.MD).

## Menjalankan

```sh
npm install
npm run dev        # http://localhost:4321
```

Perintah lain:

| Perintah | Fungsi |
| --- | --- |
| `npm run astro -- dev --background` | Dev server di background (`status`, `stop`, `logs`) |
| `npm run astro -- check` | Typecheck Astro + TypeScript |
| `npm run build` | Build produksi ke `dist/` |
| `npm run preview` | Preview hasil build |

## Mengubah konten

- **Data utama** (nama, bio, email, sosial media, skill, proyek, pendidikan): `src/data/site.ts`.
- **Foto profil**: ganti `public/images/profile.png` (sesuaikan path di `src/components/sections/hero.tsx` bila memakai nama atau format lain).
- **Thumbnail proyek**: `public/images/projects/`.
- **Warna, font, animasi**: `src/styles/global.css`.

> Profil, kampus, email, dan sosial media sudah terisi. Daftar proyek dan thumbnail masih contoh — ganti dengan proyek asli. LinkedIn dapat ditambahkan di `src/data/site.ts` jika sudah tersedia.

## Struktur

```text
src/
├── components/
│   ├── sections/     # navbar, hero, about, projects, education, contact, footer
│   ├── ui/           # button, card, badge (gaya shadcn/ui)
│   ├── copy-email.tsx
│   ├── section-heading.tsx
│   └── social-links.tsx
├── data/site.ts      # seluruh konten website
├── layouts/Layout.astro
├── lib/utils.ts
├── pages/index.astro
└── styles/global.css
```

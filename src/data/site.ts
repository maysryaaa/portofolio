// Semua konten teks dan tautan website ada di sini.
// Profil, kampus, email, dan sosial media sudah terisi.
// GANTI daftar proyek dan thumbnail contoh dengan karya asli.

export const site = {
  name: "May Surya Beni Juliasari",
  firstName: "May Surya",
  lastName: "Beni Juliasari",
  role: "Mahasiswa Teknik Informatika",
  focus: "Front-end & UI",
  location: "Lampung, Indonesia",
  email: "maysryaaa@gmail.com",
  description:
    "Saya mengerjakan bagian tampilan web dan sedang belajar Astro, React, serta Tailwind CSS.",
  about: [
    "Saya May Surya Beni Juliasari, mahasiswa Teknik Informatika di Institut Teknologi Sumatera. Saya paling suka mengerjakan bagian tampilan website, dari menyusun layout sampai merapikan detail di layar kecil.",
    "Saat ini saya belajar Astro, React, dan Tailwind CSS lewat proyek kuliah dan proyek pribadi. Saya terbuka untuk kolaborasi, magang, atau pekerjaan freelance di bidang web.",
  ],
  interests: [
    {
      title: "Web Development",
      description: "Membuat website yang cepat dibuka dan kodenya mudah dirawat.",
    },
    {
      title: "UI/UX Design",
      description: "Menyusun tampilan yang enak dibaca dan mudah dipakai.",
    },
    {
      title: "Open Source",
      description: "Belajar dari kode proyek terbuka.",
    },
  ],
  skills: [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Astro",
    "Tailwind CSS",
    "Git",
    "Figma",
    "MySQL",
  ],
  socials: [
    { label: "GitHub", href: "https://github.com/maysryaaa", icon: "github" },
    { label: "Instagram", href: "https://instagram.com/maysryaaa_", icon: "instagram" },
  ],
} as const;

export const stats = [
  { value: "3", label: "Proyek contoh" },
  { value: "2025", label: "Mulai kuliah" },
  { value: "10", label: "Skill dipakai" },
];

export const projects = [
  {
    title: "Sistem Informasi Perpustakaan",
    description:
      "Aplikasi untuk mengelola data buku, anggota, dan peminjaman, dengan halaman admin sederhana.",
    image: "/images/projects/library.svg",
    tags: ["Laravel", "MySQL", "Tailwind"],
    demo: null,
    source: "https://github.com/maysryaaa",
    featured: true,
  },
  {
    title: "Dashboard Manajemen Tugas",
    description:
      "Dasbor untuk memantau tugas kuliah, tenggat waktu, dan progres belajar.",
    image: "/images/projects/dashboard.svg",
    tags: ["React", "TypeScript", "Chart.js"],
    demo: null,
    source: "https://github.com/maysryaaa",
    featured: false,
  },
  {
    title: "Website Portfolio Pribadi",
    description:
      "Website satu halaman untuk profil, proyek, dan kontak. Dibangun dengan Astro, React, dan Tailwind CSS.",
    image: "/images/projects/portfolio.svg",
    tags: ["Astro", "React", "Tailwind"],
    demo: "#home",
    source: "https://github.com/maysryaaa",
    featured: false,
  },
] as const;

export const education = [
  {
    period: "2025 - Sekarang",
    institution: "Institut Teknologi Sumatera",
    degree: "S1 Teknik Informatika",
    description:
      "Belajar dasar ilmu komputer, pemrograman, basis data, dan pengembangan aplikasi web.",
    current: true,
  },
  {
    period: "2022 - 2025",
    institution: "Madrasah Aliyah Negeri 1 Lampung Timur",
    degree: "Pendidikan Menengah",
    current: false,
  },
] as const;

export const navItems = [
  { label: "Tentang", href: "#about" },
  { label: "Proyek", href: "#projects" },
  { label: "Pendidikan", href: "#education" },
  { label: "Kontak", href: "#contact" },
] as const;

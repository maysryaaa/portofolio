// All website text and links live here.
// Profile, campus, email, and social media are filled in.
// REPLACE the sample projects and thumbnails with real work.

export const site = {
  name: "May Surya Beni Juliasari",
  firstName: "May Surya",
  lastName: "Beni Juliasari",
  role: "Information Technology Student",
  focus: "Front-end & UI",
  location: "Lampung, Indonesia",
  email: "maysryaaa@gmail.com",
  description:
    "I build the visual side of websites, and I'm learning Astro, React, and Tailwind CSS.",
  seoDescription:
    "Portfolio of May Surya Beni Juliasari, an Information Technology student at ITERA. Web projects, education, and contact details.",
  about: [
    "I'm May Surya Beni Juliasari, an Information Technology student at Institut Teknologi Sumatera. What I like most is the visual side of a website, from laying out the page to tidying up details on small screens.",
    "I'm learning Astro, React, and Tailwind CSS through coursework and personal projects. I'm open to collaboration, internships, or freelance web work.",
  ],
  interests: [
    {
      title: "Web Development",
      description: "Building websites that load fast and stay easy to maintain.",
    },
    {
      title: "UI/UX Design",
      description: "Designing screens that are easy to read and easy to use.",
    },
    {
      title: "Open Source",
      description: "Learning from the code of open projects.",
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

export const footerSocials = [
  ...site.socials,
  { label: "LinkedIn", href: "https://www.linkedin.com/in/maysryaaa", icon: "linkedin" },
] as const;

export const stats = [
  { value: "1", label: "Live project" },
  { value: "2025", label: "Started university" },
  { value: "10", label: "Skills in use" },
];

export const projects = [
  {
    title: "Personal Portfolio Website",
    description:
      "A one-page site for my profile, experience, and contact details. Built with Astro, React, and Tailwind CSS.",
    image: "/images/projects/portfolio-live.webp",
    tags: ["Astro", "React", "Tailwind"],
    demo: "https://maysryaaa.my.id",
    source: "https://github.com/maysryaaa",
    featured: true,
  },
] as const;

export const experiences = [
  {
    title: "Malam Keakraban Teknik Informatika 2025",
    role: "Operations Staff",
    period: "Nov 2025",
    image: "/images/experiences/malam%20keakraban.jpeg",
    alt: "Group photo of Informatics students at Malam Keakraban 2025 in front of a MAKRAB banner.",
    description:
      "A gathering that brings Informatics students closer together through interactive activities.",
    contribution:
      "I was one of the operations staff, preparing the equipment and supplies the event needed to run smoothly.",
  },
  {
    title: "Clash Of Generation",
    role: "Event Staff",
    period: "May 2026",
    image: "/images/experiences/Clash%20of%20generation.jpeg",
    alt: "Group photo of Clash Of Generation participants on a lit mini soccer field under a Spirit of Spartans banner.",
    description:
      "A mini soccer tournament for every active batch of ITERA Informatics students, held as a friendly meetup and a break from coursework.",
    contribution:
      "I handled participant registration, from recording entries to checking that everyone who showed up had complete details.",
  },
  {
    title: "First Meet Mahasiswa Baru Teknik Informatika 2026",
    role: "Event Staff",
    period: "Aug 2026",
    image: "/images/experiences/first%20meet%20maba%20informatika%202026.jpeg",
    alt: "Group photo of new Informatics students at First Meet 2026 in front of a campus building.",
    description:
      "An orientation for new ITERA Informatics students. It introduces the campus and its organizations, and gives the new students a chance to get to know each other.",
    contribution:
      "I helped draft the rundown, kept the event on schedule, and made sure the activities stayed calm and enjoyable.",
  },
] as const;

export const education = [
  {
    period: "2025 - Present",
    institution: "Institut Teknologi Sumatera",
    degree: "Bachelor's in Informatics Engineering",
    description:
      "Studying the basics of computer science, programming, databases, and web application development.",
    current: true,
  },
  {
    period: "2022 - 2025",
    institution: "Madrasah Aliyah Negeri 1 Lampung Timur",
    degree: "Secondary Education",
    current: false,
  },
] as const;

export const navItems = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
] as const;

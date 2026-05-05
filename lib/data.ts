export const personalInfo = {
  name: "Tai Arfat",
  title: "Senior Lead Full-Stack Developer",
  location: "Vadodara, India",
  email: "tai.arafat.at@gmail.com",
  linkedin: "https://www.linkedin.com/in/arafat213",
  contact: "+919825523969",
  whatsapp: "https://wa.me/919825523969",
  tagline: "Expertise in building and leading teams, delivering scalable products, and optimizing web performance for high-traffic applications.",
  about: "I’m a Senior Lead Full-Stack Developer with 6+ years of experience turning ideas into scalable digital experiences. I’ve built and optimized high-traffic web platforms, mentored teams, and contributed to products used by thousands of users every day. My focus lies in crafting robust architectures, intuitive interfaces, and performant APIs — always with a balance of technical excellence and user empathy. I love collaborating across disciplines to create solutions that are both elegant and efficient.",
};

export const skills = {
  frontend: [
    { name: "React.js", icon: "react" },
    { name: "Next.js", icon: "nextjs" },
    { name: "React Native", icon: "reactnative" },
    { name: "Vue.js", icon: "vue" },
    { name: "Tailwind", icon: "tailwind" },
    { name: "Flutter", icon: "flutter" },
  ],
  backend: [
    { name: "Node.js", icon: "nodejs" },
    { name: "Express", icon: "express" },
    { name: ".NET Core", icon: "dotnet" },
    { name: "PostgreSQL", icon: "postgresql" },
    { name: "MongoDB", icon: "mongodb" },
    { name: "Microservices", icon: "microservices" },
  ],
  tools: [
    { name: "Azure DevOps", icon: "azure" },
    { name: "GCP", icon: "gcp" },
    { name: "Claude", icon: "claude" },
    { name: "GitHub Copilot", icon: "github" },
    { name: "Sanity.io", icon: "sanity" },
    { name: "Cursor", icon: "cursor" },
  ],
};

export const experience = [
  {
    company: "Bacancy",
    duration: "2021 - Present",
    title: "Senior Full-Stack Developer",
    bullets: [
      "Led a team of developers in building scalable web applications",
      "Architected and implemented high-performance frontend solutions using React and Next.js",
      "Optimized application performance resulting in 40% improvement in load times",
    ],
  },
  {
    company: "Wipro",
    duration: "2019 - 2021",
    title: "Project Engineer",
    bullets: [
      "Developed full-stack applications using Node.js and React",
      "Collaborated with cross-functional teams to deliver product features",
      "Implemented AI driven features for the product",
    ],
  },
];

export const education = {
  degree: "B.Tech in Computer Engineering",
  institution: "S.V.I.T., Vasad",
  year: "2019",
  cgpa: "8.32",
};

export const awards = [
  {
    title: "Team of the Year",
    year: "2023, 2025",
    icon: "trophy",
  },
  {
    title: "Team of the Quarter",
    year: "2024, 2025, 2026",
    icon: "star",
  },
  {
    title: "Spot Award",
    year: "×4",
    icon: "zap",
  },
];

export const heroStats = [
  { value: 7, suffix: "+", label: "Years of Experience" },
  { value: 20, suffix: "+", label: "Production Applications" },
  { value: 15, suffix: "+", label: "Happy Clients" },
  { value: 50, suffix: "+", label: "Technologies Mastered" }
];

export interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  sourceUrl?: string;
  demoUrl?: string;
}

export const projects: Project[] = [
  {
    title: "Samyama Yoga Retreats",
    description:
      "A modern SEO optimized website for a premium wellness and yoga retreat business based in Leh, Ladakh, catering to an international audience ",
    image: "/projects/samyama.png",
    technologies: ["Next.js", "Sanity.io", "Tailwind"],
    demoUrl: "https://www.samyamayogawellness.com/",
  },
  {
    title: "Livestock Auction Ecosystem",
    description: "A comprehensive admin suite for high-stakes livestock auctions, delivering a seamless management experience for one of North America’s largest shows.",
    image: "/projects/auctions.png",
    technologies: ["React", ".NET Core", "PostgreSQL", "Redux"],
    demoUrl: "",
  },
  {
    title: "Exhibition Management tool",
    description: "A dual-platform system for a world-class exhibition, including back-office management tools and public registration portals for the 2026 show",
    image: "/projects/horseshow.png",
    technologies: ["React", ".NET Core", "PostgreSQL", "Redux"],
    demoUrl: "",
  },
  {
    title: "Youth Event Operations Suite",
    description: "Integrated system to manage high-volume event participant entries, heat assignments, winner tracking, and certification workflows for a major exhibition",
    image: "/projects/calfscramble.png",
    technologies: ["React", ".NET Core", "PostgreSQL", "Redux"],
    demoUrl: "",
  },
  {
    title: "Luxury Skincare E-commerce Platform",
    description: "A premium D2C skincare brand with an advanced e-commerce platform featuring subscription services, AI-driven product recommendations, and automated order fulfillment workflows",
    image: "/projects/skincare.png",
    technologies: ["React", "Node.js", "Stripe", "PostgreSQL"],
    demoUrl: "",
  }
];


export const profile = {
  name: "Allan Tijou",
  role: "Software Developer",
  location: "Metz, France",
  intro:
    "Software developer focused on Java, Spring Boot, Laravel and modern web applications.",
  portrait: "src/assets/images/pfp.png",
  quickInfo: [
    { label: "Experience", value: "2+ years" },
    { label: "Main stack", value: "Java · Spring · Laravel" },
    { label: "Availability", value: "Open to opportunities" },
  ],
  tags: [
    "Java",
    "Spring Boot",
    "Laravel",
    "PHP",
    "JavaScript",
    "MySQL",
    "Docker",
    "Git",
  ],
  links: {
    cv: "#",
    email: "mailto:tijouallan2001@gmail.com",
    linkedin: "https://linkedin.com/in/allantijou",
    github: "https://github.com/allantijou",
  },
};

export const projects = [
  {
    id: "project-1",
    title: "E-Commerce API Platform",
    description:
      "RESTful backend for product catalog, orders, and payments with role-based access control and comprehensive API documentation.",
    image: null,
    technologies: ["Java", "Spring Boot", "MySQL", "Docker"],
    github: "https://github.com",
    demo: "https://example.com",
  },
  {
    id: "project-2",
    title: "Task Management Dashboard",
    description:
      "Full-stack web application for team task tracking with real-time updates, filters, and an intuitive admin interface.",
    image: null,
    technologies: ["Laravel", "PHP", "JavaScript", "MySQL"],
    github: "https://github.com",
    demo: "https://example.com",
  },
  {
    id: "project-3",
    title: "Developer Portfolio",
    description:
      "Modern responsive portfolio built with React and Tailwind CSS, featuring modular cards and smooth section navigation.",
    image: null,
    technologies: ["React", "Tailwind CSS", "Vite"],
    github: "https://github.com",
    demo: null,
  },
];

export const experience = [
  {
    id: "exp-1",
    company: "Company Name",
    position: "Software Developer",
    duration: "2023 — Present",
    description:
      "Develop and maintain backend services using Java and Spring Boot. Collaborate on API design, code reviews, and deployment pipelines.",
  },
  {
    id: "exp-2",
    company: "Previous Company",
    position: "Junior Developer",
    duration: "2021 — 2023",
    description:
      "Built and maintained Laravel applications. Implemented features, fixed bugs, and contributed to database schema improvements.",
  },
  {
    id: "exp-3",
    company: "Internship / Training",
    position: "Developer Intern",
    duration: "2020 — 2021",
    description:
      "Assisted with web development projects, learned agile workflows, and gained hands-on experience with PHP and JavaScript.",
  },
];

export const skills = {
  Backend: ["Java", "Spring Boot", "Laravel", "PHP", "REST APIs"],
  Frontend: ["JavaScript", "React", "HTML", "CSS", "Tailwind CSS"],
  Database: ["MySQL", "PostgreSQL", "SQL", "Database design"],
  DevOps: ["Docker", "Git", "CI/CD basics", "Linux"],
};

export const about = {
  story:
    "I'm a software developer based in Metz, France, with a passion for building reliable backend systems and clean web applications. I enjoy turning complex requirements into maintainable code.",
  motivation:
    "I'm motivated by solving real problems, learning new technologies, and delivering software that makes a difference for users and teams.",
  enjoy:
    "I enjoy building APIs, refining architecture, and collaborating on products from concept to production.",
};

export const contact = {
  email: "allan.tijou@example.com",
  linkedin: "https://linkedin.com/in/allantijou",
  github: "https://github.com/allantijou",
  portfolio: "https://allantijou.github.io",
};

export const navItems = [
  { id: "home", label: "Home" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

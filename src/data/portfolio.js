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
    linkedin: "www.linkedin.com/in/allan-tijou",
    github: "https://github.com/Tijouallan",
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
    id: "qualios",
    role: "Ingénieur QA Test / Automatisation",
    company: "Qualios",
    period: "Février 2026 — Avril 2026",
    location: "Nancy",
    context:
      "Remplacement des campagnes de tests manuels par des tests automatisés afin d'améliorer la couverture fonctionnelle, sécuriser les déploiements clients et fiabiliser les livraisons.",
    problem:
      "Les tests manuels limitaient la couverture, ralentissaient les cycles de livraison et exposaient les déploiements clients à des risques de régression.",
    solution:
      "Mise en place d'une stratégie d'automatisation et de qualification continue : choix d'outils, tests de charge, revues de code et réflexion sur une nouvelle pipeline CI/CD.",
    highlights: [
      "Étude comparative et intégration d'outils d'automatisation (Selenium, Playwright, Maven Surefire).",
      "Configuration d'outils de tests de charge et de performance (JMeter, SoapUI).",
      "Analyse fonctionnelle pour l'estimation des campagnes de tests.",
      "Développement de tests unitaires, d'intégration et UX.",
      "Rédaction de rapports de conformité et qualification des versions logicielles.",
      "Recherche et étude autour d'une nouvelle pipeline CI/CD.",
    ],
    technologies: [
      "Jakarta EE",
      "JUnit",
      "Selenium",
      "Playwright",
      "Maven",
      "Tomcat 11",
    ],
  },
  {
    id: "all-in-box",
    role: "Développeur PHP/Laravel",
    company: "All In Box",
    period: "Juin 2025 — Octobre 2025",
    location: "Woippy",
    context:
      "Développement modulaire sur une application monolithique Laravel destinée aux commerçants.",
    problem:
      "La plateforme devait évoluer avec de nouveaux services métier (affichage et prise de rendez-vous) sans fragiliser le monolithe existant.",
    solution:
      "Conception et livraison de modules Laravel autonomes, intégrés au cœur de l'application commerçants.",
    highlights: [
      "Module de gestion et de suivi de bornes d'affichage.",
      "Agenda en ligne : prise de rendez-vous, gestion des prestations et réservation en ligne (fonctionnement proche de Planity).",
    ],
    technologies: ["Laravel", "PHP", "Jira"],
  },
  {
    id: "commissure",
    role: "Co-développeur",
    company: "Projet Commissure (SaaS Assurance)",
    period: "Avril 2025 — Septembre 2025",
    location: null,
    context:
      "Développement d'une solution SaaS de calcul et d'estimation des commissions pour courtiers en assurance.",
    problem:
      "Les courtiers géraient des commissions complexes (imports, contrats, précomptes) avec des processus manuels peu fiables et peu visibles.",
    solution:
      "Co-construction d'un SaaS centralisant le calcul, le suivi et la valorisation des commissions avec détection d'anomalies.",
    highlights: [
      "Automatisation du calcul des commissions et import de fichiers.",
      "Création automatique de contrats et clients, gestion du cycle de vie.",
      "Gestion des commissions, précomptes et encours.",
      "Calcul prévisionnel des commissions futures et valorisation du portefeuille.",
      "Détection d'anomalies et export des données.",
    ],
    technologies: [
      "Java 23",
      "Spring Boot 3",
      "Hibernate/JPA",
      "MySQL",
      "Liquibase",
      "Lombok",
      "JUnit 5",
      "Angular",
    ],
  },
  {
    id: "reseda",
    role: "Développeur PHP/Laravel",
    company: "Réséda",
    period: "Septembre 2024 — Avril 2025",
    location: "Metz",
    context:
      "Conception d'un outil complet de supervision des alarmes de compteurs électriques communicants pour remplacer une solution devenue obsolète.",
    problem:
      "L'outil legacy ne permettait plus de superviser efficacement les alarmes sur un parc de compteurs en croissance.",
    solution:
      "Application Laravel de bout en bout : analyse des besoins, conception fonctionnelle, migration des données et cadrage d'une API d'acquisition sécurisée.",
    highlights: [
      "Recueil et analyse des besoins utilisateurs, conception fonctionnelle.",
      "Développement Laravel et conception du schéma SQL.",
      "Migration d'un système JSON vers SQL et scripts d'alimentation des données.",
      "Rédaction du cahier des charges d'une API sécurisée d'acquisition de données.",
    ],
    technologies: ["SQL", "PHP", "Laravel", "PowerShell"],
  },
  {
    id: "arcelor",
    role: "Data Analyst",
    company: "ArcelorMittal",
    period: "Février 2024 — Juillet 2024",
    location: "Esch-sur-Alzette (Luxembourg)",
    context:
      "Adaptation de l'ERP PSI Metal pour l'intégration d'un nouveau four électrique sur le site sidérurgique de Belval.",
    problem:
      "Le site devait intégrer un nouveau fournisseur électrique dans l'ERP existant tout en maintenant le pilotage via des KPI fiables.",
    solution:
      "Cadrage fonctionnel avec les métiers et industrialisation des indicateurs via SQL et Power BI.",
    highlights: [
      "Rédaction du cahier des charges fonctionnel avec les ingénieurs métiers.",
      "Développement de requêtes SQL exploitées dans Power BI pour les KPI annuels.",
    ],
    technologies: ["Java", "PL/SQL", "ERP PSI Metal", "Power BI"],
  },
  {
    id: "garbocom",
    role: "Développeur Web / Solutions E-commerce",
    company: "Garbocom",
    period: "Juin 2024 — Août 2024",
    location: "Metz",
    context:
      "Développement d'un catalogue de démonstration de sites e-commerce destiné à présenter plusieurs modèles aux clients.",
    problem:
      "Les commerciaux avaient besoin de démos variées et reproductibles pour convaincre des prospects hôteliers et e-commerce.",
    solution:
      "Templates WordPress, documentation de déploiement et migrations ciblées pour accélérer les mises en production.",
    highlights: [
      "Création de templates WordPress et documentation de création de sites de démonstration.",
      "Migration de sites hôteliers WordPress de WooCommerce vers MotoPress (MPHB).",
      "Préparation des mises en production.",
    ],
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "WordPress"],
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
  email: "tijouallan2001@gmail.com",
  linkedin: "www.linkedin.com/in/allan-tijou",
  github: "www.github.com/Tijouallan",
  portfolio: "https://tijouallan.github.io/allantijou.github.io/",
};

export const navItems = [
  { id: "home", label: "Home" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Expérience" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

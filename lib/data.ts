export const data = {
  name: "Leandro Matías Rivas",
  title: "Software Engineer",
  tagline: "",
//  tagline: "I build clean, scalable systems and obsess over developer experience.",
  location: "Buenos Aires, Argentina",
  email: "rivasleandromatias@gmail.com",
  github: "github.com/mtsrvs",
  linkedin: "linkedin.com/in/leandro-matias-rivas",
  // Set to a path or URL to use a real photo, e.g. "/photo.jpg"
  // Leave as null to show the initials avatar
//  photo: null as string | null,
    photo: "/matias-foto-2.jpeg",

//  about: `Full-stack engineer with 5+ years shipping production software. I care about correctness, maintainability, and the humans who will read my code six months from now. Currently focused on distributed systems and backend infrastructure, but comfortable anywhere in the stack.`,
  about: `Aplicar los conocimientos adquiridos durante mis estudios como también poner en práctica la experiencia obtenida en trabajos previos en mi rol de desarrollador. Dispuesto a trabajar en equipo e interactúas con otros de distintas áreas dentro de la empresa. Predispuesto a aprender nuevas herramientas y lenguajes.`,

  skills: {
    Languages:     ["TypeScript", "Python", "Go", "Rust", "SQL"],
//    Frontend:      ["React", "Next.js", "Tailwind CSS", "Vite"],
    Backend:       ["Docker", "PostgreSQL", "Postman"],
//    "Infra / Cloud": ["AWS", "Docker", "Kubernetes", "Terraform", "GitHub Actions"],
    Practices:     ["TDD", "Domain-Driven Design", "REST", "gRPC", "OpenAPI"],
    Idiomas:     ["Español", "Inglés"],

  } as Record<string, string[]>,

  experience: [
    {
      company:  "Red Link",
      role:     "Java Full stack Developer (Ssr)",
      period:   "2019 - presente",
      location: "Remoto | Presencial",
      bullets: [
        "Se creó un equipo para llevar a cabo el desarrollo de una app mobile y sitio web para cobro en comercios. Participé en este equipo desde su creación siendo el primer desarrollador. Estuve presente en reuniones con analistas funcionales, arquitectos, QA y DBA. Desarrollé el servicio REST y sitio en Angular como también tuve la tarea de crear la BBDD en Oracle. Se utilizó la metodología Scrum para trabajar.",
      ],
    },
    {
      company:  "Red Link",
      role:     "Java Full stack Developer (Jr)",
      period:   "2017 — 2019",
      location: "Presencial",
      bullets: [
        "Desarrollo y mantenimiento de la aplicación web Banca Electrónica de Empresas y su respectivo Back Office. Armado de scripts para diferentes ambientes (test, producción). Interacción con otros equipos de trabajo en caso de que la tarea a realizar lo requiera.",
      ],
    },
    {
      company:  "Thomson Reuters",
      role:     "Java Developer (Intern)",
      period:   "2015 — 2016",
      location: "Presencial",
      bullets: [
        "Mantenimiento de aplicación web para compra de libros y revistas digitales legales/jurídicas. Además, participé en otro proyecto en conjunto con un equipo que se encontraba en México el cual requería la conversión de documentos en formato Word a formato XML. Se trabajó sobre documentos legales mexicanos.",
      ],
    },
  ],

  projects: [
    {
      name: "opengit",
      desc: "CLI tool that summarizes pull request diffs using a local LLM. 1.2k GitHub stars.",
      tags: ["Go", "LLM", "CLI"],
      url:  "https://github.com/alexrivera/opengit",
    },
    {
      name: "pgwatch-lite",
      desc: "Lightweight Postgres query performance dashboard with real-time stats.",
      tags: ["Python", "PostgreSQL", "FastAPI", "React"],
      url:  "https://github.com/alexrivera/pgwatch-lite",
    },
    {
      name: "turbocache",
      desc: "Redis-backed distributed cache library for Node.js with automatic invalidation.",
      tags: ["TypeScript", "Redis", "Node.js"],
      url:  "https://github.com/alexrivera/turbocache",
    },
  ],

  education: [
    {
      school: "Instituto Tecnológico de Buenos Aires (ITBA)",
      degree: "Software Engineering",
      period: "2018 — 2021",
    },
    {
      school: "Ekoparty Hackademy",
      degree: "Pentesting and Red Teaming",
      period: "2026",
    },
    {
      school: "Ekoparty Hackademy",
      degree: "Cloud Security & DevSecOps Engeneering",
      period: "2025",
    },
    {
      school: "Ekoparty Hackademy",
      degree: "Fundaments of hacking & Defense",
      period: "2024",
    },
    {
      school: "Centro Tecnológico de Entrenamiento y Capacitación (CTEC)",
      degree: "Diseño web",
      period: "2007",
    },
    {
      school: "Centro Cultural Rector Ricardo Rojas",
      degree: "rmado y reparación de PC",
      period: "2006",
    },
  ],
};

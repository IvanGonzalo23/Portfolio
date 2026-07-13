// ============================================================
// Para actualizar texto, links o proyectos
// ============================================================

export const profile = {
  name: "Iván Mendoza",
  role: "Desarrollador de Software",
  location: "San Ramón de la Nueva Orán, Salta, Argentina",
  status: "Freelance / disponible",
  tagline: "Debuggeo de día, refactorizo de madrugada, y sigo sin perdonarle nada al código spaghetti.",
  email: "alzabetivan@gmail.com",
  github: "https://github.com/IvanGonzalo23",
  githubUsername: "IvanGonzalo23",
  linkedin: "https://www.linkedin.com/in/ivan-mendoza-3944a31b4",
  cvUrl: "/curriculum-vitae.pdf",
  about: [
    "Soy técnico en Desarrollo de Software egresado de la Universidad Provincial de Administración, Tecnología y Oficios (UPATecO), de Salta, Argentina. Me apasiona la programación y la tecnología, con foco en desarrollo web y gestión de bases de datos.",
  "Actualmente trabajo como desarrollador freelance y estoy buscando nuevas oportunidades para seguir creciendo, combinando backend en Python/Django con interfaces en React.",
  "Además, formo parte del equipo de Orán Soluciones, un emprendimiento local de desarrollo de software, donde sumo experiencia trabajando en equipo en proyectos reales.",
  ],
};

export const stack = [
  {
    group: "frontend",
    items: ["React", "JavaScript", "TypeScript", "HTML5", "CSS3", "Bootstrap"],
  },
  {
    group: "backend",
    items: ["Python", "Django", "Django REST Framework", "Flask", "Node.js", "Java"],
  },
  {
    group: "database",
    items: ["MySQL"],
  },
  {
    group: "herramientas",
    items: ["Git", "GitHub", "VS Code", "Postman"],
  },
  {
    group: "practicas",
    items: ["Scrum", "SOLID", "Algorítmica"],
  },
];

// status posibles: "wip" (en desarrollo) | "done" (listo)
export const projects = [
  {
    filename: "gestor-gastos",
    ext: ".py",
    status: "wip",
    description:
      "API de gestión de gastos personales con autenticación JWT y frontend en React para registrar, filtrar y visualizar movimientos.",
    tags: ["Django REST Framework", "React", "MySQL"],
    demoUrl: "",
    codeUrl: "",
  },
  {
    filename: "sistema-turnos",
    ext: ".py",
    status: "wip",
    description:
      "Sistema de reserva de turnos con roles de administrador y usuario, pensado para negocios de servicios.",
    tags: ["Django", "PostgreSQL", "Auth & roles"],
    demoUrl: "",
    codeUrl: "",
  },
  {
    filename: "buscador-peliculas",
    ext: ".js",
    status: "wip",
    description:
      "Buscador de películas consumiendo la API pública de OMDb, con manejo de estados de carga y errores.",
    tags: ["React", "API externa", "Fetch/Axios"],
    demoUrl: "",
    codeUrl: "",
  },
  {
    filename: "sudoku-solver",
    ext: ".js",
    status: "wip",
    description:
      "Visualizador y resolvedor de sudoku con algoritmo de backtracking, animando el proceso de resolución.",
    tags: ["JavaScript", "Algorítmica"],
    demoUrl: "",
    codeUrl: "",
  },
];

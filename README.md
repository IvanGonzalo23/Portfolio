# Portafolio — Iván Mendoza

Portafolio personal construido con **React + JavaScript + Vite**.

## Cómo correrlo en tu compu

```bash
npm install
npm run dev
```

Abrí el link que te muestre la terminal (normalmente `http://localhost:5173`).

## Cómo editar el contenido

Todo el texto (nombre, bio, stack, proyectos, links de contacto) vive en un solo archivo:

```
src/data/profile.js
```

No hace falta tocar ningún componente para actualizar textos o links — solo ese archivo.

### Para agregar un proyecto terminado

En `src/data/profile.js`, en el array `projects`, cambiá `status: "wip"` por `status: "done"`
y completá `demoUrl` y `codeUrl` con los links reales.

### Para agregar tu CV

Completá `cvUrl` en `profile.js` con el link a tu PDF (Google Drive, GitHub, etc.).

## Estructura del proyecto

Cada componente vive en su propia carpeta con su JSX y su CSS:

```
src/
├── data/
│   └── profile.js         ← todo el contenido (editá acá)
├── components/
│   ├── Nav/
│   │   ├── Nav.jsx
│   │   └── Nav.css
│   ├── Hero/
│   ├── Terminal/           ← terminal interactiva (el elemento firma)
│   ├── Avatar/              ← ilustración SVG propia
│   ├── About/
│   ├── Stack/
│   ├── Projects/
│   ├── ProjectCard/
│   ├── GithubStats/         ← consume la API real de GitHub en vivo
│   ├── Contact/              ← links directos de contacto
│   └── Footer/
├── App.jsx                  ← arma todas las secciones
├── main.jsx                  ← importa Bootstrap y los estilos globales
└── index.css                 ← tokens de diseño y estilos globales
```

Usa **Bootstrap** (instalado vía npm), importado en `main.jsx` antes de `index.css`
para que los estilos propios puedan sobrescribirlo donde haga falta.

## La terminal interactiva

Es el elemento distintivo del portafolio: es una terminal *real*, no una animación.
El visitante puede escribir comandos como `help`, `whoami`, `stack`, `proyectos`,
`github`, `contacto` o `clear`, y la terminal responde y navega el portafolio. Tiene
además historial de comandos navegable con las flechas ↑ / ↓, como una terminal de verdad.

## GitHub en vivo

La sección `GithubStats` no usa datos falsos: llama a `api.github.com` en el momento
en que alguien visita el portafolio y muestra tus repos públicos, seguidores y tus
3 repositorios más destacados en tiempo real. Si la API no responde (rate limit, sin
conexión), se degrada con un mensaje y un link directo a tu perfil.

## Deploy

Este proyecto se despliega igual que cualquier app de Vite:

- **Vercel / Netlify**: conectá el repo de GitHub, comando de build `npm run build`,
  carpeta de salida `dist`. Deploy automático en cada push.
- **GitHub Pages**: requiere configurar `base` en `vite.config.js` según el nombre
  del repo.

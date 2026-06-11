# cv-landing

Personal CV landing page built with Next.js 14 (App Router), TypeScript, and Tailwind CSS. Supports dark/light mode via `next-themes`.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Personalización

Todo tu contenido vive en un solo lugar:

```
lib/data.ts
```

Editá ese archivo para cambiar nombre, título, links, skills, experiencia, proyectos y educación. El resto de la app se renderiza automáticamente a partir de esos datos.

Para agregar una foto de perfil, copiá tu imagen a `public/photo.jpg` y cambiá en `data.ts`:

```ts
photo: "/photo.jpg",
```

## Estructura

```
cv-landing/
├── app/
│   ├── layout.tsx          # Root layout: fuentes, metadata, ThemeProvider
│   ├── page.tsx            # Página principal (compone todas las secciones)
│   └── globals.css         # Estilos globales y animaciones
│
├── components/
│   ├── nav.tsx             # Barra de navegación fija con toggle de tema
│   ├── hero.tsx            # Sección inicial: avatar, nombre, links
│   ├── avatar.tsx          # Avatar circular (foto o iniciales)
│   ├── about.tsx           # Sección "About"
│   ├── skills.tsx          # Sección "Skills" agrupada por categoría
│   ├── experience.tsx      # Sección "Experience"
│   ├── projects.tsx        # Sección "Projects" en grid de cards
│   ├── education.tsx       # Sección "Education"
│   ├── footer.tsx          # Footer
│   ├── icons.tsx           # Todos los íconos SVG inline
│   ├── providers.tsx       # Client wrapper para next-themes
│   ├── theme-toggle.tsx    # Botón sol/luna (client component)
│   └── ui/
│       ├── tag.tsx         # Badge de tecnología
│       ├── divider.tsx     # Separador horizontal entre secciones
│       └── section-title.tsx  # Título de sección en monospace
│
├── lib/
│   └── data.ts             # ← Todos tus datos personales van acá
│
├── next.config.mjs
├── tailwind.config.ts
├── postcss.config.js
└── tsconfig.json
```

## Stack

- **Next.js 14** — App Router, SSR, optimización de imágenes y fuentes
- **TypeScript** — tipado estricto en toda la app
- **Tailwind CSS** — estilos utilitarios, dark mode via `class`
- **next-themes** — persistencia del tema entre sesiones sin flash

## Deploy

El proyecto es compatible con [Vercel](https://vercel.com) sin configuración adicional:

```bash
npx vercel
```

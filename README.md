# Saffra Lendemar — UX/UI portfolio

The portfolio site, built with React and Vite. It was migrated from a Claude Design (Figma) export.

## Getting started

```bash
npm install
npm run dev       # local dev server
npm run build     # production build → dist/
npm run preview   # serve the production build locally
```

You need Node 20.19+ (or 22.12+), which Vite 8 requires.

## Deploying to Vercel

Import the repository in Vercel. It detects Vite automatically, and `vercel.json` pins the settings:

- Build command: `npm run build`
- Output directory: `dist`
- An SPA rewrite so deep links like `/projects/ommej` work
- Long-lived caching for the fingerprinted files in `/assets`

There's no backend, database or environment variables.

## Routes

| Path                     | Page                                          |
| ------------------------ | --------------------------------------------- |
| `/`                      | Home (hero, projects, about, contact)         |
| `/about`                 | About                                         |
| `/projects/ommej`        | Ommej case study                              |
| `/projects/cookiemonster`| CookieMonster case study                      |
| `/projects/matt`         | MATT Movilidad (coming soon)                  |

## Project structure

```
src/
  main.jsx, App.jsx          entry + routes
  styles/
    tokens.css               design tokens (colour, type, spacing, radius, layout)
    global.css               base styles + Tailwind (used only by artwork modules)
  content/site.js            site-wide copy: nav, contact details, home hero, about, footer
  components/
    layout/                  Layout, Container, ScrollManager, PageMeta
    navigation/              SiteHeader, Logo
    footer/                  SiteFooter
    ui/                      Button, Tag/TagList, icons
    media/                   Artwork (responsive Figma artwork), Figure, ImageGrid
    projects/                ProjectCard, ProjectList
    sections/                HomeHero, ProjectsSection, AboutSection, ContactSection, FikaCard
    case-study/              CaseStudyLayout, CaseHero, CaseSection, PhaseBadge, Split,
                             MetaList, ColumnGrid, ProjectIntro, ProductTabs, ResultCard,
                             HighlightCard, PersonaCard, InfoCard, CtaBlock, Bleed, Text primitives
  projects/
    index.js                 project registry (the order sets the home page order)
    <slug>/index.js          project metadata + project-card data
    <slug>/CaseStudy.jsx     case study body, composed from components/case-study
    <slug>/artwork/          Figma-generated illustrations for that project
  pages/                     HomePage, AboutPage, CaseStudyPage, NotFoundPage
  assets/images/             every image from the original export
```

### Styling

- Hand-written components use **CSS Modules** and the custom properties in `src/styles/tokens.css`.
- Each case study sets its accent colour through `CaseStudyLayout`'s `theme` prop (`--case-accent`).
- **Tailwind** is compiled at build time and only exists for the Figma-generated modules in
  `src/**/artwork/`, which use its arbitrary-value classes. There's no runtime cost.

### Artwork modules

Device mockups, flow diagrams and annotated boards were built in Figma as absolutely
positioned layers. They were extracted verbatim from the export into `artwork/` modules.
Treat them as illustrations: change the design in Figma and re-export rather than editing
them by hand. `components/media/Artwork` renders them at their design size and scales
them down to fit the screen, so only the pictures scale and the text reflows normally.

## Adding a case study

1. Create `src/projects/<slug>/index.js` with the project's metadata and card data. Copy
   `src/projects/ommej/index.js` as a template. Point `CaseStudy` at a lazy import of
   `./CaseStudy`.
2. Create `src/projects/<slug>/CaseStudy.jsx`. Compose it from `src/components/case-study`,
   for example `CaseHero`, `CaseSection` (plain, wide or panel), `PhaseBadge`, `Split`,
   `TextBlock`, `MetaList`, `ColumnGrid` and `ResultCard`, plus `Figure`, `ImageGrid` or
   `Artwork` for media.
3. Add the images under `src/assets/images/` and import them. The build fails if an
   imported image is missing.
4. Register the project in `src/projects/index.js`. The route `/projects/<slug>` and the
   home-page card are created automatically.

## Migration notes

- The original Claude Design export (`*.dc.html`, `lib/*.jsx`, `support.js`) is kept in git
  history and on `main`.
- `src/assets/images/unused/` holds five images that the export shipped but never
  rendered. They're kept so no asset is lost, and they aren't part of the build.
- `docs/design-reference/` holds the screenshots and the SVG that were in the export's
  `uploads/` folder.

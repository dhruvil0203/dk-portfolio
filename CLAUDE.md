# CLAUDE.md — dk-portfolio

## About

Personal portfolio website for **Dhruvil Mistry**, a Full Stack Developer based in Gujarat, India. The site showcases projects, skills, education, work experience, and provides a contact form. Deployed at `https://dhruvilmistry.in`.

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 16.1.6 (App Router) |
| Language | TypeScript 5 |
| UI Library | React 19 |
| Styling | Tailwind CSS 3.4 + CSS custom properties for theming |
| Animations | Framer Motion 12 |
| Icons | react-icons (Bootstrap Icons set via `Bs*` imports) |
| PWA | @ducanh2912/next-pwa (service worker, offline fallback) |
| Font | Inter (loaded via `next/font/google`) |
| Bundler | Webpack (explicit `--webpack` flag in scripts) |

## Folder Structure

```
dk-portfolio/
├── public/                    # Static assets (images, resume PDF, SW files, manifest)
│   ├── profile-real.jpg       # Hero photo
│   ├── profile.png            # App icon / about photo
│   ├── Dhruvil_Mistry_Resume.pdf
│   ├── manifest.json          # PWA manifest
│   ├── offline.html           # PWA offline fallback
│   ├── llms.txt               # AI context file
│   └── sw.js / workbox-*.js   # Generated service worker
├── src/
│   ├── app/                   # Next.js App Router pages & layouts
│   │   ├── layout.tsx         # Root layout (metadata, fonts, providers)
│   │   ├── page.tsx           # Home page (hero, skills, projects, FAQ, CTA)
│   │   ├── globals.css        # Tailwind directives + theme vars + component classes
│   │   ├── icon.png           # Favicon
│   │   ├── sitemap.ts         # Dynamic sitemap generation
│   │   ├── robots.ts          # Robots.txt generation
│   │   ├── about/             # /about route
│   │   │   ├── layout.tsx     # SEO metadata for about
│   │   │   └── page.tsx       # About page (story, education, experience, skills)
│   │   ├── work/              # /work route
│   │   │   ├── layout.tsx     # SEO metadata for work
│   │   │   └── page.tsx       # Projects gallery
│   │   └── contact/           # /contact route
│   │       ├── layout.tsx     # SEO metadata for contact
│   │       └── page.tsx       # Contact form + info
│   ├── components/            # Shared UI components
│   │   ├── Header.tsx         # Fixed top nav with mobile menu
│   │   ├── Footer.tsx         # Site footer
│   │   ├── BottomNav.tsx      # Mobile bottom tab bar
│   │   ├── PageHeader.tsx     # Reusable page header
│   │   ├── TabTitle.tsx       # Dynamic browser tab title
│   │   ├── JsonLd.tsx         # Structured data (Person schema)
│   │   └── OfflineDetector.tsx # PWA offline status banner
│   ├── context/
│   │   └── ThemeContext.tsx    # Dark/light theme provider (localStorage)
│   └── lib/
│       └── data.ts            # All portfolio content (profile, projects, skills, FAQs)
├── next.config.ts             # Next.js config + PWA plugin
├── tailwind.config.js         # Custom colors, breakpoints, font
├── tsconfig.json              # TypeScript config (path alias @/ → ./src/)
├── postcss.config.js          # PostCSS with Tailwind + Autoprefixer
└── eslint.config.mjs          # ESLint config
```

## Routes

| Path | Page | Description |
|------|------|-------------|
| `/` | Home | Hero, skills grid, featured projects, FAQ accordion, CTA |
| `/work` | Work | Full project gallery with GitHub/live links |
| `/about` | About | Bio, education, work experience, technical skills |
| `/contact` | Contact | Contact info cards + mailto-based form |

## Commands

```bash
npm run dev      # Start dev server (webpack, PWA disabled in dev)
npm run build    # Production build (webpack)
npm run start    # Serve production build
npm run lint     # Run ESLint
```

## Coding Standards

### Component Pattern
- All page components are **client components** (`'use client'` directive) because they use Framer Motion
- Each page defines its own `container` and `item` Framer Motion `Variants` for stagger animations
- Pages export a single default function component (e.g., `HomePage`, `AboutPage`, `WorkPage`)
- Components are functional, no class components

### Data Pattern
- All portfolio content lives in `src/lib/data.ts` as exported constants
- Pages import data from `@/lib/data` — no inline content, no API calls, no CMS
- Data is typed implicitly (no explicit interfaces defined)

### SEO Pattern
- Root `layout.tsx` has comprehensive `Metadata` export (OG, Twitter, icons, manifest)
- Each route has its own `layout.tsx` exporting route-specific `Metadata`
- JSON-LD structured data via `JsonLd` component in root layout
- FAQ section adds its own `FAQPage` JSON-LD inline
- `sitemap.ts` and `robots.ts` for search engine discovery

### State Management
- Theme: React Context (`ThemeContext`) with localStorage persistence
- Form state: local `useState` within component
- No external state library (no Redux/Zustand in this project)

## Component Rules

- Place shared components in `src/components/`
- One component per file, default export, PascalCase filename matching component name
- Use `@/` path alias for all imports from `src/`
- Icons: import from `react-icons/bs` (Bootstrap Icons)
- Images: use `next/image` `Image` component with responsive `sizes` prop
- Links: use `next/link` `Link` for internal navigation, `<a>` for external

## Styling Rules

- **Primary approach**: Tailwind utility classes inline on elements
- **Theming**: CSS custom properties defined in `globals.css` under `:root` / `[data-theme='light']`
- **Reusable component classes**: defined in `@layer components` in `globals.css`:
  - `.section-heading` — section title with blue left bar
  - `.card-base` / `.card-hover` — card wrapper styles
  - `.btn-primary` — primary CTA button
  - `.tech-tag` — technology badge pill
  - `.skill-pill` — skill badge with hover
  - `.badge-blue` — inline badge
  - `.form-input` — form field styling
  - `.contact-card` — contact info card
  - `.bottom-nav` / `.nav-item` — mobile bottom navigation
- **Custom colors** are mapped to CSS vars in Tailwind config (e.g., `bg-bg-primary`, `text-text-secondary`, `border-border`)
- **Accent color**: `#3b82f6` (blue-500) with `accent-light` and `accent-dark` variants
- **Custom animations**: `avatar-glow-ring` rotating conic-gradient border (defined in raw CSS)
- **Font**: Inter via `next/font/google`, applied as `font-inter` and `--font-inter` variable
- **Responsive breakpoints**: `xs:480px`, `sm:640px`, `md:768px`, `lg:1024px`, `xl:1280px`
- Dark theme is default; light theme is opt-in via toggle

## Do Not

- Do not add inline content/text in page components — all content goes in `src/lib/data.ts`
- Do not use CSS Modules (only `page.module.css` exists as a leftover — unused)
- Do not install additional state management libraries — keep state local or in Context
- Do not remove `'use client'` from pages — Framer Motion requires it
- Do not hardcode the site URL — use the `SITE_URL` constant pattern
- Do not add pages without a corresponding `layout.tsx` with proper SEO metadata
- Do not use icons from icon sets other than `react-icons/bs`
- Do not disable TypeScript strict mode
- Do not modify generated PWA files (`sw.js`, `workbox-*.js`, `fallback-*.js`)

## Naming Conventions

| Item | Convention | Example |
|------|-----------|---------|
| Components | PascalCase filename + default export | `Header.tsx` → `export default function Header()` |
| Pages | `page.tsx` inside route folder | `src/app/work/page.tsx` |
| Layouts | `layout.tsx` inside route folder | `src/app/about/layout.tsx` |
| Data file | camelCase | `src/lib/data.ts` |
| Context | PascalCase with "Context" suffix | `ThemeContext.tsx` |
| CSS classes | kebab-case for custom classes | `.card-base`, `.section-heading` |
| Tailwind custom colors | dot-separated groups | `bg-bg-primary`, `text-text-secondary` |
| Route folders | lowercase single word | `about/`, `work/`, `contact/` |
| Exported data | camelCase arrays/objects | `featuredProjects`, `skillCards`, `faqs` |

## Special Configurations

### next.config.ts
- Images set to `unoptimized: true` (static export compatible)
- PWA plugin wraps config with service worker generation, offline fallback to `/offline.html`, disabled in development

### tailwind.config.js
- Custom color system using CSS variables for theming
- Custom `xs: 480px` breakpoint
- Inter font family registered as `font-inter`

### TypeScript
- `@/*` path alias maps to `./src/*`
- Strict mode enabled
- Target ES2017, module resolution: bundler

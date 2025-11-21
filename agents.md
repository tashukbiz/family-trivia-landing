# Family Trivia Landing - Core Knowledge

This document contains essential information about the Family Trivia landing page project for AI agents and developers.

## Project Overview

**Purpose**: Marketing landing page for the Family Trivia mobile app  
**Tech Stack**: Next.js 16, TypeScript, Tailwind CSS v4  
**Build Type**: Static Site Generation (SSG)  
**Package Manager**: pnpm

## Architecture

### Framework: Next.js 16
- Uses App Router (not Pages Router)
- Configured for static export (`output: "export"` in next.config.ts)
- All pages are pre-rendered to static HTML at build time
- No server-side rendering or API routes

### Pages Structure
```
app/
├── page.tsx          # Home/Landing page (/)
├── privacy/
│   └── page.tsx      # Privacy policy (/privacy)
├── terms/
│   └── page.tsx      # Terms of service (/terms)
├── layout.tsx        # Root layout with metadata and fonts
└── globals.css       # Global styles and Tailwind theme
```

### Components
Located in `/components` directory:
- `SignupButton.tsx` - Client component that opens signup modal
- `SignupForm.tsx` - Mailchimp integration form (client component)

Both are client components (marked with `'use client'`) because they use browser APIs and event handlers.

## Styling System

### Tailwind CSS v4
- Configuration is in `app/globals.css` using `@theme inline`
- No separate `tailwind.config.ts` file (Tailwind v4 approach)
- Custom theme variables defined in CSS custom properties

### Custom Theme
```css
--color-primary: #2b6cee
--color-background-light: #f6f6f8
--color-background-dark: #101622
--color-pastel-blue: #A2D2FF
--color-soft-purple: #CDB4DB
--color-warm-yellow: #FFD6A5
--color-fresh-green: #BDE0FE
```

### Fonts
- **Primary**: Inter (loaded via Google Fonts CDN in layout.tsx)
- **Icons**: Material Symbols Outlined (Google Fonts)
- Font loading is done via `<link>` tags in the `<head>` (not next/font) to avoid build issues with restricted internet access

## Key Features

### 1. Responsive Design
- Mobile-first approach with Tailwind responsive classes
- Breakpoints: sm, md, lg (standard Tailwind)
- Tested across mobile, tablet, desktop viewports

### 2. Dark Mode
- Supports light and dark themes
- Uses Tailwind's dark mode classes (e.g., `dark:bg-slate-800`)
- Class-based dark mode (configured in root `<html>` tag)

### 3. Email Signup (Mailchimp)
- Modal popup with Mailchimp embedded form
- Triggered by download buttons throughout the page
- Form action points to Mailchimp subscription endpoint
- Includes honeypot field for bot protection

### 4. SEO Optimization
- Proper metadata in layout.tsx and page components
- Semantic HTML structure
- Meta descriptions for each page
- Favicon properly configured

## Build Process

### Development
```bash
pnpm dev          # Runs dev server on localhost:3000
```

### Production Build
```bash
pnpm build        # Creates static files in /out directory
```

Build output:
- Static HTML files for each route
- Optimized CSS and JS bundles
- All assets copied to `/out` directory
- Ready for deployment to any static host

## Deployment

The project is designed for static hosting. The `/out` directory contains:
- `index.html` - Home page
- `privacy.html` - Privacy page
- `terms.html` - Terms page
- `_next/` - Optimized assets (CSS, JS)
- Static files from `/public` directory

Can be deployed to:
- GitHub Pages
- Vercel
- Netlify
- AWS S3 + CloudFront
- Any static file server

## Content Structure

### Home Page Sections
1. **Hero** - Main value proposition with download CTAs
2. **Problem** - Pain points of traditional trivia games
3. **Solution** - Personalized trivia explanation
4. **How It Works** - 4-step process
5. **Features** - 8 key features in grid
6. **Use Cases** - 7 scenarios with icons
7. **Family-Safe** - Safety features list
8. **CTA** - Secondary call-to-action
9. **FAQ** - Common questions (7 items)
10. **Footnotes** - Legal disclaimers
11. **Footer** - Links and branding

### Navigation
- Sticky header with logo and nav links
- Links to #features and #faq (anchor links)
- Footer links to /privacy and /terms pages

## Dependencies

### Core
- `next@16.0.3` - Framework
- `react@19.2.0` - UI library
- `react-dom@19.2.0` - React renderer

### Dev Dependencies
- `typescript@5` - Type checking
- `tailwindcss@4` - Styling
- `@tailwindcss/postcss@4` - PostCSS plugin
- `eslint` + `eslint-config-next` - Linting

### Package Manager
- Uses `pnpm` for faster installs and disk efficiency
- Lock file: `pnpm-lock.yaml`

## Important Constraints

### Static Export Limitations
- No `getServerSideProps` or `getStaticProps` (App Router doesn't use these)
- No API routes (all routes become static HTML)
- No dynamic routes with runtime parameters
- No ISR (Incremental Static Regeneration)
- Image optimization disabled (`unoptimized: true`)

### Internet Access During Build
- Google Fonts loaded via CDN links (not next/font/google)
- This is because the build environment may have restricted internet access
- Fonts are loaded at runtime by the browser

## Code Conventions

### TypeScript
- Strict mode enabled
- All components are typed
- Metadata exports for SEO

### React Patterns
- Server Components by default
- Client Components only when needed (`'use client'` directive)
- Proper use of Image component from next/image
- Link component for internal navigation

### CSS/Styling
- Utility-first with Tailwind
- Custom classes only for complex interactions (signup modal)
- Consistent spacing and sizing patterns
- Responsive design with mobile-first approach

## Testing & Validation

### Pre-deployment Checklist
- ✅ Run `pnpm build` successfully
- ✅ Check `/out` directory exists
- ✅ Verify all pages render correctly
- ✅ Test responsive design (mobile, tablet, desktop)
- ✅ Test dark mode toggle
- ✅ Test signup form modal
- ✅ Verify all links work
- ✅ Check favicon displays
- ✅ Test Material Icons load

## Maintenance Notes

### When Adding New Pages
1. Create new directory in `/app`
2. Add `page.tsx` with export default function
3. Add metadata export for SEO
4. Update footer links if needed
5. Rebuild with `pnpm build`

### When Updating Styles
1. Modify `app/globals.css` for theme changes
2. Use Tailwind classes in JSX for component styles
3. Rebuild to see changes in production build

### When Updating Content
1. Edit the relevant page component in `/app`
2. Preserve TypeScript types
3. Maintain responsive class patterns
4. Test signup form still works

## Troubleshooting

### Build Fails
- Check TypeScript errors: `pnpm tsc --noEmit`
- Verify all imports are correct
- Check next.config.ts is valid
- Clear .next: `rm -rf .next`

### Fonts Not Loading
- Verify Google Fonts CDN is accessible
- Check `<link>` tags in layout.tsx head
- Ensure font-family matches in globals.css

### Styles Not Applied
- Verify Tailwind classes are valid
- Check globals.css @theme inline syntax
- Clear browser cache
- Rebuild the project

## Migration History

This project was migrated from plain HTML to Next.js:
- **Before**: Static HTML files with Tailwind CDN
- **After**: Next.js with static export, proper component structure
- **Preserved**: All content, styling, functionality (Mailchimp form)
- **Improved**: TypeScript safety, component reusability, better maintainability

## Future Enhancement Ideas

- Add animations with Framer Motion
- Implement server-side form validation
- Add analytics integration
- Create reusable UI component library
- Add unit tests with Jest/Vitest
- Add E2E tests with Playwright
- Implement CMS integration for content management
- Add i18n support for multiple languages

## Support & Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS v4 Docs](https://tailwindcss.com/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Material Symbols](https://fonts.google.com/icons)

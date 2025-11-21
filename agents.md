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

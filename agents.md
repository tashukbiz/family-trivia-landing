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

## Analytics & App Store Attribution

All App Store CTAs go through `DownloadButtons` → `SignupButton`, which builds
the link via `lib/app-store.ts`:

- **Apple**: links carry App Analytics campaign params (`pt`/`ct`/`mt=8`) when
  `NEXT_PUBLIC_APPLE_PROVIDER_TOKEN` is set in `.env.production` (gitignored).
  Campaign tokens are placements: `web-home-hero`, `web-home-footer`,
  `web-blog` (default). Downloads per token appear in App Store Connect →
  Analytics → Acquisition → Campaigns (needs ≥5 downloads and ~24h). Keep
  tokens ≤30 chars.
- **Google Analytics**: each CTA click fires a single `cta_ios_click` event
  with `placement` and `link_url` params (beacon transport). GA attaches
  `page_location` automatically, so per-page detail lives in GA.
- **Safari Smart App Banner** (`itunes` metadata in `app/layout.tsx`): installs
  from it show as web referrals from familytrivia.app in Apple analytics.
- **RevenueCat**: not an attribution network — iOS apps cannot read Apple's
  `ct` token, so web-referred subscribers can only be matched in aggregate
  (App Store Connect campaign downloads vs. RevenueCat cohorts). Per-user
  attribution would require an MMP (Branch/AppsFlyer) or RevenueCat Funnels.

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

## Custom Agents

### Content Writer Agent
Located at `.github/agents/content-writer.md`

An expert content writing agent specialized in creating engaging, SEO-optimized blog posts and marketing content for the Family Trivia landing page.

**How to use:**
1. Invoke the agent in GitHub Copilot chat: `@content-writer`
2. Provide details about the content you need:
   - Topic or theme
   - Target audience
   - Desired word count
   - SEO keywords
   - Brand guidelines

**Capabilities:**
- Blog post writing with attention-grabbing headlines
- SEO optimization with natural keyword integration
- Content strategy and editorial planning
- Family-friendly tone aligned with Family Trivia brand
- Actionable insights and compelling storytelling

**Example topics for Family Trivia:**
- Benefits of playing trivia games as a family
- How AI makes family game night fair for everyone
- Educational value of trivia games for children
- Tips for multi-generational family activities
- Screen time that's both fun and educational

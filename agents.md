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
- `SignupButton.tsx` - Client component that links to the public iOS App Store listing and tracks the click
- `DownloadButtons.tsx` - Shared iOS download CTA

`SignupButton` is a client component (marked with `'use client'`) because it uses browser APIs and event handlers.

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

### 3. App Store Download
- Download buttons link to the public iOS listing with placement attribution
- Android is in early testing and has no public install link on this site
- The site has no signup modal

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
  with `placement`, `link_url` and `store` params (beacon transport). Creator
  traffic also includes `creator_id`, `creator_campaign` and `creator_source`.
  `creator_referral_visit` counts once per creator per tab session, not unique
  people or GA sessions. GA attaches `page_location` automatically.
- **Creator referrals**: `?ref=c01` accepts any ID of 1–25 ASCII letters,
  digits, hyphens or underscores, starting with a letter or digit. IDs normalize
  to lowercase. No hardcoded roster, approval list or database lookup exists.
  Apple tokens are generated as `ft26-` plus the ID; incoming `ct` is ignored.
  Legacy `utm_medium=creator&utm_content=c01` links also work. Optional
  `utm_source` supplies a bounded source label, otherwise `unspecified`.
  Session storage retains attribution within the tab; a new valid referral
  replaces it, while an invalid referral or another tagged campaign clears it.
  Untagged internal navigation preserves it. Blocked storage falls back to
  document memory. Keep names, contact details and performance spreadsheets
  outside the repository. Google Play remains hidden until verified.
- **Safari Smart App Banner**: removed because static metadata cannot reliably
  receive per-visitor campaign attribution. All visible store CTAs now use the
  instrumented download button. No automatic store redirects are performed.
- **RevenueCat**: not an attribution network — iOS apps cannot read Apple's
  `ct` token. Do not allocate overall RevenueCat subscriptions to creators.
  Report creator trials/paid starts only from campaign-filtered store reports
  or a separately verified attribution integration.

Tests: `pnpm test` (vitest).
Register the event-scoped creator dimensions in the website GA property and
verify delivery after deployment. Analytics failure must never block a link.

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

Article publication and modification dates live in each article's page metadata.
JSON-LD and the sitemap read from that metadata. Refresh the checked-in
`docs/` GitHub Pages copy from `out/` before deployment.

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

## Social campaign links

`lib/social-campaign.ts` maps allowlisted social UTMs (`utm_source` youtube,
instagram or tiktok; `utm_medium=organic_social`; the approved `utm_campaign`;
`utm_content` of `profile` or an approved post ID) to an App Store campaign
token, independently of creator referral storage. An active creator referral
takes precedence. Explicit `ref`, duplicate UTMs and unknown or free-text
values are rejected, and the historical `ig/social/link_in_bio` labels map to a
separate legacy token. `SocialCampaignLinks` carries the bounded query through
same-site navigation with full page loads so Next Link cannot discard it. No
cookie or local storage is involved and consent behaviour is unchanged.

Profile links identify the channel, not a post; use a post ID only for a
separately clickable placement. New campaigns or post IDs need an explicit
mapping update. QA campaigns produce `qa-` prefixed tokens; exclude them from
performance reports. Apple campaign tokens, provider tokens, store links and
contact details stay out of the repository: the provider token lives in the
gitignored `.env.production`, and campaign tokens must be generated in App
Store Connect before they can be reported.

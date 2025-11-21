# Family Trivia - The Trivia Game for Everyone

Fun for kids. Challenging for adults. Fair for everyone. Endless, AI-generated trivia questions tailored to each person's interests — all on a single device.

## Tech Stack

- **Framework**: Next.js 16 with App Router
- **Styling**: Tailwind CSS v4
- **Language**: TypeScript
- **Package Manager**: pnpm
- **Build Output**: Static HTML/CSS/JS (Static Site Generation)

## Getting Started

### Prerequisites

- Node.js 18+ 
- pnpm (installed automatically if not present)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/tashukbiz/family-trivia-landing.git
   cd family-trivia-landing
   ```

2. Install dependencies:
   ```bash
   pnpm install
   ```

### Development

Run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

### Building for Production

Build the static site:

```bash
pnpm build
```

This creates an optimized production build in the `out/` directory with static HTML files.

### Project Structure

```
family-trivia-landing/
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Home page
│   ├── privacy/           # Privacy policy page
│   ├── terms/             # Terms of service page
│   ├── layout.tsx         # Root layout with metadata
│   └── globals.css        # Global styles and Tailwind config
├── components/            # React components
│   ├── SignupButton.tsx  # Client component for signup modal
│   └── SignupForm.tsx    # Mailchimp form component
├── public/               # Static assets
│   └── favicon.ico       # Site favicon
├── out/                  # Static build output (generated)
├── next.config.ts        # Next.js configuration
├── package.json          # Dependencies and scripts
├── tsconfig.json         # TypeScript configuration
└── README.md            # This file
```

## Features

- ✅ Static site generation for fast loading
- ✅ Responsive design with Tailwind CSS
- ✅ Dark mode support
- ✅ TypeScript for type safety
- ✅ Mailchimp email integration
- ✅ SEO-optimized with proper metadata
- ✅ Accessible design with semantic HTML

## Deployment

The `out/` directory contains static files that can be deployed to any static hosting service:

- GitHub Pages
- Vercel
- Netlify
- AWS S3 + CloudFront
- Any CDN or web server

Simply upload the contents of the `out/` directory to your hosting provider.

## Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build static site
- `pnpm start` - Start production server (not needed for static export)
- `pnpm lint` - Run ESLint

## License

All rights reserved.

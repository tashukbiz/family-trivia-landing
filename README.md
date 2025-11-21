# Family Trivia - The Trivia Game for Everyone

Fun for kids. Challenging for adults. Fair for everyone. Endless, AI-generated trivia questions tailored to each person’s interests — all on a single device.

## SEO Configuration

This project automatically generates `robots.txt` and `sitemap.xml` for search engine optimization.

### robots.txt

The `robots.txt` file is generated from `app/robots.ts` and:
- Allows all search engine crawlers
- References the sitemap location

To customize robots.txt rules, edit the `app/robots.ts` file.

### sitemap.xml

The `sitemap.xml` file is dynamically generated from `app/sitemap.ts` and includes:
- All static pages (home, blog index, privacy, terms)
- All blog articles (automatically discovered from `app/blog/` subdirectories)

The sitemap is automatically updated when you add or remove blog posts. To customize the sitemap:
1. Edit `app/sitemap.ts` to add/remove static pages
2. Adjust priority and change frequency values as needed
3. The blog posts are discovered automatically from directory structure

Both files are regenerated during the build process (`npm run build`) and output to the `docs/` directory.

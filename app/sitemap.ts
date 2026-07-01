import { MetadataRoute } from 'next';
import { readdirSync, readFileSync } from 'fs';
import { join } from 'path';

export const dynamic = 'force-static';

function getBlogPages(): MetadataRoute.Sitemap {
  const blogDir = join(process.cwd(), 'app', 'blog');
  const slugs = readdirSync(blogDir, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name);

  return slugs.map((slug) => {
    const source = readFileSync(join(blogDir, slug, 'page.tsx'), 'utf-8');
    const match = source.match(/modifiedTime:\s*'([^']+)'/);
    const lastModified = match ? new Date(match[1]) : new Date();
    return {
      url: `${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/blog/${slug}`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    };
  });
}

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date('2026-06-25'),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date('2026-06-25'),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/android`,
      lastModified: new Date('2026-07-02'),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date('2026-06-25'),
      changeFrequency: 'monthly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: new Date('2026-06-25'),
      changeFrequency: 'monthly',
      priority: 0.3,
    },
  ];

  return [...staticPages, ...getBlogPages()];
}

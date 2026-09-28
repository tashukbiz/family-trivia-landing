import type { Metadata, MetadataRoute } from 'next';
import { readdirSync } from 'fs';
import { join } from 'path';
import { getArticleDates, seoSiteConfig } from '@/lib/seo';

export const dynamic = 'force-static';

async function getBlogPages(): Promise<MetadataRoute.Sitemap> {
  const blogDir = join(process.cwd(), 'app', 'blog');
  const slugs = readdirSync(blogDir, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name);

  return Promise.all(slugs.map(async (slug) => {
    const { metadata }: { metadata: Metadata } = await import(`./blog/${slug}/page`);
    const { modifiedTime } = getArticleDates(metadata);

    return {
      url: `${seoSiteConfig.siteUrl}/blog/${slug}`,
      lastModified: new Date(modifiedTime),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    };
  }));
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = seoSiteConfig.siteUrl;

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date('2026-09-28'),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date('2026-09-28'),
      changeFrequency: 'weekly',
      priority: 0.8,
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

  return [...staticPages, ...await getBlogPages()];
}

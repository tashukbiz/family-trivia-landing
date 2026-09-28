import { MetadataRoute } from 'next';
import { seoSiteConfig } from '@/lib/seo';

export const dynamic = 'force-static';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [],
    },
    sitemap: `${seoSiteConfig.siteUrl}/sitemap.xml`,
  };
}

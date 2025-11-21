import { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://familytrivia.app';

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}

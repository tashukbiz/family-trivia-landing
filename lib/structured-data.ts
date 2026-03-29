const SITE_URL = 'https://familytrivia.app';

export const OG_IMAGE_URL = `${SITE_URL}/og-image.jpg`;

interface BlogPostingSchemaParams {
  type: 'Article' | 'BlogPosting';
  headline: string;
  description: string;
  datePublished?: string;
  dateModified?: string;
  path: `/${string}`;
  keywords: string;
}

export function buildBlogPostingSchema({
  type,
  headline,
  description,
  datePublished,
  dateModified,
  path,
  keywords,
}: BlogPostingSchemaParams) {
  return {
    '@type': type,
    headline,
    description,
    image: OG_IMAGE_URL,
    ...(datePublished ? { datePublished } : {}),
    ...(dateModified ? { dateModified } : {}),
    author: {
      '@type': 'Organization',
      name: 'Family Trivia',
      url: SITE_URL,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Family Trivia',
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/favicon.ico`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${SITE_URL}${path}`,
    },
    keywords,
  };
}

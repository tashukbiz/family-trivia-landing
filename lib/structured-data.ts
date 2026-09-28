import type { Metadata } from 'next';
import { getArticleDates } from './seo';

const SITE_URL = 'https://familytrivia.app';

export const OG_IMAGE_URL = `${SITE_URL}/og-image.jpg`;

interface BlogPostingSchemaParams {
  metadata: Metadata;
  type: 'Article' | 'BlogPosting';
  headline: string;
  description: string;
  path: `/${string}`;
  keywords: string;
}

export function buildBlogPostingSchema({
  metadata,
  type,
  headline,
  description,
  path,
  keywords,
}: BlogPostingSchemaParams) {
  const dates = getArticleDates(metadata);

  return {
    '@type': type,
    headline,
    description,
    image: OG_IMAGE_URL,
    datePublished: dates.publishedTime,
    dateModified: dates.modifiedTime,
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

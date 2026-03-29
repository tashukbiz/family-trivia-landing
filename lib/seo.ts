import type { Metadata } from 'next';

type PageType = 'website' | 'article';

interface BuildPageMetadataParams {
  title: string;
  description: string;
  path: `/${string}`;
  keywords?: string[];
  type?: PageType;
}

const SITE_NAME = 'Family Trivia';
const SITE_URL = 'https://familytrivia.app';
const DEFAULT_OG_IMAGE = '/og-image.jpg';

export function buildPageMetadata({
  title,
  description,
  path,
  keywords,
  type = 'website',
}: BuildPageMetadataParams): Metadata {
  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title,
      description,
      url: path,
      siteName: SITE_NAME,
      type,
      images: [
        {
          url: DEFAULT_OG_IMAGE,
          width: 1200,
          height: 630,
          alt: SITE_NAME,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [DEFAULT_OG_IMAGE],
    },
  };
}

export const seoSiteConfig = {
  siteName: SITE_NAME,
  siteUrl: SITE_URL,
} as const;

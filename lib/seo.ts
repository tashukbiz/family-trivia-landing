import type { Metadata } from 'next';

type PageType = 'website' | 'article';

interface BuildPageMetadataParams {
  title: string;
  description: string;
  path: `/${string}`;
  keywords?: string[];
  type?: PageType;
  publishedTime?: string;
  modifiedTime?: string;
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
  publishedTime,
  modifiedTime,
}: BuildPageMetadataParams): Metadata {
  const isArticle = type === 'article';

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
      ...(isArticle && {
        publishedTime,
        modifiedTime,
      }),
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

type BuildBlogArticleMetadataParams = Omit<BuildPageMetadataParams, 'type'>;

export function buildBlogArticleMetadata(
  params: BuildBlogArticleMetadataParams
): Metadata {
  return buildPageMetadata({
    ...params,
    type: 'article',
  });
}

export const seoSiteConfig = {
  siteName: SITE_NAME,
  siteUrl: SITE_URL,
} as const;

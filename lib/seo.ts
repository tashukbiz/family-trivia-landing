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
const SITE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
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

type BuildBlogArticleMetadataParams = Omit<
  BuildPageMetadataParams,
  'type' | 'publishedTime' | 'modifiedTime'
> & {
  publishedTime: string;
  modifiedTime: string;
};

export function buildBlogArticleMetadata(
  params: BuildBlogArticleMetadataParams,
): Metadata {
  return buildPageMetadata({
    ...params,
    type: 'article',
  });
}

export function getArticleDates(metadata: Metadata) {
  const openGraph = metadata.openGraph;
  if (
    !openGraph ||
    !('publishedTime' in openGraph) ||
    !('modifiedTime' in openGraph) ||
    typeof openGraph.publishedTime !== 'string' ||
    typeof openGraph.modifiedTime !== 'string'
  ) {
    throw new Error(
      'Article metadata is missing publication or modification dates',
    );
  }

  return {
    publishedTime: openGraph.publishedTime,
    modifiedTime: openGraph.modifiedTime,
  };
}

export const seoSiteConfig = {
  siteName: SITE_NAME,
  siteUrl: SITE_URL,
} as const;

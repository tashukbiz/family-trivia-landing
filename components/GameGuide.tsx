import Link from 'next/link';
import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { buildBlogPostingSchema } from '@/lib/structured-data';

interface Props {
  article: {
    title: string;
    description: string;
    path: `/blog/${string}`;
    keywords: readonly string[];
  };
  metadata: Metadata;
  children: ReactNode;
}

export default function GameGuide({ article, metadata, children }: Props) {
  const schema = buildBlogPostingSchema({
    metadata, type: 'BlogPosting', headline: article.title, description: article.description,
    path: article.path, keywords: article.keywords.join(', '),
  });

  return (
    <main className='mx-auto max-w-3xl px-5 py-8 text-slate-900 sm:px-8 dark:text-slate-100'>
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', ...schema }) }} />
      <nav aria-label='Breadcrumb' className='mb-8 flex gap-3 text-sm underline'>
        <Link href='/'>Family Trivia</Link><Link href='/blog'>Trivia guides</Link>
      </nav>
      <article className='leading-relaxed [&>p]:my-4 [&>p]:text-lg [&>section]:mt-9 [&>section>h2]:mb-3 [&>section>h2]:text-2xl [&>section>h2]:font-bold [&>section>h3]:mt-5 [&>section>h3]:text-xl [&>section>h3]:font-semibold [&>section>p]:mt-2 [&_a]:underline'>
        <h1 className='text-4xl font-bold tracking-tight sm:text-5xl'>{article.title}</h1>
        {children}
      </article>
    </main>
  );
}

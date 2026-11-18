import Link from 'next/link';
import type { Metadata } from 'next';
import { buildBlogPostingSchema } from '@/lib/structured-data';
import { ReadAloudQuestions, TakeAlongRound, type QuestionGroup } from './TakeAlongRound';

type Props = {
  title: string;
  description: string;
  path: `/blog/${string}`;
  metadata: Metadata;
  sheet: 'road-trip' | 'family-game-night';
  groups: QuestionGroup[];
  introduction: string;
  printTip: string;
  related: { href: string; label: string }[];
};

export default function PlayableArticle({ title, description, path, metadata, sheet, groups, introduction, printTip, related }: Props) {
  const schema = buildBlogPostingSchema({
    metadata, type: 'Article', headline: title, description, path,
    keywords: Array.isArray(metadata.keywords) ? metadata.keywords.join(', ') : metadata.keywords ?? '',
  });
  let nextNumber = 1;
  return (
    <main className='mx-auto max-w-3xl px-5 py-8 text-slate-900 sm:px-8 dark:text-slate-100'>
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', ...schema }) }} />
      <nav aria-label='Breadcrumb' className='mb-8 flex gap-3 text-sm underline'>
        <Link href='/'>Family Trivia</Link><Link href='/blog'>Trivia guides</Link>
      </nav>
      <article>
        <h1 className='text-4xl font-bold tracking-tight sm:text-5xl'>{title}</h1>
        <p className='my-4 text-lg leading-relaxed'>{introduction}</p>
        <a href='#paper-round' className='text-blue-800 underline dark:text-blue-300'>Get the 10-question printable</a>
        {groups.map((group, index) => {
          const start = nextNumber;
          nextNumber += group.questions.length;
          return (
            <section key={group.title} className='mt-8'>
              <h2 className='mb-4 text-2xl font-bold'>{group.title}</h2>
              <ReadAloudQuestions questions={group.questions} paired start={start} />
              {index === 0 && <div id='paper-round'><TakeAlongRound sheet={sheet}>{printTip}</TakeAlongRound></div>}
            </section>
          );
        })}
        <nav aria-label='Related rounds' className='mt-10 border-t pt-5'>
          <h2 className='mb-3 text-xl font-bold'>Choose another game</h2>
          <ul className='space-y-2'>{related.map(link => <li key={link.href}><Link className='underline' href={link.href}>{link.label}</Link></li>)}</ul>
        </nav>
      </article>
    </main>
  );
}

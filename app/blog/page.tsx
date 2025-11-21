import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import SignupButton from '@/components/SignupButton';
import SignupForm from '@/components/SignupForm';
import { readdirSync, statSync } from 'fs';
import { join } from 'path';

export const metadata: Metadata = {
  title: 'Family Trivia Blog - Tips, Questions, and Fun Family Game Ideas',
  description:
    'Discover trivia questions, family game night tips, and educational content for kids. Learn how to make family time more fun and engaging with Family Trivia.',
  keywords: [
    'family trivia',
    'trivia questions',
    'family games',
    'kids activities',
    'educational games',
  ],
};

interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date?: string;
}

// Function to get all blog posts dynamically
function getBlogPosts(): BlogPost[] {
  const blogDir = join(process.cwd(), 'app', 'blog');

  try {
    const entries = readdirSync(blogDir, { withFileTypes: true });

    const posts = entries
      .filter((entry) => entry.isDirectory())
      .map((entry) => {
        const slug = entry.name;

        // Try to read the page.tsx file to extract metadata
        try {
          const pagePath = join(blogDir, slug, 'page.tsx');
          const pageContent = require('fs').readFileSync(pagePath, 'utf-8');

          // Extract title from metadata
          const titleMatch = pageContent.match(/title:\s*["']([^"']+)["']/);
          const descriptionMatch = pageContent.match(
            /description:\s*["']([^"']+)["']/
          );

          return {
            slug,
            title: titleMatch
              ? titleMatch[1].split('|')[0].trim()
              : formatTitle(slug),
            description: descriptionMatch
              ? descriptionMatch[1]
              : 'Read this article on Family Trivia blog',
          };
        } catch {
          return {
            slug,
            title: formatTitle(slug),
            description: 'Read this article on Family Trivia blog',
          };
        }
      })
      .filter((post) => post !== null);

    return posts;
  } catch {
    return [];
  }
}

// Helper function to format slug into title
function formatTitle(slug: string): string {
  return slug
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

export default function BlogPage() {
  const posts = getBlogPosts();

  return (
    <>
      <div className='min-h-screen bg-white dark:bg-slate-900'>
        <div className='px-4 md:px-10 lg:px-20 flex flex-1 justify-center py-5'>
          <div className='flex flex-col max-w-5xl flex-1'>
            {/* TopNavBar */}
            <header className='flex items-center justify-between whitespace-nowrap bg-white/70 dark:bg-background-dark/70 backdrop-blur-md rounded-full px-8 py-3 shadow-sm'>
              <Link href='/' className='flex items-center gap-4 text-slate-900 dark:text-white hover:opacity-80 transition-opacity'>
                <Image
                  src='/favicon.ico'
                  alt='Family Trivia'
                  width={24}
                  height={24}
                  className='rounded'
                />
                <h2 className='text-lg font-bold tracking-tight'>
                  Family Trivia
                </h2>
              </Link>
              <div className='hidden md:flex flex-1 justify-end gap-8'>
                <a
                  href='#cta'
                  className='flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-primary text-white text-sm font-bold leading-normal tracking-wide hover:opacity-90 transition-opacity'
                >
                  <span className='truncate'>Download</span>
                </a>
              </div>
            </header>

            {/* Page Header */}
            <header className='mb-12 mt-8'>
              <h1 className='text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4'>
                Family Trivia Blog
              </h1>
              <p className='text-xl text-gray-600 dark:text-gray-400'>
                Discover tips, trivia questions, and ideas to make family game
                night unforgettable
              </p>
            </header>

            {/* Blog Posts Grid */}
            {posts.length > 0 ? (
              <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
                {posts.map((post) => (
                  <article
                    key={post.slug}
                    className='bg-gray-50 dark:bg-slate-800 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-200'
                  >
                    <Link href={`/blog/${post.slug}`} className='group'>
                      <h2 className='text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary transition-colors'>
                        {post.title}
                      </h2>
                      <p className='text-gray-600 dark:text-gray-400 mb-4 line-clamp-3'>
                        {post.description}
                      </p>
                      <span className='text-primary font-semibold group-hover:underline'>
                        Read more &rarr;
                      </span>
                    </Link>
                  </article>
                ))}
              </div>
            ) : (
              <div className='text-center py-12'>
                <p className='text-xl text-gray-600 dark:text-gray-400'>
                  No blog posts yet. Check back soon for new content!
                </p>
              </div>
            )}

            {/* CTA Section */}
            <section id='cta' className='mt-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 md:p-12 text-center'>
              <h2 className='text-3xl md:text-4xl font-bold text-white mb-4'>
                Ready for Family Fun?
              </h2>
              <p className='text-xl text-blue-100 mb-8 max-w-2xl mx-auto'>
                Download Family Trivia and enjoy thousands of questions powered
                by AI, perfect for players of all ages.
              </p>
              <div className='flex-wrap gap-4 flex justify-center'>
                <SignupButton className='flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-6 bg-white text-primary text-base font-bold leading-normal tracking-wide hover:opacity-90 transition-opacity'>
                  <span className='truncate'>Download for iOS</span>
                </SignupButton>
                <SignupButton className='flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-6 bg-white text-primary text-base font-bold leading-normal tracking-wide hover:opacity-90 transition-opacity'>
                  <span className='truncate'>Download for Android</span>
                </SignupButton>
              </div>
            </section>
          </div>
        </div>
      </div>
      <SignupForm />
    </>
  );
}

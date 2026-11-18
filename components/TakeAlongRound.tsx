import DownloadButtons from './DownloadButtons';

export type Question = { q: string; a: string; sheet?: boolean };
export type QuestionGroup = { title: string; questions: Question[] };

export function TakeAlongRound({ sheet, children }: {
  sheet: 'christmas' | 'animals' | 'family-game-night' | 'road-trip';
  children: React.ReactNode;
}) {
  return (
    <aside className='my-8 rounded-xl border border-blue-200 bg-blue-50 p-5 text-slate-900 sm:p-7'>
      <h2 className='text-xl font-bold'>Take a round with you</h2>
      <p className='my-3 leading-relaxed'>{children}</p>
      <a className='font-bold text-blue-800 underline' href={'/printables/' + sheet + '.pdf'}>
        Print 10 questions and a separate answer key (PDF)
      </a>
      <p className='mt-4 mb-2'>For another round, pick a topic and difficulty for each player in Family Trivia. Play on one phone with an internet connection. Free to download, with in-app subscriptions.</p>
      <DownloadButtons placement={'web-print-' + sheet}
        containerClassName='flex flex-wrap gap-x-6 gap-y-2'
        buttonClassName='py-2 font-semibold text-blue-800 underline' />
    </aside>
  );
}

export function ReadAloudQuestions({ questions, paired = false, start = 1 }: {
  questions: Question[];
  paired?: boolean;
  start?: number;
}) {
  return (
    <ol start={start} className='list-decimal space-y-4 pl-7 marker:font-bold'>
      {questions.map((item, index) => (
        <li key={item.q} className='pl-1'>
          {paired && <><span className='mr-2 font-bold text-blue-800 dark:text-blue-300'>{index % 2 === 0 ? 'Easy' : 'Challenge'}</span>{' '}</>}
          {item.q}
          <details className='mt-1'>
            <summary className='w-fit cursor-pointer text-blue-800 underline dark:text-blue-300'>Show answer</summary>
            <p className='mt-1'>{item.a}</p>
          </details>
        </li>
      ))}
    </ol>
  );
}

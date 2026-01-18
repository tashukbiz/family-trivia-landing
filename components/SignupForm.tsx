'use client';

export default function SignupForm() {
  const handleOutsideClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      e.currentTarget.classList.remove('show');
    }
  };

  const handleClose = (event: React.MouseEvent<HTMLButtonElement>) => {
    const modal = event.currentTarget.closest('.signup-form');
    modal?.classList.remove('show');
  };

  return (
    <>
      <div
        className='signup-form signup-form--ios'
        onClick={handleOutsideClick}
      >
        <div
          className='signup-panel w-[min(520px,92vw)] rounded-2xl bg-white p-6 text-slate-900 shadow-2xl sm:p-8'
          role='dialog'
          aria-modal='true'
          aria-labelledby='early-testing-title-ios'
        >
          <div className='flex items-start justify-between gap-4'>
            <div>
              <p className='text-sm font-semibold uppercase tracking-[0.2em] text-slate-500'>
                Early Testing
              </p>
              <h2
                id='early-testing-title-ios'
                className='mt-2 text-2xl font-bold'
              >
                Family Trivia is in early testing
              </h2>
            </div>
            <button
              type='button'
              onClick={handleClose}
              className='rounded-full border border-slate-200 px-3 py-1 text-sm font-semibold text-slate-500 transition hover:border-slate-300 hover:text-slate-700'
              aria-label='Close iOS download popup'
            >
              Close
            </button>
          </div>
          <p className='mt-4 text-sm leading-relaxed text-slate-600'>
            We&apos;re inviting early testers to try the app before the public
            launch. Install the iOS beta with TestFlight.
          </p>
          <a
            href='https://testflight.apple.com/join/zAf9TQNb'
            target='_blank'
            rel='noreferrer'
            className='mt-6 inline-flex w-full items-center justify-center rounded-full bg-slate-900 px-4 py-3 text-sm font-semibold text-white transition hover:opacity-90'
          >
            Join TestFlight
          </a>
        </div>
      </div>
      <div
        className='signup-form signup-form--android'
        onClick={handleOutsideClick}
      >
        <div
          className='signup-panel w-[min(520px,92vw)] rounded-2xl bg-white p-6 text-slate-900 shadow-2xl sm:p-8'
          role='dialog'
          aria-modal='true'
          aria-labelledby='early-testing-title-android'
        >
          <div className='flex items-start justify-between gap-4'>
            <div>
              <p className='text-sm font-semibold uppercase tracking-[0.2em] text-slate-500'>
                Early Testing
              </p>
              <h2
                id='early-testing-title-android'
                className='mt-2 text-2xl font-bold'
              >
                Family Trivia is in early testing
              </h2>
            </div>
            <button
              type='button'
              onClick={handleClose}
              className='rounded-full border border-slate-200 px-3 py-1 text-sm font-semibold text-slate-500 transition hover:border-slate-300 hover:text-slate-700'
              aria-label='Close Android download popup'
            >
              Close
            </button>
          </div>
          <p className='mt-4 text-sm leading-relaxed text-slate-600'>
            We&apos;re inviting early testers to try the app before the public
            launch. Follow these quick steps to install on Android.
          </p>
          <ol className='mt-5 space-y-3 text-sm text-slate-600'>
            <li>
              <a
                href='https://groups.google.com/g/family-trivia-testers'
                target='_blank'
                rel='noreferrer'
                className='font-semibold text-slate-900 underline decoration-slate-300 underline-offset-2'
              >
                Join the Family Trivia tester group
              </a>
              .
            </li>
            <li>
              <a
                href='https://play.google.com/store/apps/details?id=app.tashuk.familytrivia'
                target='_blank'
                rel='noreferrer'
                className='font-semibold text-slate-900 underline decoration-slate-300 underline-offset-2'
              >
                Install the app from Google Play
              </a>
              .
            </li>
          </ol>
        </div>
      </div>
    </>
  );
}

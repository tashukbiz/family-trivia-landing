import SignupButton from './SignupButton';

export default function BlogCtaSection() {
  return (
    <div className='bg-primary/10 dark:bg-primary/20 rounded-lg p-6 text-center'>
      <p className='text-lg font-semibold text-gray-900 dark:text-white mb-4'>
        🎉 Ready for unlimited trivia fun? Download Family Trivia now!
      </p>
      <div className='flex flex-col sm:flex-row gap-4 justify-center items-center'>
        <SignupButton className='w-full sm:w-auto flex cursor-pointer items-center justify-center rounded-full h-12 px-8 bg-primary text-white text-base font-bold tracking-wide hover:opacity-90 transition-opacity'>
          <span className='truncate'>Download for iOS</span>
        </SignupButton>
        <SignupButton className='w-full sm:w-auto flex cursor-pointer items-center justify-center rounded-full h-12 px-8 bg-primary text-white text-base font-bold tracking-wide hover:opacity-90 transition-opacity'>
          <span className='truncate'>Download for Android</span>
        </SignupButton>
      </div>
      <p className='text-sm text-gray-600 dark:text-gray-400 mt-4'>
        Share this article with friends and family who love trivia!
      </p>
    </div>
  );
}

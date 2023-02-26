import { DateTime } from 'luxon';
import { useState } from 'react';

const LinkedInLogo = (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='24'
    height='24'
    viewBox='0 0 24 24'
    className='w-6 h-6 transition fill-gray-600 hover:fill-gray-400 dark:fill-gray-200 dark:hover:fill-white'
  >
    <path d='M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z' />
  </svg>
);

const GithubIcon = (
  <svg
    viewBox='0 0 98 96'
    className='w-6 h-6 transition fill-gray-600 hover:fill-gray-400 dark:fill-gray-200 dark:hover:fill-white'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path d='M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z' />
  </svg>
);

const MailIcon = (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 24 24'
    fill='currentColor'
    className='w-6 h-6 transition fill-gray-600 hover:fill-gray-400 dark:fill-gray-200 dark:hover:fill-white'
  >
    <path d='M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z' />
    <path d='M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z' />
  </svg>
);

const ClipboardCheckedIcon = (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 24 24'
    fill='currentColor'
    className='w-6 h-6 fill-gray-600 dark:fill-gray-200'
  >
    <path
      fillRule='evenodd'
      d='M7.502 6h7.128A3.375 3.375 0 0118 9.375v9.375a3 3 0 003-3V6.108c0-1.505-1.125-2.811-2.664-2.94a48.972 48.972 0 00-.673-.05A3 3 0 0015 1.5h-1.5a3 3 0 00-2.663 1.618c-.225.015-.45.032-.673.05C8.662 3.295 7.554 4.542 7.502 6zM13.5 3A1.5 1.5 0 0012 4.5h4.5A1.5 1.5 0 0015 3h-1.5z'
      clipRule='evenodd'
    />
    <path
      fillRule='evenodd'
      d='M3 9.375C3 8.339 3.84 7.5 4.875 7.5h9.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-9.75A1.875 1.875 0 013 20.625V9.375zm9.586 4.594a.75.75 0 00-1.172-.938l-2.476 3.096-.908-.907a.75.75 0 00-1.06 1.06l1.5 1.5a.75.75 0 001.116-.062l3-3.75z'
      clipRule='evenodd'
    />
  </svg>
);

const Footer: React.FC = () => {
  const [isClipboardVisible, setIsClipboardVisible] = useState(false);

  return (
    <footer className='flex flex-col'>
      <div className='flex justify-center space-x-4 pb-8'>
        <a
          aria-label='LinkedIn logo'
          href='https://www.linkedin.com/in/kevinqdam'
        >
          {LinkedInLogo}
        </a>
        <a aria-label='GitHub logo' href='https://github.com/kevinqdam'>
          {GithubIcon}
        </a>
        {!isClipboardVisible ? (
          <button
            aria-label='Mail icon'
            onClick={async () => {
              await navigator.clipboard.writeText('me@kevinqdam.com');
              setIsClipboardVisible(true);
              setTimeout(() => setIsClipboardVisible(false), 2_000);
            }}
          >
            {MailIcon}
          </button>
        ) : (
          <div className='relative'>
            {ClipboardCheckedIcon}{' '}
            <div className='flex flex-row align-middle justify-center absolute z-10 top-0 bottom-0 left-9 whitespace-nowrap px-3 py-2 rounded-lg bg-gray-800 text-gray-200 dark:bg-gray-300 dark:text-gray-800 dark:font-semibold'>
              <span className="-my-2">Email copied!</span>
            </div>
          </div>
        )}
      </div>
      <span className='text-center block pb-8'>
        © {DateTime.now().year} Kevin Q. Dam
      </span>
    </footer>
  );
};

export default Footer;

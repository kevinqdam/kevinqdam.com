import classNames from 'classnames';
import { PropsWithChildren, useEffect, useState } from 'react';
import type { Path } from '../layouts/Layout.astro';

type NavBarProps = {
  activePath: Path;
};

type NavItemProps = {
  activePath: Path;
  path: Path;
};

const SunIcon = (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 24 24'
    strokeWidth={1.5}
    stroke='currentColor'
    className='h-6 w-6'
  >
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      d='M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z'
    />
  </svg>
);

const MoonIcon = (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 24 24'
    strokeWidth={1.5}
    stroke='currentColor'
    className='h-6 w-6'
  >
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      d='M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z'
    />
  </svg>
);

const NavItem: React.FC<PropsWithChildren<NavItemProps>> = ({
  activePath,
  path,
  children,
}) => {
  const isActive = activePath === path;

  return (
    <a
      href={path}
      className={classNames(
        isActive ? 'font-semibold' : 'font-normal',
        'flex content-center',
        'rounded-lg px-2 py-1',
        'text-lg dark:text-white',
        'transition',
        'hover:bg-gray-200 dark:hover:bg-gray-600'
      )}
    >
      {children}
    </a>
  );
};

const NavBar: React.FC<NavBarProps> = ({ activePath }) => {
  const [isMounted, setIsMounted] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem('theme') ?? 'light');

  useEffect(() => setIsMounted(true), []);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const handleThemeBtnClick = () =>
    setTheme(theme === 'light' ? 'dark' : 'light');

  return (
    <nav className='flex w-full flex-row items-center justify-between pt-8 pb-12'>
      <div className='flex space-x-4 ml-[-0.45rem]'>
        <NavItem activePath={activePath} path='/'>
          Home
        </NavItem>
        <NavItem activePath={activePath} path='/experience'>
          Experience
        </NavItem>
        <NavItem activePath={activePath} path='/blog'>
          Blog
        </NavItem>
      </div>
      {isMounted && (
        <button
          type='button'
          onClick={handleThemeBtnClick}
          className='rounded-lg bg-gray-200 p-2.5 text-sm text-gray-500 ring-gray-600 transition hover:ring-2 focus:outline-none focus:ring-gray-600 dark:bg-gray-700 dark:text-gray-400 dark:hover:ring-gray-400'
        >
          {theme === 'light' ? MoonIcon : SunIcon}
        </button>
      )}
    </nav>
  );
};

export default NavBar;

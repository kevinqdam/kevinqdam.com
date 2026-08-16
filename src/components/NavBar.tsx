import classNames from 'classnames';
import { useEffect, useRef, useState } from 'react';
import type { PropsWithChildren } from 'react';
import type { Path } from '../types';

type NavBarProps = {
  activePath: Path | null;
};

type NavItemProps = PropsWithChildren<{
  activePath: Path | null;
  path: Path;
  onNavigate?: () => void;
}>;

type Theme = 'light' | 'dark';

const SunIcon = (
  <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
  </svg>
);

const MoonIcon = (
  <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
    <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
  </svg>
);

const MenuIcon = (
  <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
  </svg>
);

const CloseIcon = (
  <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
    <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
  </svg>
);

const NavItem = ({ activePath, path, onNavigate, children }: NavItemProps) => {
  const isActive = activePath === path;

  return (
    <li>
      <a
        href={path}
        onClick={onNavigate}
        aria-current={isActive ? 'page' : undefined}
        className={classNames('nav-link', isActive && 'is-active')}
      >
        {children}
      </a>
    </li>
  );
};

const NavBar = ({ activePath }: NavBarProps) => {
  const [theme, setTheme] = useState<Theme | null>(null);
  const [isMenuExpanded, setIsMenuExpanded] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const storedTheme = window.localStorage.getItem('theme');
    const resolvedTheme: Theme = storedTheme === 'dark' || storedTheme === 'light'
      ? storedTheme
      : window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light';

    setTheme(resolvedTheme);
  }, []);

  useEffect(() => {
    if (!theme) {
      return;
    }

    document.documentElement.classList.toggle('dark', theme === 'dark');
    window.localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    const desktopMediaQuery = window.matchMedia('(min-width: 768px)');
    const closeMenuAtDesktop = (event: MediaQueryListEvent) => {
      if (event.matches) {
        setIsMenuExpanded(false);
      }
    };

    desktopMediaQuery.addEventListener('change', closeMenuAtDesktop);

    return () => desktopMediaQuery.removeEventListener('change', closeMenuAtDesktop);
  }, []);

  useEffect(() => {
    if (!isMenuExpanded) {
      return undefined;
    }

    const dialog = mobileMenuRef.current;
    const focusableElements = dialog
      ? [...dialog.querySelectorAll<HTMLElement>('a[href], button:not([disabled])')]
      : [];
    const firstFocusableElement = focusableElements[0];
    const lastFocusableElement = focusableElements.at(-1);
    const previousBodyOverflow = document.body.style.overflow;

    firstFocusableElement?.focus();

    const manageDialogFocus = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        setIsMenuExpanded(false);
        return;
      }

      if (event.key !== 'Tab' || !firstFocusableElement || !lastFocusableElement) {
        return;
      }

      if (!dialog?.contains(document.activeElement)) {
        event.preventDefault();
        (event.shiftKey ? lastFocusableElement : firstFocusableElement).focus();
      } else if (event.shiftKey && document.activeElement === firstFocusableElement) {
        event.preventDefault();
        lastFocusableElement.focus();
      } else if (!event.shiftKey && document.activeElement === lastFocusableElement) {
        event.preventDefault();
        firstFocusableElement.focus();
      }
    };

    document.addEventListener('keydown', manageDialogFocus);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', manageDialogFocus);
      document.body.style.overflow = previousBodyOverflow;
      if (menuButtonRef.current?.getClientRects().length) {
        menuButtonRef.current.focus();
      }
    };
  }, [isMenuExpanded]);

  const toggleTheme = () => setTheme((current) => current === 'dark' ? 'light' : 'dark');
  const closeMenu = () => setIsMenuExpanded(false);

  return (
    <>
      <nav className="desktop-nav" aria-label="Primary navigation">
        <a className="brand" href="/">
          <span className="brand-mark" aria-hidden="true">KD</span>
          <span>Kevin Dam</span>
        </a>
        <ul className="nav-links">
          <NavItem activePath={activePath} path="/">Home</NavItem>
          <NavItem activePath={activePath} path="/experience">Experience</NavItem>
          <NavItem activePath={activePath} path="/blog">Blog</NavItem>
        </ul>
        <button
          type="button"
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
          title={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
        >
          {theme === 'light' ? MoonIcon : SunIcon}
        </button>
      </nav>

      <nav className="mobile-nav" aria-label="Primary navigation">
        <a className="brand" href="/">
          <span className="brand-mark" aria-hidden="true">KD</span>
          <span>Kevin Dam</span>
        </a>
        <div className="nav-links">
          <button
            ref={menuButtonRef}
            type="button"
            className="menu-toggle"
            onClick={() => setIsMenuExpanded(true)}
            aria-controls="mobile-menu"
            aria-expanded={isMenuExpanded}
            aria-label="Open navigation menu"
          >
            {MenuIcon}
          </button>
          <button
            type="button"
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
            title={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
          >
            {theme === 'light' ? MoonIcon : SunIcon}
          </button>
        </div>
        {isMenuExpanded && (
          <div
            ref={mobileMenuRef}
            id="mobile-menu"
            className="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Site navigation"
          >
            <div>
              <ul className="mobile-menu-list">
                <NavItem activePath={activePath} path="/" onNavigate={closeMenu}>Home</NavItem>
                <NavItem activePath={activePath} path="/experience" onNavigate={closeMenu}>Experience</NavItem>
                <NavItem activePath={activePath} path="/blog" onNavigate={closeMenu}>Blog</NavItem>
              </ul>
              <button type="button" className="menu-close" onClick={closeMenu} aria-label="Close navigation menu">
                {CloseIcon}
              </button>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default NavBar;

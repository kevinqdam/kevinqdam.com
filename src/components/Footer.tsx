import { useState } from 'react';

const LinkedInLogo = (
  <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

const GithubIcon = (
  <svg aria-hidden="true" focusable="false" viewBox="0 0 98 96" fill="currentColor">
    <path d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z" />
  </svg>
);

const MailIcon = (
  <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" fill="currentColor">
    <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
    <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
  </svg>
);

const ClipboardCheckedIcon = (
  <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" fill="currentColor">
    <path fillRule="evenodd" d="M7.5 3.75A2.25 2.25 0 0 1 9.75 1.5h4.5A2.25 2.25 0 0 1 16.5 3.75h1.125A2.625 2.625 0 0 1 20.25 6.375v14.25a2.625 2.625 0 0 1-2.625 2.625H6.375a2.625 2.625 0 0 1-2.625-2.625V6.375A2.625 2.625 0 0 1 6.375 3.75H7.5Zm2.25 0v.75h4.5v-.75a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75Zm5.03 7.72a.75.75 0 0 0-1.06-1.06l-3.47 3.47-1.22-1.22a.75.75 0 0 0-1.06 1.06l1.75 1.75a.75.75 0 0 0 1.06 0l4-4Z" clipRule="evenodd" />
  </svg>
);

const EMAIL = 'me@kevinqdam.com';

const Footer = () => {
  const [isCopied, setIsCopied] = useState(false);

  const copyEmail = async () => {
    await navigator.clipboard.writeText(EMAIL);
    setIsCopied(true);
    window.setTimeout(() => setIsCopied(false), 2_000);
  };

  return (
    <footer className="site-footer">
      <p className="footer-copy">© {new Date().getFullYear()} Kevin Q. Dam</p>
      <nav className="footer-links" aria-label="Contact and profiles">
        <a className="footer-link" aria-label="Kevin Dam on LinkedIn" href="https://www.linkedin.com/in/kevinqdam" target="_blank" rel="noopener noreferrer">
          {LinkedInLogo}
        </a>
        <a className="footer-link" aria-label="Kevin Dam on GitHub" href="https://github.com/kevinqdam" target="_blank" rel="noopener noreferrer">
          {GithubIcon}
        </a>
        <span className="email-action">
          <button className="copy-email" type="button" aria-label="Copy Kevin Dam's email address" onClick={copyEmail}>
            {isCopied ? ClipboardCheckedIcon : MailIcon}
          </button>
          {isCopied && <span className="email-status" role="status">Email copied</span>}
        </span>
      </nav>
    </footer>
  );
};

export default Footer;

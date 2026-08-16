import { DateTime } from 'luxon';
import { useState } from 'react';

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
      <p className="footer-copy">© {DateTime.now().year} Kevin Q. Dam</p>
      <nav className="footer-links" aria-label="Contact and profiles">
        <a href={`mailto:${EMAIL}`}>Email</a>
        <a href="https://www.linkedin.com/in/kevinqdam" target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
        <a href="https://github.com/kevinqdam" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        <span className="email-action">
          <button className="copy-email" type="button" onClick={copyEmail}>
            {isCopied ? 'Copied' : 'Copy email'}
          </button>
          {isCopied && <span className="email-status" role="status">Email copied</span>}
        </span>
      </nav>
    </footer>
  );
};

export default Footer;

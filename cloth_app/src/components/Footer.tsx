import { footerLinks } from "../data";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <a href="#" className="logo">
            FASCO
          </a>
          <nav className="footer-links" aria-label="Footer">
            {footerLinks.map((label) => (
              <a key={label} href="#">
                {label}
              </a>
            ))}
          </nav>
        </div>
        <p className="footer-copy">Copyright © 2026 Xpro . All Rights Reserved.</p>
      </div>
    </footer>
  );
}

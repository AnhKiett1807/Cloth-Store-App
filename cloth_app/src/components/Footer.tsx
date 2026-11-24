import { footerLinks } from "../data";

export default function Footer() {
  return (
    <footer className="footer container">
      <div className="logo">FASCO</div>
      <div className="footer-links">
        {footerLinks.map((l) => (
          <a key={l} href="#">{l}</a>
        ))}
      </div>
      <p className="muted small">Copyright © 2026 FASCO. All rights reserved.</p>
    </footer>
  );
}

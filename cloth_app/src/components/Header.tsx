import { navLinks } from "../data";

export default function Header() {
  return (
    <header className="site-header">
      <div className="nav container">
        <a href="#home" className="logo">FASCO</a>
        <nav>
          {navLinks.map((l) => (
            <a key={l.id} href={`#${l.id}`}>{l.label}</a>
          ))}
        </nav>
        <a href="#newsletter" className="btn btn-dark">Sign Up</a>
      </div>
    </header>
  );
}

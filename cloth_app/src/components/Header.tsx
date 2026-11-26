import { Link } from "react-router-dom";
import { navLinks } from "../data";
import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <header className="site-header">
      <div className="nav container">
        <Link to="/" className="logo">FASCO</Link>

        <nav>
          {navLinks.map((l) => (
            <a key={l.id} href={`/#${l.id}`}>
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Button variant="ghost" render={<Link to="/login" />}>
            Sign In
          </Button>
          <Button render={<Link to="/register" />}>
            Sign Up
          </Button>
        </div>
      </div>
    </header>
  );
}
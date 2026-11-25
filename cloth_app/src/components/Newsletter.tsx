import { useState, type FormEvent } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: call the subscribe API here
    setEmail("");
  };

  return (
    <section id="newsletter" className="newsletter">
      <div className="newsletter-inner">
        <img
          className="news-model news-model-left"
          src="/images/newsletter/left.png"
          alt="Model wearing a mustard yellow coat"
          loading="lazy"
        />

        <div className="news-card">
          <h2 className="serif">Subscribe To Our Newsletter</h2>
          <p className="muted small">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque duis
            ultrices sollicitudin aliquam sem. Scelerisque duis ultrices sollicitudin
          </p>

          <form className="news-form" onSubmit={handleSubmit}>
            <label className="sr-only" htmlFor="news-email">
              Email
            </label>
            <input
              id="news-email"
              type="email"
              name="email"
              placeholder="michael@ymail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit" className="btn btn-dark">
              Subscribe Now
            </button>
          </form>
        </div>

        <img
          className="news-model news-model-right"
          src="/images/newsletter/right.png"
          alt="Model wearing a gray oversized blazer"
          loading="lazy"
        />
      </div>
    </section>
  );
}

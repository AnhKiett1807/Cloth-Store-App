import { useState } from "react";
import { dealImages } from "../data";
import Countdown from "./Countdown";

const DEAL_SECONDS = 2 * 86400 + 6 * 3600 + 5 * 60 + 30;
const VISIBLE = 3;

export default function Deals() {
  const [start, setStart] = useState(0);
  const [active, setActive] = useState<number | null>(null);
  const pages = Math.max(1, dealImages.length - VISIBLE + 1);
  const shown = dealImages.slice(start, start + VISIBLE);

  const go = (s: number) => {
    setStart(s);
    setActive(null);
  };
  const prev = () => go((start - 1 + pages) % pages);
  const next = () => go((start + 1) % pages);

  return (
    <section id="deals" className="deals">
      <div className="container deals-inner">
        <div className="deals-text">
          <h2>Deals Of The Month</h2>
          <p className="muted">
            Discover limited-time offers on selected pieces from our latest collection.
          </p>
          <button className="btn btn-dark">Buy Now</button>
          <h4>Hurry, Before It's Too Late!</h4>
          <Countdown seconds={DEAL_SECONDS} />
        </div>

        <div className="deals-slider">
          <button className="deals-arrow prev" onClick={prev} aria-label="Previous deals">
            ‹
          </button>

          <div className="deals-row">
            {shown.map((d, i) => {
              const n = start + i;
              const isActive = n === active;
              return (
                <button
                  key={d.src}
                  className={isActive ? "deal active" : "deal"}
                  onClick={() => setActive(isActive ? null : n)}
                  aria-pressed={isActive}
                >
                  <img src={d.src} alt={d.alt} />
                  <span className="deal-label">
                    <small>
                      {String(n + 1).padStart(2, "0")}
                      <span className="deal-line" />
                      {d.title}
                    </small>
                    <strong>{d.discount}</strong>
                  </span>
                </button>
              );
            })}
          </div>

          <button className="deals-arrow next" onClick={next} aria-label="Next deals">
            ›
          </button>
        </div>
      </div>
    </section>
  );
}

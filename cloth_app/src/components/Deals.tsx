import { useState } from "react";
import Countdown from "./Countdown";
import Placeholder from "./Placeholder";

const DEAL_SECONDS = 2 * 86400 + 6 * 3600 + 5 * 60 + 30;
const DEAL_COUNT = 3;

export default function Deals() {
  const [active, setActive] = useState(0);

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

        <div className="deals-cards">
          {Array.from({ length: DEAL_COUNT }, (_, i) => (
            <Placeholder
              key={i}
              className={`deal-card ${i === active ? "active" : ""}`}
              label={`Deal ${i + 1}`}
            />
          ))}
          <div className="dots">
            {Array.from({ length: DEAL_COUNT }, (_, i) => (
              <button
                key={i}
                className={i === active ? "dot on" : "dot"}
                onClick={() => setActive(i)}
                aria-label={`Deal ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

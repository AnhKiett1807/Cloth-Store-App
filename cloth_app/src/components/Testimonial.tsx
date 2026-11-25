import { useRef, useState } from "react";
import type { CSSProperties } from "react";
import Placeholder from "./Placeholder";
import { testimonials } from "../data";

export default function Testimonial() {
  const [active, setActive] = useState(0);
  const [touchX, setTouchX] = useState<number | null>(null);
  const total = testimonials.length;

  const armed = useRef(true);
  const lastSwitch = useRef(0);

  const handleCardMove = (e: React.MouseEvent, idx: number) => {
    if (idx === active) {
      armed.current = true;
      return;
    }
    if (!armed.current) return;
    if (e.timeStamp - lastSwitch.current < 400) return;

    armed.current = false;
    lastSwitch.current = e.timeStamp;
    setActive(idx);
  };

  const handleLeave = () => {
    armed.current = true;
  };

  const onTouchStart = (e: React.TouchEvent) => setTouchX(e.touches[0].clientX);
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchX === null) return;
    const dx = e.changedTouches[0].clientX - touchX;
    if (Math.abs(dx) > 40) {
      setActive((i) => (i + (dx < 0 ? 1 : -1) + total) % total);
    }
    setTouchX(null);
  };

  return (
    <section className="section center testimonial-section">
      <div className="container">
        <h2 className="serif">This Is What Our Customers Say</h2>
        <p className="muted">Real words from people who shop with us.</p>
      </div>

      <div
        className="tslider"
        onMouseLeave={handleLeave}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        {testimonials.map((t, idx) => {
          const half = Math.floor(total / 2);
          const offset = ((idx - active + total + half) % total) - half;
          const cls = [
            "tcard",
            offset === 0 && "is-active",
            Math.abs(offset) > 1 && "is-hidden",
          ]
            .filter(Boolean)
            .join(" ");

          return (
            <article
              key={t.name}
              className={cls}
              style={
                {
                  "--o": offset,
                  zIndex: total - Math.abs(offset),
                } as CSSProperties
              }
              onMouseMove={(e) => handleCardMove(e, idx)}
            >
              <div className="tavatar-wrap">
                {t.avatar ? (
                  <img className="avatar" src={t.avatar} alt={t.name} />
                ) : (
                  <Placeholder className="avatar" />
                )}
              </div>
              <div className="tbody">
                <p>"{t.text}"</p>
                <div className="stars">★★★★★</div>
                <hr />
                <strong className="serif">{t.name}</strong>
                <div className="muted small">{t.role}</div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
import { features } from "../data";

export default function Features() {
  return (
    <section className="container features">
      {features.map((f) => (
        <div key={f.title} className="feat">
          <div className="icon" aria-hidden="true">✦</div>
          <div>
            <strong>{f.title}</strong>
            <div className="muted small">{f.text}</div>
          </div>
        </div>
      ))}
    </section>
  );
}

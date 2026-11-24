import { instagramColors } from "../data";

export default function Instagram() {
  return (
    <section className="section center">
      <h2>Follow Us On Instagram</h2>
      <p className="muted">Tag your outfits with #fasco to be featured.</p>
      <div className="insta">
        {instagramColors.map((c, i) => (
          <div
            key={i}
            className="insta-tile"
            style={{ background: c, marginTop: i % 2 ? 24 : 0 }}
          />
        ))}
      </div>
    </section>
  );
}

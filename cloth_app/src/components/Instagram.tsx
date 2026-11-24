import { instagramImages } from "../data";

export default function Instagram() {
  return (
    <section className="section center insta-section">
      <h2>Follow Us On Instagram</h2>
      <p className="muted">Tag your outfits with #fasco to be featured.</p>
      <div className="insta">
        {instagramImages.map((d) => (
          <div key={d.src} className="insta-tile">
            <img src={d.src} alt={d.alt} loading="lazy" />
          </div>
        ))}
      </div>
    </section>
  );
}

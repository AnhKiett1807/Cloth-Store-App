import Placeholder from "./Placeholder";

export default function Testimonial() {
  return (
    <section className="container section center">
      <h2 className="serif">This Is What Our Customers Say</h2>
      <p className="muted">Real words from people who shop with us.</p>
      <div className="testimonial">
        <Placeholder className="avatar" />
        <div>
          <div className="stars">★★★★★</div>
          <p>
            "The quality is excellent and delivery was fast. The fit is exactly as shown, I will order again."
          </p>
          <strong>James E.</strong>
          <div className="muted small">Traveller</div>
        </div>
      </div>
    </section>
  );
}

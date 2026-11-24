import Placeholder from "./Placeholder";

export default function FeaturedProduct() {
  return (
    <section id="packages" className="feature">
      <Placeholder className="feature-img" label="Featured model" />
      <div className="feature-text">
        <p className="muted small">WOMEN FASHION</p>
        <h2>Peaky Blinders</h2>
        <h5>DESCRIPTION</h5>
        <p className="muted">
          Classic tailoring inspired by 1920s style, cut from a soft wool blend that holds its shape.
        </p>
        <div className="size-row">
          <span>Size</span>
          <strong>M</strong>
        </div>
        <div className="price big">$100.00</div>
        <button className="btn btn-dark">Buy Now</button>
      </div>
    </section>
  );
}

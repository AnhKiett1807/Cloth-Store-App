export default function Newsletter() {
  return (
    <section id="newsletter" className="newsletter">
      <div className="news-card">
        <h2 className="serif">Subscribe To Our Newsletter</h2>
        <p className="muted">Get news about new arrivals and exclusive offers.</p>
        <form className="news-form" onSubmit={(e) => e.preventDefault()}>
          <input type="email" placeholder="michael@example.com" required />
          <button className="btn btn-dark">Subscribe Now</button>
        </form>
      </div>
    </section>
  );
}

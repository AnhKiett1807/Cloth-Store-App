import { heroImages } from "../data";

export default function Hero() {
  return (
    <section id="home" className="hero container">
      <div className="hero-side">
        <img src={heroImages.left} alt="Man sitting on a wooden box" />
      </div>

      <div className="hero-center">
        <img className="hero-photo" src={heroImages.top} alt="Four women in dark and white outfits" />
        <div className="hero-text">
          <h1>ULTIMATE</h1>
          <h1 className="outline">SALE</h1>
          <p className="hero-tag">NEW COLLECTION</p>
          <a href="#new-arrivals" className="btn btn-dark">SHOP NOW</a>
        </div>
        <img className="hero-photo" src={heroImages.bottom} alt="Two smiling women on a pink background" />
      </div>

      <div className="hero-side">
        <img src={heroImages.right} alt="Man in a rust turtleneck on a stool" />
      </div>
    </section>
  );
}

import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Brands from "./components/Brands";
import Deals from "./components/Deals";
import NewArrivals from "./components/NewArrivals";
import FeaturedProduct from "./components/FeaturedProduct";
import Features from "./components/Features";
import Instagram from "./components/Instagram";
import Testimonial from "./components/Testimonial";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="page">
      <Header />
      <Hero />
      <Brands />
      <Deals />
      <NewArrivals />
      <FeaturedProduct />
      <Features />
      <Instagram />
      <Testimonial />
      <Newsletter />
      <Footer />
    </div>
  );
}

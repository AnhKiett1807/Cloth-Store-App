import { useState } from "react";
import { products, tabs } from "../data";
import ProductCard from "./ProductCard";

export default function NewArrivals() {
  const [tab, setTab] = useState("New Arrivals");

  const shown =
    tab === "New Arrivals" || tab === "Bestsellers"
      ? products
      : products.filter((p) => p.cat === tab);

  return (
    <section id="new-arrivals" className="container section center">
      <h2>New Arrivals</h2>
      <p className="muted">Browse the pieces that just landed in our store this season.</p>

      <div className="tabs">
        {tabs.map((x) => (
          <button key={x} className={x === tab ? "tab on" : "tab"} onClick={() => setTab(x)}>
            {x}
          </button>
        ))}
      </div>

      <div className="grid">
        {shown.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>

      <button className="btn btn-dark">View More</button>
    </section>
  );
}

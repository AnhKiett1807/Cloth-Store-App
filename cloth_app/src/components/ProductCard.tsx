import type { Product } from "../data";
import Placeholder from "./Placeholder";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <article className="product">
      <Placeholder className="product-img" label={product.name} />
      <div className="product-row">
        <strong>{product.name}</strong>
        <span className="stars">★★★★★</span>
      </div>
      <div className="muted small">{product.brand}</div>
      <div className="price">${product.price.toFixed(2)}</div>
    </article>
  );
}

import type { Product } from "../data";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <article className="product">
      <img className="product-img" src={product.image} alt={product.name} />
      <div className="product-row">
        <strong>{product.name}</strong>
        <span className="stars">★★★★★</span>
      </div>
      <div className="muted small">{product.brand}</div>
      <div className="price">${product.price.toFixed(2)}</div>
    </article>
  );
}
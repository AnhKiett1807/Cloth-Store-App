import { brands } from "../data";

export default function Brands() {
  return (
    <div className="brands container">
      {brands.map((b) => (
        <span key={b.name} className={b.cls}>{b.name}</span>
      ))}
    </div>
  );
}

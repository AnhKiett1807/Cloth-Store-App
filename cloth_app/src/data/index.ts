export type Product = {
  id: number;
  name: string;
  brand: string;
  price: number;
  cat: string;
};

export const brands = [
  { name: "CHANEL", cls: "chanel" },
  { name: "LOUIS VUITTON", cls: "lv" },
  { name: "PRADA", cls: "prada" },
  { name: "Calvin Klein", cls: "ck" },
  { name: "DENIM", cls: "denim" },
];

// Ảnh nằm trong public/images/hero/
export const heroImages = {
  left: "/images/hero/hero-left.png",
  right: "/images/hero/hero-right.png",
  top: "/images/hero/hero-top.png",
  bottom: "/images/hero/hero-bottom.png",
};

export const tabs = ["New Arrivals", "Bestsellers", "Women", "Men", "Accessories"];

export const products: Product[] = [
  { id: 1, name: "Rounded Red Hat", brand: "Hats", price: 29.0, cat: "Women" },
  { id: 2, name: "Linen Blouse", brand: "Tops", price: 80.0, cat: "Women" },
  { id: 3, name: "Straw Beach Hat", brand: "Hats", price: 35.0, cat: "Accessories" },
  { id: 4, name: "Wool Overcoat", brand: "Coats", price: 120.0, cat: "Men" },
  { id: 5, name: "Floral Dress", brand: "Dresses", price: 65.0, cat: "Women" },
  { id: 6, name: "White Shirt", brand: "Shirts", price: 45.0, cat: "Men" },
];

export const features = [
  { title: "High Quality", text: "Crafted from top materials" },
  { title: "Warranty Protection", text: "Over 2 years" },
  { title: "Free Shipping", text: "Order over $150" },
  { title: "24 / 7 Support", text: "Dedicated support" },
];

export const instagramColors = [
  "#d9c3a5", "#5b6770", "#27c4c9", "#8a6f5a",
  "#2f4a8a", "#e0a370", "#3a3a3a", "#e9c9c9",
];

export const navLinks = [
  { label: "Home", id: "home" },
  { label: "Deals", id: "deals" },
  { label: "New Arrivals", id: "new-arrivals" },
  { label: "Packages", id: "packages" },
  { label: "Newsletter", id: "newsletter" },
];

export const footerLinks = ["Support Center", "Invoicing", "Contract", "Careers", "Blog", "FAQ"];

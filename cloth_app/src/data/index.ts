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

export const instagramImages = [
  { src: "/images/instagram/image1.png", alt: "Instagram 1" },
  { src: "/images/instagram/image2.png", alt: "Instagram 2" },
  { src: "/images/instagram/image3.png", alt: "Instagram 3" },
  { src: "/images/instagram/image4.png", alt: "Instagram 4" },
  { src: "/images/instagram/image5.png", alt: "Instagram 5" },
  { src: "/images/instagram/image6.png", alt: "Instagram 6" },
  { src: "/images/instagram/image7.png", alt: "Instagram 7" },
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

// Ảnh Deals nằm trong public/images/deals/ (thêm hoặc bớt tùy ý)
export const dealImages = [
  { src: "/images/deals/image1.png", alt: "Deal 1", title: "Spring Sale", discount: "30% OFF" },
  { src: "/images/deals/image2.png", alt: "Deal 2", title: "Summer Sale", discount: "20% OFF" },
  { src: "/images/deals/image3.png", alt: "Deal 3", title: "Autumn Sale", discount: "15% OFF" },
  { src: "/images/deals/image4.png", alt: "Deal 4", title: "Winter Sale", discount: "25% OFF" },
  { src: "/images/deals/image5.png", alt: "Deal 5", title: "Flash Sale", discount: "10% OFF" },
];
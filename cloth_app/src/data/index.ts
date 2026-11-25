export type Product = {
  id: number;
  name: string;
  brand: string;
  price: number;
  cat: "Women" | "Men" | "Accessories";
  isNew: boolean;
  isBestseller: boolean;
  image: string;
};

export const brands = [
  { name: "CHANEL", cls: "chanel" },
  { name: "LOUIS VUITTON", cls: "lv" },
  { name: "PRADA", cls: "prada" },
  { name: "Calvin Klein", cls: "ck" },
  { name: "DENIM", cls: "denim" },
];

export const heroImages = {
  left: "/images/hero/hero-left.png",
  right: "/images/hero/hero-right.png",
  top: "/images/hero/hero-top.png",
  bottom: "/images/hero/hero-bottom.png",
};

export const tabs = ["New Arrivals", "Bestsellers", "Women", "Men", "Accessories"];

export const products: Product[] = [
  { id: 1, name: "Rounded Red Hat", brand: "Hats", price: 29.0, cat: "Women", isNew: true, isBestseller: false, image: "/images/products/image1.png" },
  { id: 2, name: "Linen Blouse", brand: "Tops", price: 80.0, cat: "Women", isNew: true, isBestseller: true, image: "/images/products/image2.png" },
  { id: 3, name: "Straw Beach Hat", brand: "Hats", price: 35.0, cat: "Accessories", isNew: true, isBestseller: true, image: "/images/products/image3.png" },
  { id: 4, name: "Wool Overcoat", brand: "Coats", price: 120.0, cat: "Men", isNew: true, isBestseller: true, image: "/images/products/image4.png" },
  { id: 5, name: "Floral Dress", brand: "Dresses", price: 65.0, cat: "Women", isNew: true, isBestseller: true, image: "/images/products/image5.png" },
  { id: 6, name: "White Shirt", brand: "Shirts", price: 45.0, cat: "Men", isNew: true, isBestseller: false, image: "/images/products/image6.png" },
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

export const dealImages = [
  { src: "/images/deals/image1.png", alt: "Deal 1", title: "Spring Sale", discount: "30% OFF" },
  { src: "/images/deals/image2.png", alt: "Deal 2", title: "Summer Sale", discount: "20% OFF" },
  { src: "/images/deals/image3.png", alt: "Deal 3", title: "Autumn Sale", discount: "15% OFF" },
  { src: "/images/deals/image4.png", alt: "Deal 4", title: "Winter Sale", discount: "25% OFF" },
  { src: "/images/deals/image5.png", alt: "Deal 5", title: "Flash Sale", discount: "10% OFF" },
];

export const featuredImage = "/images/featured/image.png";

export const testimonials = [
  {
    name: "James K.",
    role: "Traveler",
    text: "You won't regret it. I would like to personally thank you for your outstanding product. Absolutely wonderful!",
    avatar: "/images/testimonials/image1.png", 
  },
  {
    name: "Sarah M.",
    role: "Photographer",
    text: "The quality is excellent and delivery was fast. The fit is exactly as shown, I will order again.",
    avatar: "/images/testimonials/image2.png",
  },
  {
    name: "Allen W.",
    role: "Designer",
    text: "Exactly what I was looking for. Thank you for making it so pleasant and most of all hassle free!",
    avatar: "/images/testimonials/image3.png",
  },
  {
    name: "Linh T.",
    role: "Blogger",
    text: "Great service and beautiful products. Everything arrived on time and the packaging was perfect.",
    avatar: "/images/testimonials/image4.png",
  },
];
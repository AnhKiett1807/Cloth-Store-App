import "./App.css";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
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
import { LoginPage, RegisterPage } from "@/components/auth";
import AdminLayout from "./components/admin/AdminLayout";
import DashboardOverview from "./components/admin/DashboardOverview";
import ProductsPage from "./components/admin/ProductsPage";

function StoreLayout() {
  return (
    <div className="page">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

function HomePage() {
  return (
    <>
      <Hero />
      <Brands />
      <Deals />
      <NewArrivals />
      <FeaturedProduct />
      <Features />
      <Instagram />
      <Testimonial />
      <Newsletter />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Nhóm route khách hàng (có Header & Footer) */}
        <Route element={<StoreLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Route>

        {/* Nhóm route Admin (Sidebar + Topbar riêng) */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<DashboardOverview />} />
          <Route path="products" element={<ProductsPage />} />
          <Route
            path="orders"
            element={<div className="text-lg font-semibold">Orders Management</div>}
          />
          <Route
            path="customers"
            element={<div className="text-lg font-semibold">Customers List</div>}
          />
          <Route
            path="settings"
            element={<div className="text-lg font-semibold">Store Settings</div>}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
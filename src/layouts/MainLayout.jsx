import { Outlet } from "react-router-dom";
import { Navbar } from "../components/common/Navbar";
import { Footer } from "../components/common/Footer";
import { CartDrawer } from "../components/cart/CartDrawer";

export const MainLayout = () => (
  <div className="min-h-dvh bg-[#f6f8f4] text-slate-950 dark:bg-slate-950 dark:text-white">
    <Navbar />
    <Outlet />
    <Footer />
    <CartDrawer />
  </div>
);

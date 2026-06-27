import { Apple, Heart, Moon, PackageSearch, ShoppingCart, Sun, UserRound } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { SearchBar } from "../search/SearchBar";
import { toggleCartDrawer } from "../../store/cartSlice";
import { useTheme } from "../../context/useTheme";

export const Navbar = () => {
  const dispatch = useDispatch();
  const cartCount = useSelector((state) => state.cart.items.reduce((sum, item) => sum + item.quantity, 0));
  const wishlistCount = useSelector((state) => state.wishlist.items.length);
  const { theme, toggleTheme } = useTheme();

  const navClass = ({ isActive }) =>
    `hidden rounded-lg px-3 py-2 text-sm font-bold transition md:inline-flex ${
      isActive ? "bg-fresh-50 text-fresh-700 dark:bg-white/10 dark:text-white" : "text-slate-600 dark:text-slate-300"
    }`;

  return (
    <header className="sticky top-0 z-40 border-b border-white/60 bg-white/80 backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/82">
      <div className="container-page flex min-h-20 flex-col gap-3 py-3 lg:flex-row lg:items-center">
        <div className="flex items-center justify-between gap-3">
          <Link to="/" className="flex items-center gap-2 text-xl font-extrabold">
            <span className="grid h-10 w-10 place-items-center rounded-lg bg-fresh-600 text-white">
              <Apple size={21} />
            </span>
            FreshMart
          </Link>
          <div className="flex items-center gap-2 lg:hidden">
            <button onClick={toggleTheme} className="icon-button" aria-label="Toggle theme">
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button onClick={() => dispatch(toggleCartDrawer(true))} className="icon-button relative" aria-label="Cart">
              <ShoppingCart size={18} />
              {cartCount > 0 && <span className="absolute -right-1 -top-1 rounded-full bg-citrus px-1.5 text-xs font-black">{cartCount}</span>}
            </button>
          </div>
        </div>
        <nav className="flex items-center gap-1">
          <NavLink to="/products" className={navClass}>
            <PackageSearch size={16} className="mr-1" /> Products
          </NavLink>
          <NavLink to="/orders" className={navClass}>Orders</NavLink>
          <NavLink to="/admin" className={navClass}>Admin</NavLink>
        </nav>
        <div className="min-w-0 flex-1">
          <SearchBar />
        </div>
        <div className="hidden items-center gap-2 lg:flex">
          <button onClick={toggleTheme} className="icon-button" aria-label="Toggle theme">
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <Link to="/wishlist" className="icon-button relative" aria-label="Wishlist">
            <Heart size={18} />
            {wishlistCount > 0 && <span className="absolute -right-1 -top-1 rounded-full bg-rose-500 px-1.5 text-xs font-black text-white">{wishlistCount}</span>}
          </Link>
          <Link to="/profile" className="icon-button" aria-label="Profile">
            <UserRound size={18} />
          </Link>
          <button onClick={() => dispatch(toggleCartDrawer(true))} className="icon-button relative" aria-label="Cart">
            <ShoppingCart size={18} />
            {cartCount > 0 && <span className="absolute -right-1 -top-1 rounded-full bg-citrus px-1.5 text-xs font-black">{cartCount}</span>}
          </button>
        </div>
      </div>
    </header>
  );
};

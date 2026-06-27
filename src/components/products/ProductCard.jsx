import { memo } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Clock, Heart, ShoppingBag, Star } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { addToCart, toggleCartDrawer } from "../../store/cartSlice";
import { toggleWishlist } from "../../store/wishlistSlice";
import { formatCurrency } from "../../utils/cart";

const ProductCardComponent = ({ product }) => {
  const dispatch = useDispatch();
  const isWishlisted = useSelector((state) =>
    state.wishlist.items.some((item) => item.id === product.id)
  );

  const handleCart = () => {
    dispatch(addToCart(product));
    dispatch(toggleCartDrawer(true));
    toast.success(`${product.name} added to cart`);
  };

  return (
    <motion.article
      whileHover={{ y: -5 }}
      className="glass group flex h-full flex-col overflow-hidden rounded-xl p-3"
    >
      <Link to={`/product/${product.id}`} className="relative overflow-hidden rounded-lg bg-slate-100">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="aspect-[4/3] h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
        <span className="absolute left-2 top-2 rounded-md bg-citrus px-2 py-1 text-xs font-extrabold text-slate-950">
          {product.offerPercentage}% OFF
        </span>
        <span className="absolute bottom-2 left-2 inline-flex items-center gap-1 rounded-md bg-white/90 px-2 py-1 text-xs font-bold text-slate-800">
          <Clock size={12} /> {product.deliveryTime}
        </span>
      </Link>
      <div className="flex flex-1 flex-col pt-3">
        <div className="flex items-start justify-between gap-2">
          <Link to={`/product/${product.id}`} className="font-bold leading-snug text-slate-950 dark:text-white">
            {product.name}
          </Link>
          <button
            onClick={() => dispatch(toggleWishlist(product))}
            className="icon-button h-9 w-9 shrink-0"
            aria-label="Toggle wishlist"
          >
            <Heart size={17} className={isWishlisted ? "fill-rose-500 text-rose-500" : ""} />
          </button>
        </div>
        <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">{product.unit}</p>
        <div className="mt-2 flex items-center gap-1 text-sm font-bold text-amber-600">
          <Star size={15} className="fill-amber-400 text-amber-400" />
          {product.rating}
          <span className="font-medium text-slate-500">({product.reviewCount})</span>
        </div>
        <div className="mt-auto flex items-end justify-between gap-3 pt-4">
          <div>
            <p className="text-lg font-extrabold">{formatCurrency(product.discountPrice)}</p>
            <p className="text-xs text-slate-400 line-through">{formatCurrency(product.price)}</p>
          </div>
          <button onClick={handleCart} className="btn-primary h-10 px-3" aria-label="Add to cart">
            <ShoppingBag size={17} />
            <span className="hidden sm:inline">Add</span>
          </button>
        </div>
      </div>
    </motion.article>
  );
};

export const ProductCard = memo(ProductCardComponent);

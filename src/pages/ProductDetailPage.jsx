import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { Clock, Heart, ShoppingCart, Star } from "lucide-react";
import { addToCart, toggleCartDrawer } from "../store/cartSlice";
import { toggleWishlist } from "../store/wishlistSlice";
import { viewProduct } from "../store/productsSlice";
import { formatCurrency } from "../utils/cart";
import { ProductShelf } from "../components/home/ProductShelf";
import { PageTransition } from "../components/common/PageTransition";

const ProductDetailPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.items);
  const product = products.find((item) => item.id === id);
  const related = products.filter((item) => item.category === product?.category && item.id !== id).slice(0, 4);

  useEffect(() => {
    if (product) dispatch(viewProduct(product.id));
  }, [dispatch, product]);

  if (!product) {
    return <section className="container-page py-10">Product not found.</section>;
  }

  const add = () => {
    dispatch(addToCart(product));
    dispatch(toggleCartDrawer(true));
    toast.success("Added to cart");
  };

  return (
    <PageTransition>
      <section className="container-page grid gap-8 py-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="glass overflow-hidden rounded-2xl p-3">
          <img src={product.image} alt={product.name} className="aspect-[4/3] w-full rounded-xl object-cover" />
        </div>
        <div className="self-center">
          <Link to={`/category/${product.category}`} className="text-sm font-bold text-fresh-700">
            {product.category}
          </Link>
          <h1 className="mt-2 text-4xl font-extrabold tracking-normal">{product.name}</h1>
          <p className="muted mt-3 max-w-xl">{product.description}</p>
          <div className="mt-4 flex flex-wrap gap-3">
            <span className="inline-flex items-center gap-1 rounded-lg bg-amber-100 px-3 py-2 text-sm font-bold text-amber-700">
              <Star size={16} className="fill-amber-500" /> {product.rating} ({product.reviewCount})
            </span>
            <span className="inline-flex items-center gap-1 rounded-lg bg-fresh-100 px-3 py-2 text-sm font-bold text-fresh-700">
              <Clock size={16} /> {product.deliveryTime}
            </span>
          </div>
          <div className="mt-6">
            <span className="text-4xl font-extrabold">{formatCurrency(product.discountPrice)}</span>
            <span className="ml-3 text-lg text-slate-400 line-through">{formatCurrency(product.price)}</span>
            <p className="muted mt-1">Per {product.unit}. {product.stock} units in stock.</p>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <button onClick={add} className="btn-primary">
              <ShoppingCart size={18} /> Add To Cart
            </button>
            <button onClick={() => dispatch(toggleWishlist(product))} className="btn-secondary">
              <Heart size={18} /> Wishlist
            </button>
          </div>
        </div>
      </section>
      {related.length > 0 && <ProductShelf title="Popular Near You" products={related} />}
    </PageTransition>
  );
};

export default ProductDetailPage;

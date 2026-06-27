import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { addToCart } from "../store/cartSlice";
import { removeFromWishlist } from "../store/wishlistSlice";
import { ProductGrid } from "../components/products/ProductGrid";
import { PageTransition } from "../components/common/PageTransition";

const WishlistPage = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.wishlist.items);

  const moveAll = () => {
    items.forEach((item) => {
      dispatch(addToCart(item));
      dispatch(removeFromWishlist(item.id));
    });
    toast.success("Wishlist moved to cart");
  };

  return (
    <PageTransition>
      <section className="container-page py-8">
        <div className="mb-5 flex items-end justify-between">
          <div>
            <h1 className="section-title">Wishlist</h1>
            <p className="muted mt-1">Saved favorites for your next basket.</p>
          </div>
          {items.length > 0 && <button onClick={moveAll} className="btn-primary">Move all to cart</button>}
        </div>
        <ProductGrid products={items} />
      </section>
    </PageTransition>
  );
};

export default WishlistPage;

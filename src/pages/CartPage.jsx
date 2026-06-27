import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Trash2 } from "lucide-react";
import {
  decrementQuantity,
  incrementQuantity,
  moveSavedToCart,
  removeFromCart,
  saveForLater
} from "../store/cartSlice";
import { QuantityStepper } from "../components/common/QuantityStepper";
import { calculateCartTotals, formatCurrency } from "../utils/cart";
import { PageTransition } from "../components/common/PageTransition";

const CartPage = () => {
  const dispatch = useDispatch();
  const { items, savedForLater } = useSelector((state) => state.cart);
  const totals = calculateCartTotals(items);

  return (
    <PageTransition>
      <section className="container-page grid gap-6 py-8 lg:grid-cols-[1fr_360px]">
        <div>
          <h1 className="section-title">Cart</h1>
          <div className="mt-5 space-y-4">
            {items.length === 0 && <div className="glass rounded-xl p-6">Your cart is empty.</div>}
            {items.map((item) => (
              <div className="glass flex gap-4 rounded-xl p-4" key={item.id}>
                <img src={item.image} alt="" className="h-24 w-24 rounded-lg object-cover" loading="lazy" />
                <div className="min-w-0 flex-1">
                  <h3 className="font-extrabold">{item.name}</h3>
                  <p className="muted">{formatCurrency(item.discountPrice)} / {item.unit}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <button onClick={() => dispatch(saveForLater(item.id))} className="text-sm font-bold text-fresh-700">
                      Save for later
                    </button>
                    <button onClick={() => dispatch(removeFromCart(item.id))} className="inline-flex items-center gap-1 text-sm font-bold text-rose-600">
                      <Trash2 size={15} /> Remove
                    </button>
                  </div>
                </div>
                <QuantityStepper
                  quantity={item.quantity}
                  onIncrement={() => dispatch(incrementQuantity(item.id))}
                  onDecrement={() => dispatch(decrementQuantity(item.id))}
                />
              </div>
            ))}
          </div>
          {savedForLater.length > 0 && (
            <div className="mt-8">
              <h2 className="text-xl font-extrabold">Saved For Later</h2>
              <div className="mt-4 grid gap-3">
                {savedForLater.map((item) => (
                  <div className="glass flex items-center justify-between rounded-xl p-3" key={item.id}>
                    <span className="font-bold">{item.name}</span>
                    <button className="btn-secondary py-2" onClick={() => dispatch(moveSavedToCart(item.id))}>Move to cart</button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
        <aside className="glass h-fit rounded-xl p-5">
          <h2 className="text-xl font-extrabold">Order Summary</h2>
          {[
            ["Item price", totals.itemTotal],
            ["Delivery charges", totals.deliveryCharges],
            ["Platform fee", totals.platformFee],
            ["GST", totals.gst]
          ].map(([label, value]) => (
            <div className="mt-3 flex justify-between text-sm" key={label}>
              <span className="text-slate-500 dark:text-slate-300">{label}</span>
              <span className="font-bold">{formatCurrency(value)}</span>
            </div>
          ))}
          <div className="mt-5 flex justify-between border-t border-slate-200 pt-4 text-lg font-extrabold dark:border-white/10">
            <span>Grand total</span>
            <span>{formatCurrency(totals.grandTotal)}</span>
          </div>
          <Link to="/checkout" className="btn-primary mt-5 w-full">Checkout</Link>
        </aside>
      </section>
    </PageTransition>
  );
};

export default CartPage;

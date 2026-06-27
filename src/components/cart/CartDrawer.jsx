import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { X } from "lucide-react";
import {
  decrementQuantity,
  incrementQuantity,
  removeFromCart,
  toggleCartDrawer
} from "../../store/cartSlice";
import { calculateCartTotals, formatCurrency } from "../../utils/cart";
import { QuantityStepper } from "../common/QuantityStepper";

export const CartDrawer = () => {
  const dispatch = useDispatch();
  const { items, isDrawerOpen } = useSelector((state) => state.cart);
  const totals = calculateCartTotals(items);

  return (
    <AnimatePresence>
      {isDrawerOpen && (
        <>
          <motion.button
            aria-label="Close cart"
            className="fixed inset-0 z-50 bg-black/40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => dispatch(toggleCartDrawer(false))}
          />
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 280, damping: 30 }}
            className="fixed right-0 top-0 z-50 flex h-dvh w-full max-w-md flex-col bg-white shadow-2xl dark:bg-slate-950"
          >
            <div className="flex items-center justify-between border-b border-slate-200 p-4 dark:border-white/10">
              <div>
                <h2 className="text-xl font-extrabold">Cart</h2>
                <p className="muted">{items.length} items in your basket</p>
              </div>
              <button className="icon-button" onClick={() => dispatch(toggleCartDrawer(false))} aria-label="Close">
                <X size={20} />
              </button>
            </div>
            <div className="flex-1 space-y-3 overflow-auto p-4">
              {items.length === 0 && <p className="muted">Your cart is waiting for something fresh.</p>}
              {items.map((item) => (
                <div key={item.id} className="flex gap-3 rounded-xl border border-slate-200 p-3 dark:border-white/10">
                  <img src={item.image} alt="" className="h-16 w-16 rounded-lg object-cover" loading="lazy" />
                  <div className="min-w-0 flex-1">
                    <p className="font-bold">{item.name}</p>
                    <p className="text-sm text-slate-500">{formatCurrency(item.discountPrice)} / {item.unit}</p>
                    <button
                      onClick={() => dispatch(removeFromCart(item.id))}
                      className="mt-1 text-xs font-bold text-rose-600"
                    >
                      Remove
                    </button>
                  </div>
                  <QuantityStepper
                    quantity={item.quantity}
                    onIncrement={() => dispatch(incrementQuantity(item.id))}
                    onDecrement={() => dispatch(decrementQuantity(item.id))}
                  />
                </div>
              ))}
            </div>
            <div className="border-t border-slate-200 p-4 dark:border-white/10">
              <div className="mb-3 flex items-center justify-between font-bold">
                <span>Total</span>
                <span>{formatCurrency(totals.grandTotal)}</span>
              </div>
              <Link
                to="/cart"
                onClick={() => dispatch(toggleCartDrawer(false))}
                className="btn-primary w-full"
              >
                View Cart
              </Link>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
};

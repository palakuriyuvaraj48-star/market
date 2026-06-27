import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { CheckoutForm } from "../components/checkout/CheckoutForm";
import { applyCoupon, clearCart } from "../store/cartSlice";
import { placeOrder } from "../store/ordersSlice";
import { cartService } from "../services/cartService";
import { calculateCartTotals, formatCurrency } from "../utils/cart";
import { PageTransition } from "../components/common/PageTransition";

const CheckoutPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { items, coupon } = useSelector((state) => state.cart);
  const totals = calculateCartTotals(items);
  const [couponCode, setCouponCode] = useState("");
  const discount = coupon && totals.itemTotal >= coupon.minOrder ? coupon.discount : 0;
  const payable = Math.max(totals.grandTotal - discount, 0);

  const validateCoupon = async () => {
    const validCoupon = await cartService.validateCoupon(couponCode);
    if (validCoupon) {
      dispatch(applyCoupon(validCoupon));
      toast.success("Coupon applied");
    } else {
      toast.error("Invalid coupon");
    }
  };

  const submit = (data) => {
    if (!items.length) {
      toast.error("Your cart is empty");
      return;
    }
    dispatch(placeOrder({ cartItems: items, total: payable, address: data.address, payment: data.payment }));
    dispatch(clearCart());
    toast.success("Order placed");
    navigate("/orders");
  };

  return (
    <PageTransition>
      <section className="container-page grid gap-6 py-8 lg:grid-cols-[1fr_360px]">
        <CheckoutForm onSubmit={submit} />
        <aside className="glass h-fit rounded-xl p-5">
          <h2 className="text-xl font-extrabold">Order Summary</h2>
          {items.map((item) => (
            <div className="mt-3 flex justify-between text-sm" key={item.id}>
              <span>{item.name} x {item.quantity}</span>
              <span className="font-bold">{formatCurrency(item.discountPrice * item.quantity)}</span>
            </div>
          ))}
          <div className="mt-5 flex gap-2">
            <input
              value={couponCode}
              onChange={(event) => setCouponCode(event.target.value)}
              placeholder="Coupon code"
              className="min-w-0 flex-1 rounded-lg border border-slate-200 bg-white px-3 py-2 dark:border-white/10 dark:bg-white/10"
            />
            <button onClick={validateCoupon} className="btn-secondary py-2">Apply</button>
          </div>
          {discount > 0 && <p className="mt-3 text-sm font-bold text-fresh-700">Coupon discount: {formatCurrency(discount)}</p>}
          <div className="mt-5 flex justify-between border-t border-slate-200 pt-4 text-lg font-extrabold dark:border-white/10">
            <span>Payable</span>
            <span>{formatCurrency(payable)}</span>
          </div>
        </aside>
      </section>
    </PageTransition>
  );
};

export default CheckoutPage;

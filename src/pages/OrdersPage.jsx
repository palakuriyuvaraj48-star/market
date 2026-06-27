import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { addToCart } from "../store/cartSlice";
import { PageTransition } from "../components/common/PageTransition";
import { formatCurrency } from "../utils/cart";

const OrdersPage = () => {
  const dispatch = useDispatch();
  const orders = useSelector((state) => state.orders.items);
  const products = useSelector((state) => state.products.items);

  const reorder = (order) => {
    order.items.forEach((name) => {
      const product = products.find((item) => item.name === name);
      if (product) dispatch(addToCart(product));
    });
    toast.success("Items added to cart");
  };

  return (
    <PageTransition>
      <section className="container-page py-8">
        <h1 className="section-title">Orders</h1>
        <div className="mt-5 grid gap-4">
          {orders.map((order) => (
            <article className="glass rounded-xl p-5" key={order.id}>
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h2 className="text-lg font-extrabold">Order {order.id}</h2>
                  <p className="muted">{order.placedAt} - {order.eta}</p>
                  <p className="mt-3 text-sm">{order.items.join(", ")}</p>
                </div>
                <div className="text-left sm:text-right">
                  <span className="rounded-lg bg-fresh-100 px-3 py-2 text-sm font-bold text-fresh-700">{order.status}</span>
                  <p className="mt-3 text-xl font-extrabold">{formatCurrency(order.total)}</p>
                </div>
              </div>
              <div className="mt-4 flex gap-2">
                <button className="btn-secondary py-2" onClick={() => reorder(order)}>Reorder</button>
                <button className="btn-secondary py-2">View Details</button>
              </div>
            </article>
          ))}
        </div>
      </section>
    </PageTransition>
  );
};

export default OrdersPage;

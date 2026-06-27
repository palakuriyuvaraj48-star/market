import { BadgeIndianRupee, ChartNoAxesCombined, ShoppingBag, Users } from "lucide-react";
import { useSelector } from "react-redux";
import { AdminTable } from "../components/admin/AdminTable";
import { PageTransition } from "../components/common/PageTransition";
import { categories } from "../constants/categories";
import { formatCurrency } from "../utils/cart";

const AdminPage = () => {
  const admin = useSelector((state) => state.admin);
  const products = useSelector((state) => state.products.items);
  const orders = useSelector((state) => state.orders.items);

  return (
    <PageTransition>
      <section className="container-page py-8">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h1 className="section-title">Admin Dashboard</h1>
            <p className="muted mt-1">Analytics, products, categories, orders, users, and coupons.</p>
          </div>
          <button className="btn-primary">Add Product</button>
        </div>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            [BadgeIndianRupee, "Revenue", formatCurrency(admin.revenue)],
            [ShoppingBag, "Orders Today", admin.ordersToday],
            [Users, "Users", admin.users],
            [ChartNoAxesCombined, "Conversion", `${admin.conversion}%`]
          ].map(([Icon, label, value]) => (
            <div className="glass rounded-xl p-5" key={label}>
              <Icon className="text-fresh-600" />
              <p className="muted mt-4">{label}</p>
              <p className="mt-1 text-2xl font-extrabold">{value}</p>
            </div>
          ))}
        </div>
        <div className="glass mt-6 rounded-xl p-5">
          <h2 className="text-lg font-extrabold">Sales Chart</h2>
          <div className="mt-5 flex h-48 items-end gap-3">
            {[38, 62, 46, 78, 54, 88, 72, 94, 68, 82, 97, 76].map((value, index) => (
              <div className="flex flex-1 flex-col items-center gap-2" key={index}>
                <div className="w-full rounded-t-lg bg-fresh-600" style={{ height: `${value}%` }} />
                <span className="text-xs text-slate-500">{index + 1}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-6 grid gap-6">
          <AdminTable
            title="Product CRUD"
            columns={["Product", "Category", "Price", "Stock", "Action"]}
            rows={products.slice(0, 8).map((product) => [
              product.name,
              product.category,
              formatCurrency(product.discountPrice),
              product.stock,
              "Edit / Delete"
            ])}
          />
          <AdminTable
            title="Category CRUD"
            columns={["Category", "Products", "Status", "Action"]}
            rows={categories.map((category) => [
              category.name,
              products.filter((product) => product.category === category.id).length,
              "Active",
              "Edit"
            ])}
          />
          <AdminTable
            title="Order Management"
            columns={["Order", "Items", "Total", "Status"]}
            rows={orders.map((order) => [order.id, order.items.length, formatCurrency(order.total), order.status])}
          />
          <AdminTable
            title="User Management"
            columns={["Segment", "Users", "Growth", "Action"]}
            rows={[
              ["Prime grocery buyers", 3280, "+12%", "View"],
              ["Weekly staples", 6100, "+8%", "View"],
              ["Dormant users", 742, "-3%", "Retarget"]
            ]}
          />
          <AdminTable
            title="Coupon Management"
            columns={["Code", "Discount", "Minimum Order", "Status"]}
            rows={admin.coupons.map((coupon) => [
              coupon.id,
              formatCurrency(coupon.discount),
              formatCurrency(coupon.minOrder),
              coupon.active ? "Active" : "Paused"
            ])}
          />
        </div>
      </section>
    </PageTransition>
  );
};

export default AdminPage;

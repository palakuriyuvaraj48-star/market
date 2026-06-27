import { Bell, CreditCard, Home, MapPin, PackageCheck, UserRound } from "lucide-react";
import { useSelector } from "react-redux";
import { PageTransition } from "../components/common/PageTransition";

const ProfilePage = () => {
  const { profile, addresses, payments, notifications } = useSelector((state) => state.user);
  const orders = useSelector((state) => state.orders.items);

  return (
    <PageTransition>
      <section className="container-page py-8">
        <h1 className="section-title">Profile</h1>
        <div className="mt-6 grid gap-5 lg:grid-cols-[320px_1fr]">
          <aside className="glass h-fit rounded-xl p-5">
            <UserRound className="text-fresh-600" size={32} />
            <h2 className="mt-4 text-xl font-extrabold">{profile.name}</h2>
            <p className="muted">{profile.email}</p>
            <p className="muted">{profile.phone}</p>
          </aside>
          <div className="grid gap-5">
            <div className="glass rounded-xl p-5">
              <h2 className="flex items-center gap-2 text-xl font-extrabold"><MapPin size={20} /> Address Management</h2>
              <div className="mt-4 grid gap-3 md:grid-cols-2">
                {addresses.map((address) => (
                  <div className="rounded-lg border border-slate-200 p-4 dark:border-white/10" key={address.id}>
                    <p className="flex items-center gap-2 font-bold"><Home size={17} /> {address.label}</p>
                    <p className="muted mt-2">{address.line} - {address.pin}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid gap-5 md:grid-cols-2">
              <div className="glass rounded-xl p-5">
                <h2 className="flex items-center gap-2 text-xl font-extrabold"><CreditCard size={20} /> Saved Payments</h2>
                {payments.map((payment) => (
                  <p className="mt-3 text-sm" key={payment.id}><strong>{payment.label}:</strong> {payment.detail}</p>
                ))}
              </div>
              <div className="glass rounded-xl p-5">
                <h2 className="flex items-center gap-2 text-xl font-extrabold"><Bell size={20} /> Notifications</h2>
                {notifications.map((item) => (
                  <p className="mt-3 text-sm" key={item}>{item}</p>
                ))}
              </div>
            </div>
            <div className="glass rounded-xl p-5">
              <h2 className="flex items-center gap-2 text-xl font-extrabold"><PackageCheck size={20} /> Order Tracking</h2>
              <div className="mt-4 grid gap-3">
                {orders.slice(0, 3).map((order) => (
                  <div className="flex items-center justify-between rounded-lg bg-fresh-50 p-3 text-sm dark:bg-white/10" key={order.id}>
                    <span className="font-bold">{order.id}</span>
                    <span>{order.status}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default ProfilePage;

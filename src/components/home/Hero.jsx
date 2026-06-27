import { Link } from "react-router-dom";
import { Clock, ShieldCheck, Sparkles, Truck } from "lucide-react";
import { motion } from "framer-motion";

export const Hero = () => (
  <section className="container-page pt-6">
    <div className="relative overflow-hidden rounded-2xl bg-[url('https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=1600')] bg-cover bg-center">
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/82 via-slate-950/48 to-transparent" />
      <div className="relative grid min-h-[460px] content-center gap-8 px-5 py-12 sm:px-10 lg:grid-cols-[1fr_360px]">
        <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} className="max-w-2xl text-white">
          <span className="inline-flex items-center gap-2 rounded-lg bg-white/15 px-3 py-2 text-sm font-bold backdrop-blur">
            <Clock size={17} /> Delivery in 10 minutes
          </span>
          <h1 className="mt-5 text-4xl font-extrabold tracking-normal sm:text-6xl">FreshMart</h1>
          <p className="mt-4 text-lg text-white/86 sm:text-xl">
            Daily groceries, farm-fresh produce, instant essentials, bulk deals, and smart recommendations.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link to="/products" className="btn-primary">Start Shopping</Link>
            <Link to="/category/vegetables" className="btn-secondary border-white/30 bg-white/15 text-white hover:text-white">
              Fresh Vegetables
            </Link>
          </div>
        </motion.div>
        <div className="glass self-end rounded-xl p-4 text-white">
          <div className="grid gap-3">
            {[
              [Truck, "Instant delivery", "Live timer on every order"],
              [Sparkles, "Smart basket", "Recommended staples"],
              [ShieldCheck, "Fresh guarantee", "Quality checked daily"]
            ].map(([Icon, title, text]) => (
              <div className="flex items-center gap-3 rounded-lg bg-white/12 p-3" key={title}>
                <span className="grid h-10 w-10 place-items-center rounded-lg bg-fresh-500">
                  <Icon size={19} />
                </span>
                <div>
                  <p className="font-bold">{title}</p>
                  <p className="text-sm text-white/72">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

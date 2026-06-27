import { Apple, Play } from "lucide-react";

export const AppDownload = () => (
  <section className="container-page mt-12">
    <div className="grid items-center gap-6 rounded-2xl bg-ink p-6 text-white shadow-soft md:grid-cols-[1.2fr_0.8fr] md:p-10">
      <div>
        <h2 className="text-3xl font-extrabold">FreshMart in your pocket</h2>
        <p className="mt-3 text-white/72">
          Track orders, reorder weekly baskets, unlock app-only cashback, and get instant delivery alerts.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <button className="btn-secondary border-white/20 bg-white/10 text-white hover:text-white">
            <Apple size={18} /> App Store
          </button>
          <button className="btn-secondary border-white/20 bg-white/10 text-white hover:text-white">
            <Play size={18} /> Google Play
          </button>
        </div>
      </div>
      <div className="rounded-xl bg-white/10 p-5">
        <div className="rounded-xl bg-white p-4 text-slate-950">
          <p className="text-sm font-bold text-fresh-700">Live delivery timer</p>
          <p className="mt-2 text-4xl font-extrabold">09:42</p>
          <p className="muted mt-2">Your basket is being packed.</p>
        </div>
      </div>
    </div>
  </section>
);

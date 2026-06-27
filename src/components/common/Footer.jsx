import { Apple, Facebook, Instagram, Mail, MapPin, Twitter } from "lucide-react";

export const Footer = () => (
  <footer className="mt-16 border-t border-slate-200 bg-white/80 py-10 dark:border-white/10 dark:bg-white/5">
    <div className="container-page grid gap-8 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
      <div>
        <div className="flex items-center gap-2 text-xl font-extrabold">
          <span className="grid h-10 w-10 place-items-center rounded-lg bg-fresh-600 text-white">
            <Apple size={21} />
          </span>
          FreshMart
        </div>
        <p className="muted mt-4 max-w-sm">
          Premium groceries, fresh produce, smart baskets, cashback deals, and 10 minute essentials.
        </p>
        <div className="mt-5 flex gap-2">
          {[Instagram, Facebook, Twitter, Mail].map((Icon) => (
            <button className="icon-button" key={Icon.displayName || Icon.name} aria-label="Social link">
              <Icon size={18} />
            </button>
          ))}
        </div>
      </div>
      {[
        ["Shop", "Vegetables", "Fruits", "Dairy", "Snacks"],
        ["FreshMart", "About", "Careers", "Partner", "Support"],
        ["Help", "Payments", "Returns", "Track Order", "Privacy"]
      ].map((group) => (
        <div key={group[0]}>
          <h3 className="font-bold">{group[0]}</h3>
          <ul className="mt-4 space-y-2 text-sm text-slate-600 dark:text-slate-300">
            {group.slice(1).map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
    <div className="container-page mt-8 flex flex-col gap-2 border-t border-slate-200 pt-6 text-sm text-slate-500 dark:border-white/10 sm:flex-row sm:items-center sm:justify-between">
      <span>2026 FreshMart. Built for fast, fresh grocery delivery.</span>
      <span className="inline-flex items-center gap-2">
        <MapPin size={16} /> Delivering across major Indian cities
      </span>
    </div>
  </footer>
);

import { BadgePercent, Banknote, Boxes, TimerReset } from "lucide-react";

export const OffersBand = () => (
  <section className="container-page mt-10">
    <div className="grid gap-4 lg:grid-cols-4">
      {[
        [TimerReset, "Popular Near You", "Fresh picks stocked around your location."],
        [Boxes, "Bulk Discounts", "Save more on rice, flour, pulses, and oil."],
        [Banknote, "Cashback Offers", "Exclusive FreshMart wallet rewards."],
        [BadgePercent, "JioMart Deals", "Daily price drops on essentials."]
      ].map(([Icon, title, text]) => (
        <div className="glass rounded-xl p-5" key={title}>
          <Icon className="text-fresh-600" size={25} />
          <h3 className="mt-4 font-extrabold">{title}</h3>
          <p className="muted mt-1">{text}</p>
        </div>
      ))}
    </div>
  </section>
);

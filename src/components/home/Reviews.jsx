import { Star } from "lucide-react";

export const Reviews = () => (
  <section className="container-page mt-12">
    <h2 className="section-title">Customer Reviews</h2>
    <div className="mt-5 grid gap-4 md:grid-cols-3">
      {[
        ["Aarav", "Fresh vegetables arrived in under 10 minutes. The cart suggestions are genuinely useful."],
        ["Meera", "Checkout is quick, prices are transparent, and the milk was perfectly chilled."],
        ["Kabir", "Bulk rice and dal offers saved my monthly grocery budget."]
      ].map(([name, text]) => (
        <div className="glass rounded-xl p-5" key={name}>
          <div className="flex gap-1 text-amber-500">
            {Array.from({ length: 5 }).map((_, index) => (
              <Star key={index} size={16} className="fill-amber-400" />
            ))}
          </div>
          <p className="mt-4 text-sm leading-6 text-slate-700 dark:text-slate-200">{text}</p>
          <p className="mt-4 font-extrabold">{name}</p>
        </div>
      ))}
    </div>
  </section>
);

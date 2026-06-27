import { Link } from "react-router-dom";
import { ProductGrid } from "../products/ProductGrid";

export const ProductShelf = ({ title, subtitle, products, link = "/products" }) => (
  <section className="container-page mt-12">
    <div className="mb-5 flex items-end justify-between gap-4">
      <div>
        <h2 className="section-title">{title}</h2>
        {subtitle && <p className="muted mt-1">{subtitle}</p>}
      </div>
      <Link to={link} className="shrink-0 text-sm font-bold text-fresh-700">View all</Link>
    </div>
    <ProductGrid products={products} />
  </section>
);

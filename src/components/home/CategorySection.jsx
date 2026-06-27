import { Link } from "react-router-dom";
import { categories } from "../../constants/categories";

export const CategorySection = () => (
  <section className="container-page mt-10">
    <div className="mb-5 flex items-end justify-between">
      <div>
        <h2 className="section-title">Shop By Category</h2>
        <p className="muted mt-1">Everything fresh, sorted for quick repeat shopping.</p>
      </div>
      <Link to="/products" className="hidden text-sm font-bold text-fresh-700 sm:inline">View all</Link>
    </div>
    <div className="grid grid-cols-3 gap-3 sm:grid-cols-4 lg:grid-cols-6">
      {categories.map(({ id, name, icon: Icon, accent }) => (
        <Link to={`/category/${id}`} key={id} className="glass rounded-xl p-4 text-center transition hover:-translate-y-1">
          <span className={`mx-auto grid h-12 w-12 place-items-center rounded-xl ${accent}`}>
            <Icon size={22} />
          </span>
          <span className="mt-3 block text-sm font-bold">{name}</span>
        </Link>
      ))}
    </div>
  </section>
);

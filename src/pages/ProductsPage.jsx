import { useMemo, useState } from "react";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { categories } from "../constants/categories";
import { ProductGrid } from "../components/products/ProductGrid";
import { filterProducts } from "../utils/search";
import { useDebounce } from "../hooks/useDebounce";
import { PageTransition } from "../components/common/PageTransition";

const ProductsPage = () => {
  const location = useLocation();
  const initialSearch = new URLSearchParams(location.search).get("search") || "";
  const products = useSelector((state) => state.products.items);
  const [filters, setFilters] = useState({
    query: initialSearch,
    category: "all",
    maxPrice: 400,
    rating: 0,
    inStock: true
  });
  const debouncedQuery = useDebounce(filters.query, 250);

  const visibleProducts = useMemo(
    () => filterProducts(products, { ...filters, query: debouncedQuery }),
    [products, filters, debouncedQuery]
  );

  return (
    <PageTransition>
      <section className="container-page py-8">
        <div className="mb-6">
          <h1 className="section-title">Products</h1>
          <p className="muted mt-1">Search, filter, and build a fresh basket in seconds.</p>
        </div>
        <div className="grid gap-6 lg:grid-cols-[280px_1fr]">
          <aside className="glass h-fit rounded-xl p-4">
            <h2 className="font-extrabold">Filters</h2>
            <label className="mt-4 block text-sm font-bold">Search</label>
            <input
              value={filters.query}
              onChange={(event) => setFilters({ ...filters, query: event.target.value })}
              className="mt-2 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 outline-none focus:border-fresh-500 dark:border-white/10 dark:bg-white/10"
              placeholder="Search products"
            />
            <label className="mt-4 block text-sm font-bold">Category</label>
            <select
              value={filters.category}
              onChange={(event) => setFilters({ ...filters, category: event.target.value })}
              className="mt-2 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 dark:border-white/10 dark:bg-slate-900"
            >
              <option value="all">All categories</option>
              {categories.map((category) => (
                <option value={category.id} key={category.id}>{category.name}</option>
              ))}
            </select>
            <label className="mt-4 block text-sm font-bold">Max price: Rs. {filters.maxPrice}</label>
            <input
              type="range"
              min="25"
              max="400"
              value={filters.maxPrice}
              onChange={(event) => setFilters({ ...filters, maxPrice: event.target.value })}
              className="mt-2 w-full accent-fresh-600"
            />
            <label className="mt-4 block text-sm font-bold">Minimum rating</label>
            <select
              value={filters.rating}
              onChange={(event) => setFilters({ ...filters, rating: event.target.value })}
              className="mt-2 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 dark:border-white/10 dark:bg-slate-900"
            >
              <option value="0">Any rating</option>
              <option value="4">4 stars and up</option>
              <option value="4.5">4.5 stars and up</option>
            </select>
            <label className="mt-4 flex items-center gap-2 text-sm font-bold">
              <input
                type="checkbox"
                checked={filters.inStock}
                onChange={(event) => setFilters({ ...filters, inStock: event.target.checked })}
                className="accent-fresh-600"
              />
              In stock only
            </label>
          </aside>
          <div>
            <p className="mb-4 text-sm font-bold text-slate-600 dark:text-slate-300">{visibleProducts.length} products found</p>
            <ProductGrid products={visibleProducts} />
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default ProductsPage;

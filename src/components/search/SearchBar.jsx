import { Search, SlidersHorizontal, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDebounce } from "../../hooks/useDebounce";
import { useMemo, useState } from "react";

export const SearchBar = ({ compact = false }) => {
  const products = useSelector((state) => state.products.items);
  const [query, setQuery] = useState("");
  const debouncedQuery = useDebounce(query, 180);

  const suggestions = useMemo(() => {
    const value = debouncedQuery.trim().toLowerCase();
    if (!value) return [];
    return products
      .filter((product) => product.name.toLowerCase().includes(value))
      .slice(0, 5);
  }, [products, debouncedQuery]);

  return (
    <div className="relative w-full">
      <div className="glass flex h-12 items-center gap-2 rounded-xl px-3">
        <Search size={19} className="text-slate-500" />
        <input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search atta, apple, milk..."
          className="min-w-0 flex-1 bg-transparent text-sm font-medium outline-none placeholder:text-slate-400"
        />
        {query && (
          <button onClick={() => setQuery("")} aria-label="Clear search" className="icon-button h-8 w-8 border-0">
            <X size={16} />
          </button>
        )}
        {!compact && (
          <Link to={`/products?search=${encodeURIComponent(query)}`} className="icon-button h-8 w-8 border-0">
            <SlidersHorizontal size={16} />
          </Link>
        )}
      </div>
      {suggestions.length > 0 && (
        <div className="glass absolute left-0 right-0 top-14 z-40 overflow-hidden rounded-xl p-2">
          {suggestions.map((product) => (
            <Link
              to={`/product/${product.id}`}
              key={product.id}
              className="flex items-center gap-3 rounded-lg p-2 hover:bg-fresh-50 dark:hover:bg-white/10"
              onClick={() => setQuery("")}
            >
              <img src={product.image} alt="" className="h-10 w-10 rounded-md object-cover" loading="lazy" />
              <span className="text-sm font-bold">{product.name}</span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

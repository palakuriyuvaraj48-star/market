import { ProductCard } from "./ProductCard";

export const ProductGrid = ({ products }) => {
  if (!products.length) {
    return (
      <div className="glass rounded-xl p-8 text-center">
        <h3 className="text-xl font-extrabold">No products found</h3>
        <p className="muted mt-2">Try changing the search or filters.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

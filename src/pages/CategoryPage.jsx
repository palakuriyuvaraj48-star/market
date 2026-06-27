import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { categories } from "../constants/categories";
import { ProductGrid } from "../components/products/ProductGrid";
import { PageTransition } from "../components/common/PageTransition";

const CategoryPage = () => {
  const { id } = useParams();
  const category = categories.find((item) => item.id === id);
  const products = useSelector((state) => state.products.items.filter((product) => product.category === id));

  return (
    <PageTransition>
      <section className="container-page py-8">
        <Link to="/products" className="text-sm font-bold text-fresh-700">All products</Link>
        <h1 className="section-title mt-3">{category?.name || "Category"}</h1>
        <p className="muted mt-1">Instant delivery, fresh stock, and exclusive deals.</p>
        <div className="mt-6">
          <ProductGrid products={products} />
        </div>
      </section>
    </PageTransition>
  );
};

export default CategoryPage;

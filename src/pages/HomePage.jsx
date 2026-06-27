import { useSelector } from "react-redux";
import { PageTransition } from "../components/common/PageTransition";
import { SkeletonGrid } from "../components/common/Skeleton";
import { AppDownload } from "../components/home/AppDownload";
import { CategorySection } from "../components/home/CategorySection";
import { Hero } from "../components/home/Hero";
import { OffersBand } from "../components/home/OffersBand";
import { ProductShelf } from "../components/home/ProductShelf";
import { Reviews } from "../components/home/Reviews";
import { useProductsQuery } from "../hooks/useProductsQuery";

const HomePage = () => {
  const storeProducts = useSelector((state) => state.products.items);
  const { data, isLoading } = useProductsQuery();
  const products = data?.length ? data : storeProducts;
  const trending = products.filter((product) => product.isTrending).slice(0, 8);
  const featured = products.filter((product) => product.isFeatured).slice(0, 8);
  const recommended = products.filter((product) => product.rating >= 4.5).slice(0, 8);

  return (
    <PageTransition>
      <Hero />
      <CategorySection />
      <OffersBand />
      {isLoading ? (
        <section className="container-page mt-12"><SkeletonGrid /></section>
      ) : (
        <>
          <ProductShelf title="Trending Products" subtitle="Fast-moving picks people are adding right now." products={trending} />
          <ProductShelf title="Best Offers" subtitle="Cashback-ready deals and daily essentials." products={featured} />
        </>
      )}
      <ProductShelf title="Top Selling Products" subtitle="High-rated staples for every kitchen." products={recommended} />
      <ProductShelf title="Recommended Products" subtitle="Smart basket additions for your next order." products={products.slice(8, 16)} />
      <Reviews />
      <AppDownload />
    </PageTransition>
  );
};

export default HomePage;

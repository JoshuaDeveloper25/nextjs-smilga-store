import { fetchFeaturedProducts } from "@/utils/actions";
import ProductsGrid from "../products/ProductsGrid";
import SectionTitle from "../global/SectionTitle";
import EmptyList from "../global/EmptyList";

const FeaturedProducts = async () => {
  const products = await fetchFeaturedProducts();

  if (products?.length === 0) return <EmptyList />;

  return (
    <section className="pt-24">
      <SectionTitle text="Featured Products" />

      <ProductsGrid products={products} />
    </section>
  );
};

export default FeaturedProducts;

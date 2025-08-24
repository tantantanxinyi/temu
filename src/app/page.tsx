import { getCurrentSession } from "@/actions/auth";
import SalesCampaignBanner from "@/components/layout/SalesCampaignBanner";
import ProductGrid from "@/components/product/ProductGrid";
import { getAllProducts } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";

const Home = async () => {
  const { user } = await getCurrentSession();
  const products = await getAllProducts();

  return (
    <div>
      <SalesCampaignBanner></SalesCampaignBanner>

      <section className="container mx-auto py-8">
        <ProductGrid products={products}></ProductGrid>
      </section>
    </div>
  );
};

export default Home;

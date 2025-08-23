import { getCurrentSession } from "@/actions/auth";
import { getAllProducts } from "@/sanity/lib/client";
import Image from "next/image";

const Home = async () => {
  const { user } = await getCurrentSession();

  const products = await getAllProducts();

  return <div>343w5</div>;
};

export default Home;

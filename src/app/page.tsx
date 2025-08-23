import { getCurrentSession } from "@/actions/auth";
import { getAllProducts } from "@/sanity/lib/client";
import Image from "next/image";

const Home = async () => {
  const { user } = await getCurrentSession();

  const products = await getAllProducts();

  return <div>{JSON.stringify(products)}</div>;
};

export default Home;

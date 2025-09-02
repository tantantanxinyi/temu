import { getProductById } from "@/sanity/lib/client";
import React from "react";

const ProductPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const product = await getProductById(id);

  return <div>ProductPage</div>;
};

export default ProductPage;

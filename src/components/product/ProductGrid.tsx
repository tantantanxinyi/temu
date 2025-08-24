import { Product } from "@/sanity.types";
import React from "react";
import ProductItem from "./ProductItem";

type ProductGridProps = {
  products: Product[];
};

const ProductGrid = ({ products }: ProductGridProps) => {
  return (
    <div className="grid grid-clos-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-clos-5 gap-4">
      {products.map(product => (
        <ProductItem key={product._id} product={product}></ProductItem>
      ))}
    </div>
  );
};

export default ProductGrid;

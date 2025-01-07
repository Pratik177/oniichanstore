/* eslint-disable @typescript-eslint/no-unused-vars */
import ProductItem from "@/components/ProductItem";
import { convertDocToObj } from "@/lib/utils";
import productsService from "@/services/ProductServices";
import React from "react";

const Games = async () => {
  const featuredProducts = await productsService.getFeatured();
  const latestproducts = await productsService.getLatest();
  return (
    <div>
       <h2 className="text-2xl py-2">Latest Games</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4 ">
        {latestproducts.map((product) => (
          <ProductItem key={product.slug} product={convertDocToObj(product)} />
        ))}
      </div>
    </div>
  );
};

export default Games;

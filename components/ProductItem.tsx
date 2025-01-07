
import { Product } from "@/models/ProductModel";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";

const ProductItem = ({ product }: { product: Product }) => {
  return (
    <div className="card bg-base-300 shadow-xl mb-4">
      <figure>
          <Image
            src={product.image}
            alt={product.name}
            width={300}
            height={300}
            className="object-cover h-64 w-full"
          />
      </figure>
      <div className="card-body">
        <Link href={`/product/${product.slug}`}>
          <h2 className="card-title font-normal text-white">{product.name}</h2>
        </Link>

        <div className="card-actions flex items-center justify-between">
        <Link href={`/product/${product.slug}`}>
          <Button  className="text-xl bg-orange-500">Top Up </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;

import Multibox from "@/components/Multibox";
import { Button } from "@/components/ui/button";
import productsService from "@/services/ProductServices";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Params {
  params: {
    slug: string;
  };
}

// Helper function to sanitize complex objects
const sanitizeObject = (obj: any): any => {
  if (Array.isArray(obj)) {
    return obj.map(sanitizeObject);
  } else if (obj && typeof obj === "object") {
    const sanitized: any = {};
    for (const key in obj) {
      if (obj[key] && typeof obj[key].toJSON === "function") {
        sanitized[key] = obj[key].toString(); // Convert ObjectId or Buffer to string
      } else {
        sanitized[key] = sanitizeObject(obj[key]); // Recursively sanitize
      }
    }
    return sanitized;
  }
  return obj;
};

const ProductDetails = async ({ params }: Params) => {
  const { slug } = await params;

  // Fetch the product using the slug
  let product = await productsService.getBySlug(slug);

  // If product is not found, show a message
  if (!product) {
    return <div>Product not found</div>;
  }

  // Sanitize the product object
  product = sanitizeObject(product);

  return (
    <div>
      {/* Back to games button */}
      <Link href="/games">
        <Button className="my-2 mx-2">Back to game</Button>
      </Link>

      {/* Main Product Details */}
      <div className="grid md:grid-cols-4 md:gap-3">
        {/* Product Image */}
        <div className="md:col-span-2">
          <Image
            src={product.image}
            alt={product.name}
            width={1000}
            height={1000}
            sizes="100vw"
            style={{
              width: "100%",
              height: "auto",
            }}
          />
        </div>

        {/* Product Information */}
        <div>
          <ul className="space-y-4">
            <li>
              <h1 className="text-xl font-bold">{product.name}</h1>
            </li>
            <li>
              <span className="text-yellow-500 font-medium">
                {product.rating}
              </span>{" "}
              of {product.numReviews} reviews
            </li>
            <li>Brand: {product.brand}</li>
            <li>Price: ${product.price.toFixed(2)}</li>
            <li>
              <div className="divider"></div>
            </li>
            <li>
              <h2 className="text-lg font-semibold">Description:</h2>
              <p>{product.description}</p>
            </li>
          </ul>
        </div>

        {/* Multibox for product options */}
        
      </div>
      <div>
          <Multibox  product={product} />
        </div>
        <div>
          
        </div>
    </div>
  );
};

export default ProductDetails;

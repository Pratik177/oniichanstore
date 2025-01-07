// import { Button } from '@/components/ui/button';
// import productsService from '@/services/ProductServices';
// import Link from 'next/link';
// import React from 'react';

// interface ProductDetailsProps {
//   params: {
//     slug: string;
//   };
// }

// const ProductDetails = async({params}:ProductDetailsProps) => {
//   const product = await productsService.getBySlug(params.slug);
//   // If the product is not found
//   if (!product) {
//     return <div>Product not found</div>;
//   }

//   return (
//     <div>
//       <Button className="my-2">
//         <Link href="/games">Back to Games</Link>
//       </Button>
//       <h1>{product.name}</h1>
//     </div>
//   )
// }

// export default ProductDetails

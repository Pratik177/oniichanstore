import { cache } from "react";
import ProductModel, { Product } from "../models/ProductModel";
import { connect } from "@/lib/db";

export const revalidate = 3600;

const getLatest = cache(async () => {
  await connect();
  const products = await ProductModel.find({})
    .sort({ _id: -1 })
    .limit(6)
    .lean();
  return products as Product[];
});
const getFeatured = cache(async () => {
    await connect()
    const products = await ProductModel.find({ isFeatured: true }).limit(3).lean()
    return products as Product[]
  })

  const getBySlug = cache(async (slug: string) => {
    await connect()
    const product = await ProductModel.findOne({ slug }).lean()
    return product as Product
  })
  
const productsService = {
    getLatest,
    getFeatured,
    getBySlug
}

export default productsService;
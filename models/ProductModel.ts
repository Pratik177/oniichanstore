import mongoose from 'mongoose'


const itemSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
  },
  label: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    category: { type: String, required: true },
    image: { type: String, required: true },
    price: { type: Number, required: true },
    brand: { type: String, required: true },
    rating: { type: Number, required: true, default: 0 },
    numReviews: { type: Number, required: true, default: 0 },
    countInStock: { type: Number, required: true, default: 0 },
    description: { type: String, required: true },
    isFeatured: { type: Boolean, default: false },
    banner: String,
    items:[itemSchema]
  },
  {
    timestamps: true,
  }
)

const ProductModel =
  mongoose.models.Product || mongoose.model('Product', productSchema)

export default ProductModel


export type Product = {
    _id: string
    name: string
    slug: string
    image: string
    banner?: string
    price: number
    brand: string
    description: string
    category: string
    rating: number
    numReviews: number
    countInStock: number
    items?: { id: number; price: number; label: string }[];
    colors?: []
    sizes?: []
  }
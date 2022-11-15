import mongoose from 'mongoose';

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    id: { type: String, required: true, unique: true },
    image: { type: String, required: true },
    brand: { type: String, required: true },
    link: { type: String, required: true },
    size: { type: String, required: true },
    labelsize: { type: String, required: true },
    idealfor: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    contInStock: { type: Number, required: false },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model('Product', productSchema);

export default Product;

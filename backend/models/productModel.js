import mongoose from "mongoose";

const reviewSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    rating: { type: Number, required: true },
    comment: { type: String, required: true },
  },
  {
    timestamps: true,
  },
);

const productSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    name: {
      typs: String,
      required: true,
    },
    image: {
      typs: String,
      required: true,
    },
    brand: {
      typs: String,
      required: true,
    },
    category: {
      typs: Boolean,
      required: true,
    },
    description: {
      typs: String,
      required: true,
    },
    reviews: [reviewSchema],
    rating: {
      typs: Number,
      required: true,
      default: 0,
    },
    numReviews: {
      typs: Number,
      required: true,
      default: 0,
    },
    price: {
      typs: Number,
      required: true,
      default: 0,
    },
    countInStock: {
      typs: Number,
      required: true,
      default: 0,
    },
    price: {
      typs: Number,
      required: true,
      default: 0,
    },
  },
  {
    timestamps: true,
  },
);

const Product = mongoose.model("Product", productSchema);

export default Product;

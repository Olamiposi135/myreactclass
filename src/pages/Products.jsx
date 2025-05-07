import React from "react";
import productImage from "../assets/headphone.png";
import Button from "../component/Button";
import ProductCard from "../component/ProductCard";

const Products = () => {
  return (
    <section className="h-screen bg-gradient-to-r from-green-500 via-blue-200 to-red-500">
      <ProductCard />
    </section>
  );
};

export default Products;

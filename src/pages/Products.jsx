import React from "react";
import productImage from "../assets/headphone.png";
import Button from "../component/Button";
import ProductCard from "../component/ProductCard";

const Products = () => {
  return (
    <section className="h-fit bg-gradient-to-r from-green-500 via-blue-200 to-red-500 flex gap-3 items-center flex-wrap p-10">
      <ProductCard />
    </section>
  );
};

export default Products;

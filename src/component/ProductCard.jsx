import React from "react";
import Button from "../component/Button";
import productImage from "../assets/headphone.png";

const ProductCard = () => {
  return (
    <div className="bg-white w-[350px] h-fit p-4 rounded-xl shadow-lg">
      <div className="w-full relative p-10">
        <div className="w-fit bg-purple-300 px-2 py-1 absolute top-0 left-0">
          Nearest Seller
        </div>
        <img className="size-[200px] m-auto" src={productImage} alt="" />
      </div>
      <div className="flex flex-col ">
        <h3 className="font-bold text-2xl mb-3">Wireless Bluetooth headset</h3>
        <small className="text-sm text-gray-500">Shipped in 3-4 days</small>
        <bold className="font-bold text-md">$35.99</bold>
        <div className="flex gap-3">
          <Button label="Add Cart" className="bg-gray-200 text-gray-400" />
          <Button label="Buy" className="bg-purple-500 text-white" />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

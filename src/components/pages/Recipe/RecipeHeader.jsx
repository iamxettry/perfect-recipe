import React from "react";
import ProductDetailBar from "./ProductDetailBar";
import { FaBookmark, FaShareAlt } from "react-icons/fa";

const RecipeHeader = ({ recipeName }) => {
  return (
    <div className=" border-b border-gray-300/80 pb-4 mt-10">
      <h1 className="   text-2xl md:text-3xl lg:text-4xl font-semibold">{recipeName}</h1>
      <div className="flex flex-col md:flex-row md:items-end md:gap-4 xl:gap-12">
        <div className="flex-1">
          {/* ProductDetailBars */}
          <ProductDetailBar />
        </div>
        <div className="flex-[0.5] xl:flex-[0.6] flex items-center justify-end md:justify-start  gap-5 text-red-500 my-2 ">
          <FaBookmark className="border border-gray-300/80 rounded-sm  w-7 h-7 p-1" />
          <FaShareAlt className="w-7 h-7 p-1" />
        </div>
      </div>
    </div>
  );
};

export default RecipeHeader;

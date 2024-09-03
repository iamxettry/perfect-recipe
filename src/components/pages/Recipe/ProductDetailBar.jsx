import React from "react";
import { FaMessage, FaRegCircleUser } from "react-icons/fa6";
import { FaBookmark, FaStar } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
const ProductDetailBar = () => {
  return (
    <div className="flex flex-wrap items-center  gap-3 text-sm font-medium my-2 ">
      <div className="flex  items-center  gap-2">
        <span>
          <FaRegCircleUser className=" w-4 h-4 text-red-400 " />
        </span>
        <h2 className="">Author name</h2>
      </div>
      <div className="flex  items-center  gap-2">
        <span>
          <SlCalender className="w-4 h-4 text-red-400 " />
        </span>
        <span>Sep 3, 2024 </span>
      </div>
      <div className="flex  items-center  gap-2">
        <span>
          <FaMessage className="w-4 h-4 text-red-400 " />
        </span>
        <span>7 comments </span>
      </div>

      <div className="flex  items-center  gap-2">
        <span>
          <FaBookmark className="w-4 h-4 text-red-400 " />
        </span>
        <span>8 Saves </span>
      </div>
      <div className="flex items-center gap-2 ">
        <div className="flex">
          <FaStar className="text-red-500 w-3 h-3" />
          <FaStar className="text-red-500 w-3 h-3" />
          <FaStar className="text-red-500 w-3 h-3" />
          <FaStar className="text-red-500 w-3 h-3" />
          <FaStar className="text-neutral-500 w-3 h-3" />
        </div>
        <span className="font-semibold text-neutral-700">4.0/10 reviews </span>
      </div>
    </div>
  );
};

export default ProductDetailBar;

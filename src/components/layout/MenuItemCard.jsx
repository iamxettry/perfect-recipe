import React from "react";
import Rating from "./Rating";
import { alex } from "../../assets";
import { LuFlame } from "react-icons/lu";
import { Link } from "react-router-dom";
import { FaBookmark } from "react-icons/fa";

const MenuItemCard = ({ data }) => {
  return (
    <Link to={`/recipe/${data?.name.replace(/\s+/g, '-')}`} className="block  rounded-lg border border-neutral-300 hover:scale-105 transition duration-300 ease-linear">
      <div className="relative ">
        <span className=" bg-white p-2 rounded-md absolute top-4 right-4">
        <FaBookmark fill="#F44336" color="#F44336" className=" " />

        </span>
        <img
          src={data?.image}
          alt={data?.name}
          className="w-full rounded-t-lg h-48 object-cover "
        />
        <div className="px-4 mt-1">
          <Rating />
          <h3 className="text-xl mt-3 font-medium">{data?.name}</h3>
        </div>
      </div>
      <div className="flex justify-between items-center p-4 ">
        <div className="flex items-center gap-2 ">
          <img
            src={alex}
            alt="alex"
            className="w-8 h-8  rounded-full object-cover shadow-sm shadow-gray-700 p-0.5"
          />
          <span className="text-sm">Alex Martin</span>
        </div>
        <span className="flex  items-center gap-1 border border-neutral-300 rounded-md py-1 px-2">
          <LuFlame fill="#D63B74" color="#D63B74" className="w-5 h-5" />
          <span className="text-sm">{data.calorie}Cals</span>
        </span>
      </div>
    </Link>
  );
};

export default MenuItemCard;

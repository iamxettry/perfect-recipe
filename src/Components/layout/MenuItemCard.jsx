import React from "react";
import Rating from "./Rating";
import { alex } from "../../assets";
import { FlameIcon } from "lucide-react";
import { Link } from "react-router-dom";

const MenuItemCard = ({ data }) => {
  return (
    <Link to={`/recipe/${data?.name}`} className="block  rounded-lg border border-neutral-300 hover:scale-105 transition-transform duration-300 ease-linear">
      <div className="">
        <img
          src={data?.image}
          alt={data?.name}
          className="w-full rounded-t-lg h-48 object-cover "
        />
        <div className="px-4 pt-4">
          <Rating />
          <Link to={`/recipe/${data?.name}`} className="text-xl mt-4 font-medium">{data?.name}</Link>
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
          <FlameIcon fill="#D63B74" color="#D63B74" className="w-5 h-5" />
          <span className="text-sm">{data.calorie}Cals</span>
        </span>
      </div>
    </Link>
  );
};

export default MenuItemCard;

import React from "react";
import { Chris } from "../../../assets";
import { Star } from "lucide-react";

const ReviewCard = () => {
  return (
    <div className="relative p-4  bg-white shadow-md shadow-gray-500 rounded-lg w-64 md:w-80">
      <div className="flex gap-4">
        <div className="w-16 lg:w-20 relative ">
          <img
            src={Chris}
            alt="Avatar"
            className="w-16 h-16 lg:w-20 lg:h-20 rounded-full absolute object-cover p-0.5 shadow-md shadow-gray-600 bottom-0 "
          />
        </div>
        <div className="  ">
          <h1 className="text-base lg:text-xl font-semibold">Chris Johnon</h1>
          <div className="flex items-center">
            <Star fill="#FF8F00" color="#715838" className="w-3  h-3 "  />
            <Star fill="#FF8F00" color="#715838" className="w-3  h-3 "  />
            <Star fill="#FF8F00" color="#715838" className="w-3  h-3 "  />
            <Star fill="#FF8F00" color="#715838" className="w-3  h-3 "  />
            <Star color="#715838" className="w-3  h-3"  />

            <span className="px-2 text-xs font-bold tracking-wider">4.5/5</span>
          </div>
        </div>
      </div>
      <p className="  text-xs md:text-sm xl:text-base font-medium px-1 mt-2">
        Wow, this recipe is a flavor explosion in my mouth! very delicious.{" "}
      </p>
    </div>
  );
};

export default ReviewCard;

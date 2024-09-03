import React from "react";
import Button from "../../common/Button";
import { FaPrint } from "react-icons/fa";

const TimeFrames = () => {
  return (
    <div className=" grid grid-cols-2 place-items-center sm:flex w-full items-center justify-center    sm:gap-5 md:gap-4 lg:gap-6 mt-6">
      {/* times */}
      <div className=" py-2">
        <h1 className="text-neutral-600 font-semibold">Prep time:</h1>
        <span className="text-base font-semibold">5 mins</span>
      </div>
      <div className=" py-2">
        <h1 className="text-neutral-600 font-semibold">Cooking time:</h1>
        <span className="text-base font-semibold">5 mins</span>
      </div>
      <div className=" py-2">
        <h1 className="text-neutral-600 font-semibold">Serving:</h1>
        <span className="text-base font-semibold">4 serving</span>
      </div>

      {/* print button */}
      <div className="flex justify-center items-center">
        <button
          className={
            "bg-white text-red-500  px-3 lg:px-4 rounded-md py-2 h-auto flex gap-2 items-center justify-center border border-red-500"
          }
        >
          <FaPrint />
          <span>Print recipe</span>
        </button>
      </div>
    </div>
  );
};

export default TimeFrames;

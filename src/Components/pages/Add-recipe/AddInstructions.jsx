import React from "react";
import { FaPlus } from "react-icons/fa6";
import { FiCamera } from "react-icons/fi";

const AddInstructions = () => {
  return (
    <div className="">
      <button className="text-sm">Tap to edit</button>

      {/* Step 1 */}
      <div className=" mb-6">
        <h3 className="text-lg font-semibold pb-2">Step 1</h3>
        <div className="flex">
          <div className="flex-shrink-0">
            <label className="h-16 w-20 rounded-lg border border-neutral-300 bg-neutral-200 flex items-center justify-center  cursor-pointer  ">

              {/* Placeholder for an image  */}
              <FiCamera size={28} className="text-neutral-400" />
              <input
                type="file"
                className="hidden"
                // onChange={(e) => handleImageUpload(e)}
                multiple
              />
            </label>
          </div>
          <div className="ml-4">
            <p className="text-gray-700 lg:text-lg font-medium">
              In a medium bowl, mix together beans, corn, salsa, taco seasoning
            </p>
          </div>
        </div>
      </div>

      {/* Step 2 */}
      <div className=" mb-6">
        <h3 className="text-lg font-semibold py-2">Step 2</h3>
        <div className="flex">
          <div className="flex-shrink-0">
            <label className="h-16 w-20 rounded-lg border border-neutral-300 bg-neutral-200 flex items-center justify-center  cursor-pointer  ">

              {/* Placeholder for an image  */}
              <FiCamera size={28} className="text-neutral-400" />
              <input
                type="file"
                className="hidden"
                // onChange={(e) => handleImageUpload(e)}
                multiple
              />
            </label>
          </div>
          <div className="ml-4">
            <p className="text-gray-700 lg:text-lg font-medium">
            Preheat a large skillet over medium low heat, sprayed with cooking spray. Place one tortilla in the skillet, and scoop 1/2 cup of the filling onto the tortilla in the pan. Sprinkle 1/4 cup cheese over the bean mixture, ......
            </p>
          </div>
        </div>
      </div>

      {/* Add New Instruction  */}
      <div className="mt-6">
        <input
          type="text"
          placeholder="Write Instruction"
          className="border border-neutral-400 rounded-md  w-full px-4 py-1.5 md:py-2.5 lg:py-4 focus:border-red-500 focus:outline-none  lg:text-lg"
        />
      </div>

      <button className="flex items-center  justify-center gap-1 my-4 text-red-500/80 font-bold">
        <FaPlus className="pb-0.5" />
        <span>Header</span>
      </button>
    </div>
  );
};

export default AddInstructions;

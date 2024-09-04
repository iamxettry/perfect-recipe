import React, { useState } from "react";
import {
  FaBookmark,
  FaMessage,
  FaRegCircleUser,
  FaStar,
} from "react-icons/fa6";
import { SlCalender } from "react-icons/sl";
import Button from "../../common/Button";
import { AiFillPrinter } from "react-icons/ai";
import { FaShareAlt } from "react-icons/fa";
import Instructions from "./Instructions";

const MenuHighlight = ({ recipeName }) => {
  const [ingredients, setIngredients] = useState([
    { name: "1/4 cup Sun-dried tomatoes", checked: true },
    { name: "2 tbsp Soymilk", checked: true },
    { name: "5/8 tsp Rosemary", checked: false },
    { name: "3/4 tsp Thyme", checked: false },
    { name: "1/4 medium whole Tomatoes", checked: false },
    { name: "1/4 fruit without seeds Lemons", checked: false },
  ]);

  const toggleChecked = (index) => {
    const updatedIngredients = ingredients.map((ingredient, i) =>
      i === index ? { ...ingredient, checked: !ingredient.checked } : ingredient
    );
    setIngredients(updatedIngredients);
  };
  return (
    <div className="lg:w-4/5  p-8 mt-8  bg-red-100">
      {/* Header */}
      <div className="">
        <div className="flex flex-col-reverse md:flex-row gap-6">
          <img
            src="https://plus.unsplash.com/premium_photo-1673108852141-e8c3c22a4a22?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D"
            alt=""
            className=" md:w-32  h-28 lg:w-40 lg:h-32 object-cover rounded-md"
          />

          {/*Product Details   */}
          <div className="flex-1">
            <h1 className=" text-xl lg:text-2xl font-semibold">
              {recipeName}
            </h1>
            <div className="grid grid-cols-2 items-center  gap-1 md:gap-4 text-sm font-medium my-2 ">
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
            </div>
          </div>
        </div>
        {/* Rating */}
        <div className="flex items-center gap-2 mt-2 text-sm">
          <div className="flex">
            <FaStar className="text-red-500 w-3 h-3" />
            <FaStar className="text-red-500 w-3 h-3" />
            <FaStar className="text-red-500 w-3 h-3" />
            <FaStar className="text-red-500 w-3 h-3" />
            <FaStar className="text-neutral-500 w-3 h-3" />
          </div>
          <span className="font-semibold text-neutral-700">
            4.0/10 reviews{" "}
          </span>
        </div>

        {/* Buttons  */}
        <div className="flex flex-wrap mt-4 gap-4 ">
          <Button className={"flex items-center gap-2 py-1 px-1 text-xs"}>
            <AiFillPrinter />
            <span>Print Recipe</span>
          </Button>
          <Button className={"flex items-center gap-2 py-1 px-1 text-xs"}>
            <FaBookmark />
            <span>Add to Favorite</span>
          </Button>
          <Button className={"flex items-center gap-2 py-1 px-1 text-xs"}>
            <FaShareAlt />
            <span>Share Recipe</span>
          </Button>
        </div>
      </div>

       <div className=" h-0.5 mt-6 bg-neutral-400  " />
      {/* Ingredients Section */}
      <div className="mt-10">
        <h2 className=" text-xl lg:text-2xl font-semibold ">Ingredients</h2>
        <ul className=" mt-4 ">
          {ingredients.map((ingredient, index) => (
            <li key={index} className="flex items-center space-x-4 my-1">
              <input
                type="checkbox"
                checked={ingredient.checked}
                onChange={() => toggleChecked(index)}
                className=" w-5 h-5 accent-rose-500 "
              />
              <span
                className={`  flex gap-4  lg:text-base  font-semibold text-neutral-700 ${
                  ingredient.checked ? "line-through text-gray-500" : ""
                }`}
              >
                {ingredient.name}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Instructions */}
      <div className="mt-10">
        <h2 className="text-xl lg:text-2xl font-semibold">Instructions:</h2>

        <Instructions className={""} />
      </div>

      {/* Instructions */}
      <div className="mt-10">
        <h2 className="text-xl lg:text-2xl font-semibold">Cooking Note:</h2>

        <div className="  mt-4 flex gap-4    font-semibold text-neutral-700">
          <h3 className=" p-2 grid place-content-center h-5 w-5 rounded-md text-white text-sm   bg-red-500">
            2
          </h3>
          <p>
            Chop the fresh herbs, tomato, and onions and toss them with the
            salad greens. Add additional veggies as desired.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MenuHighlight;

import { useParams } from "react-router-dom";
import ProductDetailBar from "./ProductDetailBar";
import TimeFrames from "./TimeFrames";
import { useState } from "react";
export const RecipeDetails = () => {
  const params = useParams();
  const recipeName = params.recipeName.replace(/-/g, " ");

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
    <div>
      {/* product image */}
      <div className="mt-10 md:h-96 overflow-hidden">
        <img
          src="https://plus.unsplash.com/premium_photo-1673108852141-e8c3c22a4a22?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          className="h-full w-full object-cover aspect-auto   "
        />
      </div>

      {/* Time frame */}
      <TimeFrames />

      {/* Description  */}
      <p className="font-medium  text-neutral-700 mt-6">
        Layer slices of fresh mozzarella, ripe tomatoes, and basil leaves;
        drizzle with olive oil and balsamic glaze, then sprinkle with salt and
        pepper.{" "}
      </p>

      {/* Ingredients Section */}
      <div className="mt-10">
        <h2 className=" text-2xl lg:text-3xl font-semibold ">Ingredients</h2>
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
                className={`  flex gap-4  lg:text-xl  font-semibold text-neutral-700 ${
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
        <h2 className="text-2xl lg:text-3xl font-semibold">Instructions:</h2>
        <div className=" space-y-6 mt-4 ">
          <div className=" flex items-start gap-4  lg:text-xl  font-semibold text-neutral-700 ">
            <h3 className=" p-2 grid place-content-center h-5 w-5 rounded-md text-white text-sm   bg-red-500 mt-0.5">
              1
            </h3>
            <p>Soak the sun-dried tomatoes in the soy milk for an hour.</p>
          </div>
          
          <div className=" flex gap-4  lg:text-xl  font-semibold text-neutral-700">
            <h3 className=" p-2 grid place-content-center h-5 w-5 rounded-md text-white text-sm   bg-red-500">
              2
            </h3>
            <p>
              Chop the fresh herbs, tomato, and onions and toss them with the
              salad greens. Add additional veggies as desired.
            </p>
          </div>
          <div className=" flex gap-4  lg:text-xl  font-semibold text-neutral-700 ">
            <h3 className=" p-2 grid place-content-center h-5 w-5 rounded-md text-white text-sm   bg-red-500">
              3
            </h3>
            <p className="">
              Juice the lemon and combine in a high-powered blender with the
              sun-dried tomato mixture and garlic until smooth. Pour over salad
              and toss together well. Top with brazil nuts and enjoy!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

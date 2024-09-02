import React from "react";
import { FaPlus } from "react-icons/fa6";

const AddIngredients = () => {
  const [newIngredint, setNewIngredint] = React.useState("");
  const [ingredientsList, setIngredientsList] = React.useState([
    "1*15 oz can black beans",
    "1 cup of corn",
  ]);

//   console.log(newIngredint);
  const handleAddIngredients = (e) => {
    if (e.key === "Enter" && newIngredint) {
        setIngredientsList([...ingredientsList, newIngredint])  
    }
  };
  window.addEventListener("keypress", (e) => {
    handleAddIngredients(e);
  });
  return (
    <div>
      <ul className="flex flex-col gap-4">
        {ingredientsList &&
          ingredientsList.map((ingredient, index) => (
            <li
              key={index}
              className="border border-neutral-400 rounded-md  w-4/5 px-4 py-1.5 md:py-2.5 lg:py-4  lg:text-lg text-neutral-600"
            >
              <span>{ingredient}</span>
            </li>
          ))}
        <input
          type="text"
          name="description"
          id="description"
          value={newIngredint}
          onChange={(e) => setNewIngredint(e.target.value)}
          placeholder="Add ingredients"
          className="border border-neutral-400 rounded-md  w-4/5 px-4 py-1.5 md:py-2.5 lg:py-4 focus:border-red-500 focus:outline-none  lg:text-lg "
        />
      </ul>
      <button className="flex items-center  justify-center gap-1 my-4 text-red-500/80 font-bold">
        <FaPlus className="pb-0.5" />
        <span>Header</span>
      </button>
    </div>
  );
};

export default AddIngredients;

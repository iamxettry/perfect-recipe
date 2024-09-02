import React from "react";
import Button from "../../common/Button";
import RecipeImageUploader from "./RecipeImageUploader";
import AddIngredients from "./AddIngredients";
import AddInstructions from "./AddInstructions";

const CreateNewRecipe = () => {
  // form submit
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <form className="mt-10 mb-20" onSubmit={handleSubmit}>
      <div className="my-2 flex justify-between  items-center">
        <h1 className="text-xl md:text-2xl  lg:text-3xl font-bold">Create new recipe</h1>
        <Button className={"min-w-14 text-sm md:text-base py-1 md:p-1.5"}>
          Save
        </Button>
      </div>

      {/* Form fields */}

      <div className=" w-[90%] sm:w-3/5 mx-auto flex flex-col gap-8  mt-10 xl:mt-16">
        {/* title */}
        <div className="flex flex-col gap-2">
          <label htmlFor="recipe" className=" text-lg md:text-xl lg:text-2xl font-medium">
            Recipe Title:
          </label>
          <input
            type="text"
            name="recipe"
            id="recipe"
            placeholder="Recipe title"
            className="border border-neutral-400 rounded-md  lg:w-4/5 px-4 py-1.5 md:py-2.5 lg:py-4 lg:text-lg focus:border-red-500 focus:outline-none "
          />
        </div>

        {/* recipe image */}
        <div className="flex flex-col gap-2">
          <label
            htmlFor="recipe-image"
            className="text-lg md:text-xl lg:text-2xl font-medium"
          >
            Recipe Image :
          </label>
          {/* Recipe Image uploader */}
          <RecipeImageUploader />
        </div>

        {/* description */}
        <div className="flex flex-col gap-2 ">
          <label
            htmlFor="description"
            className="text-lg  md:text-xl lg:text-2xl  font-medium"
          >
            Description:
          </label>
          <input
            type="text"
            name="description"
            id="description"
            placeholder="Introduce your recipe"
            className="border border-neutral-400 rounded-md  lg:w-4/5 px-4 py-1.5 md:py-2.5 lg:py-4 lg:text-lg focus:border-red-500 focus:outline-none  "
          />
          <div className="lg:w-4/5">
            <span className="float-right text-sm">0/100</span>
          </div>
        </div>

        {/* Ingredients */}
        <div className="flex flex-col gap-2 ">
          <label
            htmlFor="description"
            className="text-lg  md:text-xl lg:text-2xl  font-medium"
          >
            Ingredients:
          </label>

          {/* Add ingredients */}
          <AddIngredients />
        </div>

        {/* Instructions  */}
        <div className="flex flex-col gap-2 lg:w-4/5 ">
          <label
            htmlFor="description"
            className="text-lg  md:text-xl lg:text-2xl  font-medium"
          >
            Instructions:
          </label>

          {/*Add instructions */}
          <AddInstructions/>
        </div>
      </div>
    </form>
  );
};

export default CreateNewRecipe;

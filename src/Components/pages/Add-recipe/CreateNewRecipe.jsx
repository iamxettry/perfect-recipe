import React from "react";
import Button from "../../common/Button";

const CreateNewRecipe = () => {
  return (
    <form className="mt-10 mb-20">
      <div className="my-2 flex justify-between  items-center">
        <h1 className="text-xl md:text-2xl  font-bold">Create new recipe</h1>
        <Button className={"min-w-14 text-sm md:text-base py-1 md:p-1.5"}>
          Save
        </Button>
      </div>

      {/* Form fields */}

      <div className=" w-4/5 sm:w-3/5 mx-auto flex flex-col gap-4  mt-10 xl:mt-16">
        {/* title */}
        <div className="flex flex-col gap-2">
          <label htmlFor="recipe" className=" text-lg md:text-xl font-medium">
            Recipe Title:
          </label>
          <input
            type="text"
            name="recipe"
            id="recipe"
            className="border border-neutral-400 rounded-md  w-4/5 px-4 py-1 md:py-2 lg:py-3 focus:border-red-500 focus:outline-none "
          />
        </div>

        {/* recipe image */}
        <div>
          <label
            htmlFor="recipe-image"
            className="text-lg md:text-xl font-medium"
          >
            Recipe Image :
          </label>
        </div>

        {/* description */}
        <div className="flex flex-col gap-2 ">
          <label
            htmlFor="description"
            className="text-lg lg:text-xl font-medium"
          >
            Description:
          </label>
          <input
            type="text"
            name="description"
            id="description"
            className="border border-neutral-400 rounded-md  w-4/5 px-4 py-1 md:py-2 lg:py-3 focus:border-red-500 focus:outline-none  "
          />
          <div className="w-4/5">
            <span className="float-right text-sm">0/100</span>
          </div>
        </div>
      </div>
    </form>
  );
};

export default CreateNewRecipe;

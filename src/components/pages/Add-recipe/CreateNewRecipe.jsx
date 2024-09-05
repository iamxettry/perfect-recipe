import React, { useEffect, useState } from "react";
import Button from "../../common/Button";
import RecipeImageUploader from "./RecipeImageUploader";
import AddIngredients from "./AddIngredients";
import AddInstructions from "./AddInstructions";
import { Ceviche } from "../../../assets";
import { useLocation } from "react-router-dom";

const CreateNewRecipe = () => {
  const loacation = useLocation()
  // State for form inputs
  const [recipeData, setRecipeData] = useState({
    id:new Date().getTime(),
    title: "",
    image: Ceviche,
    description: "",
    ingredients: [],
    instructions: [],
    serving: "",
    cookingTime: { hours: "", minutes: "" },
    prepTime: { hours: "", minutes: "" },
    cuisine: "",
    collection: ""
  });

  // handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setRecipeData({ ...recipeData, [name]: value });
  };




  // handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    // get existing recipes from local storage
    const storedRecipes = localStorage.getItem("recipes");
    const recipes = storedRecipes ? JSON.parse(storedRecipes) : [];

    // Add new recipe to existing recipes
     recipes.push(recipeData);
     
    // Store recipe data in local storage
    localStorage.setItem("recipes", JSON.stringify(recipes));
    alert("Recipe data saved to local storage!");

    // Clear form data
    setRecipeData({
      id:new Date().getTime(),
      title: "",
      image: Ceviche,
      description: "",
      ingredients: [],
      instructions: [],
      serving: "",
      cookingTime: { hours: "", minutes: "" },
      prepTime: { hours: "", minutes: "" },
      cuisine: "",
      collection:""
    });

    // Redirect to home page
    location.href = "/";
  };

  console.log("recipeData", recipeData);

  return (
    <form className="mt-10 mb-20" onSubmit={handleSubmit}>
      <div className="my-2 flex justify-between items-center">
        <h1 className="text-xl md:text-2xl lg:text-3xl font-bold">
          Create new recipe
        </h1>
        <Button className={"min-w-14 lg:w-20 text-sm md:text-base py-1 md:p-1.5"}>
          <input type="submit"  value="Save" />
        </Button>
      </div>

      {/* Form fields */}
      <div className="w-[90%] sm:w-3/5 mx-auto flex flex-col gap-8 mt-10 xl:mt-16">
        {/* title */}
        <div className="flex flex-col gap-2">
          <label htmlFor="title" className="text-lg md:text-xl lg:text-2xl font-medium">
            Recipe Title:
          </label>
          <input
            type="text"
            name="title"
            id="title"
            placeholder="Recipe title"
            className="border border-neutral-400 rounded-md lg:w-4/5 px-4 py-1.5 md:py-2.5 lg:py-4 lg:text-lg focus:border-red-500 focus:outline-none"
            value={recipeData.title}
            onChange={handleInputChange}
          />
        </div>

        {/* recipe image */}
        <div className="flex flex-col gap-2">
          <label htmlFor="recipe-image" className="text-lg md:text-xl lg:text-2xl font-medium">
            Recipe Image :
          </label>
          {/* Recipe Image uploader */}
          <RecipeImageUploader  onChange={(image)=>setRecipeData({...recipeData, image})} />
        </div>

        {/* description */}
        <div className="flex flex-col gap-2">
          <label htmlFor="description" className="text-lg md:text-xl lg:text-2xl font-medium">
            Description:
          </label>
          <input
            type="text"
            name="description"
            id="description"
            placeholder="Introduce your recipe"
            className="border border-neutral-400 rounded-md lg:w-4/5 px-4 py-1.5 md:py-2.5 lg:py-4 lg:text-lg focus:border-red-500 focus:outline-none"
            value={recipeData.description}
            onChange={handleInputChange}
          />
          <div className="lg:w-4/5">
            <span className="float-right text-sm">0/100</span>
          </div>
        </div>

        {/* Ingredients */}
        <div className="flex flex-col gap-2">
          <label htmlFor="ingredients" className="text-lg md:text-xl lg:text-2xl font-medium">
            Ingredients:
          </label>
          <AddIngredients onChange={(ingredients) => setRecipeData({ ...recipeData, ingredients })} />
        </div>

        {/* Instructions */}
        <div className="flex flex-col gap-2 lg:w-4/5">
          <label htmlFor="instructions" className="text-lg md:text-xl lg:text-2xl font-medium">
            Instructions:
          </label>
          <AddInstructions onChange={(instructions) => setRecipeData({ ...recipeData, instructions })} />
        </div>

        {/* Serving */}
        <div className="flex flex-col gap-2 lg:w-4/5">
          <label htmlFor="serving" className="text-lg md:text-xl lg:text-2xl font-medium">
            Serving:
          </label>
          <input
            type="text"
            name="serving"
            id="serving"
            placeholder="#"
            className="border border-neutral-400 rounded-md px-4 py-1.5 md:py-2.5 lg:py-4 lg:text-lg focus:border-red-500 focus:outline-none"
            value={recipeData.serving}
            onChange={handleInputChange}
          />
          <span className="text-sm text-neutral-600 mt-3">How many portions does this recipe make?</span>
        </div>

        {/* Cooking Time */}
        <div className="flex flex-col gap-2 lg:w-4/5">
          <div className="text-lg md:text-xl lg:text-2xl font-medium">Cooking Time:</div>
          <div className="flex gap-4">
            <input
              type="text"
              placeholder="Hours"
              className="border border-neutral-400 rounded-md px-4 py-1.5 md:py-2.5 lg:py-4 lg:text-lg focus:border-red-500 focus:outline-none w-full"
              value={recipeData.cookingTime.hours}
              onChange={(e) => setRecipeData({ ...recipeData, cookingTime: { ...recipeData.cookingTime, hours: e.target.value } })}
            />
            <input
              type="text"
              placeholder="Minutes"
              className="border border-neutral-400 rounded-md px-4 py-1.5 md:py-2.5 lg:py-4 lg:text-lg focus:border-red-500 focus:outline-none w-full"
              value={recipeData.cookingTime.minutes}
              onChange={(e) => setRecipeData({ ...recipeData, cookingTime: { ...recipeData.cookingTime, minutes: e.target.value } })}
            />
          </div>
        </div>

        {/* Prep Time */}
        <div className="flex flex-col gap-2 lg:w-4/5">
          <div className="text-lg md:text-xl lg:text-2xl font-medium">Prep Time:</div>
          <div className="flex gap-4">
            <input
              type="text"
              placeholder="Hours"
              className="border border-neutral-400 rounded-md px-4 py-1.5 md:py-2.5 lg:py-4 lg:text-lg focus:border-red-500 focus:outline-none w-full"
              value={recipeData.prepTime.hours}
              onChange={(e) => setRecipeData({ ...recipeData, prepTime: { ...recipeData.prepTime, hours: e.target.value } })}
            />
            <input
              type="text"
              placeholder="Minutes"
              className="border border-neutral-400 rounded-md px-4 py-1.5 md:py-2.5 lg:py-4 lg:text-lg focus:border-red-500 focus:outline-none w-full"
              value={recipeData.prepTime.minutes}
              onChange={(e) => setRecipeData({ ...recipeData, prepTime: { ...recipeData.prepTime, minutes: e.target.value } })}
            />
          </div>
        </div>

        {/* Cuisine */}
        <div className="flex flex-col gap-2 lg:w-4/5">
          <label htmlFor="cuisine" className="text-lg md:text-xl lg:text-2xl font-medium">
            Cuisine:
          </label>
          <select
            name="cuisine"
            id="cuisine"
            className="border border-neutral-400 rounded-md w-1/2 px-4 py-1.5 md:py-2.5 lg:py-4 lg:text-lg focus:outline-none"
            value={recipeData.cuisine}
            onChange={handleInputChange}
          >
            <option value="Italian">Italian</option>
            <option value="Indian">Indian</option>
            <option value="Nepali">Nepali</option>
            <option value="Chinese">Chinese</option>
          </select>
        </div>

        {/* Collection */}
        <div className="flex flex-col gap-2 lg:w-4/5">
          <label htmlFor="collection" className="text-lg md:text-xl lg:text-2xl font-medium">
            Collection:
          </label>
          <select
            name="collection"
            id="collection"
            className="border border-neutral-400 rounded-md w-1/2 px-4 py-1.5 md:py-2.5 lg:py-4 lg:text-lg focus:outline-none"
            value={recipeData.collection}
            onChange={handleInputChange}
          >
            <option value="Breakfast">Breakfast</option>
            <option value="Lunch">Lunch</option>
            <option value="Dinner">Dinner</option>
          </select>
        </div>
      </div>
      <input type="submit" value={"save"} className="hidden" />
    </form>
  );
};

export default CreateNewRecipe;

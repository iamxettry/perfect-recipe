import React from "react";
import { RecipeDetails } from "../../components/pages/Recipe/RecipeDetails";
import { Link, useParams } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";
import WrapperContainer from "../../components/common/WrapperContaner";
import MenuHighlight from "../../components/pages/Recipe/MenuHighlight";
import RecipeHeader from "../../components/pages/Recipe/RecipeHeader";
import NutritionFacts from "../../components/pages/Recipe/NutritionFacts";
import RecentRecipies from "../../components/pages/Recipe/ReccentRecipes";
import StayConnected from "../../components/common/StayConnected";
import FooterForm from "../../components/common/FooterForm";
import { RelatedRecipes } from "../../components/pages/Recipe/RelatedRecipes";

export const Recipe = () => {
  const params = useParams();
  const recipeName = params.recipeName.replace(/-/g, " ");
  return (
    <WrapperContainer>
      <div className="my-10">
        {/* path */}
        <div className="  flex  gap-1 text-neutral-500 items-center">
          <Link to={"/"}>Home</Link>
          <FaChevronRight />
          <Link to={"/recipe"}>Recipe</Link>
          <FaChevronRight />
          <h1 className="text-neutral-900 text-sm  sm:text-base font-semibold">
            {recipeName}:
          </h1>
        </div>

        {/* Recipe Header */}
        <RecipeHeader recipeName={recipeName} />

        {/* left section */}
        <div className=" flex  flex-col md:flex-row gap-4 lg:gap-12">
          {/* Recipe details */}
          <div className="flex-1">
            <RecipeDetails />

            <MenuHighlight recipeName={recipeName} />
          </div>

          {/* Right Section */}
          <div className=" flex-[0.5] xl:flex-[0.6] mt-10 ">
            {/* NutritionFacts */}
            <NutritionFacts />

            {/* Recent Recipies  */}

            <RecentRecipies />

            {/* Stay connected */}
            <div className="mt-12 py-3 bg-red-100">
              <StayConnected title={"Stay Connected with our Recipes updates"} desc={"for the latest health tips and delicious recipes"} >
                <FooterForm buttonName="Sign up" />
              </StayConnected>
            </div>


            {/* Related recipes  */}

            <RelatedRecipes/>
          </div>
        </div>
      </div>
    </WrapperContainer>
  );
};

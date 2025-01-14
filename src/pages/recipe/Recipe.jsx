import React from "react";
import { RecipeDetails } from "../../components/pages/Recipe/RecipeDetails";
import { Link, useParams } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";
import WrapperContainer from "../../components/common/WrapperContaner";
import MenuHighlight from "../../components/pages/Recipe/MenuHighlight";
import RecipeHeader from "../../components/pages/Recipe/RecipeHeader";
import NutritionFacts from "../../components/pages/Recipe/NutritionFacts";
import StayConnected from "../../components/common/StayConnected";
import FooterForm from "../../components/common/FooterForm";
import { RelatedRecipes } from "../../components/pages/Recipe/RelatedRecipes";
import RecipeCard from "../../components/pages/Recipe/RecipeCard";
import { RelatedProduct } from "../../components/pages/Recipe/RelatedProduct";
import { Tags } from "../../components/pages/Recipe/Tags";
import { RecipeComments } from "../../components/pages/Recipe/RecipeComments";
import RateRecipe from "../../components/pages/Recipe/RateRecipe";
import CardContainer from "../../components/common/CardContainer";
import { ExploreRecipes } from "../../constants/MenuItems";
import MenuItemCard from "../../components/layout/MenuItemCard";
import YouMayLikeThis from "../../components/pages/Recipe/YouMayLikeThis";

export const Recipe = () => {
  const params = useParams();
  const recipeName = params.recipeName.replace(/-/g, " ");

  // recipes data
  const recipes = [
    {
      title: "Green Goddess Wrap Is a Light & Simple",
      image:
        "https://plus.unsplash.com/premium_photo-1661677425561-ac8dda0082b2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Zm9vZCUyMG1lbnV8ZW58MHx8MHx8fDA%3D",
      rating: 4,
      calories: 309,
    },
    {
      title: "Green Goddess Wrap Is a Light & Simple",
      image:
        "https://images.unsplash.com/photo-1661712963154-91081d8ddc43?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Zm9vZCUyMG1lbnV8ZW58MHx8MHx8fDA%3D",
      rating: 4,
      calories: 475,
    },
    {
      title: "Green Goddess Wrap Is a Light & Simple",
      image:
        "https://plus.unsplash.com/premium_photo-1661333427305-2fca32079fba?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGZvb2QlMjBtZW51fGVufDB8fDB8fHww",
      rating: 4,
      calories: 359,
    },
  ];

  const comments = [
    {
      user: "Sara Johnson",
      avatar:
        "https://images.unsplash.com/photo-1634926878768-2a5b3c42f139?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D",
      comment:
        " Wow, this Mixed Greens with Sun-Dried Tomato Dressing recipe is a flavor explosion in my mouth! very delicious.",
      react: 26,
      time: "40min ago",
      reply: [
        {
          user: "Jessica Martinez",
          avatar:
            "https://images.unsplash.com/photo-1663893364107-a6ecd06cf615?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D",
          comment: " I agree with you, very delicious.",
          react: 10,
          time: "10min ago",
          reply: [],
        },
      ],
    },
    {
      user: "David Smith",
      avatar:
        "https://plus.unsplash.com/premium_photo-1664541336896-b3d5f7dec9a3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D",
      comment:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus veniam iusto ea saepe nulla necessitatibus at, aliquid sequi vero laborum.",
      react: 40,
      time: "1hr ago",
    },
  ];

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

        <div className=" flex  flex-col md:flex-row gap-4 lg:gap-12">
          {/* left section */}
          <div className="flex-1">
            {/* Recipe details */}
            <RecipeDetails />

            {/* Helighted recipe */}
            <MenuHighlight recipeName={recipeName} />

            <div className="w-11/12">
              <div className="w-full h-1.5 bg-red-500/80 my-12 " />

              {/* Recipe comments  */}
              <h1 className="py-8  text-3xl font-semibold"> Comment</h1>
              <div className="space-y-6">
                {comments.map((comment, index) => (
                  <RecipeComments key={index} comment={comment} />
                ))}
              </div>

              <button className=" float-end px-3 py-1.5  rounded-md  border border-red-400 text-red-400 font-medium">
                Load more comments
              </button>
            </div>

            {/* Rate Recipe */}
            <div className="mt-20">
              <RateRecipe />
            </div>

            {/* You may Like this component  */}
            
            <YouMayLikeThis/>

              
          </div>

          {/* Right Section */}
          <div className=" flex-[0.5] xl:flex-[0.6] mt-10 ">
            {/* NutritionFacts */}
            <NutritionFacts />

            {/* Recent Recipies  */}
            <RecipeCard data={recipes} title="Recent Recipes" />

            {/* Stay connected */}
            <div className="mt-12 py-3 bg-red-100">
              <StayConnected
                title={"Stay Connected with our Recipes updates"}
                desc={"for the latest health tips and delicious recipes"}
              >
                <FooterForm buttonName="Sign up" />
              </StayConnected>
            </div>

            {/* Related recipes  */}

            <RelatedRecipes />

            {/* Trending Recipes */}
            <RecipeCard data={recipes} title="Trending Recipes" />

            {/* Related Product */}
            <RelatedProduct />

            {/* Tags */}
            <Tags />
          </div>
        </div>
      </div>
    </WrapperContainer>
  );
};

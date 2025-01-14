import React from "react";
import WaveSVG from "../../components/common/WaveSVG";
import HeroSection from "../../components/pages/Home/HeroSection";
import ShareRecipeBanner from "../../components/pages/Home/ShareRecipeBanner";
import CardContainer from "../../components/common/CardContainer";
import MenuItemCard from "../../components/layout/MenuItemCard";
import {
  ExploreRecipes,
  PopularCategory,
  TrendingRecipes,
} from "../../constants/MenuItems";
import BlogCard from "../../components/layout/BlogCard";
import { BlogData } from "../../constants/BlogData";
import StayInTouchSection from "../../components/pages/Home/StayInTouchSection";
import WrapperContainer from "../../components/common/WrapperContaner";
import BrandIconsBar from "../../components/common/BrandIconsBar";

const Home = () => {
  return (
    <>
      {/* background svg wave */}
      <WaveSVG />

      {/* Hero section */}
      <WrapperContainer>
        <HeroSection />

        {/* Share Recipe Banner  */}
        <ShareRecipeBanner />

        {/* Trending Recipe */}

        <CardContainer title={"Trending Recipe"} link={"trending-recipes"}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {/* mapping trending recipe */}
            {TrendingRecipes?.map((item, index) => (
              <div key={index}>
                <MenuItemCard data={item} />
              </div>
            ))}
          </div>
        </CardContainer>

        {/* Blog Component */}

        <CardContainer title={"Blog"} link={"blogs"}>
          <div className="grid grid-cols-1 md:grid-cols-2  gap-12">
            {/* mapping Blogs recipe */}
            {BlogData?.map((item, index) => (
              <div key={index}>
                <BlogCard data={item} />
              </div>
            ))}
          </div>
        </CardContainer>

        {/* EXplore Recipe */}

        <CardContainer title={"Explore Recipes"} link={"explore-recipes"}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {/* mapping Explore recipe datas */}
            {ExploreRecipes?.map((item, index) => (
              <div key={index}>
                <MenuItemCard data={item} />
              </div>
            ))}
          </div>
        </CardContainer>
      </WrapperContainer>

      {/* Stay In Touch Section */}

      <StayInTouchSection />

      {/* Popular Categories */}

      <WrapperContainer>
        <CardContainer title={"Popular Categories"} link={"explore-recipes"}>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-12">
            {/* mapping popular categories */}
            {PopularCategory?.map((item, index) => (
              <div
                key={index}
                className="flex justify-center  flex-col items-center gap-4"
              >
                <img
                  src={item.image}
                  alt={item.category}
                  className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-40 lg:h-40 object-cover rounded-full"
                />
                <h1 className="text-center">{item.category}</h1>
              </div>
            ))}
          </div>
        </CardContainer>
      </WrapperContainer>

      {/* Brand Icons Bar */}
      <WrapperContainer>
        <BrandIconsBar />
      </WrapperContainer>
    </>
  );
};

export default Home;

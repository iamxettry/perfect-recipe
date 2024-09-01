import React from "react";
import WaveSVG from "../../Components/common/WaveSVG";
import HeroSection from "../../Components/pages/Home/HeroSection";
import ShareRecipeBanner from "../../Components/pages/Home/ShareRecipeBanner";
import Container from "../../Components/layout/Container";
import MenuItemCard from "../../Components/layout/MenuItemCard";
import { TrendingRecipes } from "../../constants/MenuItems";

const Home = () => {

  return (
    <>
      {/* background svg wave */}
      <WaveSVG />

      {/* Hero section */}
      <HeroSection />

      {/* Share Recipe Banner  */}
      <ShareRecipeBanner />

      {/* Trending Recipe */}
      <Container title={"Trending Recipe"} link={"trending-recipes"}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">

          {/* mapping trending recipe */}
          {
            TrendingRecipes?.map((item, index)=>(
              <div key={index}>
                <MenuItemCard  data={item} />
              </div>
            ))
          }
        </div>
      </Container>
      
    </>
  );
};

export default Home;

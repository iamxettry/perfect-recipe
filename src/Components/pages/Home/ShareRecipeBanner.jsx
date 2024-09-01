import React from 'react';
import { ShareRecipe } from '../../../assets';
import Button from '../../common/Button';
import { Link } from 'react-router-dom';

const ShareRecipeBanner = () => {
  return (
    <div className="flex flex-col md:flex-row items-center rounded-md  my-24 md:my-44">

      {/* Image Section */}
      <div className="md:flex-1">
        <img 
          src={ShareRecipe}
          alt="Share your recipes" 
          className=" h-96 w-96 object-cover"
        />
      </div>
      
      {/* Text Section */}
      <div className="  md:flex-1 mt-6 md:mt-0 md:ml-8 text-center ">
        <h2 className="text-4xl lg:text-5xl font-bold text-gray-800">
          Share Your <span className="text-red-500">Recipes</span>
        </h2>
        <p className="mt-4 text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam iste libero repellendus, adipisci earum nihil. Sequi molestiae dicta vitae laborum!
        </p>
        <Button className="mt-6 py-3">
          <Link href="/create-new-recipe">Create New Recipe</Link>
        </Button>
      </div>
    </div>
  );
};

export default ShareRecipeBanner;

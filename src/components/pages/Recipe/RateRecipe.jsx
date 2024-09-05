import React, { useState } from "react";
import { FaStar } from "react-icons/fa6";

const RateRecipe = () => {
  const [rating, setRating] = useState(4); // Default rating
  const [hover, setHover] = useState(null);
  const [opinion, setOpinion] = useState("");

  const handleSubmit = () => {
    // Submit action, can be integrated with API
    console.log("Rating:", rating);
    console.log("Opinion:", opinion);
  };

  return (
    <div className="max-w-lg p-4">
      <h3 className="text-lg font-semibold mb-2">
        Rate this recipe and share your opinion
      </h3>

      {/* Star rating */}
      <div className="flex space-x-1 mb-4">
        {
            [...Array(5)].map((_,index)=>{
                const starRating = index+1;
                return (
                    <FaStar key={index}  className={ ` w-5 h-5 cursor-pointer ${ starRating <= (hover || rating ) ? "text-red-500":"text-gray-400" } `}
                    onMouseEnter={()=>setHover(starRating)}
                    onMouseLeave={()=>setHover(null)}
                    onClick={()=>setRating(starRating)}
                    
                    />
                )
            })
        }
      </div>

      {/* Opinion text area */}
      <textarea
        className="w-full h-28 p-2 border border-gray-200 bg-gray-200 rounded-lg focus:outline-none focus:border-1 focus:border-gray-300 placeholder:text-gray-500"
        placeholder="Type here..."
        value={opinion}
        onChange={(e)=>setOpinion(e.target.value)}
      />

      {/* Post button */}
      <button
        className="mt-4 px-4 py-2 float-right bg-red-500 text-white rounded-lg hover:bg-red-600"
        onClick={handleSubmit}
      >
        Post
      </button>
    </div>
  );
};

export default RateRecipe;

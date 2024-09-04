import React from 'react'
import { FaStar } from 'react-icons/fa6'
import { LuFlame } from 'react-icons/lu'

const RecipeCard = ({data, title}) => {
  return (
    <div className="bg-white  rounded-lg  max-w-md mt-8 ">
      <h2 className="text-xl font-bold mb-6">{title}</h2>
      <div className="space-y-4">
        {data.map((recipe, index) => (
          <div key={index} className="flex  space-x-4">
            <img
              src={recipe.image}
              alt={recipe.title}
              className="w-20 h-20  md:h-16 xl:w-24 xl:h-20 object-cover rounded-md"
            />
            <div className="flex-1">
              <h3 className="font-semibold text-sm">{recipe.title}</h3>
              <div className="flex items-center mt-1">
                {[...Array(5)].map((_, i) => (
                  <FaStar
                    key={i}
                    className={`w-3 h-3 ${
                      i < recipe.rating
                        ? "text-red-400 fill-current"
                        : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
              <p className="text-sm text-gray-500 mt-1 flex items-center ">
                {" "}
                <LuFlame className="pb-0.5 w-4 h-4 text-red-600" /> <span> {recipe.calories} cals</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default RecipeCard
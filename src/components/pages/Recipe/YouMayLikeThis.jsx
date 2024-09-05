import React from "react";
import { FaBookmark, FaStar } from "react-icons/fa6";

const YouMayLikeThis = () => {
  const data = [
    {
        title: "Mixed Greens with Sun-Dried Tomato Dressing",
        image:
          "https://plus.unsplash.com/premium_photo-1670601440146-3b33dfcd7e17?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D",
        rating: 4,
      },
     
      {
        title: "Grilled Lemon Herb Chicken",
        image:
          "https://plus.unsplash.com/premium_photo-1675252369719-dd52bc69c3df?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D",
        rating: 4.5,
      },
      {
        title: "Avocado Toast with Poached Eggs",
        image:
          "https://images.unsplash.com/photo-1464454709131-ffd692591ee5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D",
        rating: 4,
      },
      {
        title: "Blueberry Pancakes",
        image:
          "https://images.unsplash.com/photo-1447078806655-40579c2520d6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZvb2R8ZW58MHx8MHx8fDA%3D",
        rating: 3,
      },
      {
        title: "Spaghetti Carbonara",
        image:
          "https://images.unsplash.com/photo-1495147466023-ac5c588e2e94?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGZvb2R8ZW58MHx8MHx8fDA%3D",
        rating: 4.6,
      },
      {
        title: "Strawberry Cheesecake",
        image:
          "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2hlZXNlY2FrZXxlbnwwfHwwfHx8MA%3D%3D",
        rating: 4.9,
      }
  ];

  return (
    <div className="mt-14">
      <h1 className="text-3xl font-semibold">You May Like this</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 mt-12 gap-5">
        {data.map((recipe, index) => (
          <div key={index} className="flex flex-col  h-60 border border-gray-300  rounded-md overflow-hidden  relative">
            <div className="absolute top-2 right-2 p-1 rounded-md bg-white">
              <FaBookmark className=" w-3 h-3 text-red-400" />
            </div>
            <img
              src={recipe.image}
              alt="food"
              className="w-full h-36 md:h-32 object-cover "
            />
            <div className="flex-1  mt-2 p-4">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <FaStar
                    key={i}
                    className={`w-3 h-3 ${
                      recipe.rating > i
                        ? "text-red-400 fill-current"
                        : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
              <h3 className="font-semibold text-sm mt-2 ">
                Mixed Greens with Sun-Dried Tomato Dressing
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default YouMayLikeThis;

import { FaStar } from "react-icons/fa";
import { LuFlame } from "react-icons/lu";

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

const RecentRecipies = () => {
  return (
    <div className="bg-white  rounded-lg  max-w-md mt-8 ">
      <h2 className="text-xl font-bold mb-4">Recent Recipes</h2>
      <div className="space-y-4">
        {recipes.map((recipe, index) => (
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
  );
};

export default RecentRecipies;

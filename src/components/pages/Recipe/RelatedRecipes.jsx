const recipes = [
  {
    name: " Quick Fish",
    image: "https://images.unsplash.com/photo-1566312235254-d4b52d8fb053?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmVjaXBlc3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    name: "Toast with Tomato",
    image: "https://images.unsplash.com/photo-1527751171053-6ac5ec50000b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHJlY2lwZXN8ZW58MHx8MHx8fDA%3D",
  },
  {
    name: "Ham, Egg, and Cheese",
    image: "https://images.unsplash.com/photo-1447078806655-40579c2520d6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZvb2R8ZW58MHx8MHx8fDA%3D",
  },
  {
    name: "Chicken Salad",
    image: "https://plus.unsplash.com/premium_photo-1663852297267-827c73e7529e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGZvb2R8ZW58MHx8MHx8fDA%3D",
  },
  { name: "Truffle Popcorn", image: "https://images.unsplash.com/34/rcaNUh3pQ9GD8w7Iy8qE__DSC0940.jpg?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Zm9vZHxlbnwwfDB8MHx8fDA%3D" },
  {
    name: "Tuna Salad",
    image: "https://images.unsplash.com/photo-1448043552756-e747b7a2b2b8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGZvb2R8ZW58MHwwfDB8fHww",
  },
];

export const RelatedRecipes = () => {
  return (
    <div className="bg-white  mt-10 rounded-lg ">
      <h2 className="text-xl font-bold mb-4">Related Recipes</h2>
      <div className="grid grid-cols-2  gap-4">
        {recipes.map((recipe, index) => (
          <div key={index} className="flex flex-col ">
            <img
              src={recipe.image}
              alt={recipe.name}
              className="rounded-md h-24 lg:h-32 w-40 mb-2 object-cover"
            />
            <p className="text-base text-center font-medium">{recipe.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

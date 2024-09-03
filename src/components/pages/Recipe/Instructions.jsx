import React from "react";

const Instructions = ({ className }) => {
  return (
    <div className={`space-y-6 mt-4  lg:text-xl ${className} `}>
      <div className=" flex items-start gap-4    font-semibold text-neutral-700 ">
        <h3 className=" p-2 grid place-content-center h-5 w-5 rounded-md text-white text-sm   bg-red-500 mt-0.5">
          1
        </h3>
        <p>Soak the sun-dried tomatoes in the soy milk for an hour.</p>
      </div>

      <div className=" flex gap-4    font-semibold text-neutral-700">
        <h3 className=" p-2 grid place-content-center h-5 w-5 rounded-md text-white text-sm   bg-red-500">
          2
        </h3>
        <p>
          Chop the fresh herbs, tomato, and onions and toss them with the salad
          greens. Add additional veggies as desired.
        </p>
      </div>
      <div className=" flex gap-4    font-semibold text-neutral-700 ">
        <h3 className=" p-2 grid place-content-center h-5 w-5 rounded-md text-white text-sm   bg-red-500">
          3
        </h3>
        <p className="">
          Juice the lemon and combine in a high-powered blender with the
          sun-dried tomato mixture and garlic until smooth. Pour over salad and
          toss together well. Top with brazil nuts and enjoy!
        </p>
      </div>
    </div>
  );
};

export default Instructions;

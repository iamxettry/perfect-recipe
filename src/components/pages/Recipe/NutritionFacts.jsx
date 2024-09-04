import React from 'react';

const NutritionFacts = () => {
  return (
    <div className="p-4 bg-gray-100 border rounded-md shadow-md ">
      <h3 className="font-semibold text-lg mb-2">Nutrition Facts</h3>
      <div className="flex justify-between border-b py-1 font-medium">
        <span className='text-neutral-600'>Calories</span>
        <span>494</span>
      </div>
      <div className="flex justify-between border-b py-1 font-medium">
        <span className='text-neutral-600'>Carbs</span>
        <span>80g</span>
      </div>
      <div className="flex justify-between border-b py-1 font-medium">
        <span className='text-neutral-600'>Fat</span>
        <span>18g</span>
      </div>
      <div className="flex justify-between border-b py-1 font-medium">
        <span className='text-neutral-600'>Protein</span>
        <span>24g</span>
      </div>
      <div className="flex justify-between border-b py-1 font-medium">
        <span className='text-neutral-600'>Fiber</span>
        <span>23g</span>
      </div>
      <div className="flex justify-between border-b py-1 font-medium">
        <span className='text-neutral-600'>Net carbs</span>
        <span>56g</span>
      </div>
      <div className="flex justify-between border-b py-1 font-medium">
        <span className='text-neutral-600'>Sodium</span>
        <span>444mg</span>
      </div>
      <div className="flex justify-between py-1 font-medium">
        <span className='text-neutral-600'>Cholesterol</span>
        <span>0mg</span>
      </div>
    </div>
  );
};

export default NutritionFacts;

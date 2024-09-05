import React, { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { FiCamera } from "react-icons/fi";

const AddInstructions = ({ onChange }) => {
  const [newInstruction, setNewInstruction] = useState("");

  const [instructionsList, setInstructionsList] = useState([
    "Cook the rice in boiling water.",
    "Heat the oil in a pan and fry the onions.",
  ]);

  const handleAddInstructions = (e) => {
    if (e.key === "Enter" && newInstruction.trim()) {
      e.preventDefault();
      const updatedInstructions = [...instructionsList, newInstruction.trim()];
      setInstructionsList(updatedInstructions);
      setNewInstruction("");

      // Call the parent onChange function to update recipe data
      onChange(updatedInstructions);
    }
  };
  return (
    <div className="">
      <button className="text-sm">Tap to edit</button>

      {/* Step 1 */}
      {instructionsList.map((instruction, index) => (
        <div key={index} className=" mb-6">
          <h3 className="text-lg font-semibold pb-2">Step {index+1} </h3>
          <div className="flex">
            <div className="flex-shrink-0">
              <label className="h-14 w-16 rounded-lg border border-neutral-300 bg-neutral-200 flex items-center justify-center  cursor-pointer  ">
                {/* Placeholder for an image  */}
                <FiCamera size={28} className="text-neutral-400" />
                <input type="file" className="hidden" />
              </label>
            </div>
            <div className="ml-4">
              <p className="text-gray-700 lg:text-lg font-medium">
                {instruction}
              </p>
            </div>
          </div>
        </div>
      ))}

      {/* Add New Instruction  */}
      <div className="mt-6">
        <input
          type="text"
          placeholder="Write Instruction"
          value={newInstruction}
          onChange={(e) => setNewInstruction(e.target.value)}
          onKeyDown={handleAddInstructions}
          className="border border-neutral-400 rounded-md  w-full px-4 py-1.5 md:py-2.5 lg:py-4 focus:border-red-500 focus:outline-none  lg:text-lg"
        />
      </div>

      <button className="flex items-center  justify-center gap-1 my-4 text-red-500/80 font-bold">
        <FaPlus className="pb-0.5" />
        <span>Header</span>
      </button>
    </div>
  );
};

export default AddInstructions;

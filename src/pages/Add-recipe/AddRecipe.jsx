import React from "react";
import WrapperContainer from "../../Components/common/WrapperContaner";
import CreateNewRecipe from "../../Components/pages/Add-recipe/CreateNewRecipe";
const AddRecipe = () => {
  return (
    <>
      <WrapperContainer>

        {/* Create New Recipe form */}
        <CreateNewRecipe/>
        
      </WrapperContainer>
    </>
  );
};

export default AddRecipe;

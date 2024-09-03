import React from "react";
import WrapperContainer from "../../components/common/WrapperContaner";
import CreateNewRecipe from "../../components/pages/Add-recipe/CreateNewRecipe";
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

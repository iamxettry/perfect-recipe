import React from "react";
import Button from "../../common/Button";

export const RelatedProduct = () => {
  return (
    <div className="p-4 bg-red-100  mt-10">
      <h1 className="text-2xl lg:text-3xl text-center font-bold mb-6">
        Related product
      </h1>
      <img
        src="https://plus.unsplash.com/premium_photo-1689596509614-4190d17efb6a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGZvb2R8ZW58MHwwfDB8fHww"
        className=" w-full h-48 object-cover mx-auto"
        alt="related product"
      />

        <Button className={"w-full mt-4 py-2"}>Buy Now</Button>
     
    </div>
  );
};

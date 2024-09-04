import React from "react";
import FooterForm from "./FooterForm";

const StayConnected = ({title, desc, children}) => {
  return (
    <div className="w-full flex  justify-center  p-4">
      <div className=" w-full lg:w-4/5 ">
        <h3 className="font-bold mb-3 text-center text-2xl">{title}</h3>
        <p className="text-sm mb-4 text-neutral-600 text-center ">
          {desc}
        </p>
   
        {children}
      </div>
    </div>
  );
};

export default StayConnected;

import React from "react";
import Button from "./Button";

const FooterForm = ({buttonName}) => {
  return (
    <form>
      <div className=" mb-4">
        <input
          type="email"
          placeholder="Enter Your Email"
          className="px-3 py-2.5 w-full text-sm border border-neutral-400 rounded-md focus:outline-none text-neutral-600 my-2"
        />
        <Button
          type="submit"
          className=" py-2.5 w-full my-2"
        >
          {buttonName}
        </Button>
      </div>
    </form>
  );
};

export default FooterForm;

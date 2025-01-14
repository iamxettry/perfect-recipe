import React from "react";
import { Link } from "react-router-dom";

const CardContainer = ({ title, link, children }) => {
  return (
    <div className="mb-24">
      <div className="pb-8">
        <h1 className="text-black font-bold text-4xl">{title}</h1>
        <div className="text-end mt-3">
          <Link
            to={`/${link}`}
            className="text-red-500  lg:text-xl font-semibold"
          >
            View more
          </Link>
        </div>
      </div>
      <div>{children}</div>
    </div>
  );
};

export default CardContainer;

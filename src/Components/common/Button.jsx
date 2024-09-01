import React from "react";

const Button = ({ className, children }) => {
  return (
    <button
      className={`bg-red-500 text-white font-medium px-4 py-1.5 min-w-24 rounded-md hover:bg-red-600  ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;

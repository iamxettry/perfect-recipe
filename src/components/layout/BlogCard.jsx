import React from "react";
import { Link } from "react-router-dom";

const BlogCard = ({ data }) => {
  return (
    <Link
      to={`/recipe/${data?.name}`}
      className="block  rounded-lg border border-neutral-300 hover:scale-105 transition-transform duration-300 ease-linear"
    >
      <img
        src={data?.image}
        alt={data?.name}
        className="w-full rounded-t-lg h-48 object-cover "
      />
      <div className="p-4">
        <h1 className="text-xl font-semibold text-center">{data?.title}</h1>
        <p className="text-sm text-center text-neutral-700 font-medium">
          {data?.desc}
        </p>
      </div>
    </Link>
  );
};

export default BlogCard;

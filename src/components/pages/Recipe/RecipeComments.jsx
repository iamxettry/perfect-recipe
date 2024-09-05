import React from "react";
import { FaHeart } from "react-icons/fa6";
import { HiDotsHorizontal } from "react-icons/hi";

import { AiOutlineComment } from "react-icons/ai";
import { LuHeart } from "react-icons/lu";
export const RecipeComments = ({ comment }) => {
  return (
    <div className="py-6 border-t border-gray-300">
      {/* Comment  */}
      <div className="flex items-start space-x-2 md:space-x-6">
        {/* User Avatar  */}
        <img
          className=" w-8 md:w-12  h-8 md:h-12 rounded-full object-cover "
          src={comment.avatar}
          alt="User avatar"
        />
        <div className="flex-1">
          <div className="flex flex-col gap-0">
            <div className="flex justify-between">
              <h4 className="text-sm font-bold">{comment.user}</h4>
              <HiDotsHorizontal className=" h-4 w-4 text-gray-700 cursor-pointer" />
            </div>
            <span className="text-xs text-gray-500 mt-0">{comment.time}</span>
          </div>
          <p className="mt-4 text-gray-700 font-medium text-sm">
            Wow, this Mixed Greens with Sun-Dried Tomato Dressing recipe is a
            flavor explosion in my mouth! very delicious.
          </p>

          {/* Like and Reply buttons  */}
          <div className="flex items-center space-x-4 mt-5 text-gray-500 pb-2 ">
            <button className="flex items-center space-x-1">
              <AiOutlineComment className="text-red-400 text-xl" />
              <span className="text-sm">Reply</span>
            </button>
            <button className="flex items-center space-x-1">
              <LuHeart className="text-red-400 text-xl" />
              <span className="text-sm">{comment.react} </span>
            </button>
          </div>
          {/* Reply  */}

          {comment.reply && comment.reply.length > 0 && (
            <div className="">
              {comment.reply.map((reply, index) => (
                <RecipeComments key={index} comment={reply} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

import React from "react";
import Button from "../../common/Button";
import { EggNoodle } from "../../../assets";
import ReviewCard from "./ReviewCard";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="min-h-72 relative  z-10 xl:mt-28 flex flex-col justify-end my-4 ">
      <div className="md:flex  w-full ">
        <div className="md:flex-1  ">
          <h1 className=" text-3xl sm:text-4xl lg:text-5xl font-bold ">
            <span>Your Daily Dish</span> <br />
            <span>
              A <span className="text-red-500">Food</span> Journey
            </span>
          </h1>
          <p className="my-5 font-medium text-neutral-700/95 pr-10 xs:w-4/5 md:w-full lg:w-[90%]">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum
            deserunt neque ipsa soluta pariatur magni numquam placeat voluptatum
            cum officiis.
          </p>

          {/* Signup Button */}
          <div>
            <Button className={"py-2.5 w-44 font-bold"}>
              <Link to="/signup" className=" w-full inline-block ">Sign up</Link>
            </Button>
            <div className="py-4">
              <span>Do you have account?</span>
              <Link
                to="/login"
                className="text-red-500 font-semibold px-2 cursor-pointer"
              >
                Log in
              </Link>
            </div>
          </div>
        </div>

        {/* Hero image section */}
        <div className="md:flex-1 absolute -z-30  right-0 top-0 md:relative">
          <div className=" flex justify-end">
            <img
              src={EggNoodle}
              alt="Egg-noodle"
              className="  w-36 xs:w-44 sm:w-52 md:w-80 xl:w-[400px] opacity-70  md:opacity-100 "
            />
          </div>
        </div>
      </div>
      {/* Review Card */}
      <div className="flex justify-end  sm:absolute right-0  z-30 -bottom-6 md:-bottom-10 lg:bottom-0 md:right-[15%] lg:right-[25%] ">
        <ReviewCard />
      </div>
    </section>
  );
};

export default HeroSection;

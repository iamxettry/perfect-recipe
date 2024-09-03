import React, { useState } from "react";
import Button from "../../common/Button";

const StayInTouchSection = () => {
    const [email, setEmail] = useState("")

    const handleSubmit = (e)=>{
        e.preventDefault();

        if(!email){
            console.log("Email is Missng!");
        }
        console.log(email);
    }
  return (
    <div className="flex flex-col items-center gap-8 bg-red-100 py-10 mb-10">
      <h1 className=" text-3xl md:text-4xl text-black font-semibold">Let's Stay In Touch</h1>
      <p className="text-neutral-500 md:text-2xl font-semibold text-center">
        <span>Join our newsletter, so that we reach out to you with</span>
        <br className="hidden sm:block" />
        <span> our news and offer.</span>
      </p>
      <form className="" onSubmit={handleSubmit} >
        <input
          type="email"
          name="email"
          id="email"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          placeholder="Enter your email"
          className="mx-4 px-4 py-2.5 min-w-32  md:w-80 border border-neutral-400 rounded-md focus:outline-none text-neutral-600 font-medium pb-2 "
        />
        <Button className={"mx-4 py-2.5 md:w-32 mt-4 xs:mt-1"}>
          <input type="submit" value="Subcribe" className="capitalize" />
        </Button>
      </form>
    </div>
  );
};

export default StayInTouchSection;

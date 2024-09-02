import React from "react";
import WrapperContainer from "../common/WrapperContaner";
import {
  FaFacebookF,
  FaInstagram,
  FaPinterest,
  FaTiktok,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaXTwitter } from "react-icons/fa6";
import FooterForm from "../common/FooterForm";
import { LuUtensilsCrossed } from "react-icons/lu";
const Footer = () => {
  return (
    <footer className="py-8 bg-neutral-200">
      <WrapperContainer>
        {/* upper footer */}
        <div className="grid  lg:grid-cols-3   gap-6">
          {/* Logo and Description */}
          <div className="w-full  mb-6 md:mb-0">
            <h2 className="flex items-center gap-2 text-3xl  font-bold text-gray-900 mb-3">
              <LuUtensilsCrossed className="pb-0.5 w-6 h-6 md:w-7 md:h-7" />
              <span className="text-black">Perfect</span>
              <span className="text-red-500">Recipe</span>
            </h2>
            <p className=" max-w-80 text-neutral-500">
              The purpose of lorem ipsum is to create a natural-looking block of
              text (sentence, paragraph, page, etc.) that doesn’t distract from
              the layout.
            </p>
          </div>

          <div className="flex flex-col   md:flex-row md:mx-5 ">
            {/* Quick Links */}
            <div className="w-full  mb-6 md:mb-0">
              <h3 className="font-bold mb-3">Quick links</h3>
              <ul className="space-y-2 text-neutral-500">
                <li>
                  <a href="#" className="hover:text-red-500">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-red-500">
                    Recipes
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-red-500">
                    Blog
                  </a>
                </li>
              </ul>
            </div>

            <div className="w-full  mb-6 md:mb-0">
              <h3 className="font-bold mb-3">Quick links</h3>
              <ul className=" text-neutral-500 space-y-2">
                <li>
                  <a href="#" className="hover:text-red-500">
                    Share Recipe
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-red-500">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-red-500">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Legal Links */}
            <div className="w-full  mb-6 md:mb-0">
              <h3 className="font-bold mb-3">Legal</h3>
              <ul className="space-y-2 text-neutral-500">
                <li>
                  <a href="#" className="hover:text-red-500">
                    Terms Of Use
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-red-500">
                    Privacy & Cookies
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Newsletter */}
          <div className="w-full flex justify-end ">
            <div className=" w-full lg:w-4/5 ">
              <h3 className="font-bold mb-3 text-center text-2xl">
                Newsletter
              </h3>
              <p className="text-sm mb-4 text-neutral-600 text-center ">
                Subscribe to our newsletter to get more free tips.
              </p>
              {/* form */}
              <FooterForm />
            </div>
          </div>
        </div>
        {/* Divider */}
        <div className="mb-5 border-t border-gray-300"></div>

        {/* Bottom footer */}
        <div className="flex flex-col md:flex-row gap-4 justify-between">
          <h1>
            {" "}
            <span className="text-sm text-neutral-700 sm:text-center ">
              © {new Date().getFullYear()}{" "}
              <Link to="" className="hover:underline">
                RecipeLogo™
              </Link>
              . All Rights Reserved.
            </span>
          </h1>
          <div className="flex gap-4 items-center">
            <Link to="">
              <FaTiktok size={16} />
            </Link>
            <Link to="">
              <FaXTwitter size={16} />
            </Link>

            <Link to="">
              <FaFacebookF size={16} />
            </Link>
            <Link to="">
              <FaInstagram size={16} />
            </Link>
            <Link to="">
              <FaPinterest size={16} />
            </Link>
          </div>
        </div>
      </WrapperContainer>
    </footer>
  );
};

export default Footer;

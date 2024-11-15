import React from "react";
import { FaLinkedin, FaGithub, FaFacebookF } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="bg-slate-300">
      <div className=" container mx-auto px-4 ">
        <div className=" w-full flex flex-col sm:flex-row justify-center sm:justify-between items-center gap-2 py-4 text-2xl">
          <div className="flex items-center">
            <a
              href="https://www.linkedin.com/in/mdramjanict/"
              target="_blank"
              className="border border-slate-300 p-2 hover:bg-primary hover:text-white rounded-full transition-all cursor-pointer"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/Ramjanict"
              target="_blank"
              className="border border-slate-300 p-2 hover:bg-primary hover:text-white rounded-full transition-all cursor-pointer"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.facebook.com/mdramjanali.ict/"
              target="_blank"
              className="border border-slate-300 p-2 hover:bg-primary hover:text-white rounded-full transition-all cursor-pointer"
            >
              <FaFacebookF />
            </a>
          </div>
          <p className="text-lg text-center">
            Ramjan © All rights reserved 2024
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

import React from "react";
import ramjan from "../assets/images/ramjan.png";
import { TiTick } from "react-icons/ti";
import { FaLinkedin, FaGithub, FaFacebookF } from "react-icons/fa";
import { Link } from "react-scroll";
import cv from "../assets/resume_ramjan.pdf";
const Resume = () => {
  return (
    <div id="resume" className="bg-white flex px-6">
      <div className="hidden sm:flex flex-col justify-end gap-2 py-10 text-2xl">
        <a
          href="https://www.linkedin.com/in/mdramjanict/"
          target="_blank"
          className="border border-slate-300 p-2 hover:bg-primary  hover:text-white rounded-full transition-all cursor-pointer"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/Ramjanict"
          target="_blank"
          className="border border-slate-300 p-2 hover:bg-primary  hover:text-white rounded-full transition-all cursor-pointer"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.facebook.com/mdramjanali.ict/"
          target="_blank"
          className="border border-slate-300 p-2 hover:bg-primary  hover:text-white rounded-full transition-all cursor-pointer"
        >
          <FaFacebookF />
        </a>
      </div>

      <div className="container mx-auto px-4">
        <div className=" w-[80%] mx-auto  flex flex-col-reverse gap-4 md:flex-row  justify-between items-center">
          <div className="flex  justify-between items-center p-2 sm:px-10 sm:py-5  border border-blue-700 hover:bg-blue-700 hover:text-white rounded-md text-sm sm:text-lg transition-all mb-3 cursor-pointer">
            <a href={cv} download="Resume_ramjan.pdf" className=" uppercase ">
              download resume
            </a>
            <TiTick size={20} />
          </div>
          <div className="w-[50%]">
            <img src={ramjan} alt="photos" />
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center gap-3 section">
        <Link
          spy={true}
          smooth={true}
          duration={500}
          to="home"
          className="w-3 h-3 bg-slate-400 rounded-full hover:bg-primary transition-all cursor-pointer"
        ></Link>
        <Link
          spy={true}
          smooth={true}
          duration={500}
          offset={-30}
          to="about"
          className="w-3 h-3 bg-slate-400 rounded-full hover:bg-primary transition-all cursor-pointer"
        ></Link>
        <Link
          spy={true}
          smooth={true}
          duration={500}
          to="work"
          className="w-3 h-3 bg-slate-400 rounded-full hover:bg-primary transition-all cursor-pointer"
        ></Link>
        <Link
          spy={true}
          smooth={true}
          duration={500}
          offset={-25}
          to="skills"
          className="w-3 h-3 bg-slate-400 rounded-full hover:bg-primary transition-all cursor-pointer"
        ></Link>
        <Link
          spy={true}
          smooth={true}
          duration={500}
          offset={-40}
          to="resume"
          className="w-3 h-3 bg-slate-400 rounded-full hover:bg-primary transition-all cursor-pointer"
        ></Link>
        <Link
          spy={true}
          smooth={true}
          duration={500}
          offset={-40}
          to="contact"
          className="w-3 h-3 bg-slate-400 rounded-full hover:bg-primary transition-all cursor-pointer"
        ></Link>
      </div>
    </div>
  );
};

export default Resume;

import React from "react";
import hero from "../assets/images/coding.gif";
import hand_icon from "../assets/images/hand_icon.png";
import javascript from "../assets/images/3.png";
import react from "../assets/images/4.png";
import nodejs from "../assets/images/9.png";
import { FaLinkedin, FaGithub, FaFacebookF } from "react-icons/fa";
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <div id="home" className=" flex px-6 pt-16">
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

      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center gap-4 p-4  ">
        {/**text part */}

        <div className=" md:basis-1/3 flex flex-col gap-5  ">
          <div className=" flex w-fit px-8 py-5  justify-center items-center gap-2 bg-[#EDF2F8] rounded-md shadow-2xl">
            <div className=" animate-pulse">
              <img
                className="min-w-16 max-w-16 p-2"
                src={hand_icon}
                alt="logo"
              />
            </div>

            <div>
              <p className="text-sm text-slate-500">Hello, I am</p>
              <h2 className="uppercase font-bold text-4xl">ramjan</h2>
            </div>
          </div>

          <div className="w-fit sm:ml-auto  px-6 py-3 rounded-lg bg-[#EDF2F8] shadow-2xl">
            <h2 className="">Fullstack Developer</h2>
          </div>
        </div>

        {/**image part */}

        <div className=" md:basis-2/3 bg-slate-200 rounded-full shadow-lg">
          <img className="w-[90%] mx-auto" src={hero} alt="images" />
        </div>

        {/**icons part */}

        <div className="md:basis-1/3 flex lg:flex-col flex-row  justify-center md:items-start items-center gap-5">
          <div className="animate-pulse lg:p-6 lg:w-24 lg:h-24 w-16 h-16 p-4 rounded-full bg-white shadow-xl">
            <img src={javascript} alt="" />
          </div>

          <div className="animate-pulse lg:p-6 lg:w-36 lg:h-36 w-16 h-16 p-4 rounded-full bg-white shadow-xl">
            <img src={react} alt="" />
          </div>

          <div className="animate-pulse lg:p-6 lg:w-24 lg:h-24 w-16 h-16 p-4 rounded-full bg-white shadow-xl">
            <img src={nodejs} alt="" />
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

export default Hero;

import React from "react";
import ramjan from "../assets/images/ramjan.png";
import { FaLinkedin, FaGithub, FaFacebookF } from "react-icons/fa";
import { Link } from "react-scroll";
const About = () => {
  return (
    <div id="about" className="flex px-6">
      <div className="hidden sm:flex flex-col justify-end gap-2 py-10 text-2xl">
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
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center gap-4">
          <h2 className="capitalize text-lg sm:text-5xl  font-extrabold tracking-wider  max-w-3xl text-center leading-loose mt-10">
            I Know That <span className="text-primary">Good Design</span>
            Means <span className="text-primary ">Good Business</span>
          </h2>
          <div className=" flex flex-col lg:flex-row lg:justify-between items-center gap-5 space-y-4 ">
            <div className=" basis-1/2 ">
              <h1 className="text-xl sm:text-3xl py-2 font-semibold">
                About Me
              </h1>
              <p className=" text-justify text-[#6B7688]">
                I'm Ramjan, a Full Stack Web Application Developer with
                experience in React, Node.js, Express.js, and MongoDB.
                Passionate about creating scalable and performant web
                applications. Collaborated with cross-functional teams to
                deliver high-quality products on tight deadlines
              </p>
            </div>
            <div className="basis-1/2 max-w-lg rounded-t-full bg-gray-500">
              <img className="w-full " src={ramjan} alt="" />
            </div>
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

export default About;

import React from "react";
import html from "../assets/images/1.png";
import css from "../assets/images/2.png";
import javascript from "../assets/images/3.png";
import react from "../assets/images/4.png";
import redux from "../assets/images/5.png";
import tailwind from "../assets/images/6.png";
import bootstrap from "../assets/images/7.png";
import jquery from "../assets/images/8.png";
import nodejs from "../assets/images/9.png";
import expressjs from "../assets/images/10.png";
import mongoDB from "../assets/images/15.png";
import git from "../assets/images/12.png";
import { Link } from "react-scroll";
import { FaLinkedin, FaGithub, FaFacebookF } from "react-icons/fa";
const skills = [
  { heading: "html", imgage: html },
  { heading: "css", imgage: css },
  { heading: "javascript", imgage: javascript },
  { heading: "react", imgage: react },
  { heading: "nodejs", imgage: nodejs },
  { heading: "redux", imgage: expressjs },
  { heading: "expressjs", imgage: redux },
  { heading: "mongoDB", imgage: mongoDB },
  { heading: "tailwind", imgage: tailwind },
  { heading: "bootstrap", imgage: bootstrap },
  { heading: "jquery", imgage: jquery },
  { heading: "git", imgage: git },
];
const Skills = () => {
  return (
    <div id="skills" className="bg-slate-200 flex px-6 py-16">
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

      <div className=" container mx-auto px-4 ">
        <div className="md:w-[50%] w-[80%] mx-auto space-y-12">
          <h2 className=" capitalize text-lg sm:text-5xl font-extrabold tracking-wider  text-center leading-relaxed">
            my <span className="text-primary ">skills</span>
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center gap-5 gap-y-10">
            {skills.map((item, index) => {
              return (
                <div
                  key={index}
                  className="w-24 h-24 bg-white rounded-md hover:shadow-2xl hover:translate-y-[-10px] transition-all duration-300"
                >
                  <img
                    className="w-full h-full p-4 cursor-pointer transition-all"
                    src={item.imgage}
                    alt="photos"
                  />
                </div>
              );
            })}
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

export default Skills;

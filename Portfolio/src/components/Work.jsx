import React, { useState } from "react";
import { Link } from "react-scroll";
import allData from "../Db/db.js";
import { FaLinkedin, FaGithub, FaFacebookF } from "react-icons/fa";
import Card from "./Card.jsx";
const Work = () => {
  const [data, setData] = useState(allData);
  const [toggle, setToggle] = useState("All");

  const handleToggle = (category) => {
    setToggle(category);
  };
  const filterResult = (category) => {
    const result = allData.filter((item) => {
      return item.category === category;
    });
    setData(result);
  };
  return (
    <div id="work" className="bg-[#EDF2F8] flex px-6 py-8 md:py-16">
      <div className="flex-col justify-end hidden gap-2 py-10 text-2xl lg:flex">
        <a
          href="https://www.linkedin.com/in/mdramjanict/"
          target="_blank"
          className="p-2 transition-all border rounded-full cursor-pointer border-slate-300 hover:bg-bg-primary hover:text-white"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/Ramjanict"
          target="_blank"
          className="p-2 transition-all border rounded-full cursor-pointer border-slate-300 hover:bg-primary hover:text-white"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.facebook.com/mdramjanali.ict/"
          target="_blank"
          className="p-2 transition-all border rounded-full cursor-pointer border-slate-300 hover:bg-primary hover:text-white"
        >
          <FaFacebookF />
        </a>
      </div>

      <div className="container px-4 mx-auto">
        <div className="flex flex-col items-center justify-center w-full gap-6">
          <h2 className="text-lg font-extrabold leading-relaxed tracking-wider text-center capitalize md:text-5xl">
            my recent <span className="text-primary">creative</span> projects
          </h2>

          <div className="flex flex-wrap items-center justify-center w-full gap-4 py-5 ">
            <button
              onClick={() => {
                setData(allData);
                handleToggle("All");
              }}
              className={
                toggle === "All"
                  ? "px-6 py-2 font-semibold rounded-md bg-primary text-white"
                  : "px-6 py-2 font-semibold bg-white rounded-md "
              }
            >
              All
            </button>
            <button
              onClick={() => {
                filterResult("Ecommerce");
                handleToggle("Ecommerce");
              }}
              className={
                toggle === "Ecommerce"
                  ? "px-6 py-2 font-semibold rounded-md bg-primary text-white"
                  : "px-6 py-2 font-semibold bg-white rounded-md "
              }
            >
              Ecommerce
            </button>
            <button
              onClick={() => {
                filterResult("MERN");
                handleToggle("MERN");
              }}
              className={
                toggle === "MERN"
                  ? "px-6 py-2 font-semibold rounded-md bg-primary text-white"
                  : "px-6 py-2 font-semibold bg-white rounded-md "
              }
            >
              MERN
            </button>
            <button
              onClick={() => {
                filterResult("ReactJS");
                handleToggle("ReactJS");
              }}
              className={
                toggle === "ReactJS"
                  ? "px-6 py-2 font-semibold rounded-md bg-primary text-white"
                  : "px-6 py-2 font-semibold bg-white rounded-md "
              }
            >
              ReactJS
            </button>
            <button
              onClick={() => {
                filterResult("Tailwind");
                handleToggle("Tailwind");
              }}
              className={
                toggle === "Tailwind"
                  ? "px-6 py-2 font-semibold rounded-md bg-primary text-white"
                  : "px-6 py-2 font-semibold bg-white rounded-md "
              }
            >
              Tailwind
            </button>
            <button
              onClick={() => {
                filterResult("Bootstrap");
                handleToggle("Bootstrap");
              }}
              className={
                toggle === "Bootstrap"
                  ? "px-6 py-2 font-semibold rounded-md bg-primary text-white"
                  : "px-6 py-2 font-semibold bg-white rounded-md "
              }
            >
              Bootstrap
            </button>
          </div>
        </div>

        <div className="grid w-full gap-8 px-3 py-5 grid-cols-auto gap-y-10 ">
          {data.map((item, index) => {
            return (
              <Card
                key={index}
                image={item.image}
                heading={item.heading}
                des={item.des}
                category={item.category}
                github={item.github}
                live={item.live}
              />
            );
          })}
        </div>
      </div>
      <div className="flex flex-col justify-center gap-3 section">
        <Link
          spy={true}
          smooth={true}
          duration={500}
          to="home"
          className="w-3 h-3 transition-all rounded-full cursor-pointer bg-slate-400 hover:bg-primary"
        ></Link>
        <Link
          spy={true}
          smooth={true}
          duration={500}
          offset={-30}
          to="about"
          className="w-3 h-3 transition-all rounded-full cursor-pointer bg-slate-400 hover:bg-primary"
        ></Link>
        <Link
          spy={true}
          smooth={true}
          duration={500}
          to="work"
          className="w-3 h-3 transition-all rounded-full cursor-pointer bg-slate-400 hover:bg-primary"
        ></Link>
        <Link
          spy={true}
          smooth={true}
          duration={500}
          offset={-25}
          to="skills"
          className="w-3 h-3 transition-all rounded-full cursor-pointer bg-slate-400 hover:bg-primary"
        ></Link>
        <Link
          spy={true}
          smooth={true}
          duration={500}
          offset={-40}
          to="resume"
          className="w-3 h-3 transition-all rounded-full cursor-pointer bg-slate-400 hover:bg-primary"
        ></Link>
        <Link
          spy={true}
          smooth={true}
          duration={500}
          offset={-40}
          to="contact"
          className="w-3 h-3 transition-all rounded-full cursor-pointer bg-slate-400 hover:bg-primary"
        ></Link>
      </div>
    </div>
  );
};

export default Work;

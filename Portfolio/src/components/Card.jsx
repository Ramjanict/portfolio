import React from "react";
import { VscPreview } from "react-icons/vsc";
import { FaGithubSquare } from "react-icons/fa";
const Card = ({ image, heading, des, github, live }) => {
  return (
    <div className="w-full">
      <div className="bg-white flex flex-col justify-center items-center gap-y-4 p-4 hover:shadow-lg hover:translate-y-[-10px] transition-all duration-300 rounded-xl ">
        <div className="relative group">
          <div>
            <div className="flex items-center justify-center w-full min-h-52">
              <img
                className="w-full h-full transition-all "
                src={image}
                alt=""
              />
            </div>
            <h2 className="text-xl font-semibold ">{heading}</h2>
            <p className="text-sm">{des}</p>
          </div>
          <a
            href={github}
            target="_blank"
            className="absolute top-0 left-0 invisible w-full h-full transition-all duration-300 bg-black cursor-pointer bg-opacity-40 group-hover:visible"
          >
            <span className="flex items-center justify-center h-full text-6xl text-white ">
              <FaGithubSquare />
            </span>
          </a>
        </div>
        <a
          href={live}
          target="_blank"
          className="flex items-center gap-2 px-3 py-1 text-white rounded cursor-pointer bg-primary hover:bg-opacity-80"
        >
          <p className="text-xs">Live Preview</p>
          <span>
            <VscPreview />
          </span>
        </a>
      </div>
    </div>
  );
};

export default Card;

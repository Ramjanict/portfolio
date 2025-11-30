import { FaGithubSquare } from "react-icons/fa";
import { VscPreview } from "react-icons/vsc";

const Card = ({ image, heading, des, github, live }) => {
  return (
    <div className="w-full h-full">
      <div className="bg-white flex flex-col h-full justify-between items-center gap-y-4 p-4 hover:shadow-lg hover:translate-y-[-10px] transition-all duration-300 rounded-xl">

     
        <div className="relative group w-full">
          <div>
            {/* IMAGE */}
            <div className="flex items-center justify-center w-full h-52 overflow-hidden">
              <img
                className="w-full h-full object-cover transition-all"
                src={image}
                alt=""
              />
            </div>

            <h2 className="mt-3 text-xl font-semibold">{heading}</h2>
            <p className="text-sm">{des}</p>
          </div>

          {/* GITHUB OVERLAY */}
          <a
            href={github}
            target="_blank"
            className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-40 invisible group-hover:visible transition-all duration-300"
          >
            <span className="flex items-center justify-center h-full text-6xl text-white">
              <FaGithubSquare />
            </span>
          </a>
        </div>

     
        <a
          href={live}
          target="_blank"
          className="flex items-center gap-2 px-3 py-1 text-white rounded cursor-pointer bg-primary hover:bg-opacity-80 mt-auto"
        >
          <p className="text-xs">Live Preview</p>
          <VscPreview />
        </a>

      </div>
    </div>
  );
};

export default Card;
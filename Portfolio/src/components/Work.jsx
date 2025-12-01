import { useState } from "react";
import { FaFacebookF, FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-scroll";
import allData from "../Db/db.js";
import Card from "./Card.jsx";
import Pagination from "./Pagination.jsx";

const Work = () => {
  const [data, setData] = useState(allData);
  const [toggle, setToggle] = useState("All");

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8; // adjust as needed
  const totalPages = Math.ceil(data.length / itemsPerPage);

  const handleToggle = (category) => {
    setToggle(category);
    setCurrentPage(1); // reset to first page on filter change
  };

  const filterResult = (category) => {
    const result = allData.filter((item) => item.category === category);
    setData(result);
  };

  // Calculate items to display for current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (page) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };

  return (
    <div id="work" className="bg-[#EDF2F8] flex px-6 py-8 md:py-16">
      {/* Social icons */}
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
        {/* Heading and filter buttons */}
        <div className="flex flex-col items-center justify-center w-full gap-6">
          <h2 className="text-lg font-extrabold leading-relaxed tracking-wider text-center capitalize md:text-5xl">
            my recent <span className="text-primary">creative</span> projects
          </h2>

          <div className="flex flex-wrap items-center justify-center w-full gap-4 py-5 ">
            {["All", "Ecommerce", "MERN", "ReactJS" , "Client"].map((category) => (
              <button
                key={category}
                onClick={() => {
                  category === "All" ? setData(allData) : filterResult(category);
                  handleToggle(category);
                }}
                className={
                  toggle === category
                    ? "px-6 py-2 font-semibold rounded-md bg-primary text-white"
                    : "px-6 py-2 font-semibold bg-white rounded-md "
                }
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Projects grid */}
        <div className="grid w-full gap-8 px-3 py-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
          {currentItems.map((item, index) => (
            <Card
              key={index}
              image={item.image}
              heading={item.heading}
              des={item.des}
              category={item.category}
              github={item.github}
              live={item.live}
            />
          ))}
        </div>

    <div className="py-5">
         <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
    </div>
     

      </div>


      <div className="flex flex-col justify-center gap-3 section">
        {["home", "about", "work", "skills", "resume", "contact"].map(
          (section, idx) => (
            <Link
              key={section}
              spy={true}
              smooth={true}
              duration={500}
              offset={["about", "skills"].includes(section)
                ? section === "about"
                  ? -30
                  : -25
                : section === "resume" || section === "contact"
                ? -40
                : 0}
              to={section}
              className="w-3 h-3 transition-all rounded-full cursor-pointer bg-slate-400 hover:bg-primary"
            ></Link>
          )
        )}
      </div>
    </div>
  );
};

export default Work;

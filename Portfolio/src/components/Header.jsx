import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { IoIosMenu, IoMdClose } from "react-icons/io";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [stricky, setStricky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setStricky(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <div className={`${stricky ? "stricky" : ""} w-full fixed z-10 `}>
      <div className="container mx-auto ">
        <div className="w-full ">
          {/**mobile menu */}
          <div
            onClick={() => {
              setShowMenu(true);
            }}
            className="flex justify-between w-full px-10 py-4 bg-white sm:hidden "
          >
            <span className="p-2 text-2xl text-white bg-blue-600 rounded-full">
              <IoIosMenu />
            </span>
          </div>
          {showMenu && (
            <div className="">
              <div className="w-[70%] custom-shadow  bg-white ml-auto px-10 py-4 flex justify-between p-2 h-screen absolute top-0 right-0 left-0 bottom ">
                <div className="flex flex-col mt-16 space-y-8 font-medium uppercase header ">
                  <Link
                    onClick={() => {
                      setShowMenu(false);
                    }}
                    spy={true}
                    smooth={true}
                    duration={500}
                    to="home"
                    className="hover:text-[#6D3BAC] text-[#6b8688] transition-all cursor-pointer"
                  >
                    Home
                  </Link>

                  <Link
                    onClick={() => {
                      setShowMenu(false);
                    }}
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={-30}
                    to="about"
                    className="hover:text-[#6D3BAC] text-[#6b8688] transition-all cursor-pointer"
                  >
                    about
                  </Link>

                  <Link
                    onClick={() => {
                      setShowMenu(false);
                    }}
                    spy={true}
                    smooth={true}
                    duration={500}
                    to="work"
                    className="hover:text-[#6D3BAC] text-[#6b8688] transition-all cursor-pointer"
                  >
                    work
                  </Link>

                  <Link
                    onClick={() => {
                      setShowMenu(false);
                    }}
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={-25}
                    to="skills"
                    className="hover:text-[#6D3BAC] text-[#6b8688] transition-all cursor-pointer"
                  >
                    skills
                  </Link>
                  <Link
                    onClick={() => {
                      setShowMenu(false);
                    }}
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={-40}
                    to="resume"
                    className="hover:text-[#6D3BAC] text-[#6b8688] transition-all cursor-pointer"
                  >
                    resume
                  </Link>
                  <Link
                    onClick={() => {
                      setShowMenu(false);
                    }}
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={-40}
                    to="contact"
                    className="hover:text-[#6D3BAC] text-slate-500 transition-all cursor-pointer"
                  >
                    contact
                  </Link>
                </div>
                <span
                  onClick={() => {
                    setShowMenu(false);
                  }}
                  className="text-4xl cursor-pointer text-primary hover:text-red-500"
                >
                  <IoMdClose />
                </span>
              </div>
            </div>
          )}

          <div className="hidden h-16 sm:block ">
            <ul className="flex items-center justify-between h-full max-w-md mx-auto font-semibold uppercase ">
              <Link
                className="cursor-pointer"
                spy={true}
                smooth={true}
                duration={500}
                to="home"
              >
                home
              </Link>
              <Link
                className="cursor-pointer"
                spy={true}
                smooth={true}
                duration={500}
                offset={100}
                to="about"
              >
                about
              </Link>
              <Link
                className="cursor-pointer"
                smooth={true}
                spy={true}
                duration={500}
                offset={100}
                to="work"
              >
                work
              </Link>
              <Link
                className="cursor-pointer"
                smooth={true}
                spy={true}
                duration={500}
                offset={100}
                to="skills"
              >
                skills
              </Link>
              <Link
                className="cursor-pointer"
                smooth={true}
                spy={true}
                duration={500}
                offset={100}
                to="resume"
              >
                resume
              </Link>
              <Link
                className="cursor-pointer"
                smooth={true}
                spy={true}
                duration={500}
                offset={100}
                to="contact"
              >
                contact
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

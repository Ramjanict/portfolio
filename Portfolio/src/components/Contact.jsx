import React, { useRef } from "react";
import { CiMobile4 } from "react-icons/ci";
import { CgMail } from "react-icons/cg";
import emailjs from "@emailjs/browser";

import { FaLinkedin, FaGithub, FaFacebookF } from "react-icons/fa";
import { Link } from "react-scroll";
const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("service_xjqn2mp", "template_59pohvi", form.current, {
        publicKey: "9FIumgm58Y_HEw838",
      })
      .then(
        () => {
          console.log("success");
        },
        (error) => {
          console.log("Falid", error.text);
        }
      );
  };
  return (
    <div id="contact" className=" flex px-6 py-16 bg-slate-200">
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
        <div className="flex flex-col w-full max-w-2xl mx-auto  justify-center items-center gap-7">
          <div>
            <h2 className=" capitalize text-lg sm:text-5xl font-extrabold tracking-wider  text-center leading-relaxed">
              contact <span className="text-primary ">with</span> me
            </h2>
          </div>
          <div className="flex flex-col md:flex-row w-full gap-5">
            <div className="flex basis-1/2 items-center gap-1 md:gap-2  bg-[#3F5F73] bg-opacity-10 p-4 rounded-md">
              <CgMail className="text-red-600 text-2xl" />
              <a href="mailto:mdramjan.ict@gmail.com">mdramjan.ict@gmail.com</a>
            </div>
            <div className="flex basis-1/2 items-center gap-2 tex-4xl p-4 bg-[#16a085] rounded-md text-white ">
              <CiMobile4 size={40} />
              <p>01303488984</p>
            </div>
          </div>
          <form
            ref={form}
            onSubmit={sendEmail}
            className="flex flex-col gap-5 w-full"
          >
            <input
              className="p-4 w-full outline-none bg-white rounded-md  transition-all hover:shadow-md"
              type="text"
              name="user_name"
              placeholder="Your Name"
            />

            <input
              className="p-4 w-full outline-none bg-white rounded-md  transition-all hover:shadow-md"
              type="text"
              name="user_email"
              placeholder="Your Email"
            />
            <input
              className="p-4 w-full outline-none bg-white rounded-md  transition-all hover:shadow-md"
              type="text"
              placeholder="Subject"
            />

            <textarea
              className="p-4 w-full outline-none bg-white rounded-md  transition-all hover:shadow-md"
              type="textarea"
              name="message"
              placeholder="Your Message"
              rows="10"
            />
          </form>
          <button
            type="submit"
            value="send"
            className="px-6 py-3 border transition-all border-blue-700 hover:bg-blue-700 hover:text-white rounded-md text-lg"
          >
            Send Message
          </button>
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

export default Contact;

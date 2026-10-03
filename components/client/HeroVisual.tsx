"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import image1 from "../../public/images/ramjan.png";
interface HeroVisualProps {
  yearsExperience?: number;
  happyClients?: number;
  finishedProjects?: number;
}

export default function HeroVisual({
  yearsExperience = 2,
  happyClients = 18,
  finishedProjects = 38,
}: HeroVisualProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative w-full max-w-[500px] aspect-square select-none  "
    >
      {/* Badge 1: Experience (Top Left) */}
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
        className="badge flex items-center rounded-lg bg-white dark:bg-gray-800 shadow-md max-w-32 max-h-12 md:max-h-full md:max-w-full transition-all duration-300 ease-in-out hover:shadow-lg md:p-3 absolute top-0 -left-12 z-20 gap-2"
      >
        <div className="sm:text-2xl md:text-3xl text-[#FE705A]">
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 24 24"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M9 13V16H15V13H22V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V13H9ZM11 11H13V14H11V11ZM7 5V2C7 1.44772 7.44772 1 8 1H16C16.5523 1 17 1.44772 17 2V5H21C21.5523 5 22 5.44772 22 6V11H15V9H9V11H2V6C2 5.44772 2.44772 5 3 5H7ZM9 3V5H15V3H9Z" />
          </svg>
        </div>
        <div className="flex items-center gap-0.5 sm:gap-1">
          <div className="text-lg sm:text-2xl md:text-3xl font-bold text-[#FE705A] flex items-center">
            <span>{yearsExperience}</span>
            <span className="ml-0.5 sm:ml-1" />
          </div>
          <div className="text-[10px] sm:text-xs md:text-sm font-medium text-black dark:text-white max-w-[80px] sm:max-w-[100px] md:max-w-[120px] leading-tight">
            + Years Of Experience
          </div>
        </div>
      </motion.div>

      {/* Badge 2: Finished Projects (Bottom Left) */}
      <motion.div
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut" }}
        className="badge flex items-center rounded-lg bg-white dark:bg-gray-800 shadow-md max-w-32 max-h-12 md:max-h-full md:max-w-full transition-all duration-300 ease-in-out hover:shadow-lg md:p-3 absolute -bottom-2 left-[0%] sm:left-0 z-20 gap-2"
      >
        <div className="sm:text-2xl md:text-3xl text-[#FE705A]">
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 24 24"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M17 2H20C20.5523 2 21 2.44772 21 3V21C21 21.5523 20.5523 22 20 22H4C3.44772 22 3 21.5523 3 21V3C3 2.44772 3.44772 2 4 2H7V0H9V2H15V0H17V2ZM7 8V10H17V8H7ZM7 12V14H17V12H7Z" />
          </svg>
        </div>
        <div className="flex items-center gap-0.5 sm:gap-1">
          <div className="text-lg sm:text-2xl md:text-3xl font-bold text-[#FE705A] flex items-center">
            <span>{finishedProjects}</span>
            <span className="ml-0.5 sm:ml-1" />
          </div>
          <div className="text-[10px] sm:text-xs md:text-sm font-medium text-black dark:text-white max-w-[80px] sm:max-w-[100px] md:max-w-[120px] leading-tight">
            Finished Projects
          </div>
        </div>
      </motion.div>

      {/* Badge 3: Happy Clients (Middle Right) */}
      <motion.div
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 5.2, repeat: Infinity, ease: "easeInOut" }}
        className="badge flex items-center rounded-lg bg-white dark:bg-gray-800 shadow-md max-w-32 max-h-12 md:max-h-full md:max-w-full transition-all duration-300 ease-in-out hover:shadow-lg md:p-3 absolute top-[50%] right-[0%] sm:right-0 z-20 gap-2"
      >
        <div className="sm:text-2xl md:text-3xl text-[#FE705A]">
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 24 24"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 10C14.2091 10 16 8.20914 16 6 16 3.79086 14.2091 2 12 2 9.79086 2 8 3.79086 8 6 8 8.20914 9.79086 10 12 10ZM5.5 13C6.88071 13 8 11.8807 8 10.5 8 9.11929 6.88071 8 5.5 8 4.11929 8 3 9.11929 3 10.5 3 11.8807 4.11929 13 5.5 13ZM21 10.5C21 11.8807 19.8807 13 18.5 13 17.1193 13 16 11.8807 16 10.5 16 9.11929 17.1193 8 18.5 8 19.8807 8 21 9.11929 21 10.5ZM12 11C14.7614 11 17 13.2386 17 16V22H7V16C7 13.2386 9.23858 11 12 11ZM5 15.9999C5 15.307 5.10067 14.6376 5.28818 14.0056L5.11864 14.0204C3.36503 14.2104 2 15.6958 2 17.4999V21.9999H5V15.9999ZM22 21.9999V17.4999C22 15.6378 20.5459 14.1153 18.7118 14.0056 18.8993 14.6376 19 15.307 19 15.9999V21.9999H22Z" />
          </svg>
        </div>
        <div className="flex items-center gap-0.5 sm:gap-1">
          <div className="text-lg sm:text-2xl md:text-3xl font-bold text-[#FE705A] flex items-center">
            <span>{happyClients}</span>
            <span className="ml-0.5 sm:ml-1" />
          </div>
          <div className="text-[10px] sm:text-xs md:text-sm font-medium text-black dark:text-white max-w-[80px] sm:max-w-[100px] md:max-w-[120px] leading-tight">
            Happy Clients
          </div>
        </div>
      </motion.div>

      {/* Inline SVG clipPath definition (mirrors shape-1.svg) */}
      <svg width="0" height="0" className="absolute">
        <defs>
          <clipPath id="hero-blob-clip" clipPathUnits="objectBoundingBox">
            <path d="M0.846,0.199 C0.954,0.322,1.028,0.502,0.990,0.638 C0.951,0.775,0.799,0.867,0.651,0.930 C0.504,0.992,0.361,1.025,0.252,0.971 C0.142,0.918,0.065,0.777,0.026,0.617 C-0.013,0.459,-0.014,0.282,0.063,0.165 C0.142,0.049,0.298,-0.006,0.447,0.001 C0.597,0.007,0.738,0.075,0.846,0.199" />
          </clipPath>
        </defs>
      </svg>

      {/* Layer 1: Dark Navy/Light Wave Organic Background Shape */}
      <div className="bg-hero_shape2_light dark:bg-hero_shape2_dark w-full h-full bg-no-repeat bg-contain bg-center absolute inset-0" />

      {/* Layer 2: Coral Organic Dome Shape Container */}
      <div className="relative w-full max-w-[510px] aspect-[510/462] bg-hero_shape bg-no-repeat bg-contain bg-bottom">
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ clipPath: "url(#hero-blob-clip)" }}
        >
          <Image
            src={image1}
            alt="Developer"
            fill
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-contain"
          />
        </div>
      </div>
    </motion.div>
  );
}

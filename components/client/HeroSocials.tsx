"use client";

import { motion, type Variants } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaThreads,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";

const SOCIAL_LINKS = [
  { icon: FaGithub, href: "https://github.com/Ramjanict", label: "GitHub" },
  {
    icon: FaLinkedin,
    href: "https://www.linkedin.com/in/mdramjanict/",
    label: "LinkedIn",
  },
  { icon: FaXTwitter, href: "https://x.com", label: "Twitter" },
  { icon: FaYoutube, href: "https://youtube.com", label: "YouTube" },
  { icon: FaThreads, href: "https://threads.net", label: "Threads" },
];

const socialContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 1.4,
    },
  },
};

const socialItemVariants: Variants = {
  hidden: { opacity: 0, x: -25, scale: 0.8 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 20,
    },
  },
};

export default function HeroSocials() {
  return (
    <motion.div
      variants={socialContainerVariants}
      initial="hidden"
      animate="visible"
      className="flex items-center gap-5"
    >
      {SOCIAL_LINKS.map(({ icon: Icon, href, label }) => (
        <motion.a
          key={label}
          variants={socialItemVariants}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className="text-foreground hover:text-main transition-colors duration-150 p-1 hover:scale-110"
        >
          <Icon className="h-5 w-5" />
        </motion.a>
      ))}
    </motion.div>
  );
}

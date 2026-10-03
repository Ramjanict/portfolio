"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useEffect, useState } from "react";
import TestimonialCard from "./testimonial/TestimonialCard";

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  avatar: string;
  quote: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Vikash Vis",
    role: "UX Designer",
    avatar:
      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=150&auto=format&fit=crop&q=80",
    quote:
      "Hiring Md Ramjan Ali for web development was the best decision we made! Their clean code and intuitive designs significantly improved user experience. Definitely our go-to developer from now on!",
  },
  {
    id: 2,
    name: "David Patel",
    role: "CEO, Tech Innovations",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
    quote:
      "Md Ramjan Ali is a fantastic developer! They revamped our outdated website with modern technologies, ensuring a seamless and optimized experience for users.",
  },
  {
    id: 3,
    name: "Sophia Reynolds",
    role: "Marketing Manager",
    avatar:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
    quote:
      "Working with Md Ramjan Ali was an absolute pleasure! Their attention to detail and proactive communication made our project run smoothly from start to finish. Highly recommend!",
  },
  {
    id: 4,
    name: "Neha R.",
    role: "Product Manager",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80",
    quote:
      "Collaborating with Md Ramjan Ali was seamless and productive. Their ability to handle tight deadlines without compromising quality was truly impressive.",
  },
];

export default function TestimonialsSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const total = TESTIMONIALS.length;

  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % total);
  }, [total]);

  // Automatic Continuous Slider (Auto Mode)
  useEffect(() => {
    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  const getVisibleIndex = (offset: number) => {
    return (currentIndex + offset + total) % total;
  };

  const leftItem = TESTIMONIALS[getVisibleIndex(0)];
  const centerItem = TESTIMONIALS[getVisibleIndex(1)];
  const rightItem = TESTIMONIALS[getVisibleIndex(2)];

  return (
    <div className="relative w-full overflow-hidden py-4">
      {/* ── Desktop 3-Card & Mobile 1-Card Full Smooth Slide ── */}
      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: direction * 80 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -direction * 80 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch min-h-[250px]"
        >
          {/* Left Card */}
          <div className="hidden lg:block">
            <TestimonialCard item={leftItem} isActive={false} />
          </div>

          {/* Center Card */}
          <div className="block">
            <TestimonialCard item={centerItem} isActive={true} />
          </div>

          {/* Right Card */}
          <div className="hidden lg:block">
            <TestimonialCard item={rightItem} isActive={false} />
          </div>
        </motion.div>
      </AnimatePresence>

      {/* ── Dot Pagination Indicators ── */}
      <div className="flex items-center justify-center gap-2 mt-8">
        {TESTIMONIALS.map((_, idx) => {
          const isActive = idx === currentIndex;
          return (
            <button
              key={idx}
              onClick={() => {
                setDirection(idx > currentIndex ? 1 : -1);
                setCurrentIndex(idx);
              }}
              aria-label={`Go to slide ${idx + 1}`}
              className={`transition-all duration-300 rounded-full cursor-pointer ${
                isActive
                  ? "w-6 h-2 bg-main shadow-xs"
                  : "w-2 h-2 bg-muted-foreground/30 hover:bg-muted-foreground/60"
              }`}
            />
          );
        })}
      </div>
    </div>
  );
}

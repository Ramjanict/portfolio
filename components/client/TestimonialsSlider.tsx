"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

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
    name: "Neha R.",
    role: "Product Manager",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80",
    quote:
      "Collaborating with Md Ramjan Ali was seamless and productive. Their ability to handle tight deadlines without compromising quality was truly impressive.",
  },
  {
    id: 2,
    name: "Rohit Sharma",
    role: "Startup Founder",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
    quote:
      "Md Ramjan Ali delivered exceptional results for our startup mobile app. The app is user-friendly, robust, and exactly what we needed to scale our business. Highly impressed!",
  },
  {
    id: 3,
    name: "Emily Johnson",
    role: "Content Creator",
    avatar:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
    quote:
      "Md Ramjan Ali expertise in web design transformed my personal blog into a professional and visually appealing website. I am thrilled with the results!",
  },
  {
    id: 4,
    name: "Om Shankar",
    role: "Co-founder, HealthCRAD",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80",
    quote:
      "Impressive work! He was responsive, delivered top-tier clean code, and was always proactive in resolving edge cases. Highly recommended!",
  },
];

export default function TestimonialsSlider() {
  const [currentIndex, setCurrentIndex] = useState(1); // Default center on Rohit Sharma (index 1)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [direction, setDirection] = useState(1);

  const total = TESTIMONIALS.length;

  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % total);
  }, [total]);

  const prevSlide = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlide]);

  // Helper to get relative item indices for 3-card desktop display
  const getVisibleIndex = (offset: number) => {
    return (currentIndex + offset + total) % total;
  };

  const leftItem = TESTIMONIALS[getVisibleIndex(-1)];
  const centerItem = TESTIMONIALS[currentIndex];
  const rightItem = TESTIMONIALS[getVisibleIndex(1)];

  return (
    <div
      className="relative w-full max-w-6xl mx-auto px-4 py-4"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      {/* Navigation Arrow Buttons */}
      <button
        onClick={prevSlide}
        aria-label="Previous Testimonial"
        className="absolute left-0 top-1/2 -translate-y-1/2 z-20 h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-white dark:bg-[#212131] border border-border/70 dark:border-white/10 shadow-md flex items-center justify-center text-foreground/80 hover:text-main hover:border-main/50 hover:scale-105 active:scale-95 transition-all cursor-pointer -ml-2 sm:-ml-4"
      >
        <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
      </button>

      <button
        onClick={nextSlide}
        aria-label="Next Testimonial"
        className="absolute right-0 top-1/2 -translate-y-1/2 z-20 h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-white dark:bg-[#212131] border border-border/70 dark:border-white/10 shadow-md flex items-center justify-center text-foreground/80 hover:text-main hover:border-main/50 hover:scale-105 active:scale-95 transition-all cursor-pointer -mr-2 sm:-mr-4"
      >
        <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
      </button>

      {/* ── Desktop 3-Card View ── */}
      <div className="hidden lg:grid lg:grid-cols-3 gap-6 items-center min-h-[260px]">
        {/* Left Card */}
        <div
          onClick={prevSlide}
          className="cursor-pointer transition-all duration-300 transform opacity-80 hover:opacity-100 hover:scale-[1.02]"
        >
          <TestimonialCard item={leftItem} isActive={false} />
        </div>

        {/* Center Active Card */}
        <div className="z-10 transform transition-all duration-300 scale-105">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={centerItem.id}
              initial={{ opacity: 0, x: direction * 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -direction * 40 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
            >
              <TestimonialCard item={centerItem} isActive={true} />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right Card */}
        <div
          onClick={nextSlide}
          className="cursor-pointer transition-all duration-300 transform opacity-80 hover:opacity-100 hover:scale-[1.02]"
        >
          <TestimonialCard item={rightItem} isActive={false} />
        </div>
      </div>

      {/* ── Mobile / Tablet Single Card View ── */}
      <div className="block lg:hidden min-h-[240px] px-2 sm:px-6">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={centerItem.id}
            initial={{ opacity: 0, x: direction * 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -direction * 50 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <TestimonialCard item={centerItem} isActive={true} />
          </motion.div>
        </AnimatePresence>
      </div>

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

function TestimonialCard({
  item,
  isActive,
}: {
  item: Testimonial;
  isActive: boolean;
}) {
  return (
    <div
      className={`relative rounded-3xl p-6 sm:p-7 transition-all duration-300 flex flex-col justify-between h-full bg-white dark:bg-[#1a1a2a] ${
        isActive
          ? "border-2 border-main/40 dark:border-main/50 shadow-xl shadow-main/5 dark:shadow-none"
          : "border border-border/70 dark:border-white/10 shadow-xs"
      }`}
    >
      {/* User Info Header */}
      <div className="flex items-center gap-4 mb-4">
        <div className="relative h-12 w-12 sm:h-14 sm:w-14 rounded-full overflow-hidden shrink-0 border-2 border-main/20">
          <Image
            src={item.avatar}
            alt={item.name}
            fill
            sizes="56px"
            className="object-cover"
          />
        </div>
        <div className="flex flex-col">
          <h4 className="font-bold text-base sm:text-lg text-foreground leading-snug">
            {item.name}
          </h4>
          <span className="text-xs sm:text-sm font-medium text-muted-foreground">
            {item.role}
          </span>
        </div>
      </div>

      {/* Quote Content */}
      <p className="text-xs sm:text-sm text-foreground/80 font-normal leading-relaxed">
        {item.quote}
      </p>
    </div>
  );
}

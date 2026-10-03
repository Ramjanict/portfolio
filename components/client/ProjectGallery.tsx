"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Clock, Maximize2, X } from "lucide-react";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

interface Props {
  title: string;
  category: string;
  images: string[];
}

export default function ProjectGallery({ title, category, images }: Props) {
  const [activeIdx, setActiveIdx] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const total = images.length;

  const nextImage = useCallback(() => {
    setActiveIdx((prev) => (prev + 1) % total);
  }, [total]);

  const prevImage = useCallback(() => {
    setActiveIdx((prev) => (prev - 1 + total) % total);
  }, [total]);

  // Keyboard navigation for gallery & modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
      if (e.key === "Escape") setIsFullscreen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [nextImage, prevImage]);

  if (!images || images.length === 0) return null;

  return (
    <div className="mb-10 w-full">
      {/* ── Header Title & Badges ── */}
      <div className="mb-6">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground tracking-tight mb-3">
          {title}
        </h1>
        <div className="flex items-center gap-3">
          <span className="text-xs font-bold px-3 py-1 rounded-full bg-main text-white shadow-xs">
            {category}
          </span>
          <div className="flex items-center gap-1.5 text-xs text-muted-foreground font-semibold">
            <Clock className="h-3.5 w-3.5 text-main" />
            <span>1 min read</span>
          </div>
        </div>
      </div>

      {/* ── Main Gallery Card Box ── */}
      <div className="bg-card border border-border/80 rounded-3xl p-4 sm:p-6 shadow-sm">
        {/* Main Active Image Display */}
        <div className="relative h-[300px] sm:h-[450px] lg:h-[520px] w-full rounded-2xl overflow-hidden bg-muted/40 border border-border/60 flex items-center justify-center group">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIdx}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative w-full h-full"
            >
              <Image
                src={images[activeIdx]}
                alt={`${title} screenshot ${activeIdx + 1}`}
                fill
                priority
                sizes="(max-width: 1280px) 100vw, 1200px"
                className="object-contain"
              />
            </motion.div>
          </AnimatePresence>

          {/* Left Arrow Button */}
          {total > 1 && (
            <button
              onClick={prevImage}
              aria-label="Previous screenshot"
              className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-white/90 dark:bg-[#1a1a2b]/90 backdrop-blur-md shadow-md border border-border/60 flex items-center justify-center text-foreground hover:text-main hover:scale-110 active:scale-95 transition-all z-10 cursor-pointer"
            >
              <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
            </button>
          )}

          {/* Right Arrow Button */}
          {total > 1 && (
            <button
              onClick={nextImage}
              aria-label="Next screenshot"
              className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-white/90 dark:bg-[#1a1a2b]/90 backdrop-blur-md shadow-md border border-border/60 flex items-center justify-center text-foreground hover:text-main hover:scale-110 active:scale-95 transition-all z-10 cursor-pointer"
            >
              <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
            </button>
          )}

          {/* Fullscreen Button */}
          <button
            onClick={() => setIsFullscreen(true)}
            aria-label="Open Fullscreen View"
            className="absolute top-4 right-4 h-9 w-9 sm:h-10 sm:w-10 rounded-full bg-white/90 dark:bg-[#1a1a2b]/90 backdrop-blur-md shadow-md border border-border/60 flex items-center justify-center text-foreground hover:text-main hover:scale-105 active:scale-95 transition-all z-10 cursor-pointer"
          >
            <Maximize2 className="h-4 w-4 sm:h-5 sm:w-5" />
          </button>
        </div>

        {/* ── Thumbnail Strip ── */}
        {total > 1 && (
          <div className="mt-4">
            <div className="flex items-center justify-center gap-3 overflow-x-auto py-2 px-1 scrollbar-none">
              {images.map((imgUrl, idx) => {
                const isActive = idx === activeIdx;
                return (
                  <button
                    key={idx}
                    onClick={() => setActiveIdx(idx)}
                    aria-label={`View screenshot ${idx + 1}`}
                    className={`relative h-16 w-24 sm:w-28 rounded-xl overflow-hidden shrink-0 transition-all cursor-pointer ${
                      isActive
                        ? "border-2 border-main shadow-md scale-105"
                        : "border border-border/60 opacity-60 hover:opacity-100"
                    }`}
                  >
                    <Image
                      src={imgUrl}
                      alt={`Thumbnail ${idx + 1}`}
                      fill
                      sizes="112px"
                      className="object-cover"
                    />
                  </button>
                );
              })}
            </div>

            {/* Caption & Counter */}
            <p className="text-xs sm:text-sm font-medium text-muted-foreground text-center mt-3">
              {title} platform overview{" "}
              <span className="font-semibold text-foreground">
                {activeIdx + 1} of {total}
              </span>
            </p>
          </div>
        )}
      </div>

      {/* ── Fullscreen Lightbox Modal ── */}
      <AnimatePresence>
        {isFullscreen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex flex-col items-center justify-between p-4 sm:p-8"
          >
            {/* Close Button */}
            <div className="w-full flex justify-between items-center z-20">
              <span className="text-sm font-bold text-white/90">
                {title} — {activeIdx + 1} of {total}
              </span>
              <button
                onClick={() => setIsFullscreen(false)}
                className="h-10 w-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Modal Image Display */}
            <div className="relative w-full h-[75vh] flex items-center justify-center my-auto">
              <Image
                src={images[activeIdx]}
                alt={`${title} Fullscreen ${activeIdx + 1}`}
                fill
                priority
                sizes="100vw"
                className="object-contain"
              />

              {total > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center transition-all cursor-pointer"
                  >
                    <ChevronLeft className="h-6 w-6" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center transition-all cursor-pointer"
                  >
                    <ChevronRight className="h-6 w-6" />
                  </button>
                </>
              )}
            </div>

            {/* Modal Thumbnails */}
            {total > 1 && (
              <div className="flex items-center gap-2 overflow-x-auto max-w-full py-2 z-20">
                {images.map((imgUrl, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveIdx(idx)}
                    className={`relative h-12 w-20 rounded-lg overflow-hidden shrink-0 transition-all ${
                      idx === activeIdx
                        ? "border-2 border-main scale-105"
                        : "opacity-40 hover:opacity-100"
                    }`}
                  >
                    <Image
                      src={imgUrl}
                      alt={`Thumbnail ${idx + 1}`}
                      fill
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const SLIDES = [
  {
    id: 1,
    image: "/imgs/img_1.jpeg",
    alt: "Banner 1",
  },
  {
    id: 2,
    image: "/imgs/img_2.jpeg",
    alt: "Banner 2",
  },
  {
    id: 3,
    image: "/imgs/img_3.jpeg",
    alt: "Banner 3",
  },
  {
    id: 4,
    image: "/imgs/img_4.jpeg",
    alt: "Banner 4",
  },
];

const AUTOPLAY_DELAY = 5000;

export default function Bannerslider() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const touchStartX = useRef(0);
  const timeoutRef = useRef(null);

  const total = SLIDES.length;

  const goTo = useCallback(
    (index) => {
      setCurrent((index + total) % total);
    },
    [total]
  );

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % total);
  }, [total]);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + total) % total);
  }, [total]);

  useEffect(() => {
    if (isPaused) return;

    timeoutRef.current = setTimeout(next, AUTOPLAY_DELAY);

    return () => clearTimeout(timeoutRef.current);
  }, [current, isPaused, next]);

  const handleTouchStart = (e) => {
    touchStartX.current = e.changedTouches[0].screenX;
  };

  const handleTouchEnd = (e) => {
    const touchEndX = e.changedTouches[0].screenX;
    const delta = touchStartX.current - touchEndX;

    if (delta > 50) next();
    else if (delta < -50) prev();
  };

  return (
    <div
      className="relative w-full overflow-hidden select-none
      h-[220px]
      sm:h-[320px]
      md:h-[420px]
      lg:h-[520px]
      xl:h-[620px]
      2xl:h-[700px]"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Slider */}
      <div
        className="flex h-full transition-transform duration-700 ease-in-out"
        style={{
          transform: `translateX(-${current * 100}%)`,
        }}
      >
        {SLIDES.map((slide, index) => (
          <div
            key={slide.id}
            className="relative h-full w-full flex-shrink-0"
          >
            <Image
              src={slide.image}
              alt={slide.alt}
              fill
              priority={index === 0}
              sizes="100vw"
              className="object-cover object-center"
            />

            <div className="absolute inset-0 bg-black/20" />
          </div>
        ))}
      </div>

      {/* Previous */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 hidden -translate-y-1/2 rounded-full bg-white/80 p-3 shadow-md transition hover:bg-white sm:flex"
      >
        <ChevronLeft className="h-6 w-6 text-black" />
      </button>

      {/* Next */}
      <button
        onClick={next}
        className="absolute right-4 top-1/2 hidden -translate-y-1/2 rounded-full bg-white/80 p-3 shadow-md transition hover:bg-white sm:flex"
      >
        <ChevronRight className="h-6 w-6 text-black" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-5 left-1/2 flex -translate-x-1/2 gap-2">
        {SLIDES.map((slide, index) => (
          <button
            key={slide.id}
            onClick={() => goTo(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              current === index
                ? "w-6 bg-orange-500"
                : "w-2 bg-white/70"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
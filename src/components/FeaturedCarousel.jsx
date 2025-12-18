import { useEffect, useState } from "react";
import FeaturedCarouselSlide from "./FeaturedCarouselSlide.jsx";
import { carouselItems } from "../data/carouselItems.js";

const FeaturedCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const items = carouselItems;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % items.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [items.length]);

  const prev = () =>
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);

  const next = () => setCurrentIndex((prev) => (prev + 1) % items.length);

  if (!items.length) return null;

  return (
    <div className="relative mx-auto max-w-6xl overflow-hidden px-4">
      {/* Prev */}
      <button
        onClick={prev}
        aria-label="Previous"
        className="absolute left-4 top-1/2 z-20
                   flex h-12 w-12 -translate-y-1/2
                   items-center justify-center
                   rounded-full bg-white/90 text-2xl
                   shadow-lg transition
                   hover:scale-110 hover:bg-white"
      >
        ‹
      </button>

      {/* Track */}
      <div className="relative flex h-[500px] items-center justify-center">
        {items.map((item, index) => {
          const total = items.length;
          let offset = index - currentIndex;

          if (offset > total / 2) offset -= total;
          if (offset < -total / 2) offset += total;

          const isCenter = offset === 0;
          const isVisible = Math.abs(offset) <= 2;

          return (
            <FeaturedCarouselSlide
              key={item.id}
              item={item}
              offset={offset}
              isCenter={isCenter}
              isVisible={isVisible}
            />
          );
        })}
      </div>

      {/* Next */}
      <button
        onClick={next}
        aria-label="Next"
        className="absolute right-4 top-1/2 z-20
                   flex h-12 w-12 -translate-y-1/2
                   items-center justify-center
                   rounded-full bg-white/90 text-2xl
                   shadow-lg transition
                   hover:scale-110 hover:bg-white"
      >
        ›
      </button>
    </div>
  );
};

export default FeaturedCarousel;

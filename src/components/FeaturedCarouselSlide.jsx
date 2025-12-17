import Button from "./ui/Button.jsx";

const FeaturedCarouselSlide = ({ item, offset, isCenter, isVisible }) => {
  return (
    <div
      onClick={() =>
        isCenter && item.slug && (window.location.href = `/place/${item.slug}`)
      }
      style={{
        transform: `translateX(${offset * 110}%) scale(${isCenter ? 1 : 0.85})`,
        opacity: isVisible ? (isCenter ? 1 : 0.45) : 0,
        zIndex: isCenter ? 10 : 5 - Math.abs(offset),
        pointerEvents: isCenter ? "auto" : "none",
        backgroundColor: "var(--surface-featured)",
      }}
      className="absolute w-full max-w-[420px]
                 cursor-pointer overflow-hidden
                 rounded-2xl shadow-xl
                 transition-all duration-700
                 ease-[cubic-bezier(0.4,0,0.2,1)]"
    >
      {/* Image */}
      <div className="relative h-[420px] overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          className="h-full w-full object-cover
                     transition-transform duration-500
                     hover:scale-105"
        />

        {/* Overlay */}
        <div
          className="absolute inset-0
                     bg-gradient-to-t
                     from-black/70 via-black/30 to-transparent"
        />

        {/* Content */}
        <div className="absolute bottom-0 w-full p-5 text-white">
          <h3 className="mb-1 text-lg font-bold">{item.name}</h3>
          <p className="mb-2 text-sm text-orange-300">{item.place}</p>
          <p className="mb-3 line-clamp-2 text-sm text-gray-200">
            {item.description}
          </p>

          <Button size="sm" variant="secondary">
            View Details
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCarouselSlide;

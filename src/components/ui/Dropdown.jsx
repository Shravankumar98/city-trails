import { useState, useRef, useEffect } from "react";

export default function Dropdown({ label, href = "#", items = [] }) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);
  const listRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target) &&
        listRef.current &&
        !listRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative md:static"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      {/* Label + Arrow */}
      <div className="flex items-center gap-1 text-gray-700 hover:text-orange-600">
        <a href={href} className="font-medium">
          {label}
        </a>
        <button
          className={`hidden md:block ml-1 text-sm transition-transform duration-200 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
          type="button"
          aria-label={`Toggle ${label} dropdown`}
          aria-haspopup="true"
          aria-expanded={isOpen}
          onClick={() => setIsOpen(!isOpen)}
        >
          ▼
        </button>
      </div>

      {/* Dropdown content */}
      <div
        ref={listRef}
        className={`absolute right-0 mt-[27] max-h-[260px] md:max-h-[300px]
            overflow-y-auto min-w-[220px]
            bg-white rounded-md shadow-mt p-2  /* <-- shadow here */
            transition-all duration-200
            ${isOpen ? "block opacity-100 visible" : "hidden opacity-0 invisible"}`}
      >
        {items.map((item) => (
          <a
            key={item.slug}
            href={`/place/${item.slug}`}
            className="block px-3 py-2 rounded text-sm text-gray-700 hover:bg-gray-100 hover:text-orange-600"
          >
            {item.name}
          </a>
        ))}
      </div>
    </div>
  );
}

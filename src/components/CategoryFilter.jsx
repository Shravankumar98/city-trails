import { useState } from "react";
import PlaceCard from "./PlaceCard";

export default function CategoryFilter({ places = [] }) {
  const [category, setCategory] = useState("All");

  const categories = ["All", ...Array.from(new Set(places.map(p => p.category)))];

  const filtered = category === "All" ? places : places.filter(p => p.category === category);

  return (
    <div>
      <div className="flex flex-wrap gap-3 mb-6 justify-center">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setCategory(cat)}
            className={`px-4 py-2 rounded-full font-medium border transition ${
              category === cat
                ? "bg-orange-600 text-white border-orange-600"
                : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map(place => (
          <PlaceCard key={place.slug} place={place} />
        ))}
      </div>
    </div>
  );
}

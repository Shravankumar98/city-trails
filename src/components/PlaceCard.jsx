// PlaceCard.jsx
const PlaceCard = ({ place }) => (
  <article
    className="group overflow-hidden rounded-xl
               bg-white shadow-md
               transition-all duration-300
               hover:-translate-y-1 hover:shadow-xl"
  >
    {/* Image */}
    <div className="relative h-48 overflow-hidden">
      <img
        src={place.image || "/placeholder.svg"}
        alt={place.name}
        loading="lazy"
        className="h-full w-full object-cover
                   transition-transform duration-500
                   group-hover:scale-105"
      />
    </div>

    {/* Content */}
    <div className="p-5">
      <span className="mb-2 inline-block rounded-full
                       bg-orange-100 px-3 py-1
                       text-xs font-medium text-orange-700">
        {place.category}
      </span>

      <h3 className="mb-2 text-lg font-bold text-gray-800">
        {place.name}
      </h3>

      <p className="mb-4 line-clamp-2 text-sm text-gray-600">
        {place.shortDescription}
      </p>

      <a
        href={`/place/${place.slug}`}
        className="inline-flex items-center
                   text-sm font-semibold
                   text-orange-700
                   hover:text-orange-800"
      >
        Learn More →
      </a>
    </div>
  </article>
);

export default PlaceCard;

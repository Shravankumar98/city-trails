// PlaceGrid.jsx
import PlaceCard from "./PlaceCard.jsx";

const PlaceGrid = ({ places }) => (
  <div
    className="grid gap-6 sm:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
    style={{ backgroundColor: "var(--surface-places)" }}
  >
    {places.map((place) => (
      <PlaceCard key={place.slug} place={place} />
    ))}
  </div>
);

export default PlaceGrid;

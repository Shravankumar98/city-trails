import { useState } from "react";
import Button from "./ui/Button.jsx";
import Badge from "./ui/Badge.jsx";
import { mapLocations } from "../data/mapLocations";
import Modal from "./ui/Modal.jsx";

const InteractiveMap = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [showAll, setShowAll] = useState(false);
  const [modalLocation, setModalLocation] = useState(null);

  const categories = [
    { id: "all", name: "All", icon: "🗺️", color: "#374151" },
    { id: "activities", name: "Activities", icon: "🎯", color: "#1d4ed8" },
    { id: "festivals", name: "Festivals", icon: "🎪", color: "#b45309" },
    { id: "food", name: "Food", icon: "🍛", color: "#047857" },
    { id: "shopping", name: "Shopping", icon: "🛍️", color: "#6b21a8" },
  ];

  const filteredLocations =
    selectedCategory === "all"
      ? showAll
        ? mapLocations
        : mapLocations.slice(0, 6)
      : mapLocations.filter((loc) => loc.category === selectedCategory);

  const openModal = (loc) => setModalLocation(loc);
  const closeModal = () => setModalLocation(null);
  const goToMaps = () => {
    if (modalLocation?.mapLink) {
      window.open(modalLocation.mapLink, "_blank");
    }
    closeModal();
  };

  return (
    <div
      className="mx-auto max-w-6xl px-4"
      style={{ backgroundColor: "var(--surface-map)" }}
    >
      {/* Filters */}
      <div className="mb-10 flex flex-wrap justify-center gap-3">
        {categories.map((cat) => {
          const active = selectedCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              style={{
                borderColor: active ? cat.color : "#e5e7eb",
                backgroundColor: active ? `${cat.color}15` : "#fff",
              }}
              className="flex items-center gap-2 rounded-full border-2 px-5 py-2 text-sm font-medium transition hover:shadow-md"
            >
              <span>{cat.icon}</span>
              {cat.name}
            </button>
          );
        })}
      </div>

      {/* Locations */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredLocations.map((loc) => {
          const cat = categories.find((c) => c.id === loc.category);
          return (
            <div
              key={loc.id}
              onClick={() => openModal(loc)}
              style={{ borderColor: cat?.color, backgroundColor: "#ffffff" }}
              className="cursor-pointer rounded-2xl border-4 p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div
                style={{ backgroundColor: cat?.color }}
                className="mb-4 flex h-12 w-12 items-center justify-center rounded-full text-white"
              >
                {cat?.icon}
              </div>
              <h3 className="mb-2 font-semibold text-gray-800">{loc.name}</h3>
              <p className="mb-3 text-sm text-gray-600">{loc.description}</p>
              <Badge>{cat?.name}</Badge>
            </div>
          );
        })}
      </div>

      {/* Show all / show less toggle */}
      {selectedCategory === "all" && (
        <div className="mt-6 text-center">
          <Button onClick={() => setShowAll(!showAll)} variant="secondary">
            {showAll ? "Show Less" : "Show All"}
          </Button>
        </div>
      )}
      <Modal open={!!modalLocation} onClose={closeModal}>
        <h3 className="text-xl font-bold mb-4">{modalLocation?.name}</h3>
        <p className="mb-6 text-gray-700">{modalLocation?.description}</p>
        <div className="flex justify-end gap-3">
          <Button onClick={closeModal} variant="outline">
            Cancel
          </Button>
          <Button onClick={goToMaps} variant="primary">
            Open in Google Maps
          </Button>
        </div>
      </Modal>
    </div>
  );
};
export default InteractiveMap;

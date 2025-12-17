````markdown
# Bangalore Tourism Website

A modern, interactive tourism website for Bangalore built with **Astro**, **React**, and **Tailwind CSS**.

**Features:**

- Hero section with dynamic featured place  
- Category-filtered places  
- Featured attractions carousel  
- Interactive map with category filters and custom popup confirmation  
- Mobile-first responsive design  

---

## Quick Start

### Prerequisites

- Node.js >= 18
- npm >= 9 (or yarn)

### Installation

```bash
git clone <your-repo-url>
cd <your-repo-folder>
npm install
````

### Development

```bash
npm run dev
```

* Open `http://localhost:3000` to view the website

### Production Build

```bash
npm run build
npm run preview
```

---

## Adding Content

### Places

Update `src/data/places.js`:

```js
export const places = [
  {
    name: "Lalbagh Botanical Garden",
    slug: "lalbagh-botanical-garden",
    category: "Gardens",
    image: "/images/lalbagh.jpg",
    shortDescription: "Historic botanical garden with centuries-old trees.",
    description: "Full description of the place..."
  },
  // add more places
];
```

### Map Locations

Update `src/data/mapLocations.js` with location objects including `id`, `name`, `category`, and `description`.

---

## Project Structure

```
src/
├─ components/
│  ├─ HeroSection.astro
│  ├─ FeaturedCarousel.jsx
│  ├─ InteractiveMap.jsx
│  ├─ CategoryFilter.jsx
│  ├─ PlaceGrid.astro
│  ├─ PlaceCard.astro
│  └─ ui/
│     ├─ Button.jsx
│     ├─ Badge.jsx
│     └─ Section.astro
├─ data/
│  ├─ places.js
│  ├─ carouselItems.js
│  └─ mapLocations.js
├─ layouts/
│  └─ MainLayout.astro
├─ pages/
│  ├─ index.astro
│  └─ places/
│     ├─ [category].astro
│     └─ [slug].astro
└─ utils/
   └─ random.js
```

---

## Contributing

1. Fork the repository
2. Create a branch (`git checkout -b feature/xyz`)
3. Make changes and commit (`git commit -m "Add feature"`)
4. Push (`git push origin feature/xyz`)
5. Open a Pull Request

---

## License

**MIT License**

```

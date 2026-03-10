import { useState } from "react";
import { Link } from "react-router";
import { vehicles } from "../data/vehicles";
import { SlidersHorizontal } from "lucide-react";

export function Cars() {
  const cars = vehicles.filter((v) => v.type === "car");
  const [filter, setFilter] = useState<"all" | "new" | "used">("all");
  const [sortBy, setSortBy] = useState<"price-asc" | "price-desc" | "year">("price-asc");

  const filteredCars = cars.filter((car) => {
    if (filter === "all") return true;
    return car.condition.toLowerCase() === filter;
  });

  const sortedCars = [...filteredCars].sort((a, b) => {
    if (sortBy === "price-asc") return a.price - b.price;
    if (sortBy === "price-desc") return b.price - a.price;
    if (sortBy === "year") return b.year - a.year;
    return 0;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Page Header */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-4xl font-bold mb-2">Browse Cars</h1>
          <p className="text-gray-600">
            Discover our collection of {cars.length} premium vehicles
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Filters */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8 border">
          <div className="flex items-center gap-2 mb-4">
            <SlidersHorizontal className="h-5 w-5" />
            <h2 className="font-semibold">Filters & Sort</h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2">Condition</label>
              <div className="flex gap-2">
                <button
                  onClick={() => setFilter("all")}
                  className={`px-4 py-2 rounded-lg border transition-colors ${
                    filter === "all"
                      ? "bg-black text-white border-black"
                      : "bg-white text-gray-700 border-gray-300 hover:border-black"
                  }`}
                >
                  All
                </button>
                <button
                  onClick={() => setFilter("new")}
                  className={`px-4 py-2 rounded-lg border transition-colors ${
                    filter === "new"
                      ? "bg-black text-white border-black"
                      : "bg-white text-gray-700 border-gray-300 hover:border-black"
                  }`}
                >
                  New
                </button>
                <button
                  onClick={() => setFilter("used")}
                  className={`px-4 py-2 rounded-lg border transition-colors ${
                    filter === "used"
                      ? "bg-black text-white border-black"
                      : "bg-white text-gray-700 border-gray-300 hover:border-black"
                  }`}
                >
                  Used
                </button>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Sort By</label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
              >
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="year">Newest First</option>
              </select>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing {sortedCars.length} {sortedCars.length === 1 ? "car" : "cars"}
          </p>
        </div>

        {/* Vehicle Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sortedCars.map((vehicle) => (
            <Link
              key={vehicle.id}
              to={`/vehicle/${vehicle.id}`}
              className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow border"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={vehicle.image}
                  alt={vehicle.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-black text-white text-xs px-2 py-1 rounded">
                    {vehicle.condition}
                  </span>
                  <span className="text-xs text-gray-500">{vehicle.year}</span>
                </div>
                <h3 className="font-semibold text-lg mb-2">{vehicle.name}</h3>
                <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                  {vehicle.description}
                </p>
                <div className="flex items-end justify-between">
                  <div>
                    <p className="text-2xl font-bold">
                      ${vehicle.price.toLocaleString()}
                    </p>
                    {vehicle.mileage && (
                      <p className="text-sm text-gray-600">{vehicle.mileage}</p>
                    )}
                  </div>
                  <span className="text-sm font-semibold group-hover:underline">
                    View Details →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {sortedCars.length === 0 && (
          <div className="text-center py-12 bg-white rounded-lg border">
            <p className="text-gray-600">No cars found matching your filters.</p>
            <button
              onClick={() => setFilter("all")}
              className="mt-4 text-sm font-semibold underline"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

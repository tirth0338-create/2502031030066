import { useState } from "react";
import { Link } from "react-router";
import { vehicles } from "../data/vehicles";
import { SlidersHorizontal } from "lucide-react";

export function Bikes() {
  const bikes = vehicles.filter((v) => v.type === "bike");
  const [sortBy, setSortBy] = useState<"price-asc" | "price-desc" | "name">("price-asc");

  const sortedBikes = [...bikes].sort((a, b) => {
    if (sortBy === "price-asc") return a.price - b.price;
    if (sortBy === "price-desc") return b.price - a.price;
    if (sortBy === "name") return a.name.localeCompare(b.name);
    return 0;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Page Header */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-4xl font-bold mb-2">Browse Bikes</h1>
          <p className="text-gray-600">
            Explore our selection of {bikes.length} quality bicycles
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Filters */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8 border">
          <div className="flex items-center gap-2 mb-4">
            <SlidersHorizontal className="h-5 w-5" />
            <h2 className="font-semibold">Sort</h2>
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-2">Sort By</label>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="w-full sm:w-64 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
            >
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="name">Name: A to Z</option>
            </select>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing all {sortedBikes.length} bikes
          </p>
        </div>

        {/* Vehicle Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sortedBikes.map((vehicle) => (
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
                  <p className="text-2xl font-bold">
                    ${vehicle.price.toLocaleString()}
                  </p>
                  <span className="text-sm font-semibold group-hover:underline">
                    View Details →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

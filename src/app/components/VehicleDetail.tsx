import { useParams, Link } from "react-router";
import { vehicles } from "../data/vehicles";
import { ArrowLeft, Check, Car, Bike, Mail, Phone } from "lucide-react";

export function VehicleDetail() {
  const { id } = useParams();
  const vehicle = vehicles.find((v) => v.id === id);

  if (!vehicle) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Vehicle Not Found</h1>
          <Link to="/" className="text-sm font-semibold underline">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Back Button */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link
            to={vehicle.type === "car" ? "/cars" : "/bikes"}
            className="inline-flex items-center gap-2 text-sm font-semibold hover:underline"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to {vehicle.type === "car" ? "Cars" : "Bikes"}
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Image */}
          <div className="bg-white rounded-xl overflow-hidden shadow-sm border">
            <img
              src={vehicle.image}
              alt={vehicle.name}
              className="w-full aspect-[4/3] object-cover"
            />
          </div>

          {/* Details */}
          <div>
            <div className="bg-white rounded-xl shadow-sm p-8 border mb-6">
              <div className="flex items-center gap-2 mb-3">
                <span className="bg-black text-white text-sm px-3 py-1 rounded">
                  {vehicle.condition}
                </span>
                <span className="text-sm text-gray-500">{vehicle.year}</span>
              </div>
              
              <h1 className="text-3xl font-bold mb-4">{vehicle.name}</h1>
              
              <div className="flex items-baseline gap-2 mb-6">
                <p className="text-4xl font-bold">
                  ${vehicle.price.toLocaleString()}
                </p>
                {vehicle.mileage && (
                  <span className="text-gray-600">• {vehicle.mileage}</span>
                )}
              </div>

              <p className="text-gray-700 mb-6">{vehicle.description}</p>

              <div className="flex flex-col sm:flex-row gap-3">
                <button className="flex-1 bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors inline-flex items-center justify-center gap-2">
                  <Mail className="h-5 w-5" />
                  Contact Seller
                </button>
                <button className="flex-1 bg-white text-black border-2 border-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors inline-flex items-center justify-center gap-2">
                  <Phone className="h-5 w-5" />
                  Schedule Test Drive
                </button>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="bg-white rounded-xl shadow-sm p-8 border mb-6">
              <h2 className="font-semibold text-lg mb-4">Quick Stats</h2>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-600">Year</p>
                  <p className="font-semibold">{vehicle.year}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Condition</p>
                  <p className="font-semibold">{vehicle.condition}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Type</p>
                  <p className="font-semibold capitalize flex items-center gap-1">
                    {vehicle.type === "car" ? (
                      <Car className="h-4 w-4" />
                    ) : (
                      <Bike className="h-4 w-4" />
                    )}
                    {vehicle.type}
                  </p>
                </div>
                {vehicle.mileage && (
                  <div>
                    <p className="text-sm text-gray-600">Mileage</p>
                    <p className="font-semibold">{vehicle.mileage}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Specifications */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
          <div className="bg-white rounded-xl shadow-sm p-8 border">
            <h2 className="font-semibold text-xl mb-6">Specifications</h2>
            <div className="space-y-4">
              {Object.entries(vehicle.specs).map(([key, value]) => (
                <div
                  key={key}
                  className="flex justify-between items-center py-3 border-b last:border-b-0"
                >
                  <span className="text-gray-600">{key}</span>
                  <span className="font-semibold">{value}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-8 border">
            <h2 className="font-semibold text-xl mb-6">Features</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {vehicle.features.map((feature, index) => (
                <div key={index} className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Financing Info */}
        <div className="bg-gradient-to-r from-black to-gray-800 rounded-xl shadow-sm p-8 mt-8 text-white">
          <div className="max-w-3xl">
            <h2 className="font-semibold text-2xl mb-4">Financing Available</h2>
            <p className="text-gray-300 mb-6">
              Get pre-approved in minutes. We offer competitive rates with flexible terms to fit your budget.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Calculate Payment
              </button>
              <button className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-black transition-colors">
                Get Pre-Approved
              </button>
            </div>
          </div>
        </div>

        {/* Related Vehicles */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6">Similar Listings</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {vehicles
              .filter((v) => v.type === vehicle.type && v.id !== vehicle.id)
              .slice(0, 3)
              .map((v) => (
                <Link
                  key={v.id}
                  to={`/vehicle/${v.id}`}
                  className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow border"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={v.image}
                      alt={v.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="bg-black text-white text-xs px-2 py-1 rounded">
                        {v.condition}
                      </span>
                      <span className="text-xs text-gray-500">{v.year}</span>
                    </div>
                    <h3 className="font-semibold mb-2">{v.name}</h3>
                    <p className="text-xl font-bold">
                      ${v.price.toLocaleString()}
                    </p>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

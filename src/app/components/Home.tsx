import { Link } from "react-router";
import { Car, Bike, Search, Shield, Award, Headset } from "lucide-react";
import { vehicles } from "../data/vehicles";

export function Home() {
  const featuredCars = vehicles.filter((v) => v.type === "car").slice(0, 3);
  const featuredBikes = vehicles.filter((v) => v.type === "bike").slice(0, 3);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1647340764627-11713b9d0f65?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBzcG9ydHMlMjBjYXIlMjBzaG93cm9vbXxlbnwxfHx8fDE3NzMxMjg3MTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral')",
          }}
        >
          <div className="absolute inset-0 bg-black/50" />
        </div>
        
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Find Your Perfect Ride
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Premium cars and bikes at unbeatable prices
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/cars"
              className="bg-white text-black px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center gap-2"
            >
              <Car className="h-5 w-5" />
              Browse Cars
            </Link>
            <Link
              to="/bikes"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-black transition-colors inline-flex items-center justify-center gap-2"
            >
              <Bike className="h-5 w-5" />
              Browse Bikes
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-black text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="h-8 w-8" />
              </div>
              <h3 className="font-semibold mb-2">Wide Selection</h3>
              <p className="text-sm text-gray-600">
                Browse hundreds of vehicles from top brands
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-black text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8" />
              </div>
              <h3 className="font-semibold mb-2">Verified Quality</h3>
              <p className="text-sm text-gray-600">
                All vehicles inspected and certified
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-black text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8" />
              </div>
              <h3 className="font-semibold mb-2">Best Prices</h3>
              <p className="text-sm text-gray-600">
                Competitive pricing with financing options
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-black text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Headset className="h-8 w-8" />
              </div>
              <h3 className="font-semibold mb-2">Expert Support</h3>
              <p className="text-sm text-gray-600">
                Dedicated team ready to help you
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Cars */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Featured Cars</h2>
            <Link
              to="/cars"
              className="text-sm font-semibold hover:underline"
            >
              View All →
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredCars.map((vehicle) => (
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
                  <div className="flex items-center gap-2 mb-2">
                    <span className="bg-black text-white text-xs px-2 py-1 rounded">
                      {vehicle.condition}
                    </span>
                    <span className="text-xs text-gray-500">{vehicle.year}</span>
                  </div>
                  <h3 className="font-semibold mb-2">{vehicle.name}</h3>
                  <p className="text-2xl font-bold">
                    ${vehicle.price.toLocaleString()}
                  </p>
                  {vehicle.mileage && (
                    <p className="text-sm text-gray-600 mt-1">{vehicle.mileage}</p>
                  )}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Bikes */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Featured Bikes</h2>
            <Link
              to="/bikes"
              className="text-sm font-semibold hover:underline"
            >
              View All →
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredBikes.map((vehicle) => (
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
                  <div className="flex items-center gap-2 mb-2">
                    <span className="bg-black text-white text-xs px-2 py-1 rounded">
                      {vehicle.condition}
                    </span>
                    <span className="text-xs text-gray-500">{vehicle.year}</span>
                  </div>
                  <h3 className="font-semibold mb-2">{vehicle.name}</h3>
                  <p className="text-2xl font-bold">
                    ${vehicle.price.toLocaleString()}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Find Your Dream Vehicle?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Browse our extensive collection or contact our experts for personalized recommendations
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/cars"
              className="bg-white text-black px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Start Shopping
            </Link>
            <a
              href="#"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-black transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

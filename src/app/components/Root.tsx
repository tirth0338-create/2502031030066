import { Outlet, Link, useLocation } from "react-router";
import { Car, Bike, Home } from "lucide-react";

export function Root() {
  const location = useLocation();

  const isActive = (path: string) => {
    if (path === "/" && location.pathname === "/") return true;
    if (path !== "/" && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-white border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center gap-2">
              <div className="bg-black text-white p-2 rounded-lg">
                <Car className="h-6 w-6" />
              </div>
              <span className="text-xl font-bold">AutoHub</span>
            </Link>

            <nav className="flex gap-1">
              <Link
                to="/"
                className={`px-4 py-2 rounded-lg flex items-center gap-2 transition-colors ${
                  isActive("/") && location.pathname === "/"
                    ? "bg-black text-white"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                <Home className="h-4 w-4" />
                <span className="hidden sm:inline">Home</span>
              </Link>
              <Link
                to="/cars"
                className={`px-4 py-2 rounded-lg flex items-center gap-2 transition-colors ${
                  isActive("/cars")
                    ? "bg-black text-white"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                <Car className="h-4 w-4" />
                <span className="hidden sm:inline">Cars</span>
              </Link>
              <Link
                to="/bikes"
                className={`px-4 py-2 rounded-lg flex items-center gap-2 transition-colors ${
                  isActive("/bikes")
                    ? "bg-black text-white"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                <Bike className="h-4 w-4" />
                <span className="hidden sm:inline">Bikes</span>
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="bg-white text-black p-2 rounded-lg">
                  <Car className="h-5 w-5" />
                </div>
                <span className="text-lg font-bold">AutoHub</span>
              </div>
              <p className="text-gray-400 text-sm">
                Your trusted destination for premium vehicles. Quality cars and bikes at competitive prices.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Shop</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link to="/cars" className="hover:text-white transition-colors">Cars</Link></li>
                <li><Link to="/bikes" className="hover:text-white transition-colors">Bikes</Link></li>
                <li><a href="#" className="hover:text-white transition-colors">New Arrivals</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Special Offers</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Financing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Trade-In</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Warranty</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2026 AutoHub. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <nav className="sticky top-16 w-full bg-slate-800/95 backdrop-blur-sm z-30">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-end h-16 space-x-8">
          <a href="#vision" className="text-white hover:text-gray-300 transition-colors">
            Our Vision
          </a>
          <a href="#values" className="text-white hover:text-gray-300 transition-colors">
            Core Values
          </a>
          <a href="#founders" className="text-white hover:text-gray-300 transition-colors">
            Founders
          </a>
          <a href="#team" className="text-white hover:text-gray-300 transition-colors">
            Services
          </a>
          <a href="#brands" className="text-white hover:text-gray-300 transition-colors">
            Clients
          </a>
        </div>
      </div>
    </nav>
  );
}

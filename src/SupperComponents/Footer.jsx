import { FaFacebook, FaTwitter, FaInstagram, FaMapMarkerAlt } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand Section */}
        <div className="flex flex-col items-center">
          <div
            className="bg-gray-700 w-24 h-24 flex items-center justify-center mb-4 animate-bounce rounded-full"
          >
            <p className="text-xl font-bold">Logo</p>
          </div>
          <p className="text-lg font-semibold">Brand Name</p>
        </div>

        {/* Social Links Section */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Social Links</h3>
          <ul className="space-y-4">
            <li className="flex items-center gap-4 transition-transform hover:translate-x-2">
              <FaFacebook className="text-blue-500 text-2xl" />
              <a href="#" className="hover:text-gray-300">Facebook</a>
            </li>
            <li className="flex items-center gap-4 transition-transform hover:translate-x-2">
              <FaTwitter className="text-blue-400 text-2xl" />
              <a href="#" className="hover:text-gray-300">Twitter</a>
            </li>
            <li className="flex items-center gap-4 transition-transform hover:translate-x-2">
              <FaInstagram className="text-pink-400 text-2xl" />
              <a href="#" className="hover:text-gray-300">Instagram</a>
            </li>
          </ul>
        </div>

        {/* Address Section */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Address</h3>
          <p className="flex items-center gap-2">
            <FaMapMarkerAlt className="text-red-500" />
            123 Main Street, City, State
          </p>
          <p>ZIP Code, Country</p>
        </div>

        {/* Google Map Section */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Google Map</h3>
          <div
            className="bg-gray-700 w-full h-32 flex items-center justify-center animate-pulse"
          >
            <p className="text-gray-400">Map Placeholder</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

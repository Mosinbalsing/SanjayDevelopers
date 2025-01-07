export default function Footer() {
    return (
      <footer className="bg-gray-800 text-white p-8">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="flex flex-col items-center">
            <div className=" w-24 h-24 flex items-center justify-center mb-4">
              <img src="./images/logo.png" alt="Sanjay Developers"/>
            </div>
          </div>
  
          {/* Social Links Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Social Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-gray-300">Facebook</a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">Twitter</a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">Instagram</a>
              </li>
            </ul>
          </div>
  
          {/* Address Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Address</h3>
            <p>123 Main Street</p>
            <p>City, State, ZIP</p>
            <p>Country</p>
          </div>
  
          {/* Google Map Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Google Map</h3>
            <div className="bg-gray-700 w-full h-32 flex items-center justify-center">
              <p className="text-gray-400">Map Placeholder</p>
            </div>
          </div>
        </div>
      </footer>
    );
  }
  
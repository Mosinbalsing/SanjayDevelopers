import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Home, Info, Briefcase, Mail, Menu, X ,StickyNote} from "lucide-react";
import Aos from "aos";
import "aos/dist/aos.css";

const navItems = [
  { name: "Home", icon: Home, href: "/" },
  { name: "About", icon: Info, href: "/about" },
  { name: "Projects", icon: Briefcase, href: "/service" },
  { name: "Blog", icon: StickyNote, href: "/blog" },
  { name: "Contact", icon: Mail, href: "/contact" },
  
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[rgb(0,212,255)] bg-[linear-gradient(90deg,_rgba(0,212,255,1)_0%,_rgba(9,9,121,1)_31%,_rgba(2,0,36,1)_100%)] text-white w-full">
      <div className="max-w-6xl mx-auto px-4">
        {/* Desktop Navbar */}
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
            <Link to="/">
          <div className="flex items-center space-x-2 cursor-pointer" data-aos="fade-up">
            <img src="./images/logo.png" alt="Logo" className="h-12 w-12" />
            <span className="text-xl font-bold hidden md:block">Sanjay Developers</span>
          </div>
            </Link>

          {/* Nav Items for Desktop */}
          <div className="hidden md:flex items-center space-x-7">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="py-2 px-4 text-zinc-100 font-semibold hover:text-blue-500 transition duration-300 group relative"
              >
                <motion.div
                  className="flex items-center"
                  whileHover={{ y: -2 }}
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 10,
                  }}
                >
                  <item.icon className="h-5 w-5 mr-2" />
                  {item.name}
                </motion.div>
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="outline-none mobile-menu-button"
            >
              {isOpen ? (
                <X className="bg-white h-6 w-6" />
              ) : (
                <Menu className="bg-white h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <motion.div
        className={`md:hidden ${isOpen ? "block" : "hidden"}`}
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        variants={{
          open: { opacity: 1, height: "auto" },
          closed: { opacity: 0, height: 0 },
        }}
        transition={{ duration: 0.3 }}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className="text-gray-100 hover:text-blue-500 block px-3 py-2 rounded-md text-base font-medium transition duration-300"
            >
              <motion.div
                className="flex items-center"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <item.icon className="h-5 w-5 mr-2" />
                {item.name}
              </motion.div>
            </Link>
          ))}
        </div>
      </motion.div>
    </nav>
  );
}

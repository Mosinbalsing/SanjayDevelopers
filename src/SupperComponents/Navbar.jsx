import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Home, Info, Briefcase, Mail, StickyNote } from "lucide-react";
import { IoMenuOutline, IoCloseOutline } from "react-icons/io5";
import Aos from "aos";
import "aos/dist/aos.css";

const navItems = [
  { name: "Home", icon: Home, href: "/" },
  { name: "About", icon: Info, href: "/about" },
  { name: "Projects", icon: Briefcase, href: "/projects" },
  { name: "Blog", icon: StickyNote, href: "/blog" },
  { name: "Contact", icon: Mail, href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    Aos.init({ duration: 2000, once: true });

    const handleScroll = () => {
      setScrolled(window.scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to top function
  const handleScrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <nav
      className={`w-full sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#2E2752] text-white h-20" : "bg-transparent text-white h-20"
      }`}
    >
      <div className="max-w-full mx-auto px-4">
        {/* Desktop Navbar */}
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          {!scrolled && (
            <Link to="/" className="relative left-1">
              <div
                className="flex items-center space-x-2 cursor-pointer"
                data-aos="fade-up"
              >
                <img src="./images/logo.png" alt="Logo" className="h-40 w-40" />
              </div>
            </Link>
          )}

          {/* Nav Items for Desktop */}
          <div className="hidden md:flex items-center space-x-7 ml-auto">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="py-2 px-4 text-zinc-100 font-semibold hover:text-blue-200 transition duration-300 group relative"
                onClick={handleScrollToTop} // Trigger scroll to top
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
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
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
                <IoCloseOutline className="bg-white h-6 w-6" />
              ) : (
                <IoMenuOutline className="bg-white h-6 w-6" />
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
              onClick={handleScrollToTop} // Trigger scroll to top
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

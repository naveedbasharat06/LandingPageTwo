import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import uifry_logo from "../../images/uifry_logo.png";
import pdfFile from "../../images/pdf-sample.pdf"; // Import the PDF file
const Navbar = () => {
  interface navLinksType {
    name: string;
    href: string;
  }
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navLinks: navLinksType[] = [
    { name: "Home", href: "#" },
    { name: "About Us", href: "#" },
    { name: "Pricing", href: "#" },
    { name: "Features", href: "#" },
  ];
  const [activeLink] = useState("Home");

  const mobileMenuVariants = {
    open: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeInOut" },
    },
    closed: {
      opacity: 0,
      y: -20,
      transition: { duration: 0.5, ease: "easeInOut" },
    },
  };
  return (
    <div>
      <nav className="bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16 mx-10">
            {/* Logo */}
            <div className="flex-shrink-0">
              <img src={uifry_logo} alt="uifry logo" className="h-8 w-auto" />{" "}
              {/* Added alt and size */}
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8 md:justify-start md:mr-36">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`text-black-700 hover:text-gray-600 px-3 py-2 rounded-md text-xl font-medium transition-colors ${
                    activeLink === link.name
                      ? "text-red-500 font-bold" // Active state styles
                      : "text-black-700 hover:text-gray-600"
                  }`}
                >
                  {link.name}
                </a>
              ))}
            </div>
            <a
              className="items-center bg-black text-white px-7 py-3 hidden md:flex rounded-sm font-medium"
              href={pdfFile} // Use the imported PDF file
              download="sample-report.pdf" // Name of the downloaded file
              aria-label="Download sample report"
            >
              Download
            </a>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                type="button"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500"
                aria-controls="mobile-menu"
                aria-expanded={isMenuOpen}
              >
                <span className="sr-only">Open main menu</span>
                {/* Hamburger Icon */}
                <svg
                  className={`${isMenuOpen ? "hidden" : "block"} h-6 w- 6`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
                {/* Close Icon */}
                <svg
                  className={`${isMenuOpen ? "block" : "hidden"} h-6 w-6`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && ( // Conditionally render based on isMenuOpen
            <motion.div
              className="mobile_View_nav md:hidden"
              variants={mobileMenuVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)} // Close menu on link click
                    className="text-gray-700 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
                <a
                  className="bg-black text-white px-4 py-2 rounded-md font-medium mt-2"
                  href={pdfFile} // Use the imported PDF file
                  download="sample-report.pdf" // Name of the downloaded file
                  aria-label="Download sample report"
                >
                  {" "}
                  {/* Download button in mobile menu */}
                  Download
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </div>
  );
};

export default Navbar;

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
  const [activeLink, setActiveLink] = useState("Home"); // Track the active link

  const navLinks: navLinksType[] = [
    { name: "Home", href: "#" },
    { name: "About Us", href: "#" },
    { name: "Pricing", href: "#" },
    { name: "Features", href: "#" },
  ];

  const mobileMenuVariants = {
    open: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeInOut" },
    },
    closed: {
      opacity: 0,
      y: -20,
      transition: { duration: 0.6, ease: "easeInOut" },
    },
  };
  return (
    <nav className="lg:pt-10">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0 transition delay-150 duration-300 ease-in-out hover:-translate-y hover:scale-110 cursor-pointer">
            <img src={uifry_logo} alt="uifry logo" className="h-10 w-auto" />
          </div>

          {/* Desktop Menu */}
          <div className="destop_nav_links hidden md:flex md:justify-start md:absolute md:ml-40 space-x-4 ">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setActiveLink(link.name)}
                className={` z-10 font-medium
                px-2 py-2 md:px-0 lg:px-2 text-xl  md:justify-start transition-colors ${
                  activeLink === link.name
                    ? "text-red-400 font-bold"
                    : "text-gray-900 dark:text-slate-300 hover:text-gray-500 dark:hover:text-gray-400"
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Download Button */}
          <a
            className="hidden md:flex bg-black text-white px-8 py-4 rounded-sm font-medium transition delay-150 duration-300 ease-in-out hover:-translate-y hover:scale-110  hover:bg-slate-600"
            href={pdfFile}
            download="sample-report.pdf"
            aria-label="Download sample report"
          >
            Download
          </a>

          {/* Mobile Menu Button */}
          <div className="md:hidden z-10">
            <button
              type="button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {/* Hamburger Icon */}
              {!isMenuOpen ? (
                <svg
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="z-50 absolute top-12  md:hidden flex flex-col w-full bg-white border-t border-gray-200 mt-4"
            variants={mobileMenuVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            <div className="px-4 pt-4 pb-3 space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => {
                    setActiveLink(link.name);
                    setIsMenuOpen(false);
                  }}
                  className={`block px-4 py-2 text-lg font-medium text-center border-b border-gray-400 transition-colors ${
                    activeLink === link.name
                      ? "text-red-500 font-semibold "
                      : "text-gray-700 hover:text-red-500"
                  }`}
                >
                  {link.name}
                </a>
              ))}
              {/* Mobile Download Button */}
              <a
                className="bg-black text-white px-5 py-3 rounded-md font-medium w-full block text-center mt-4 transition-all duration-500 ease-in-out hover:-translate-y-1"
                href={pdfFile}
                download="sample-report.pdf"
                aria-label="Download sample report"
              >
                Download
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;

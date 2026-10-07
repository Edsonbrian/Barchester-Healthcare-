import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  
  const navLinks = [
    { name: "Home", path: "#" },
    { name: "About", path: "#about" },
    { name: "Services", path: "#services" },
    { name: "Careers", path: "#careers" },
    { name: "Contact", path: "#contact" },
    { name: "Care Homes", path: "#carehomes" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-red-500 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          
          {/* Logo */}
          <div className="flex items-center gap-3 cursor-pointer">
        
            <div>
              <h1 className="text-xl font-bold text-gray-900">
                Barchester
              </h1>

              <p className="text-xs font-medium text-blue-700">
                Healthcare Limited
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.path}
                className="relative text-gray-700 font-medium hover:text-blue-700 transition duration-300 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-blue-700 after:transition-all hover:after:w-full"
              >
                {link.name}
              </a>
            ))}

          </nav>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      <div
        className={`lg:hidden bg-white border-t border-gray-100 overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-[500px] py-6" : "max-h-0"
        }`}
      >
        <div className="flex flex-col px-6 gap-5">
          {navLinks.map((link, index) => (
            <a  
              key={index}
              href={link.path}
              className="text-gray-700 font-medium hover:text-blue-700 transition"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}

          <button className="bg-blue-700 hover:bg-blue-800 text-white py-3 rounded-xl font-semibold transition duration-300">
            Apply Now
          </button>
        </div>
      </div>
    </header>
  );
}
// Footer.tsx

import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import {
  MapPin,
  Phone,
  Mail,
} from "lucide-react";
export default function Footer() {
  return (
    <footer className="relative bg-gray-950 text-white overflow-hidden">
      
      {/* Top Gradient */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-700"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
        
        {/* Main Footer */}
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-14">
          
          {/* Company Info */}
          <div>
            <h2 className="text-3xl font-bold text-white">
              Barchester
            </h2>

            <p className="text-blue-400 font-medium mt-1">
              Healthcare Limited
            </p>

            <p className="text-gray-400 leading-relaxed mt-6">
              Delivering compassionate healthcare, nursing, and support
              services with professionalism, dignity, and excellence.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-4 mt-8">
              
              <div className="w-11 h-11 rounded-2xl bg-white/10 flex items-center justify-center hover:bg-blue-700 transition duration-300 cursor-pointer">
                <FaFacebookF />
              </div>

              <div className="w-11 h-11 rounded-2xl bg-white/10 flex items-center justify-center hover:bg-blue-700 transition duration-300 cursor-pointer">
                <FaTwitter />
              </div>

              <div className="w-11 h-11 rounded-2xl bg-white/10 flex items-center justify-center hover:bg-blue-700 transition duration-300 cursor-pointer">
                 <FaInstagram />
              </div>

              <div className="w-11 h-11 rounded-2xl bg-white/10 flex items-center justify-center hover:bg-blue-700 transition duration-300 cursor-pointer">
                <FaLinkedinIn />
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-2xl font-semibold mb-8">
              Quick Links
            </h3>

            <ul className="space-y-5 text-gray-400">
              <li>
                <a
                  href="#"
                  className="hover:text-blue-400 transition duration-300"
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  href="#about"
                  className="hover:text-blue-400 transition duration-300"
                >
                  About Us
                </a>
              </li>

              <li>
                <a
                  href="#services"
                  className="hover:text-blue-400 transition duration-300"
                >
                  Services
                </a>
              </li>

              <li>
                <a
                  href="#careers"
                  className="hover:text-blue-400 transition duration-300"
                >
                  Careers
                </a>
              </li>

              <li>
                <a
                  href="#contact"
                  className="hover:text-blue-400 transition duration-300"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-2xl font-semibold mb-8">
              Our Services
            </h3>

            <ul className="space-y-5 text-gray-400">
              <li className="hover:text-blue-400 transition duration-300 cursor-pointer">
                Nursing Care
              </li>

              <li className="hover:text-blue-400 transition duration-300 cursor-pointer">
                Home Care
              </li>

              <li className="hover:text-blue-400 transition duration-300 cursor-pointer">
                Elderly Support
              </li>

              <li className="hover:text-blue-400 transition duration-300 cursor-pointer">
                Mental Health Care
              </li>

               <li className="hover:text-blue-400 transition duration-300 cursor-pointer">
                Live-in Care
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-semibold mb-8">
              Contact Us
            </h3>

            <div className="space-y-6">
              
              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-blue-700 flex items-center justify-center flex-shrink-0">
                  <MapPin size={20} />
                </div>

                <div>
                  <p className="text-gray-400 leading-relaxed">
                    25 Healthcare Avenue,
                    <br />
                    London, United Kingdom
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-blue-700 flex items-center justify-center flex-shrink-0">
                  <Phone size={20} />
                </div>

                <p className="text-gray-400">
                  +44 74 0317 9588
                </p>
              </div>

              {/* Email */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-blue-700 flex items-center justify-center flex-shrink-0">
                  <Mail size={20} />
                </div>

                <p className="text-gray-400">
                  info@barchesterhealthcare.com
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-20 bg-white/5 border border-white/10 rounded-[32px] p-10 flex flex-col lg:flex-row items-center justify-between gap-8">
          
          <div>
            <h2 className="text-3xl font-bold">
              Subscribe To Our Newsletter
            </h2>

            <p className="text-gray-400 mt-3">
              Get healthcare updates, news, and career opportunities.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-6 py-4 rounded-2xl bg-white/10 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 min-w-[300px]"
            />

            <button className="bg-blue-700 hover:bg-blue-800 px-8 py-4 rounded-2xl font-semibold transition duration-300 shadow-lg">
              Subscribe
            </button>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          
          <p className="text-gray-500 text-center md:text-left">
            © 2026 Barchester Healthcare Limited. All rights reserved.
          </p>

          <div className="flex items-center gap-8 text-gray-500">
            <a
              href="#"
              className="hover:text-blue-400 transition duration-300"
            >
              Privacy Policy
            </a>

            <a
              href="#"
              className="hover:text-blue-400 transition duration-300"
            >
              Terms & Conditions Reserved- No execeptions.
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer
      id="contact"
      className="bg-gradient-to-r from-[#1f4037] to-[#99f2c8] text-white py-10"
    >
      <div className="container mx-auto px-6 grid md:grid-cols-3 gap-8 text-center md:text-left">
        <div>
          <h3 className="text-xl font-bold mb-3">FASTag Recharge</h3>
          <p className="text-sm text-gray-200">
            A demo frontend project built using React + Tailwind + DaisyUI.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-3">Contact Us</h3>
          <p className="flex justify-center md:justify-start items-center gap-2">
            <Mail size={16} /> support@fastag.com
          </p>
          <p className="flex justify-center md:justify-start items-center gap-2">
            <Phone size={16} /> +91 98765 43210
          </p>
          <p className="flex justify-center md:justify-start items-center gap-2">
            <MapPin size={16} /> Patna, Bihar
          </p>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-3">Follow Us</h3>
          <div className="flex justify-center md:justify-start gap-4 text-2xl">
            <a href="#" className="hover:text-gray-200">🌐</a>
            <a href="#" className="hover:text-gray-200">🐦</a>
            <a href="#" className="hover:text-gray-200">📘</a>
          </div>
        </div>
      </div>

      <div className="text-center mt-8 text-sm text-gray-200">
        © {new Date().getFullYear()} FASTag Recharge. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

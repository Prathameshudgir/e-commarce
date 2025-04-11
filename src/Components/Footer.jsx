import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-orange-600 text-white py-8 mt-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* 1️⃣ Company Info */}
          <div>
            <h2 className="text-xl font-bold">GHARGUTI FOOD PRODUCTS</h2>
            <p className="mt-2 text-sm">
              Bringing you the best homemade food products with authentic taste and quality.
            </p>
          </div>

          {/* 2️⃣ Quick Links */}
          <div>
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="mt-2 space-y-2">
              <li><Link to="/" className="hover:text-gray-300">Home</Link></li>
              <li><Link to="/order" className="hover:text-gray-300">Order Online</Link></li>
              <li><Link to="/partner" className="hover:text-gray-300">Partner With Us</Link></li>
              <li><Link to="/more" className="hover:text-gray-300">More</Link></li>
            </ul>
          </div>

          {/* 3️⃣ Contact Info */}
          <div>
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <p className="mt-2 flex items-center gap-2"><FaPhoneAlt /> +91 97731 16008</p>
            <p className="mt-2 flex items-center gap-2"><FaEnvelope /> info@ghargutifood.com</p>
            <div className="flex space-x-4 mt-4">
              <a href="https://facebook.com" className="hover:text-gray-300 text-xl"><FaFacebook /></a>
              <a href="https://instagram.com" className="hover:text-gray-300 text-xl"><FaInstagram /></a>
              <a href="https://twitter.com" className="hover:text-gray-300 text-xl"><FaTwitter /></a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-6 border-t border-white/30 pt-4">
          <p>&copy; 2025 Gharguti Food Products. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

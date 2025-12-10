import React from 'react';
import { FaInfinity, FaInstagram, FaTwitter, FaPhoneAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 mt-10  ">
      {/* Top features section */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center py-6 border-b border-gray-200">
        <div>
          <h3 className="font-semibold text-sm">FREE INTERNATIONAL SHIPPING</h3>
          <p className="text-gray-500 text-xs">On all orders over $100.00</p>
        </div>
        <div>
          <h3 className="font-semibold text-sm">45 DAYS RETURN</h3>
          <p className="text-gray-500 text-xs">Money back guarantee</p>
        </div>
        <div>
          <h3 className="font-semibold text-sm">SECURE CHECKOUT</h3>
          <p className="text-gray-500 text-xs">100% secured checkout process</p>
        </div>
      </div>

      {/* Main footer links */}
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 py-10 px-6 text-sm">
        {/* Newsletter */}
        <div>
          <h4 className="font-semibold mb-3">Newsletter</h4>
          <p className="text-gray-500 text-xs mb-3">
            Be the first to hear about new products, exclusive events, and online offers.
          </p>
          <p className="text-gray-500 text-xs mb-3">Sign up and get 10% off your first order.</p>
          <div className="flex items-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full border border-gray-300 rounded-l-md px-3 py-2 text-xs focus:outline-none focus:ring-1 focus:ring-black"
            />
            <button className="bg-black text-white text-xs px-4 py-2 rounded-r-md hover:bg-gray-800 transition">
              Subscribe
            </button>
          </div>
        </div>

        {/* Shop */}
        <div>
          <h4 className="font-semibold mb-3">Shop</h4>
          <ul className="space-y-2 text-gray-500 text-xs">
            <li><a href="#">Men's Top Wear</a></li>
            <li><a href="#">Women's Top Wear</a></li>
            <li><a href="#">Men's Bottom Wear</a></li>
            <li><a href="#">Women's Bottom Wear</a></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h4 className="font-semibold mb-3">Support</h4>
          <ul className="space-y-2 text-gray-500 text-xs">
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">FAQs</a></li>
            <li><a href="#">Features</a></li>
          </ul>
        </div>

        {/* Follow Us */}
        <div>
          <h4 className="font-semibold mb-3">Follow Us</h4>
          <div className="flex space-x-4 text-gray-700 text-lg mb-4">
            <a href="#"><FaInfinity /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaTwitter /></a>
          </div>
          <div className="flex items-center text-gray-700 text-sm space-x-2">
            <FaPhoneAlt className="text-gray-600" />
            <span className="font-semibold">0123-456-789</span>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-gray-400 text-xs py-4 border-t border-gray-200">
        ©️ 2024, CompliTab. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
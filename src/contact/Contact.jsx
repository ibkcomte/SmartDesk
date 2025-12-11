import React from "react";

import {
  FaBookOpen,
  FaUser,
  FaEnvelope,
  FaPhone,
  FaMoon,
  FaShoppingBag,
  FaShoppingCart,
  FaThLarge,
} from "react-icons/fa";

const Contact = () => {
  return (
    // The main container for the entire screen view
    <div className="min-h-screen bg-[#f8f8f8] p-4 sm:p-8 md:p-16 flex justify-center items-center">
      {/* Main Content Area - mimicking the card effect */}
      <div className="bg-white rounded-lg shadow-2xl w-full max-w-6xl p-6 md:p-12 lg:p-16 flex flex-col lg:flex-row">
        {/* 1. Sidebar (Contact Info) */}
        <div className="lg:w-1/3 pr-0 lg:pr-12 space-y-10 border-b lg:border-b-0 lg:border-r border-gray-200 pb-8 lg:pb-0 mb-8 lg:mb-0">
          <h2 className="text-3xl font-serif tracking-widest text-center lg:text-left">
            CONTACT ME
          </h2>
          <div className="text-center lg:text-left">
            <span className="text-sm font-semibold text-lime-400">LET'S</span>
            <h3 className="text-2xl font-light">Talk About Ideas</h3>
          </div>

          {/* Info Blocks */}
          <div className="space-y-6">
            {/* Address */}
            <div className="flex items-start">
              <div className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center mr-4 mt-1">
                <FaBookOpen className="text-gray-600 hover:text-lime-400" />
              </div>
              <div>
                <p className="text-sm font-light uppercase text-gray-900">
                  Address
                </p>
                <p className="font-medium text-gray-800">
                  Lagos, Nigeria.
                </p>
              </div>
            </div>

            {/* Freelance */}
            <div className="flex items-start">
              <div className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center mr-4 mt-1">
                <FaUser className="text-gray-600 hover:text-lime-400" />
              </div>
              <div>
                <p className="text-sm font-light uppercase text-gray-900">
                  Freelance
                </p>
                <p className="text-sm font-light text-lime-500">
                  Available Right Now
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start">
              <div className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center mr-4 mt-1">
                <FaEnvelope className="text-gray-600 hover:text-lime-400" />
              </div>
              <div>
                <p className="text-sm font-light uppercase text-gray-900">
                  Email
                </p>
                <p className="font-medium text-gray-800">
                  cathycomte30@gmail.com
                </p>
              </div>
            </div>

            {/* Phone */}
            {/* <div className="flex items-start">
              <div className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center mr-4 mt-1">
                <FaPhone className="text-gray-600" />
              </div>
              <div>
                <p className="text-sm font-light uppercase text-gray-500">
                  Phone
                </p>
                <p className="font-medium text-gray-800">+234x- xxx - xxx</p>
              </div>
            </div> */}
          </div>
        </div>

        {/* 2. Contact Form */}
        <div className="lg:w-2/3 lg:pl-12">
          <form className="space-y-6">
            {/* Name and Email Row (Responsive: stacks on small screens, side-by-side on large) */}
            <div className="flex flex-col sm:flex-row gap-6">
              <div className="flex-1">
                <label
                  htmlFor="name"
                  className="text-xs uppercase text-gray-500 block mb-2"
                >
                  YOUR FULL NAME *
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  className="w-full p-3 border-b border-gray-300 focus:border-green-500 focus:outline-none transition duration-300"
                />
              </div>
              <div className="flex-1">
                <label
                  htmlFor="email"
                  className="text-xs uppercase text-gray-500 block mb-2"
                >
                  YOUR EMAIL ADDRESS *
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  className="w-full p-3 border-b border-gray-300 focus:border-green-500 focus:outline-none transition duration-300"
                />
              </div>
            </div>

            {/* Subject Field */}
            <div>
              <label
                htmlFor="subject"
                className="text-xs uppercase text-gray-500 block mb-2"
              >
                YOUR SUBJECT *
              </label>
              <input
                type="text"
                id="subject"
                required
                className="w-full p-3 border-b border-gray-300 focus:border-lime-500 focus:outline-none transition duration-300"
              />
            </div>

            {/* Message Field */}
            <div>
              <label
                htmlFor="message"
                className="text-xs uppercase text-gray-500 block mb-2"
              >
                YOUR MESSAGE *
              </label>
              <textarea
                id="message"
                rows="6"
                required
                className="w-full p-4 border border-gray-300 focus:border-lime-500 focus:outline-none transition duration-300 resize-none"
                // The dotted background effect is complex in pure CSS/Tailwind.
                // A simplified dotted border or a background image would be used for a perfect match.
              />
            </div>

            {/* Footer and Button */}
            <div className="flex justify-between items-center pt-4">
              <div className="flex items-center text-xs  text-gray-500">
                <input type="checkbox" id="terms" required className="mr-2 " />
                <label htmlFor="terms" className="cursor-pointer italic">
                  * Accept the terms and conditions.
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="bg-lime-400 hover:bg-lime-600 text-white font-semibold py-3 px-8 transition duration-300 rounded-lg shadow-md"
              >
                SEND MESSAGE
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Right-Side Fixed Toolbar (Optional but visible in the image) */}
      {/* <div className="fixed right-0 top-1/2 transform -translate-y-1/2 bg-white shadow-lg p-2 rounded-l-lg border border-gray-200 hidden md:block">
        <div className="space-y-4">
          <FaMoon className="text-xl text-gray-600 cursor-pointer hover:text-lime-400" />
          <FaShoppingBag className="text-xl text-gray-600 cursor-pointer hover:text-lime-400" />
          <FaShoppingCart className="text-xl text-gray-600 cursor-pointer hover:text-lime-400" />
          <FaThLarge className="text-xl text-gray-600 cursor-pointer hover:text-lime-400" />
        </div>
      </div> */}
    </div>
  );
};

export default Contact;

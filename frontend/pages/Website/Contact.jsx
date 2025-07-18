"use client";

import React, { useState } from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="min-h-screen bg-gradient-to-r from-[#f0f4f8] to-[#e1ecf1] py-16 px-4 sm:px-10">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 bg-white p-10 rounded-3xl shadow-xl">
        {/* Left: Contact Info */}
        <div className="flex flex-col justify-between">
          <div>
            <h2 className="text-4xl font-extrabold text-[#2d3436] mb-4">
              Get In Touch
            </h2>
            <p className="text-gray-600 mb-6">
              Have a question or just want to say hi? We'd love to hear from
              you!
            </p>

            <div className="space-y-4 text-gray-700">
              <p className="flex items-center gap-3">
                <FaEnvelope className="text-[#56b5a9]" /> info@healthconnect.com
              </p>
              <p className="flex items-center gap-3">
                <FaPhoneAlt className="text-[#56b5a9]" /> (123) 456-7890
              </p>
              <p className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-[#56b5a9]" /> 123 Health Street,
                Cityville
              </p>
            </div>

            <div className="mt-6">
              <h3 className="text-lg font-semibold mb-2">Follow us:</h3>
              <div className="flex gap-4">
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800"
                >
                  <FaFacebookF />
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-600"
                >
                  <FaTwitter />
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700 hover:text-blue-900"
                >
                  <FaLinkedinIn />
                </a>
              </div>
            </div>
          </div>

          {/* Google Map Embed */}
          <div className="mt-8">
            <iframe
              className="w-full h-60 rounded-lg shadow-md"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.548271676173!2d90.39945287519532!3d23.762858138697315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c78efedcfbbf%3A0x2793bc107296bd4a!2sDhaka!5e0!3m2!1sen!2sbd!4v1689234567890!5m2!1sen!2sbd"
            ></iframe>
          </div>
        </div>

        {/* Right: Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="name"
              className="block text-gray-800 font-semibold mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#56b5a9]"
              placeholder="Your Name"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-gray-800 font-semibold mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#56b5a9]"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-gray-800 font-semibold mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              required
              value={formData.message}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-3 resize-none focus:outline-none focus:ring-2 focus:ring-[#56b5a9]"
              placeholder="Write your message..."
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full py-3 rounded-full bg-gradient-to-r from-[#56b5a9] to-[#2ecc71] text-white font-bold text-lg hover:opacity-90 transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;

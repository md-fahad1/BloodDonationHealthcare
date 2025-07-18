"use client";

import Link from "next/link";
import Image from "next/image";
import { FaUserPlus, FaSignInAlt } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="bg-[#ECFAF8] text-gray-700 py-3 font-Poppins shadow-md">
      <div className="container mx-auto flex items-center justify-between px-6">
        {/* Left - Logo */}
        <div className="flex items-center w-5 h-5 md:w-10 md:h-10">
          <Image
            src="/logo1.png"
            alt="Logo"
            width={50}
            height={50}
            className="mr-3"
          />
          <h1 className=" text-sm md:text-3xl font-lobster tracking-wide">
            <span className="text-[#05497ee0]">Health</span>
            <span className="text-[#00b894]">Care</span>
          </h1>
        </div>

        {/* Center - Navigation Links */}
        <ul className="hidden md:flex space-x-8 text-xl font-semibold">
          <li>
            <Link
              href="/"
              className="hover:text-[#4b7bec] transition duration-300"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/Website/About"
              className="hover:text-[#4b7bec] transition duration-300"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/Website/Contact"
              className="hover:text-[#4b7bec] transition duration-300"
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              href="/Website/Team"
              className="hover:text-[#4b7bec] transition duration-300"
            >
              Team
            </Link>
          </li>
          <li>
            <Link
              href="/Website/Service"
              className="hover:text-[#4b7bec] transition duration-300"
            >
              Service
            </Link>
          </li>
        </ul>

        {/* Right - Auth Buttons */}
        <div className="flex items-center space-x-4">
          <Link
            href="/Auth/Login"
            className="flex items-center bg-white border border-gray-300 px-4 py-2 rounded-full hover:bg-[#dfe6e9] transition text-sm md:text-base"
          >
            <FaSignInAlt className="mr-2" /> Login
          </Link>
          <Link
            href="/Auth/Registration"
            className="flex items-center bg-[#00b894] text-white px-4 py-2 rounded-full hover:bg-[#019874] transition text-sm md:text-base"
          >
            <FaUserPlus className="mr-2" /> Signup
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

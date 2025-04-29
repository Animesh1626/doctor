"use client";
import Link from "next/link";
import Image from "next/image"; // Import Image component
import { useState } from "react";
import useAppContext from "@/context/appContext";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { userLoggedIn, logout } = useAppContext();


  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false); // Close the dropdown when a link is clicked
  };

  return (
    <header className="z-50 mb-20  fixed top-0 w-full bg-gradient-to-r from-teal-600 to-teal-800 text-white shadow-md">
      <nav className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-[70px] py-4">
          {/* Logo and Brand Name */}
          <Link href="/" className="flex items-center space-x-3 text-2xl font-bold">
            <img
              src="/image/logo.png" // Replace with your logo path
              alt="E-Doctor Logo"
              width={110} // Increased width
              // height={120} // Increased height
              className="h-auto object-contain" // Ensures proper scaling
            />
            <span>E-Doctor</span>
          </Link>

          {/* Links */}
          <div className="hidden md:flex space-x-6">
            <Link
              href="/"
              className="hover:text-yellow-300 transition-colors duration-300"
            >
              Home
            </Link>
            <Link
              href="/browse-doctor"
              className="hover:text-yellow-300 transition-colors duration-300"
            >
              All Doctors
            </Link>
            <Link
              href="/about-us"
              className="hover:text-yellow-300 transition-colors duration-300"
            >
              About
            </Link>
            <Link
              href="/contact-us"
              className="hover:text-yellow-300 transition-colors duration-300"
            >
              Contact
            </Link>
          </div>
          {
            userLoggedIn ? (
              <button onClick={logout}>logout</button>
            ) : (

              <div className="relative">
                <button
                  onClick={toggleDropdown}
                  className="flex items-center space-x-2 focus:outline-none hover:text-yellow-300 transition-colors duration-300"
                >
                  <span>Login/Sign-up</span>
                  <svg
                    className={`w-5 h-5 transform transition-transform ${isDropdownOpen ? "rotate-180" : "rotate-0"
                      }`}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {isDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-56 bg-white text-gray-800 border border-gray-200 rounded-lg shadow-lg z-10">
                    <div className="py-2">
                      <p className="px-4 py-2 text-sm font-semibold">Doctor</p>
                      <Link
                        href="/doctor-login"
                        className="block px-4 py-2 hover:bg-blue-100 rounded-md"
                        onClick={closeDropdown}
                      >
                        Login
                      </Link>
                      <Link
                        href="/doctor-signup"
                        className="block px-4 py-2 hover:bg-blue-100 rounded-md"
                        onClick={closeDropdown}
                      >
                        Signup
                      </Link>
                      <hr className="my-2 border-gray-200" />
                      <p className="px-4 py-2 text-sm font-semibold">User</p>
                      <Link
                        href="/user-login"
                        className="block px-4 py-2 hover:bg-blue-100 rounded-md"
                        onClick={closeDropdown}
                      >
                        Login
                      </Link>
                      <Link
                        href="/user-signup"
                        className="block px-4 py-2 hover:bg-blue-100 rounded-md"
                        onClick={closeDropdown}
                      >
                        Signup
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            )
          }

        </div>
      </nav>
    </header>
  );
};

export default Navbar;
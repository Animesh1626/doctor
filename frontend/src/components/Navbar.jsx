"use client";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <header className="bg-white border-b border-gray-200 dark:bg-neutral-800 dark:border-neutral-700">
      <nav className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-gray-800 dark:text-white">
            E-Doctor
          </Link>

          {/* Links */}
          <div className="hidden md:flex space-x-6">
            <Link
              href="/"
              className="text-gray-800 hover:text-blue-600 dark:text-white dark:hover:text-blue-400"
            >
              Home
            </Link>
            <Link
              href="/all-doctors"
              className="text-gray-800 hover:text-blue-600 dark:text-white dark:hover:text-blue-400"
            >
              All Doctors
            </Link>
            <Link
              href="/about"
              className="text-gray-800 hover:text-blue-600 dark:text-white dark:hover:text-blue-400"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-gray-800 hover:text-blue-600 dark:text-white dark:hover:text-blue-400"
            >
              Contact
            </Link>
          </div>

          {/* Dropdown */}
          <div className="relative">
            <button
              onClick={toggleDropdown}
              className="text-gray-800 hover:text-blue-600 dark:text-white dark:hover:text-blue-400 focus:outline-none flex items-center space-x-2"
            >
              <span>Create account</span>
              <svg
                className={`w-5 h-5 transform transition-transform ${
                  isDropdownOpen ? "rotate-180" : "rotate-0"
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
              <div className="absolute right-0 mt-2 w-56 bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-neutral-800 dark:border-neutral-700 z-10">
                <div className="py-2">
                  <p className="px-4 py-2 text-sm font-semibold text-gray-800 dark:text-white">
                    Doctor
                  </p>
                  <Link
                    href="/doctor-login"
                    className="block px-4 py-2 text-gray-800 hover:bg-blue-100 dark:text-white dark:hover:bg-neutral-700 rounded-md"
                  >
                    Login
                  </Link>
                  <Link
                    href="/doctor-signup"
                    className="block px-4 py-2 text-gray-800 hover:bg-blue-100 dark:text-white dark:hover:bg-neutral-700 rounded-md"
                  >
                    Signup
                  </Link>
                  <hr className="my-2 border-gray-200 dark:border-neutral-700" />
                  <p className="px-4 py-2 text-sm font-semibold text-gray-800 dark:text-white">
                    User
                  </p>
                  <Link
                    href="/user-login"
                    className="block px-4 py-2 text-gray-800 hover:bg-blue-100 dark:text-white dark:hover:bg-neutral-700 rounded-md"
                  >
                    Login
                  </Link>
                  <Link
                    href="/user-signup"
                    className="block px-4 py-2 text-gray-800 hover:bg-blue-100 dark:text-white dark:hover:bg-neutral-700 rounded-md"
                  >
                    Signup
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
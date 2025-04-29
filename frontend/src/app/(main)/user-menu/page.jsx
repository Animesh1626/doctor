"use client";
import Link from "next/link";

const UserMenu = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 py-12 px-4">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">User Dashboard</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl w-full">
        {/* Edit Profile */}
        <Link
          href="/user/profile"
          className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300 flex flex-col items-center text-center"
        >
          <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 4v16m8-8H4"
              />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-gray-800">Edit Profile</h3>
          <p className="text-sm text-gray-500">Update your personal details.</p>
        </Link>

        {/* Manage Appointments */}
        <Link
          href="/user/manage-appointment"
          className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300 flex flex-col items-center text-center"
        >
          <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 7V3m8 4V3m-9 4h10M5 21h14M5 10h14M5 14h14M5 18h14"
              />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-gray-800">
            Manage Appointments
          </h3>
          <p className="text-sm text-gray-500">
            View or cancel your appointments.
          </p>
        </Link>

        {/* Book Appointment */}
        <Link
          href="/browse-doctor"
          className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300 flex flex-col items-center text-center"
        >
          <div className="w-12 h-12 bg-yellow-100 text-yellow-600 rounded-full flex items-center justify-center mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4m0 0v4m0-4h4m-4 0H8m12 4a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-gray-800">
            Book Appointment
          </h3>
          <p className="text-sm text-gray-500">
            Schedule a new appointment with a doctor.
          </p>
        </Link>

        {/* Download Report */}
        <Link
          href="/user/manage-appointment"
          className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300 flex flex-col items-center text-center"
        >
          <div className="w-12 h-12 bg-red-100 text-red-600 rounded-full flex items-center justify-center mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 4v16m8-8H4"
              />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-gray-800">
            Download Report
          </h3>
          <p className="text-sm text-gray-500">
            Access and download your medical reports.
          </p>
        </Link>

        {/* View Appointment */}
        <Link
          href="/user/manage-appointment"
          className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300 flex flex-col items-center text-center"
        >
          <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4m0 0v4m0-4h4m-4 0H8m12 4a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-gray-800">
            View Appointment
          </h3>
          <p className="text-sm text-gray-500">
            Check details of your upcoming appointments.
          </p>
        </Link>
      </div>
    </div>
  );
};

export default UserMenu;
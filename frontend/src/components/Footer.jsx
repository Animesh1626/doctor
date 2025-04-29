export default function Footer() {
  return (
    <footer className="bg-white mt-16 border-t">
      <div className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left Logo and Description */}
        <div className="flex flex-col items-start">
          <div className="flex items-center space-x-3 mb-4">
            <img src="/image/logo.png" alt="E-Doctor" className="w-12 h-12" />
            <span className="text-2xl font-semibold text-[#1e1e1e]">E-Doctor</span>
          </div>
          <p className="text-gray-500 text-sm leading-relaxed">
            E-Doctor is your trusted platform for booking medical appointments online. We connect you with qualified doctors and specialists, ensuring convenient, secure, and timely healthcare access from the comfort of your home.
          </p>
        </div>

        {/* Middle Links */}
        <div className="flex flex-col items-start">
          <h3 className="font-semibold text-lg mb-4">COMPANY</h3>
          <ul className="space-y-2 text-sm text-gray-700">
            <li><a href="#" className="hover:text-blue-600">Home</a></li>
            <li><a href="#" className="hover:text-blue-600">About us</a></li>
            <li><a href="#" className="hover:text-blue-600">Delivery</a></li>
            <li><a href="#" className="hover:text-blue-600">Privacy policy</a></li>
          </ul>
        </div>

        {/* Right Contact Info */}
        <div className="flex flex-col items-start">
          <h3 className="font-semibold text-lg mb-4">GET IN TOUCH</h3>
          <ul className="space-y-2 text-sm text-gray-700">
            <li>+0-000-000-000</li>
            <li><a href="mailto:greatstackdev@gmail.com" className="hover:text-blue-600">E-doctor@gmail.com</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t text-center text-sm text-gray-500 py-4">
        Copyright 2025 © E-Doctor – All Rights Reserved.
      </div>
    </footer>
  );
}

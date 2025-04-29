import Image from 'next/image';

export default function Contact() {
  return (
    <div className="mt-30">
        <h2 className="text-4xl font-bold text-gray-800 text-center w-full">
            CONTACT <span className="text-blue-700">US</span>
          </h2>
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 py-4">
        
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left side: Image */}
        <div className="relative w-full h-[500px]">
          <Image
            src="/image/contact.png"
            alt="Doctor Consultation"
            layout="fill"
            objectFit="cover"
            className="rounded-xl shadow-lg"
          />
        </div>

        {/* Right side: Info */}
        <div className="flex flex-col justify-center items-start space-y-8">
          

          {/* Office Info */}
          <div className="w-full">
            <h3 className="text-2xl font-medium text-gray-700 mb-4">OUR OFFICE</h3>
            <p className="text-gray-600 text-lg">00000 Rajput Palace</p>
            <p className="text-gray-600 text-lg">Suite 000,C.P,Delhi</p>
            <p className="text-gray-600 text-lg mt-2">Tel: (000) 000-0000</p>
            <p className="text-gray-600 text-lg">Email: animesh@gmail.com</p>
          </div>

          {/* Careers Info */}
          <div className="w-full">
            <h3 className="text-2xl font-medium text-gray-700 mb-4">CAREERS AT E-DOCTOR</h3>
            <p className="text-gray-600 text-lg mb-4">
              Learn more about our teams and job openings.
            </p>
            <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
              Explore Jobs
            </button>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

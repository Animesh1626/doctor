import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="container mt-30 mx-auto py-16 px-18">
      {/* About Us Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
          ABOUT <span className="text-blue-600">US</span>
        </h1>
        <p className="text-gray-600 mt-4 text-lg max-w-2xl mx-auto">
          Learn more about E-Doctor and how we are transforming healthcare.
        </p>
      </div>

      {/* About Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16 items-center">
        <div className="flex justify-center">
          <Image
            src="/image/about.png"
            alt="Doctors smiling"
            width={500}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </div>

        <div className="space-y-6">
          <p className="text-gray-700 leading-relaxed text-lg">
            Welcome to <span className="font-bold text-blue-600">E-Doctor</span>, your trusted partner in managing your
            healthcare needs conveniently and efficiently. At E-Doctor, we
            understand the challenges individuals face when it comes to
            scheduling doctor appointments and managing their health records.
          </p>

          <p className="text-gray-700 leading-relaxed text-lg">
            <span className="font-bold text-blue-600">E-Doctor</span> is committed to excellence in healthcare
            technology. We continuously strive to enhance our platform,
            integrating the latest advancements to improve user experience and
            deliver superior service. Whether you're booking your first
            appointment or managing ongoing care, E-Doctor is here to support
            you every step of the way.
          </p>

          <div className="pt-4">
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">
              Our Vision
            </h2>
            <p className="text-gray-700 leading-relaxed text-lg">
              Our vision at <span className="font-bold text-blue-600">E-Doctor</span> is to create a seamless healthcare
              experience for every user. We aim to bridge the gap between
              patients and healthcare providers, making it easier for you to
              access the care you need, when you need it.
            </p>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">
          WHY CHOOSE <span className="text-blue-600">US</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Efficiency */}
          <div className="border p-8 rounded-lg shadow-md hover:shadow-lg transition duration-300 text-center">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              EFFICIENCY
            </h3>
            <p className="text-gray-600 text-lg">
              Streamlined appointment scheduling that fits into your busy
              lifestyle.
            </p>
          </div>

          {/* Convenience */}
          <div className="border p-8 rounded-lg shadow-md hover:shadow-lg transition duration-300 text-center">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              CONVENIENCE
            </h3>
            <p className="text-gray-600 text-lg">
              Access to a network of trusted healthcare professionals in your
              area.
            </p>
          </div>

          {/* Personalization */}
          <div className="border p-8 rounded-lg shadow-md hover:shadow-lg transition duration-300 text-center">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              PERSONALIZATION
            </h3>
            <p className="text-gray-600 text-lg">
              Tailored recommendations and reminders to help you stay on top of
              your health.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

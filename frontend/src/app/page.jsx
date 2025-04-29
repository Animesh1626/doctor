"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  CalendarDays,
  Clock,
  MessageSquare,
  Phone,
  Shield,
  Sliders,
  SlidersHorizontal,
  Star,
  Stethoscope,
  Users,
} from "lucide-react";
import axios from "axios";

const Page = () => {
  const [doctors, setDoctors] = useState([]);
  const [showAll, setShowAll] = useState(false); // State to toggle between limited and full list

  // Fetch doctors from API
  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const response = await axios.get("http://localhost:5000/doctor/getall"); // Replace with your API endpoint
        setDoctors(response.data);
      } catch (error) {
        console.error("Error fetching doctors:", error);
      }
    };

    fetchDoctors();
  }, []);

  // Limit the number of doctors shown initially
  const displayedDoctors = showAll ? doctors : doctors.slice(0, 3);

  return (
    <div className="flex min-h-screen flex-col w-full">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 px-20 md:py-24 lg:py-32 bg-gradient-to-b from-white to-teal-50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                  Healthcare at Your Fingertips
                </h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Connect with certified doctors online for consultations,
                  prescriptions, and medical advice from the comfort of your
                  home.
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/browse-doctor">
                    <Button className="bg-teal-600 hover:bg-teal-700">
                      Book an Appointment
                    </Button>
                  </Link>
                  <Link href="/about-us">
                    <Button
                      variant="outline"
                      className="border-teal-600 text-teal-600 hover:bg-teal-50"
                    >
                      Learn More
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="mx-auto lg:ml-auto">
                <Image
                  src="/image/landing.png?height=550&width=550"
                  alt="Doctor with patient"
                  width={550}
                  height={550}
                  className="rounded-lg object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-teal-100 px-3 py-1 text-sm text-teal-700">
                  Our Services
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                  Comprehensive Healthcare Solutions
                </h2>
                <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  We offer a wide range of medical services to meet your
                  healthcare needs.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">
              <Card className="border-2 border-teal-100 hover:border-teal-300 transition-colors">
                <CardHeader className="pb-2">
                  <div className="w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center mb-2">
                    <MessageSquare className="h-6 w-6 text-teal-700" />
                  </div>
                  <CardTitle>Online Consultations</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Connect with doctors via video, audio, or chat for medical
                    advice and treatment plans.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card className="border-2 border-teal-100 hover:border-teal-300 transition-colors">
                <CardHeader className="pb-2">
                  <div className="w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center mb-2">
                    <Clock className="h-6 w-6 text-teal-700" />
                  </div>
                  <CardTitle>24/7 Availability</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Access healthcare services anytime, day or night, with our
                    round-the-clock medical support.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card className="border-2 border-teal-100 hover:border-teal-300 transition-colors">
                <CardHeader className="pb-2">
                  <div className="w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center mb-2">
                    <Shield className="h-6 w-6 text-teal-700" />
                  </div>
                  <CardTitle>Secure Prescriptions</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Receive digital prescriptions securely delivered to your
                    preferred pharmacy.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card className="border-2 border-teal-100 hover:border-teal-300 transition-colors">
                <CardHeader className="pb-2">
                  <div className="w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center mb-2">
                    <CalendarDays className="h-6 w-6 text-teal-700" />
                  </div>
                  <CardTitle>Appointment Scheduling</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Book appointments with specialists at your convenience with
                    our easy scheduling system.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card className="border-2 border-teal-100 hover:border-teal-300 transition-colors">
                <CardHeader className="pb-2">
                  <div className="w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center mb-2">
                    <Users className="h-6 w-6 text-teal-700" />
                  </div>
                  <CardTitle>Family Health Profiles</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Manage health records for your entire family in one secure,
                    accessible location.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card className="border-2 border-teal-100 hover:border-teal-300 transition-colors">
                <CardHeader className="pb-2">
                  <div className="w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center mb-2">
                    <Phone className="h-6 w-6 text-teal-700" />
                  </div>
                  <CardTitle>Follow-up Care</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Receive personalized follow-up care and ongoing support for
                    chronic conditions.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-teal-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-teal-100 px-3 py-1 text-sm text-teal-700">
                  Simple Process
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                  How E-Doctor Works
                </h2>
                <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Get the care you need in three simple steps.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3 mt-12">
              <div className="flex flex-col items-center text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-teal-100 mb-4">
                  <span className="text-2xl font-bold text-teal-700">1</span>
                </div>
                <h3 className="text-xl font-bold">Create an Account</h3>
                <p className="mt-2 text-gray-500">
                  Sign up and complete your health profile with medical history
                  and preferences.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-teal-100 mb-4">
                  <span className="text-2xl font-bold text-teal-700">2</span>
                </div>
                <h3 className="text-xl font-bold">Book a Consultation</h3>
                <p className="mt-2 text-gray-500">
                  Choose a specialist and select a convenient time slot for your
                  appointment.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-teal-100 mb-4">
                  <span className="text-2xl font-bold text-teal-700">3</span>
                </div>
                <h3 className="text-xl font-bold">Receive Care</h3>
                <p className="mt-2 text-gray-500">
                  Connect with your doctor via video call and get personalized
                  treatment plans.
                </p>
              </div>
            </div>
            <div className="flex justify-center mt-12">
              <Link href="/user-signup">
                <Button
                  href="/user-signup"
                  className="bg-teal-600 hover:bg-teal-700">
                  Get Started Now
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Doctors Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-teal-100 px-3 py-1 text-sm text-teal-700">
                  Expert Team
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                  Meet Our Specialists
                </h2>
                <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our platform connects you with certified and experienced
                  healthcare professionals.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 mt-12">
              {displayedDoctors.map((doctor) => (
                <Card key={doctor._id} className="overflow-hidden">
                  <div className="aspect-square relative">
                    <img
                      src={doctor.image || "/placeholder.svg"} // Replace with actual image field
                      alt={doctor.name}
                      fill="true"
                      className="object-cover rounded-lg"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle>{doctor.name}</CardTitle>
                    <CardDescription>{doctor.specialty}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center space-x-1 mb-2">
                      {[...Array(doctor.rating || 5)].map((_, index) => (
                        <Star
                          key={index}
                          className="h-4 w-4 fill-current text-yellow-400"
                        />
                      ))}
                      <span className="text-sm text-gray-500 ml-2">
                        {doctor.rating || 5} ({doctor.reviews || 0} reviews)
                      </span>
                    </div>
                    <p className="text-sm text-gray-500">
                      {doctor.experience || 0}+ years of experience in{" "}
                      {doctor.specialty}.
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="flex justify-center mt-8">
              <Button
                variant="outline"
                className="border-teal-600 text-teal-600 hover:bg-teal-50"
                onClick={() => setShowAll(!showAll)} // Toggle between showing all and limited doctors
              >
                {showAll ? "Show Less" : "View All Doctors"}
              </Button>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-teal-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-teal-100 px-3 py-1 text-sm text-teal-700">
                  Testimonials
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                  What Our Patients Say
                </h2>
                <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Read about the experiences of patients who have used our
                  platform.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-3 gap-8 md:grid-cols-2 lg:grid-cols-3 mt-12">
              {[1, 2, 3].map((testimonial) => (
            <div key={testimonial} className="flex flex-col items-center">
                <Card key={testimonial} className="bg-white">
                  <CardHeader className="pb-2">
                    <div className="flex items-center gap-4">
                      <div className="h-12 w-12 rounded-full overflow-hidden relative"></div>
                      <div>
                        <CardTitle className="text-base">
                          Michael Thompson
                        </CardTitle>
                        <CardDescription>Patient</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center space-x-1 mb-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          className="h-4 w-4 fill-current text-yellow-400"
                        />
                      ))}
                    </div>
                    <p className="text-sm text-gray-500">
                      "E-Doctor has been a lifesaver for me. I was able to get a
                      consultation quickly when I needed it most, and the doctor
                      was incredibly knowledgeable and caring."
                    </p>
                  </CardContent>
                </Card>
              </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-teal-600 text-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Ready to experience healthcare reimagined?
                </h2>
                <p className="max-w-[600px] text-teal-50 md:text-xl/relaxed">
                  Join thousands of patients who have transformed their
                  healthcare experience with E-Doctor.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center lg:justify-end">
                <Link href="/about-us">
                  <Button
                    variant="outline"
                    className="border-white text-teal-600 hover:bg-teal-700"
                  >
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Page;
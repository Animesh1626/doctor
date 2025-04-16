"use client"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card"
import {
  CalendarDays,
  Clock,
  MessageSquare,
  Phone,
  Shield,
  Star,
  Stethoscope,
  Users
} from "lucide-react"

const page = () => {
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
                  <Button className="bg-teal-600 hover:bg-teal-700">
                    Book an Appointment
                  </Button>
                  <Button
                    variant="outline"
                    className="border-teal-600 text-teal-600 hover:bg-teal-50"
                  >
                    Learn More
                  </Button>
                </div>
              </div>
              <div className="mx-auto lg:ml-auto">
                <Image
                  src="/placeholder.svg?height=550&width=550"
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
              <Button className="bg-teal-600 hover:bg-teal-700">
                Get Started Now
              </Button>
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
              {[1, 2, 3].map(doctor => (
                <Card key={doctor} className="overflow-hidden">
                  <div className="aspect-square relative">
                    <Image
                      src={`/placeholder.svg?height=300&width=300&text=Doctor ${doctor}`}
                      alt={`Doctor ${doctor}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle>Dr. Sarah Johnson</CardTitle>
                    <CardDescription>Cardiologist</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center space-x-1 mb-2">
                      {[1, 2, 3, 4, 5].map(star => (
                        <Star
                          key={star}
                          className="h-4 w-4 fill-current text-yellow-400"
                        />
                      ))}
                      <span className="text-sm text-gray-500 ml-2">
                        4.9 (120 reviews)
                      </span>
                    </div>
                    <p className="text-sm text-gray-500">
                      10+ years of experience in treating cardiovascular
                      conditions.
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="flex justify-center mt-8">
              <Button
                variant="outline"
                className="border-teal-600 text-teal-600 hover:bg-teal-50"
              >
                View All Doctors
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
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 mt-12">
              {[1, 2, 3].map(testimonial => (
                <Card key={testimonial} className="bg-white">
                  <CardHeader className="pb-2">
                    <div className="flex items-center gap-4">
                      <div className="h-12 w-12 rounded-full overflow-hidden relative">
                        <Image
                          src={`/placeholder.svg?height=50&width=50&text=P${testimonial}`}
                          alt={`Patient ${testimonial}`}
                          fill
                          className="object-cover"
                        />
                      </div>
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
                      {[1, 2, 3, 4, 5].map(star => (
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
                <Button className="bg-white text-teal-600 hover:bg-teal-50">
                  Sign Up Now
                </Button>
                <Button
                  variant="outline"
                  className="border-white text-white hover:bg-teal-700"
                >
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t bg-background py-6 md:py-12">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Stethoscope className="h-6 w-6 text-teal-600" />
                <span className="text-xl font-bold">E-Doctor</span>
              </div>
              <p className="text-sm text-gray-500">
                Healthcare at your fingertips, anytime, anywhere.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-sm font-medium">Company</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="#"
                    className="text-gray-500 hover:text-teal-600 transition-colors"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-500 hover:text-teal-600 transition-colors"
                  >
                    Careers
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-500 hover:text-teal-600 transition-colors"
                  >
                    Press
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-500 hover:text-teal-600 transition-colors"
                  >
                    Blog
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-sm font-medium">Services</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="#"
                    className="text-gray-500 hover:text-teal-600 transition-colors"
                  >
                    Online Consultations
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-500 hover:text-teal-600 transition-colors"
                  >
                    Specialist Referrals
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-500 hover:text-teal-600 transition-colors"
                  >
                    Prescription Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-500 hover:text-teal-600 transition-colors"
                  >
                    Health Records
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-sm font-medium">Legal</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="#"
                    className="text-gray-500 hover:text-teal-600 transition-colors"
                  >
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-500 hover:text-teal-600 transition-colors"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-500 hover:text-teal-600 transition-colors"
                  >
                    Cookie Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-500 hover:text-teal-600 transition-colors"
                  >
                    HIPAA Compliance
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-xs text-gray-500">
              © {new Date().getFullYear()} E-Doctor. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link
                href="#"
                className="text-gray-500 hover:text-teal-600 transition-colors"
              >
                <span className="sr-only">Facebook</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </Link>
              <Link
                href="#"
                className="text-gray-500 hover:text-teal-600 transition-colors"
              >
                <span className="sr-only">Twitter</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                </svg>
              </Link>
              <Link
                href="#"
                className="text-gray-500 hover:text-teal-600 transition-colors"
              >
                <span className="sr-only">Instagram</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </Link>
              <Link
                href="#"
                className="text-gray-500 hover:text-teal-600 transition-colors"
              >
                <span className="sr-only">LinkedIn</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default page;
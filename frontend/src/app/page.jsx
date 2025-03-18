import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Search,
  Calendar,
  Video,
  MessageSquare,
  Clock,
  Star,
  ChevronRight,
  CheckCircle,
  ArrowRight,
  Heart,
  Stethoscope,
  Users,
  Shield,
} from "lucide-react"

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header/Navigation */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Stethoscope className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">MediConnect</span>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-sm font-medium text-primary">
              Home
            </Link>
            <Link href="/doctors" className="text-sm font-medium text-muted-foreground hover:text-primary">
              Find Doctors
            </Link>
            <Link href="/services" className="text-sm font-medium text-muted-foreground hover:text-primary">
              Services
            </Link>
            <Link href="/about" className="text-sm font-medium text-muted-foreground hover:text-primary">
              About Us
            </Link>
            <Link href="/contact" className="text-sm font-medium text-muted-foreground hover:text-primary">
              Contact
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            <Link href="/login">
              <Button variant="outline" size="sm">
                Log In
              </Button>
            </Link>
            <Link href="/signup">
              <Button size="sm">Sign Up</Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 md:py-28 bg-gradient-to-b from-blue-50 to-white">
          <div className="container flex flex-col md:flex-row items-center gap-8 md:gap-16">
            <div className="flex-1 space-y-6">
              <Badge className="px-3 py-1 text-sm bg-blue-100 text-primary border-none">
                #1 Online Doctor Consultation Platform
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                Your Health, Our <span className="text-primary">Priority</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-[600px]">
                Connect with certified doctors online for instant consultations, prescriptions, and medical advice from
                the comfort of your home.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link href="/doctors">
                  <Button size="lg" className="w-full sm:w-auto">
                    Find a Doctor <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/services">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto">
                    Explore Services
                  </Button>
                </Link>
              </div>

              <div className="flex items-center gap-6 pt-4">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="h-10 w-10 rounded-full border-2 border-background overflow-hidden">
                      <Image
                        src={`/placeholder.svg?height=40&width=40&text=${i}`}
                        alt={`User ${i}`}
                        width={40}
                        height={40}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  ))}
                </div>
                <div>
                  <div className="flex items-center">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    <span className="font-medium text-foreground">4.9</span> from 2,000+ reviews
                  </p>
                </div>
              </div>
            </div>

            <div className="flex-1 relative">
              <div className="relative h-[400px] w-full md:h-[500px] rounded-2xl overflow-hidden">
                <Image
                  src="/placeholder.svg?height=500&width=500&text=Doctor"
                  alt="Doctor with patient"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="absolute -bottom-6 -left-6 bg-white rounded-lg shadow-lg p-4 max-w-[200px]">
                <div className="flex items-center gap-2 mb-2">
                  <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Verified Doctors</p>
                    <p className="text-xs text-muted-foreground">100% certified</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Search Section */}
        <section className="py-12 container">
          <div className="bg-white rounded-xl shadow-lg p-6 -mt-16 relative z-10 border">
            <h2 className="text-xl font-semibold mb-4">Find the Right Doctor, Right Now</h2>
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                <Input placeholder="Search by specialty, doctor name, or condition" className="pl-10 h-12" />
              </div>
              <Button className="h-12 px-8">Search</Button>
            </div>

            <div className="flex flex-wrap gap-2 mt-4">
              {["Cardiologist", "Dermatologist", "Pediatrician", "Neurologist", "Orthopedic"].map((specialty) => (
                <Badge
                  key={specialty}
                  variant="outline"
                  className="cursor-pointer hover:bg-primary hover:text-primary-foreground"
                >
                  {specialty}
                </Badge>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-gray-50">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Why Choose MediConnect?</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                We provide a seamless healthcare experience with top doctors and cutting-edge technology.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Video className="h-10 w-10 text-primary" />,
                  title: "Video Consultations",
                  description: "Connect face-to-face with doctors through secure HD video calls.",
                },
                {
                  icon: <Calendar className="h-10 w-10 text-primary" />,
                  title: "Easy Scheduling",
                  description: "Book appointments at your convenience, 24/7 with instant confirmation.",
                },
                {
                  icon: <MessageSquare className="h-10 w-10 text-primary" />,
                  title: "Chat Support",
                  description: "Get medical advice through secure messaging with your doctor.",
                },
                {
                  icon: <Shield className="h-10 w-10 text-primary" />,
                  title: "Private & Secure",
                  description: "Your health data is encrypted and protected with the highest standards.",
                },
                {
                  icon: <Clock className="h-10 w-10 text-primary" />,
                  title: "24/7 Availability",
                  description: "Access healthcare anytime with our round-the-clock medical support.",
                },
                {
                  icon: <Users className="h-10 w-10 text-primary" />,
                  title: "Specialist Network",
                  description: "Access to a wide network of specialists across all medical fields.",
                },
              ].map((feature, index) => (
                <Card key={index} className="border-none shadow-md hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="h-14 w-14 rounded-full bg-blue-50 flex items-center justify-center mb-4">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-16">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">How It Works</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">Get the care you need in three simple steps</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  step: "01",
                  title: "Find a Doctor",
                  description:
                    "Search for specialists based on your health needs, read reviews, and check availability.",
                },
                {
                  step: "02",
                  title: "Book Appointment",
                  description: "Select a convenient time slot and book your consultation with just a few clicks.",
                },
                {
                  step: "03",
                  title: "Get Consultation",
                  description:
                    "Connect with your doctor via video call, get diagnosis, prescriptions, and follow-up care.",
                },
              ].map((step, index) => (
                <div key={index} className="relative">
                  <div className="text-7xl font-bold text-gray-100 absolute -top-6 left-0">{step.step}</div>
                  <div className="relative z-10 pt-8">
                    <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                  {index < 2 && (
                    <div className="hidden md:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
                      <ArrowRight className="h-8 w-8 text-gray-200" />
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Link href="/doctors">
                <Button size="lg">Get Started Now</Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Popular Doctors Section */}
        <section className="py-16 bg-gray-50">
          <div className="container">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-bold">Popular Doctors</h2>
              <Link href="/doctors" className="text-primary flex items-center hover:underline">
                View All <ChevronRight className="h-4 w-4 ml-1" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  name: "Dr. Sarah Johnson",
                  specialty: "Cardiologist",
                  rating: 4.9,
                  reviews: 124,
                  image: "/placeholder.svg?height=300&width=300&text=Dr.J",
                },
                {
                  name: "Dr. Michael Chen",
                  specialty: "Dermatologist",
                  rating: 4.8,
                  reviews: 98,
                  image: "/placeholder.svg?height=300&width=300&text=Dr.C",
                },
                {
                  name: "Dr. Emily Rodriguez",
                  specialty: "Pediatrician",
                  rating: 4.9,
                  reviews: 156,
                  image: "/placeholder.svg?height=300&width=300&text=Dr.R",
                },
                {
                  name: "Dr. James Wilson",
                  specialty: "Neurologist",
                  rating: 4.7,
                  reviews: 87,
                  image: "/placeholder.svg?height=300&width=300&text=Dr.W",
                },
              ].map((doctor, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="relative h-48">
                    <Image src={doctor.image || "/placeholder.svg"} alt={doctor.name} fill className="object-cover" />
                    <button className="absolute top-3 right-3 h-8 w-8 rounded-full bg-white/80 flex items-center justify-center hover:bg-white transition-colors">
                      <Heart className="h-4 w-4 text-gray-600" />
                    </button>
                  </div>
                  <CardContent className="p-5">
                    <h3 className="font-semibold text-lg">{doctor.name}</h3>
                    <p className="text-primary text-sm mb-2">{doctor.specialty}</p>
                    <div className="flex items-center mb-3">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 mr-1" />
                      <span className="text-sm font-medium">{doctor.rating}</span>
                      <span className="text-xs text-muted-foreground ml-1">({doctor.reviews} reviews)</span>
                    </div>
                    <Link href={`/doctor-details`}>
                      <Button variant="outline" className="w-full">
                        View Profile
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">What Our Patients Say</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Real experiences from people who have used our platform
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  quote:
                    "The consultation was so convenient. I got the medical advice I needed without leaving my home. Highly recommend!",
                  name: "Jessica T.",
                  role: "Patient",
                  image: "/placeholder.svg?height=60&width=60&text=JT",
                },
                {
                  quote:
                    "As a busy parent, being able to consult with a pediatrician at 10 PM when my child had a fever was a lifesaver.",
                  name: "Robert M.",
                  role: "Parent",
                  image: "/placeholder.svg?height=60&width=60&text=RM",
                },
                {
                  quote:
                    "The platform is so easy to use. I was connected with a specialist within minutes and got the help I needed.",
                  name: "Sophia L.",
                  role: "Patient",
                  image: "/placeholder.svg?height=60&width=60&text=SL",
                },
              ].map((testimonial, index) => (
                <Card key={index} className="bg-blue-50 border-none">
                  <CardContent className="p-6">
                    <div className="mb-4">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="inline-block h-4 w-4 fill-yellow-400 text-yellow-400 mr-1" />
                      ))}
                    </div>
                    <p className="italic mb-6">"{testimonial.quote}"</p>
                    <div className="flex items-center">
                      <div className="h-12 w-12 rounded-full overflow-hidden mr-4">
                        <Image
                          src={testimonial.image || "/placeholder.svg"}
                          alt={testimonial.name}
                          width={48}
                          height={48}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div>
                        <p className="font-medium">{testimonial.name}</p>
                        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to experience healthcare reimagined?</h2>
            <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8 text-lg">
              Join thousands of patients who have already discovered the convenience of online doctor consultations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/signup">
                <Button size="lg" variant="secondary" className="w-full sm:w-auto">
                  Sign Up Now
                </Button>
              </Link>
              <Link href="/doctors">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/10 w-full sm:w-auto"
                >
                  Find a Doctor
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Stethoscope className="h-6 w-6 text-primary" />
                <span className="text-xl font-bold text-white">MediConnect</span>
              </div>
              <p className="text-gray-400 mb-4">
                Connecting patients with doctors for better healthcare access anytime, anywhere.
              </p>
              <div className="flex space-x-4">{/* Social media icons would go here */}</div>
            </div>

            <div>
              <h3 className="text-white font-medium mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {["Home", "Find Doctors", "Services", "About Us", "Contact"].map((link) => (
                  <li key={link}>
                    <Link
                      href={link === "Home" ? "/" : `/${link.toLowerCase().replace(/\s+/g, "-")}`}
                      className="hover:text-primary"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-white font-medium mb-4">Services</h3>
              <ul className="space-y-2">
                {["Video Consultation", "Chat with Doctor", "Medicine Delivery", "Lab Tests", "Health Packages"].map(
                  (service) => (
                    <li key={service}>
                      <Link
                        href={`/services/${service.toLowerCase().replace(/\s+/g, "-")}`}
                        className="hover:text-primary"
                      >
                        {service}
                      </Link>
                    </li>
                  ),
                )}
              </ul>
            </div>

            <div>
              <h3 className="text-white font-medium mb-4">Contact Us</h3>
              <ul className="space-y-2 text-gray-400">
                <li>1234 Healthcare Blvd, Medical District</li>
                <li>contact@mediconnect.com</li>
                <li>+1 (555) 123-4567</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-500">© {new Date().getFullYear()} MediConnect. All rights reserved.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link href="/terms" className="text-sm text-gray-500 hover:text-gray-300">
                Terms of Service
              </Link>
              <Link href="/privacy" className="text-sm text-gray-500 hover:text-gray-300">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}


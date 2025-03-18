import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, Clock, Mail, MapPin, Phone, Star } from "lucide-react"
import Image from "next/image"

export default function DoctorDetails() {
  return (
    <div className="container mx-auto py-8 px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Doctor Info Card */}
        <Card className="md:col-span-1">
          <CardContent className="pt-6">
            <div className="flex flex-col items-center">
              <div className="relative w-40 h-40 rounded-full overflow-hidden mb-4">
                <Image
                  src="/placeholder.svg?height=160&width=160"
                  alt="Dr. Sarah Johnson"
                  width={160}
                  height={160}
                  className="object-cover"
                  priority
                />
              </div>
              <h1 className="text-2xl font-bold mb-1">Dr. Sarah Johnson</h1>
              <p className="text-muted-foreground mb-2">Cardiologist</p>
              <div className="flex items-center mb-4">
                <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                <span className="ml-2 text-sm text-muted-foreground">(128 reviews)</span>
              </div>
              <div className="w-full space-y-3">
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-muted-foreground mr-2 mt-0.5" />
                  <div>
                    <p className="text-sm">Heartcare Medical Center</p>
                    <p className="text-sm text-muted-foreground">123 Health Street, New York, NY 10001</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-muted-foreground mr-2" />
                  <p className="text-sm">(555) 123-4567</p>
                </div>
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-muted-foreground mr-2" />
                  <p className="text-sm">dr.johnson@heartcare.com</p>
                </div>
                <div className="flex items-center">
                  <Clock className="h-5 w-5 text-muted-foreground mr-2" />
                  <p className="text-sm">Mon-Fri: 9:00 AM - 5:00 PM</p>
                </div>
              </div>
              <Button className="w-full mt-6">Book Appointment</Button>
            </div>
          </CardContent>
        </Card>

        {/* Doctor Details */}
        <div className="md:col-span-2">
          <Tabs defaultValue="about">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="about">About</TabsTrigger>
              <TabsTrigger value="experience">Experience</TabsTrigger>
              <TabsTrigger value="education">Education</TabsTrigger>
              <TabsTrigger value="reviews">Reviews</TabsTrigger>
            </TabsList>
            <TabsContent value="about" className="mt-6">
              <div className="space-y-6">
                <div>
                  <h2 className="text-xl font-semibold mb-3">About Dr. Sarah Johnson</h2>
                  <p className="text-muted-foreground">
                    Dr. Sarah Johnson is a board-certified cardiologist with over 15 years of experience in diagnosing
                    and treating heart conditions. She specializes in preventive cardiology, heart failure management,
                    and cardiac rehabilitation. Dr. Johnson is known for her patient-centered approach, taking time to
                    listen to her patients and developing personalized treatment plans.
                  </p>
                </div>
                <div>
                  <h2 className="text-xl font-semibold mb-3">Specializations</h2>
                  <div className="flex flex-wrap gap-2">
                    <Badge>Preventive Cardiology</Badge>
                    <Badge>Heart Failure Management</Badge>
                    <Badge>Cardiac Rehabilitation</Badge>
                    <Badge>Echocardiography</Badge>
                    <Badge>Coronary Artery Disease</Badge>
                    <Badge>Hypertension Management</Badge>
                  </div>
                </div>
                <div>
                  <h2 className="text-xl font-semibold mb-3">Languages</h2>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">English</Badge>
                    <Badge variant="outline">Spanish</Badge>
                    <Badge variant="outline">French</Badge>
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="experience" className="mt-6">
              <h2 className="text-xl font-semibold mb-4">Work Experience</h2>
              <div className="space-y-6">
                <div className="border-l-2 border-primary pl-4 pb-6">
                  <h3 className="font-medium">Senior Cardiologist</h3>
                  <p className="text-muted-foreground">Heartcare Medical Center</p>
                  <p className="text-sm text-muted-foreground">2015 - Present</p>
                  <p className="mt-2">
                    Leading the cardiology department, managing a team of 5 cardiologists, and specializing in complex
                    cardiac cases.
                  </p>
                </div>
                <div className="border-l-2 border-primary pl-4 pb-6">
                  <h3 className="font-medium">Cardiologist</h3>
                  <p className="text-muted-foreground">New York General Hospital</p>
                  <p className="text-sm text-muted-foreground">2010 - 2015</p>
                  <p className="mt-2">
                    Provided comprehensive cardiac care, performed diagnostic procedures, and participated in clinical
                    research studies.
                  </p>
                </div>
                <div className="border-l-2 border-primary pl-4">
                  <h3 className="font-medium">Cardiology Fellow</h3>
                  <p className="text-muted-foreground">Columbia University Medical Center</p>
                  <p className="text-sm text-muted-foreground">2007 - 2010</p>
                  <p className="mt-2">
                    Completed specialized training in cardiology, participated in research, and provided patient care
                    under supervision.
                  </p>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="education" className="mt-6">
              <h2 className="text-xl font-semibold mb-4">Education & Qualifications</h2>
              <div className="space-y-6">
                <div className="border-l-2 border-primary pl-4 pb-6">
                  <h3 className="font-medium">Cardiology Fellowship</h3>
                  <p className="text-muted-foreground">Columbia University Medical Center</p>
                  <p className="text-sm text-muted-foreground">2007 - 2010</p>
                </div>
                <div className="border-l-2 border-primary pl-4 pb-6">
                  <h3 className="font-medium">Internal Medicine Residency</h3>
                  <p className="text-muted-foreground">Johns Hopkins Hospital</p>
                  <p className="text-sm text-muted-foreground">2004 - 2007</p>
                </div>
                <div className="border-l-2 border-primary pl-4 pb-6">
                  <h3 className="font-medium">Doctor of Medicine (MD)</h3>
                  <p className="text-muted-foreground">Harvard Medical School</p>
                  <p className="text-sm text-muted-foreground">2000 - 2004</p>
                </div>
                <div className="border-l-2 border-primary pl-4">
                  <h3 className="font-medium">Bachelor of Science in Biology</h3>
                  <p className="text-muted-foreground">Stanford University</p>
                  <p className="text-sm text-muted-foreground">1996 - 2000</p>
                </div>
              </div>
              <div className="mt-8">
                <h2 className="text-xl font-semibold mb-4">Certifications</h2>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <div className="h-2 w-2 rounded-full bg-primary mr-2"></div>
                    <p>Board Certified in Cardiovascular Disease</p>
                  </div>
                  <div className="flex items-center">
                    <div className="h-2 w-2 rounded-full bg-primary mr-2"></div>
                    <p>Board Certified in Internal Medicine</p>
                  </div>
                  <div className="flex items-center">
                    <div className="h-2 w-2 rounded-full bg-primary mr-2"></div>
                    <p>Advanced Cardiac Life Support (ACLS)</p>
                  </div>
                  <div className="flex items-center">
                    <div className="h-2 w-2 rounded-full bg-primary mr-2"></div>
                    <p>Fellow of the American College of Cardiology (FACC)</p>
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="reviews" className="mt-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold">Patient Reviews</h2>
                <Button variant="outline" size="sm">
                  Write a Review
                </Button>
              </div>
              <div className="space-y-6">
                {/* Review 1 */}
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex justify-between mb-2">
                      <div className="font-medium">John D.</div>
                      <div className="flex">
                        <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                        <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                        <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                        <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                        <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">Visited for Heart Checkup - March 2023</p>
                    <p>
                      Dr. Johnson is an exceptional cardiologist. She took the time to explain my condition in detail
                      and answered all my questions. Her approach is both professional and compassionate.
                    </p>
                  </CardContent>
                </Card>

                {/* Review 2 */}
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex justify-between mb-2">
                      <div className="font-medium">Maria S.</div>
                      <div className="flex">
                        <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                        <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                        <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                        <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                        <Star className="h-4 w-4 text-yellow-500" />
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">Visited for Hypertension - January 2023</p>
                    <p>
                      I've been seeing Dr. Johnson for my hypertension for over a year now. She's helped me manage my
                      condition with minimal medication through lifestyle changes. Highly recommend!
                    </p>
                  </CardContent>
                </Card>

                {/* Review 3 */}
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex justify-between mb-2">
                      <div className="font-medium">Robert T.</div>
                      <div className="flex">
                        <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                        <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                        <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                        <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                        <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">
                      Visited for Coronary Artery Disease - November 2022
                    </p>
                    <p>
                      After my heart attack, Dr. Johnson has been instrumental in my recovery. Her cardiac
                      rehabilitation program is excellent, and her follow-up care is thorough. I feel like I'm in the
                      best hands possible.
                    </p>
                  </CardContent>
                </Card>

                <div className="flex justify-center mt-8">
                  <Button variant="outline">Load More Reviews</Button>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      {/* Appointment Section */}
      <div className="mt-12">
        <Card>
          <CardContent className="pt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl font-bold mb-4">Book an Appointment</h2>
                <p className="text-muted-foreground mb-6">
                  Schedule a consultation with Dr. Sarah Johnson. Please select your preferred date and time.
                </p>
                <div className="flex items-center mb-4">
                  <Calendar className="h-5 w-5 text-primary mr-2" />
                  <span>Available: Monday to Friday, 9:00 AM - 5:00 PM</span>
                </div>
                <Button className="w-full md:w-auto">Check Availability</Button>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src="/placeholder.svg?height=200&width=300"
                  alt="Heartcare Medical Center"
                  width={300}
                  height={200}
                  className="rounded-lg"
                />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}


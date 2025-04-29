"use client"
import { useEffect, useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, Clock, Mail, MapPin, Phone, Star } from "lucide-react"
import Image from "next/image"
import { useParams } from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast"
const ISSERVER = typeof window === 'undefined';

export default function DoctorDetails() {
  const token = !ISSERVER && localStorage.getItem('user-token');
  const [doctorData, setDoctorData] = useState(null);
  const [userData, setUserData] = useState(null);
  const [slotList, setSlotList] = useState([]);

  const { id } = useParams();

  const fetchDoctorData = () => {

    axios.get('http://localhost:5000/doctor/getbyid/' + id)
      .then((result) => {
        console.log(result.data);
        setDoctorData(result.data);
      }).catch((err) => {
        console.log(err);
      });
  }

  const fetchSlots = () => {

    axios.get('http://localhost:5000/slot/getbydoctor/' + id)
      .then((result) => {
        console.log(result.data);
        setSlotList(result.data);
      }).catch((err) => {
        console.log(err);
      });
  }


  const bookAppointment = (slot_id) => {
    axios.post('http://localhost:5000/appointment/add/', { slot : slot_id },
      {
      headers: {
        'x-auth-token': token
      }
    })
        .then((res) => {
          console.log(res.data);
          toast.success("Appointment booked successfully")
          fetchSlots();

          
        }).catch((err) => {
            console.log(err);
            toast.error("Error booking appointment")
        });
  }

  useEffect(() => {
    fetchDoctorData();
    fetchSlots();
  }, [])

  if (!doctorData) {
    return <h1>Loading...</h1>
  }

  return (
    <div className="mt-30 container mx-auto py-12 px-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Doctor Info Card */}
        <Card className="md:col-span-1 bg-gradient-to-r from-blue-50 to-blue-100 shadow-lg">
          <CardContent className="pt-8 pb-6">
            <div className="flex flex-col items-center">
              <div className="relative w-40 h-40 rounded-full overflow-hidden mb-6 shadow-md">
                <img
                  src={doctorData.image}
                  alt={`Dr. ${doctorData.name}`}
                  width={160}
                  height={160}
                  className="object-cover"
                />
              </div>
              <h1 className="text-2xl font-bold text-gray-800 mb-2">{doctorData.name} {doctorData.lastName}</h1>
              <p className="text-sm text-gray-600 mb-4">{doctorData.specialization}</p>
              <p className="text-sm font-medium text-grey-800 mb-2">{doctorData.degree}</p>
              <div className="flex items-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                ))}
                <span className="ml-2 text-sm text-gray-500">(128 reviews)</span>
              </div>
              <div className="w-full space-y-4">
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-gray-500 mr-3 mt-1" />
                  <div>
                    <p className="text-sm font-medium text-gray-800">{doctorData.clinicName}</p>
                    <p className="text-sm text-gray-600">{doctorData.clinicAddress}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-gray-500 mr-3" />
                  <p className="text-sm text-gray-800">{doctorData.phone}</p>
                </div>
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-gray-500 mr-3" />
                  <p className="text-sm text-gray-800">{doctorData.email}</p>
                </div>
                <div className="flex items-center">
                  <Clock className="h-5 w-5 text-gray-500 mr-3" />
                  <p className="text-sm text-gray-800">{doctorData.timing}</p>
                </div>
              </div>
              
            </div>
          </CardContent>
        </Card>

        {/* Doctor Details */}
        <div className="md:col-span-2">
          <Tabs defaultValue="about">
            <TabsList className="grid w-full grid-cols-4 bg-gray-100 rounded-lg shadow-md">
              <TabsTrigger value="about" className="hover:bg-blue-100">About</TabsTrigger>
              <TabsTrigger value="experience" className="hover:bg-blue-100">Experience</TabsTrigger>
              <TabsTrigger value="education" className="hover:bg-blue-100">Education</TabsTrigger>
              <TabsTrigger value="reviews" className="hover:bg-blue-100">Reviews</TabsTrigger>
            </TabsList>
            <TabsContent value="about" className="mt-8">
              <div className="space-y-6">
                <div>
                  <h2 className="text-xl font-semibold text-gray-800 mb-4">About Dr. {doctorData.name}</h2>
                  <p className="text-gray-600">{doctorData.biography}</p>
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-gray-800 mb-4">Specializations</h2>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-blue-100 text-blue-800">{doctorData.specialization}</Badge>
                  </div>
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-gray-800 mb-4">Languages</h2>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">{doctorData.languages}</Badge>
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="experience" className="mt-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-6">Work Experience</h2>
              <div className="space-y-6">
                {/* Experience Items */}
                <div className="border-l-4 border-blue-500 pl-4">
                  <h3 className="font-medium text-gray-800">Senior {doctorData.specialization}</h3>
                  <p className="text-sm text-gray-600">{doctorData.clinicName}</p>
                  <p className="text-sm text-gray-500">{doctorData.graduationYear} - Present</p>
                  <p className="mt-2 text-gray-600">
                    Leading the {doctorData.specialization} department, managing a team of 5 {doctorData.specialization}, and specializing in complex
                    cases.
                  </p>
                </div>
                {/* Add more experience items as needed */}
              </div>
            </TabsContent>
            <TabsContent value="education" className="mt-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-6">Education & Qualifications</h2>
              <div className="space-y-6">
                {/* Education Items */}
                <div className="border-l-4 border-blue-500 pl-4">
                  <h3 className="font-medium text-gray-800">{doctorData.degree}</h3>
                  <p className="text-sm text-gray-600">{doctorData.medicalSchool}</p>
                  <p className="text-sm text-gray-500">{doctorData.graduationYear}</p>
                </div>
                {/* Add more education items as needed */}
              </div>
            </TabsContent>
            <TabsContent value="reviews" className="mt-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-6">Patient Reviews</h2>
              <div className="space-y-6">
                {/* Review Items */}
                <Card>
                  <CardContent>
                    <div className="flex justify-between mb-2">
                      <div className="font-medium text-gray-800">John D.</div>
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                        ))}
                      </div>
                    </div>
                    <p className="text-sm text-gray-500 mb-2">Visited for Heart Checkup - March 2023</p>
                    <p className="text-gray-600">
                      Dr. {doctorData.name} is an exceptional {doctorData.specialization}. He/She took the time to explain my condition in detail
                      and answered all my questions.
                    </p>
                  </CardContent>
                </Card>
                {/* Add more review items as needed */}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      {/* Appointment Section */}
      <div className="mt-12">
        <Card className="shadow-lg">
          <CardContent className="pt-8 pb-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Book an Appointment</h2>
                <p className="text-gray-600 mb-6">
                  Schedule a consultation with Dr. {doctorData.name}. Please select your preferred date and time.
                </p>
                {slotList.map((slot) => (
                  <div key={slot._id} className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <Calendar className="h-5 w-5 text-blue-500 mr-2" />
                      <span className="text-sm text-gray-800">
                        {new Date(slot.date).toLocaleDateString()}, {slot.time}
                      </span>
                    </div>
                    <Button
                      onClick={() => bookAppointment(slot._id)}
                      className="bg-green-500 hover:bg-green-600 text-white text-sm"
                    >
                      Book Now
                    </Button>
                  </div>
                ))}
              </div>
              
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}


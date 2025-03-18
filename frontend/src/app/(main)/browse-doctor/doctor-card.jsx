import { Star } from "lucide-react"
import Image from "next/image"
import Link from "next/link"


export default function DoctorCard({ doctor }) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="relative h-48 bg-gray-200">
        <Image src={doctor.image || "/placeholder.svg"} alt={doctor.name} fill className="object-cover" />
      </div>
      <div className="p-5">
        <h3 className="font-bold text-lg text-gray-900">{doctor.name}</h3>
        <p className="text-blue-600 mb-2">{doctor.specialty}</p>

        <div className="flex items-center mb-3">
          <Star className="h-5 w-5 text-yellow-400 fill-current" />
          <span className="ml-1 text-gray-700 font-medium">4.5</span>
          <span className="ml-1 text-gray-500">(465 reviews)</span>
        </div>

        <div className="mb-4">
          {/* <span
            className={`inline-block px-2 py-1 text-xs font-semibold rounded-full ${
              doctor.availability.includes("Today") ? "bg-green-100 text-green-800" : "bg-blue-100 text-blue-800"
            }`}
          >
            {doctor.availability}
          </span> */}
        </div>

        <Link href={`/view-doctor/${doctor._id}`}
         className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md transition-colors duration-300">
          Book Appointment
        </Link>
      </div>
    </div>
  )
}


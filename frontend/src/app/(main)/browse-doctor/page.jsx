"use client"

import { useState, useEffect } from "react"
import { Search } from "lucide-react"
import DoctorCard from "./doctor-card"
import CategoryFilter from "./category-filter"
import axios from "axios"

// Sample doctor data
const doctorsData = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    specialty: "Cardiologist",
    rating: 4.8,
    reviews: 124,
    availability: "Available Today",
    image: "/placeholder.svg?height=300&width=300",
    category: "cardiology",
  },
  {
    id: 2,
    name: "Dr. Michael Chen",
    specialty: "Dermatologist",
    rating: 4.7,
    reviews: 98,
    availability: "Next Available: Tomorrow",
    image: "/placeholder.svg?height=300&width=300",
    category: "dermatology",
  },
  {
    id: 3,
    name: "Dr. Emily Rodriguez",
    specialty: "Pediatrician",
    rating: 4.9,
    reviews: 156,
    availability: "Available Today",
    image: "/placeholder.svg?height=300&width=300",
    category: "pediatrics",
  },
  {
    id: 4,
    name: "Dr. James Wilson",
    specialty: "Orthopedic Surgeon",
    rating: 4.6,
    reviews: 87,
    availability: "Next Available: Friday",
    image: "/placeholder.svg?height=300&width=300",
    category: "orthopedics",
  },
  {
    id: 5,
    name: "Dr. Lisa Thompson",
    specialty: "Neurologist",
    rating: 4.8,
    reviews: 112,
    availability: "Available Today",
    image: "/placeholder.svg?height=300&width=300",
    category: "neurology",
  },
  {
    id: 6,
    name: "Dr. Robert Davis",
    specialty: "Family Medicine",
    rating: 4.5,
    reviews: 78,
    availability: "Next Available: Tomorrow",
    image: "/placeholder.svg?height=300&width=300",
    category: "family-medicine",
  },
  {
    id: 7,
    name: "Dr. Jennifer Lee",
    specialty: "Psychiatrist",
    rating: 4.7,
    reviews: 92,
    availability: "Next Available: Thursday",
    image: "/placeholder.svg?height=300&width=300",
    category: "psychiatry",
  },
  {
    id: 8,
    name: "Dr. David Martinez",
    specialty: "Ophthalmologist",
    rating: 4.6,
    reviews: 84,
    availability: "Available Today",
    image: "/placeholder.svg?height=300&width=300",
    category: "ophthalmology",
  },
]

// Categories for filtering
const categories = [
  { id: "all", name: "All Specialties" },
  { id: "cardiology", name: "Cardiology" },
  { id: "dermatology", name: "Dermatology" },
  { id: "pediatrics", name: "Pediatrics" },
  { id: "orthopedics", name: "Orthopedics" },
  { id: "neurology", name: "Neurology" },
  { id: "family-medicine", name: "Family Medicine" },
  { id: "psychiatry", name: "Psychiatry" },
  { id: "ophthalmology", name: "Ophthalmology" },
]

export default function DoctorsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [filteredDoctors, setFilteredDoctors] = useState([]);
  const [doctorsData, setDoctorsData] = useState([]);

  const fetchdoctorData = () => {
    axios.get('http://localhost:5000/doctor/getall')
        .then((res) => {
            console.log(res.data);
            setDoctorsData(res.data);
            // setFilteredDoctors(res.data);
        }).catch((err) => {
            console.log(err);
        });
}

useEffect(() => {
    fetchdoctorData();
}, []);



  // Filter doctors based on search query and selected category
  useEffect(() => {
    let results = doctorsData

    // Filter by category
    if (selectedCategory !== "all") {
      results = results.filter((doctor) => doctor.category === selectedCategory)
    }

    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      results = results.filter(
        (doctor) => doctor.name.toLowerCase().includes(query) || doctor.specialty.toLowerCase().includes(query),
      )
    }

    setFilteredDoctors(results)
  }, [searchQuery, selectedCategory])

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero section with search */}
      <div className="bg-gradient-to-r from-blue-500 to-cyan-500 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-white text-center mb-6">Find and Book the Best Doctors</h1>
          <p className="text-white text-center text-lg mb-8 max-w-3xl mx-auto">
            Search from our network of qualified healthcare professionals and book your appointment today
          </p>

          {/* Search bar */}
          <div className="max-w-2xl mx-auto relative">
            <div className="flex items-center bg-white rounded-lg overflow-hidden shadow-md">
              <div className="pl-4">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search by doctor name or specialty..."
                className="w-full py-4 px-3 text-gray-700 focus:outline-none"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Categories */}
        <CategoryFilter
          categories={categories}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />

        {/* Results count */}
        <div className="mt-6 mb-4">
          <p className="text-gray-600">
            {filteredDoctors.length} {filteredDoctors.length === 1 ? "doctor" : "doctors"} available
          </p>
        </div>

        {/* Doctors grid */}
        {doctorsData.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {doctorsData.map((doctor) => (
              <DoctorCard key={doctor._id} doctor={doctor} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <h3 className="text-lg font-medium text-gray-900">No doctors found</h3>
            <p className="mt-2 text-gray-500">Try adjusting your search or filter criteria</p>
          </div>
        )}
      </div>
    </div>
  )
}


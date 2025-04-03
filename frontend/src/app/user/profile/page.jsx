"use client"
import axios from "axios";
import { Formik } from "formik";
import { Router } from "lucide-react";
import { useEffect, useState } from "react"
import toast from "react-hot-toast";
const ISSERVER = typeof window === 'undefined';

export default function PatientProfile() {

  const token = !ISSERVER && localStorage.getItem('user-token');
  const [userData, setUserData] = useState(null);

  const fetchUserData = async () => {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/user/getuser`, {
      headers: {
        'x-auth-token': token
      }
    });

    console.log(res.data);
    setUserData(res.data);
  }

  useEffect(() => {
    fetchUserData();
  }, [])

  function handleFormSubmit(value, { setSubmitting, resetForm }) {
    axios.put(`${process.env.NEXT_PUBLIC_API_URL}/user/update/${userData._id}`, value)
      .then((result) => {
        toast.success('Profile updated successfully');
        console.log(result.data);
        
        resetForm();
        Router.push('/user-login');
      }).catch((err) => {
        setSubmitting(false);
        toast.error('something went wrong');
      });

    // toast.success("Profile Updated");
  }


  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    dateOfBirth: "",
    gender: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    height: "",
    weight: "",
    allergies: "",
    medications: "",
    emergencyContactName: "",
    emergencyContactPhone: "",
    emergencyContactRelation: ""
  })



  return (

    <div>
      <>{
        userData == null ? (
          <p>Loading ... </p>
        ) : (
          <Formik initialValues={userData} onSubmit={handleFormSubmit}>
            {
              (form) => (
                <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
                  <div className="max-w-3xl mx-auto">
                    <div className="text-center mb-8">
                      <h1 className="text-3xl font-bold text-gray-900">Patient Profile</h1>
                      <p className="mt-2 text-gray-600">
                        Please fill in your personal and medical information
                      </p>
                    </div>

                    <form
                      onSubmit={form.handleSubmit}
                      className="bg-white shadow-md rounded-lg p-6 space-y-8"
                    >
                      {/* Personal Information Section */}
                      <div>
                        <h2 className="text-xl font-semibold text-gray-800 border-b pb-2">
                          Personal Information
                        </h2>
                        <div className="mt-4 grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-4">
                          <div>
                            <label
                              htmlFor="firstName"
                              className="block text-sm font-medium text-gray-700"
                            >
                              First Name <span className="text-red-500">*</span>
                            </label>
                            <input
                              type="text"
                              id="firstName"
                              name="firstName"
                              required
                              onChange={form.handleChange}
                              value={form.values.name}
                              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm h-10 px-3 py-2 border"
                            />
                          </div>

                          <div>
                            <label
                              htmlFor="lastName"
                              className="block text-sm font-medium text-gray-700"
                            >
                              Last Name <span className="text-red-500">*</span>
                            </label>
                            <input
                              type="text"
                              id="lastName"
                              name="lastName"
                              required
                              value={form.values.lastName}
                              onChange={form.handleChange}
                              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm h-10 px-3 py-2 border"
                            />
                          </div>

                          <div>
                            <label
                              htmlFor="email"
                              className="block text-sm font-medium text-gray-700"
                            >
                              Email <span className="text-red-500">*</span>
                            </label>
                            <input
                              type="email"
                              id="email"
                              name="email"
                              required
                              onChange={form.handleChange}
                              value={form.values.email}
                              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm h-10 px-3 py-2 border"
                            />
                          </div>

                          <div>
                            <label
                              htmlFor="phone"
                              className="block text-sm font-medium text-gray-700"
                            >
                              Phone Number <span className="text-red-500">*</span>
                            </label>
                            <input
                              type="tel"
                              id="phone"
                              name="phone"
                              required
                              value={form.values.phone}
                              onChange={form.handleChange}
                              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm h-10 px-3 py-2 border"
                            />
                          </div>

                          <div>
                            <label
                              htmlFor="dateOfBirth"
                              className="block text-sm font-medium text-gray-700"
                            >
                              Date of Birth <span className="text-red-500">*</span>
                            </label>
                            <input
                              type="Date"
                              id="dateOfBirth"
                              name="dateOfBirth"
                              required
                              value={form.values.dateOfBirth}
                              onChange={form.handleChange}
                              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm h-10 px-3 py-2 border"
                            />
                          </div>

                          <div>
                            <label
                              htmlFor="gender"
                              className="block text-sm font-medium text-gray-700"
                            >
                              Gender
                            </label>
                            <select
                              id="gender"
                              name="gender"
                              value={form.values.gender}
                              onChange={form.handleChange}
                              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm h-10 px-3 py-2 border"
                            >
                              <option value="">Select Gender</option>
                              <option value="male">Male</option>
                              <option value="female">Female</option>
                              <option value="other">Other</option>
                              <option value="prefer-not-to-say">Prefer not to say</option>
                            </select>
                          </div>
                        </div>

                        <div className="mt-4">
                          <label
                            htmlFor="address"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Address
                          </label>
                          <input
                            type="text"
                            id="address"
                            name="address"
                            value={form.values.address}
                            onChange={form.handleChange}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm h-10 px-3 py-2 border"
                          />
                        </div>

                        <div className="mt-4 grid grid-cols-1 gap-y-4 sm:grid-cols-3 sm:gap-x-4">
                          <div>
                            <label
                              htmlFor="city"
                              className="block text-sm font-medium text-gray-700"
                            >
                              City
                            </label>
                            <input
                              type="text"
                              id="city"
                              name="city"
                              value={form.values.city}
                              onChange={form.handleChange}
                              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm h-10 px-3 py-2 border"
                            />
                          </div>

                          <div>
                            <label
                              htmlFor="state"
                              className="block text-sm font-medium text-gray-700"
                            >
                              State
                            </label>
                            <input
                              type="text"
                              id="state"
                              name="state"
                              value={form.values.state}
                              onChange={form.handleChange}
                              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm h-10 px-3 py-2 border"
                            />
                          </div>

                          <div>
                            <label
                              htmlFor="zipCode"
                              className="block text-sm font-medium text-gray-700"
                            >
                              ZIP Code
                            </label>
                            <input
                              type="text"
                              id="zipCode"
                              name="zipCode"
                              value={form.values.zipCode}
                              onChange={form.handleChange}
                              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm h-10 px-3 py-2 border"
                            />
                          </div>
                        </div>
                      </div>

                      {/* Medical Information Section */}
                      <div>
                        <h2 className="text-xl font-semibold text-gray-800 border-b pb-2">
                          Medical Information
                        </h2>
                        <div className="mt-4 grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-4">
                          <div>
                            <label
                              htmlFor="height"
                              className="block text-sm font-medium text-gray-700"
                            >
                              Height (cm)
                            </label>
                            <input
                              type="number"
                              id="height"
                              name="height"
                              value={form.values.height}
                              onChange={form.handleChange}
                              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm h-10 px-3 py-2 border"
                            />
                          </div>

                          <div>
                            <label
                              htmlFor="weight"
                              className="block text-sm font-medium text-gray-700"
                            >
                              Weight (kg)
                            </label>
                            <input
                              type="number"
                              id="weight"
                              name="weight"
                              value={form.values.weight}
                              onChange={form.handleChange}
                              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm h-10 px-3 py-2 border"
                            />
                          </div>
                        </div>

                        <div className="mt-4">
                          <label
                            htmlFor="allergies"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Allergies
                          </label>
                          <textarea
                            id="allergies"
                            name="allergies"
                            rows={3}
                            value={form.values.allergies}
                            onChange={form.handleChange}
                            placeholder="List any allergies you have"
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm px-3 py-2 border"
                          />
                        </div>

                        <div className="mt-4">
                          <label
                            htmlFor="medications"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Current Medications
                          </label>
                          <textarea
                            id="medications"
                            name="medications"
                            rows={3}
                            value={form.values.medications}
                            onChange={form.handleChange}
                            placeholder="List any medications you are currently taking"
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm px-3 py-2 border"
                          />
                        </div>
                      </div>

                      {/* Emergency Contact Section */}
                      <div>
                        <h2 className="text-xl font-semibold text-gray-800 border-b pb-2">
                          Emergency Contact
                        </h2>
                        <div className="mt-4 grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-4">
                          <div>
                            <label
                              htmlFor="emergencyContactName"
                              className="block text-sm font-medium text-gray-700"
                            >
                              Contact Name <span className="text-red-500">*</span>
                            </label>
                            <input
                              type="text"
                              id="emergencyContactName"
                              name="emergencyContactName"
                              required
                              value={form.values.emergencyContactName}
                              onChange={form.handleChange}
                              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm h-10 px-3 py-2 border"
                            />
                          </div>

                          <div>
                            <label
                              htmlFor="emergencyContactPhone"
                              className="block text-sm font-medium text-gray-700"
                            >
                              Contact Phone <span className="text-red-500">*</span>
                            </label>
                            <input
                              type="tel"
                              id="emergencyContactPhone"
                              name="emergencyContactPhone"
                              required
                              value={form.values.emergencyContactPhone}
                              onChange={form.handleChange}
                              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm h-10 px-3 py-2 border"
                            />
                          </div>

                          <div>
                            <label
                              htmlFor="emergencyContactRelation"
                              className="block text-sm font-medium text-gray-700"
                            >
                              Relationship <span className="text-red-500">*</span>
                            </label>
                            <input
                              type="text"
                              id="emergencyContactRelation"
                              name="emergencyContactRelation"
                              required
                              value={form.values.emergencyContactRelation}
                              onChange={form.handleChange}
                              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm h-10 px-3 py-2 border"
                            />
                          </div>
                        </div>
                      </div>

                      {/* Submit Button */}
                      <div className="flex justify-end">
                        <button
                          type="submit"
                          className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                        >
                          Save Profile
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              )
            }
          </Formik>
        )
      }
      </>
    </div>
  )
}

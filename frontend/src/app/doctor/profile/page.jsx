"use client"
import axios from "axios";
import { Formik } from "formik";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react"
import toast from "react-hot-toast";
const ISSERVER = typeof window === 'undefined';

export default function DoctorProfile() {

  const token = !ISSERVER && localStorage.getItem('doctor-token');
  const [doctorData, setDoctorData] = useState(null);
  const [preview, setPreview] = useState('');
  const [imageurl, setImageurl] = useState('');
  const router = useRouter();

  const fetchDoctorData = async () => {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/doctor/getdoctor`, {
      headers: {
        'x-auth-token': token
      }
    });

    console.log(res.data);
    setDoctorData(res.data);
    setImageurl(res.data.image); // Set the image URL from the fetched data
    setPreview(res.data.image);
  }

  useEffect(() => {
    fetchDoctorData();
  }, [])

  const upload = async (e) => {
    const file = e.target.files[0];
    if (!file) {
      toast.error('No file selected');
      return;
    }

    const fd = new FormData();
    fd.append('file', file);
    fd.append('upload_preset', 'e_doctor'); // Replace with your actual upload preset
    fd.append('cloud_name', 'animeshrajput'); // Replace with your actual Cloudinary cloud name

    try {
      const result = await axios.post('https://api.cloudinary.com/v1_1/animeshrajput/image/upload', fd);
      toast.success('File uploaded successfully');
      console.log(result.data);
      setImageurl(result.data.secure_url); // Use `secure_url` for HTTPS links
      setPreview(result.data.secure_url);
      axios.put(`${process.env.NEXT_PUBLIC_API_URL}/doctor/update/${doctorData._id}`, {image : result.data.url})
      .then((result) => {
        toast.success('Profile updated successfully');
        console.log(result.data);
        fetchDoctorData();
      }).catch((err) => {
        console.log(err);
        toast.error('something went wrong');
      });
    } catch (err) {
      console.error(err);
      toast.error('Failed to upload file');
    }
  }

  function handleFormSubmit(value, { setSubmitting, resetForm }) {
    axios.put(`${process.env.NEXT_PUBLIC_API_URL}/doctor/update/${doctorData._id}`, value)
      .then((result) => {
        toast.success('Profile updated successfully');
        console.log(result.data);

        resetForm();
        router.push('/doctor-login');
      }).catch((err) => {
        setSubmitting(false);
        toast.error('something went wrong');
      });

    // toast.success("Profile Updated");
  }

  const [formData, setFormData] = useState({
    // Personal Information
    image: "",
    name: "",
    lastName: "",
    email: "",
    phone: "",
    dateOfBirth: "",
    gender: "",

    // Professional Information
    specialization: "",
    licenseNumber: "",
    yearsOfExperience: "",
    medicalSchool: "",
    graduationYear: "",
    residency: "",
    fellowship: "",
    languages: "",

    // Practice Details
    clinicName: "",
    timing: "",
    clinicAddress: "",
    city: "",
    state: "",
    zipCode: "",
    officePhone: "",
    // Professional Biography
    biography: ""
  });


  return (
    <div>
      <>{
        doctorData == null ? (
          <p>loading page...</p>
        ) : (
          <Formik initialValues={doctorData} onSubmit={handleFormSubmit}>
            {
              (form) => (
                <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
                  <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-8">
                      <h1 className="text-3xl font-bold text-gray-900">Doctor Profile</h1>
                      <p className="mt-2 text-gray-600">
                        Please complete your professional profile information
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
                        <div className="mb-4 sm:mb-8 flex gap-4 items-center">

                          <label className="block text-sm font-medium text-gray-700" htmlFor="upload">
                          Click to upload an image
                          <input type="file" id="upload" onChange={upload} hidden />
                          </label>
                          <input 
                            type="text" 
                            id="image"
                            name="image"
                            
                            value={imageurl}
                            onChange={form.handleChange}
                            className="mt-1 block w-1/2 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm h-10 px-3 py-2 border"
                          />

                        {preview && (
                          <img
                            className="h-20 w-20 rounded-full object-cover border border-gray-300"
                            src={preview}
                            alt="Doctor Profile"
                          />
                        )}
                        </div>
                        <div className="mt-4 grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-4">
                          
                          <div>
                            <label
                              htmlFor="name"
                              className="block text-sm font-medium text-gray-700"
                            >
                              First Name <span className="text-red-500">*</span>
                            </label>
                            <input
                              type="text"
                              id="name"
                              name="name"
                              required
                              value={form.values.name}
                              onChange={form.handleChange}
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
                              value={form.values.email}
                              onChange={form.handleChange}
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
                              Date of Birth
                            </label>
                            <input
                              type="date"
                              id="dateOfBirth"
                              name="dateOfBirth"
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

                      </div>

                      {/* Professional Information Section */}
                      <div>
                        <h2 className="text-xl font-semibold text-gray-800 border-b pb-2">
                          Professional Information
                        </h2>
                        <div className="mt-4 grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-4">
                          <div>
                            <label
                              htmlFor="specialization"
                              className="block text-sm font-medium text-gray-700"
                            >
                              Specialization <span className="text-red-500">*</span>
                            </label>
                            <input
                              type="text"
                              id="specialization"
                              name="specialization"
                              required
                              value={form.values.specialization}
                              onChange={form.handleChange}
                              placeholder="e.g., Cardiology, Pediatrics"
                              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm h-10 px-3 py-2 border"
                            />
                          </div>

                          <div>
                            <label
                              htmlFor="licenseNumber"
                              className="block text-sm font-medium text-gray-700"
                            >
                              License Number <span className="text-red-500">*</span>
                            </label>
                            <input
                              type="text"
                              id="licenseNumber"
                              name="licenseNumber"
                              required
                              value={form.values.licenseNumber}
                              onChange={form.handleChange}
                              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm h-10 px-3 py-2 border"
                            />
                          </div>

                          <div>
                            <label
                              htmlFor="yearsOfExperience"
                              className="block text-sm font-medium text-gray-700"
                            >
                              Years of Experience
                            </label>
                            <input
                              type="number"
                              id="yearsOfExperience"
                              name="yearsOfExperience"
                              value={form.values.yearsOfExperience}
                              onChange={form.handleChange}
                              min="0"
                              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm h-10 px-3 py-2 border"
                            />
                          </div>

                          <div>
                            <label
                              htmlFor="medicalSchool"
                              className="block text-sm font-medium text-gray-700"
                            >
                              Medical School <span className="text-red-500">*</span>
                            </label>
                            <input
                              type="text"
                              id="medicalSchool"
                              name="medicalSchool"
                              required
                              value={form.values.medicalSchool}
                              onChange={form.handleChange}
                              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm h-10 px-3 py-2 border"
                            />
                          </div>

                          <div>
                            <label
                              htmlFor="graduationYear"
                              className="block text-sm font-medium text-gray-700"
                            >
                              Graduation Year
                            </label>
                            <input
                              type="number"
                              id="graduationYear"
                              name="graduationYear"
                              value={form.values.graduationYear}
                              onChange={form.handleChange}
                              min="1950"
                              max={new Date().getFullYear()}
                              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm h-10 px-3 py-2 border"
                            />
                          </div>

                          <div>
                            <label
                              htmlFor="residency"
                              className="block text-sm font-medium text-gray-700"
                            >
                              Residency
                            </label>
                            <input
                              type="text"
                              id="residency"
                              name="residency"
                              value={form.values.residency}
                              onChange={form.handleChange}
                              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm h-10 px-3 py-2 border"
                            />
                          </div>

                          <div>
                            <label
                              htmlFor="fellowship"
                              className="block text-sm font-medium text-gray-700"
                            >
                              Fellowship
                            </label>
                            <input
                              type="text"
                              id="fellowship"
                              name="fellowship"
                              value={form.values.fellowship}
                              onChange={form.handleChange}
                              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm h-10 px-3 py-2 border"
                            />
                          </div>

                          <div>
                            <label
                              htmlFor="languages"
                              className="block text-sm font-medium text-gray-700"
                            >
                              Languages Spoken
                            </label>
                            <input
                              type="text"
                              id="languages"
                              name="languages"
                              value={form.values.languages}
                              onChange={form.handleChange}
                              placeholder="e.g., English, Spanish, French"
                              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm h-10 px-3 py-2 border"
                            />
                          </div>
                        </div>
                      </div>

                      {/* Practice Details Section */}
                      <div>
                        <h2 className="text-xl font-semibold text-gray-800 border-b pb-2">
                          Practice Details
                        </h2>
                        <div className="mt-4 grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-4">
                          <div>
                            <label
                              htmlFor="clinicName"
                              className="block text-sm font-medium text-gray-700"
                            >
                              Clinic/Hospital Name <span className="text-red-500">*</span>
                            </label>
                            <input
                              type="text"
                              id="clinicName"
                              name="clinicName"
                              required
                              value={form.values.clinicName}
                              onChange={form.handleChange}
                              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm h-10 px-3 py-2 border"
                            />
                          </div>

                          <div>
                            <label
                              htmlFor="timing"
                              className="block text-sm font-medium text-gray-700"
                            >
                              Timing <span className="text-red-500">*</span>
                            </label>
                            <input
                              type="string"
                              id="timing"
                              name="timing"
                              required
                              value={form.values.timing}
                              onChange={form.handleChange}
                              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm h-10 px-3 py-2 border"
                            />
                          </div>

                          <div>
                            <label
                              htmlFor="officePhone"
                              className="block text-sm font-medium text-gray-700"
                            >
                              Office Phone <span className="text-red-500">*</span>
                            </label>
                            <input
                              type="tel"
                              id="officePhone"
                              name="officePhone"
                              required
                              value={form.values.officePhone}
                              onChange={form.handleChange}
                              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm h-10 px-3 py-2 border"
                            />
                          </div>
                        </div>

                        <div className="mt-4">
                          <label
                            htmlFor="clinicAddress"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Clinic Address <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            id="clinicAddress"
                            name="clinicAddress"
                            required
                            value={form.values.clinicAddress}
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
                              City <span className="text-red-500">*</span>
                            </label>
                            <input
                              type="text"
                              id="city"
                              name="city"
                              required
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
                              State <span className="text-red-500">*</span>
                            </label>
                            <input
                              type="text"
                              id="state"
                              name="state"
                              required
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
                              ZIP Code <span className="text-red-500">*</span>
                            </label>
                            <input
                              type="text"
                              id="zipCode"
                              name="zipCode"
                              required
                              value={form.values.zipCode}
                              onChange={form.handleChange}
                              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm h-10 px-3 py-2 border"
                            />
                          </div>
                        </div>
                      </div>

                      {/* Professional Biography Section */}
                      <div>
                        <h2 className="text-xl font-semibold text-gray-800 border-b pb-2">
                          Professional Biography
                        </h2>
                        <div className="mt-4">
                          <label
                            htmlFor="biography"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Biography <span className="text-red-500">*</span>
                          </label>
                          <textarea
                            id="biography"
                            name="biography"
                            rows={6}
                            required
                            value={form.values.biography}
                            onChange={form.handleChange}
                            placeholder="Write a professional summary about your background, expertise, and approach to patient care..."
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm px-3 py-2 border"
                          />
                        </div>
                      </div>

                      {/* Submit Button */}
                      <div className="flex justify-end">
                        <button
                          type="submit"
                          className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                        >
                          Save Doctor Profile
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

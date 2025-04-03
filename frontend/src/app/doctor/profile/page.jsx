'use client';
import axios from 'axios';
import { Formik } from 'formik';
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';

const ProfilePage = () => {

  const token = localStorage.getItem('doctor-token');
  const [doctorData, setDoctorData] = useState(null);
  const [preview, setPreview] = useState('');



  const fetchDoctorData = async () => {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/doctor/getdoctor`, {
      headers: {
        'x-auth-token': token
      }
    });

    console.log(res.data);
    setDoctorData(res.data);
  }

  useEffect(() => {
    fetchDoctorData();
  }, [])

  const upload = (e) => {

    const file = e.target.files[0];
    const fd = new FormData();
    fd.append('file', file);
    fd.append('upload_preset', 'e_doctor')
    fd.append('cloud_name', 'animeshrajput')

    axios.post('https://api.cloudinary.com/v1_1/animeshrajput/image/upload', fd)
        .then((result) => {
            toast.success('file upload successfully');
            console.log(result.data);
            setPreview(result.data.url);
            // productForm.setFieldValue('image', result.data.url);
        }).catch((err) => {
            console.log(err);
            toast.error('failed to upload file');

        });
}

 

  function handleFormSubmit(data) {
    axios.put(`${process.env.NEXT_PUBLIC_API_URL}/doctor/getdoctor`, value)
      .then((result) => {
        toast.success('user registered successfully');
        resetForm();
        router.push('/user-login');
      }).catch((err) => {
        toast.error('something went wrong');
        setSubmitting(false);
      });

    toast.success("Profile Updated");
  }

  return (
    <div>
      <>
        {
          doctorData == null ? (
            <p>Loading ... </p>
          ) : (
            <Formik initialValues={doctorData} onSubmit={handleFormSubmit}>
              {
                (form) => (
                  <div className="mx-auto max-w-6xl">
                    <div className="text-center">
                      <h2 className="text-xl text-gray-800 font-bold sm:text-3xl dark:text-white">
                        Doctor Profile
                      </h2>
                    </div>
                    {/* Card */}
                    <div className="w-full mt-5 p-4 relative z-10  bg-white border border-sky-500 rounded-md  sm:mt-10 md:p-10 dark:bg-neutral-900 dark:border-neutral-700">
                      <form onSubmit={form.handleSubmit}>

                        <div className="mb-4 sm:mb-8">
                          <label className='block rounded-lg  border-2 border-dashed p-5 mt-5 cursor-pointer w-1/2 text-blue-500' htmlFor="upload">click here to upload file</label>
                          <input id='upload' type="file" onChange={upload} hidden />
                          {
                            preview && (
                              <img className='h-45' src={preview} alt="" />
                            )
                          }
                        </div>


                        <div className="mb-4 sm:mb-8">
                          <label
                            htmlFor="hs-feedback-post-comment-name-1"
                            className="block mb-2 text-sm font-medium dark:text-white"
                          >
                            Full name
                          </label>
                          <input
                            type="text"
                            id="name"
                            onChange={form.handleChange}
                            value={form.values.name}
                            className="border-2 py-2.5 sm:py-3 px-4 block w-full border-gray-200 rounded-lg sm:text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                            placeholder="Full name"
                          />
                        </div>
                        <div className="mb-4 sm:mb-8">
                          <label
                            htmlFor="hs-feedback-post-comment-name-1"
                            className="block mb-2 text-sm font-medium dark:text-white"
                          >
                            Specializations
                          </label>
                          <input
                            type="text"
                            id="specialities"
                            onChange={form.handleChange}
                            value={form.values.specialties}
                            className="border-2 py-2.5 sm:py-3 px-4 block w-full border-gray-200 rounded-lg sm:text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                            placeholder="Specializations"
                          />
                        </div>
                        <div className="mb-4 sm:mb-8">
                          <label
                            htmlFor="hs-feedback-post-comment-name-1"
                            className="block mb-2 text-sm font-medium dark:text-white"
                          >
                            Languages
                          </label>
                          <input
                            type="text"
                            id="hs-feedback-post-comment-name-1"
                            className="border-2 py-2.5 sm:py-3 px-4 block w-full border-gray-200 rounded-lg sm:text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                            placeholder="Languages"
                          />
                        </div>
                        <div className="mb-4 sm:mb-8">
                          <label
                            htmlFor="hs-feedback-post-comment-name-1"
                            className="block mb-2 text-sm font-medium dark:text-white"
                          >
                            Location
                          </label>
                          <input
                            type="text"
                            id="location"
                            onChange={form.handleChange}
                            value={form.values.location}
                            className="border-2 py-2.5 sm:py-3 px-4 block w-full border-gray-200 rounded-lg sm:text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                            placeholder="Location"
                          />
                        </div>
                        <div className="mb-4 sm:mb-8">
                          <label
                            htmlFor="hs-feedback-post-comment-name-1"
                            className="block mb-2 text-sm font-medium dark:text-white"
                          >
                            About
                          </label>
                          <input
                            type="text"
                            id="about"
                            onChange={form.handleChange}
                            value={form.values.about}
                            className="border-2 py-2.5 sm:py-3 px-4 block w-full border-gray-200 rounded-lg sm:text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                            placeholder="About"
                          />
                        </div>
                        <div className="mb-4 sm:mb-8">
                          <label
                            htmlFor="hs-feedback-post-comment-name-1"
                            className="block mb-2 text-sm font-medium dark:text-white"
                          >
                            Degree/Certification
                          </label>
                          <input
                            type="text"
                            id="hs-feedback-post-comment-name-1"
                            className="border-2 py-2.5 sm:py-3 px-4 block w-full border-gray-200 rounded-lg sm:text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                            placeholder="Degree"
                          />
                        </div>
                        <div className="mb-4 sm:mb-8">
                          <label
                            htmlFor="hs-feedback-post-comment-name-1"
                            className="block mb-2 text-sm font-medium dark:text-white"
                          >
                            Institute Name
                          </label>
                          <input
                            type="text"
                            id="hs-feedback-post-comment-name-1"
                            className="border-2 py-2.5 sm:py-3 px-4 block w-full border-gray-200 rounded-lg sm:text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                            placeholder="Institute name"
                          />
                        </div>
                        <div className="mb-4 sm:mb-8">
                          <label
                            htmlFor="hs-feedback-post-comment-name-1"
                            className="block mb-2 text-sm font-medium dark:text-white"
                          >
                            Year
                          </label>
                          <input
                            type="text"
                            id="hs-feedback-post-comment-name-1"
                            className="border-2 py-2.5 sm:py-3 px-4 block w-full border-gray-200 rounded-lg sm:text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                            placeholder="Year"
                          />
                        </div>

                        <div className="mx-auto max-w-full bg-white border border-dashed border-indigo-500 rounded-sm sm:mt-10 md:p-10 dark:bg-neutral-900 dark:border-neutral-700">
                          <div className="text-center">
                            <h2 className="text-xl text-gray-800 font-bold sm:text-2xl dark:text-white">
                              Work Experience
                            </h2>
                          </div>
                          <div className="mb-4 sm:mb-8">
                            <label
                              htmlFor="hs-feedback-post-comment-name-1"
                              className="block mb-2 text-sm font-medium dark:text-white"
                            >
                              Position
                            </label>
                            <input
                              type="text"
                              id="hs-feedback-post-comment-name-1"
                              className="border-2 py-2.5 sm:py-3 px-4 block w-full border-gray-200 rounded-lg sm:text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                              placeholder="Position"
                            />
                          </div>
                          <div className="mb-4 sm:mb-8">
                            <label
                              htmlFor="hs-feedback-post-comment-name-1"
                              className="block mb-2 text-sm font-medium dark:text-white"
                            >
                              Hospital
                            </label>
                            <input
                              type="text"
                              id="hs-feedback-post-comment-name-1"
                              className="border-2 py-2.5 sm:py-3 px-4 block w-full border-gray-200 rounded-lg sm:text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                              placeholder="Hospital"
                            />
                          </div>
                          <div className="mb-4 sm:mb-8">
                            <label
                              htmlFor="hs-feedback-post-comment-email-1"
                              className="block mb-2 text-sm font-medium dark:text-white"
                            >
                              Description
                            </label>
                            <input
                              type="email"
                              id="hs-feedback-post-comment-email-1"
                              className="border-2 py-2.5 sm:py-3 px-4 block w-full border-gray-200 rounded-lg sm:text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                              placeholder="Description"
                            />
                          </div>
                        </div>

                        <div className="mx-auto max-w-full bg-white border border-dashed border-indigo-500 rounded-sm sm:mt-10 md:p-10 dark:bg-neutral-900 dark:border-neutral-700">
                          <div className="text-center">
                            <h2 className="text-xl text-gray-800 font-bold sm:text-2xl dark:text-white">
                              Practice Information
                            </h2>
                          </div>
                          <div className="mb-4 sm:mb-8">
                            <label
                              htmlFor="hs-feedback-post-comment-name-1"
                              className="block mb-2 text-sm font-medium dark:text-white"
                            >
                              Hospital Name
                            </label>
                            <input
                              type="text"
                              id="hs-feedback-post-comment-name-1"
                              className="border-2 py-2.5 sm:py-3 px-4 block w-full border-gray-200 rounded-lg sm:text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                              placeholder="Position"
                            />
                          </div>
                          <div className="mb-4 sm:mb-8">
                            <label
                              htmlFor="hs-feedback-post-comment-name-1"
                              className="block mb-2 text-sm font-medium dark:text-white"
                            >
                              Hospital
                            </label>
                            <input
                              type="text"
                              id="hs-feedback-post-comment-name-1"
                              className="border-2 py-2.5 sm:py-3 px-4 block w-full border-gray-200 rounded-lg sm:text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                              placeholder="Hospital"
                            />
                          </div>
                          <div className="mb-4 sm:mb-8">
                            <label
                              htmlFor="hs-feedback-post-comment-email-1"
                              className="block mb-2 text-sm font-medium dark:text-white"
                            >
                              Description
                            </label>
                            <input
                              type="email"
                              id="hs-feedback-post-comment-email-1"
                              className="border-2 py-2.5 sm:py-3 px-4 block w-full border-gray-200 rounded-lg sm:text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                              placeholder="Description"
                            />
                          </div>
                        </div>

                        <div className="mb-4 sm:mb-8">
                          <label
                            htmlFor="hs-feedback-post-comment-email-1"
                            className="block mb-2 text-sm font-medium dark:text-white"
                          >
                            Email address
                          </label>
                          <input
                            type="email"
                            id="email"
                            onChange={form.handleChange}
                            value={form.values.email}
                            className="border-2 py-2.5 sm:py-3 px-4 block w-full border-gray-200 rounded-lg sm:text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                            placeholder="Email address"
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="hs-feedback-post-comment-textarea-1"
                            className="block mb-2 text-sm font-medium dark:text-white"
                          >
                            Other
                          </label>
                          <div className="mt-1">
                            <textarea
                              id="other"
                              name="hs-feedback-post-comment-textarea-1"
                              rows={3}
                              className="border-2 py-2.5 sm:py-3 px-4 block w-full border-gray-200 rounded-lg sm:text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                              placeholder="Leave your comment here..."
                              defaultValue={""}
                            />
                          </div>
                        </div>
                        <div className="mt-6 grid">
                          <button
                            type="submit"
                            className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-hidden focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                          >
                            Save Profile
                          </button>
                        </div>
                      </form>
                    </div>
                    {/* End Card */}
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

export default ProfilePage;
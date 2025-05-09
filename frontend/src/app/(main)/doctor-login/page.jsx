'use client';
import useAppContext from '@/context/appContext';
import axios from 'axios';
import { useFormik } from 'formik';
import { useRouter } from 'next/navigation';
import React from 'react'
import toast from 'react-hot-toast';
import * as Yup from 'yup';
const ISSERVER = typeof window === 'undefined';

const LoginSchema = Yup.object().shape({

  email: Yup.string().email('Invalid Password').required('required'),
  password: Yup.string().required('password is requibred')
});



const login = () => {

  const { setUserLoggedIn } = useAppContext();

  const router = useRouter()
  const loginForm = useFormik({
    initialValues: {

      email: '',
      password: '',
    },
    onSubmit: (values) => {
      console.log(values);

      axios.post('http://localhost:5000/doctor/authenticate', values)
        .then((result) => {
          toast.success('Login Successful');
          console.log(result.data?.token);
          router.push('/doctor-menu');
          !ISSERVER && localStorage.setItem('doctor-token', result.data?.token);
          setUserLoggedIn(true);
        }).catch((err) => {
          console.log(err);
          toast.error('Login Failed');

        });

      //send values to backend

    },
    validationSchema: LoginSchema
  })

  return (
    <div className='mt-60 max-w-xl mx-auto'>
      <div className="mt-7 bg-white border border-gray-200 rounded-xl shadow-sm dark:bg-neutral-900 dark:border-neutral-700">
        <div className="p-4 sm:p-7">
          <div className="text-center">
            <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">
              Doctor-Log in
            </h1>
            <p className="mt-2 text-sm text-gray-600 dark:text-neutral-400">
              Don't have an account yet?
              <a
                className="text-blue-600 decoration-2 hover:underline focus:outline-none focus:underline font-medium dark:text-blue-500"
                href="/doctor-signup"
              >
                Sign up here
              </a>
            </p>
          </div>
          <div className="mt-5">

            <div className="py-3 flex items-center text-xs text-gray-400 uppercase before:flex-1 before:border-t before:border-gray-200 before:me-6 after:flex-1 after:border-t after:border-gray-200 after:ms-6 dark:text-neutral-500 dark:before:border-neutral-600 dark:after:border-neutral-600">
              Or
            </div>
            {/* Form */}
            <form onSubmit={loginForm.handleSubmit}>
              <div className="grid gap-y-4">
                {/* Form Group */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm mb-2 dark:text-white"
                  >
                    Email address
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      id="email"
                      onChange={loginForm.handleChange}
                      value={loginForm.values.email}
                      className="border py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                      required=""
                      aria-describedby="email-error"
                    />
                    <div className="hidden absolute inset-y-0 end-0 pointer-events-none pe-3">
                      <svg
                        className="size-5 text-red-500"
                        width={16}
                        height={16}
                        fill="currentColor"
                        viewBox="0 0 16 16"
                        aria-hidden="true"
                      >
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                      </svg>
                    </div>
                  </div>
                  {
                    (loginForm.touched.email && loginForm.errors.email) &&
                    (
                      <p className=" text-xs text-red-600 mt-2" id="email-error">
                        {loginForm.errors.email}
                      </p>
                    )
                  }
                </div>
                {/* End Form Group */}
                {/* Form Group */}
                <div>
                  <div className="flex justify-between items-center">
                    <label
                      htmlFor="password"
                      className="block text-sm mb-2 dark:text-white"
                    >
                      Password
                    </label>
                    <a
                      className="inline-flex items-center gap-x-1 text-sm text-blue-600 decoration-2 hover:underline focus:outline-none focus:underline font-medium dark:text-blue-500"
                      href="../examples/html/recover-account.html"
                    >
                      Forgot password?
                    </a>
                  </div>
                  <div className="relative">
                    <input
                      type="password"
                      id="password"
                      onChange={loginForm.handleChange}
                      value={loginForm.values.password}
                      className="border py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                      required=""
                      aria-describedby="password-error"
                    />
                    <div className="hidden absolute inset-y-0 end-0 pointer-events-none pe-3">
                      <svg
                        className="size-5 text-red-500"
                        width={16}
                        height={16}
                        fill="currentColor"
                        viewBox="0 0 16 16"
                        aria-hidden="true"
                      >
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                      </svg>
                    </div>
                  </div>
                  {
                    (loginForm.touched.password && loginForm.errors.password) &&
                    (
                      <p className=" text-xs text-red-600 mt-2" id="email-error">
                        {loginForm.errors.password}
                      </p>
                    )
                  }
                </div>
                {/* End Form Group */}

                <button
                  type="submit"

                  className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                >
                  Log in
                </button>
              </div>
            </form>
            {/* End Form */}
          </div>
        </div>
      </div>

    </div>
  )
}

export default login;
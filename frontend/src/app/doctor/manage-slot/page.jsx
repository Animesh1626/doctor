'use client';
import { IconLoader3, IconSend2 } from '@tabler/icons-react';
import axios from 'axios';
import { useFormik } from 'formik';
import { useRouter } from 'next/navigation';
import React, { use, useEffect, useState } from 'react'
import toast from 'react-hot-toast';



const manage = () => {

    const [slotList, setSlotList] = useState([]);
    const token = localStorage.getItem('doctor-token');

    const router = useRouter();
    //initializing formik
    const slotForm = useFormik({
        initialValues: {
            time: '',
            date: ''
        },
        onSubmit: (value, { resetForm, setSubmitting }) => {
            console.log(value);

            //send values to backend
            //sending request to backend
            axios.post('http://localhost:5000/slot/add', value, {
                headers: {
                    'x-auth-token': token
                }
            })
                .then((result) => {
                    toast.success('slot submitt successfully');
                    resetForm();
                    // router.push('#');
                }).catch((err) => {
                    toast.error('something went wrong');
                    setSubmitting(false);
                });

        },

    });


    const fetchUserData = () => {
        axios.get('http://localhost:5000/slot/getall')
            .then((res) => {
                console.log(res.data);
                setSlotList(res.data);
            }).catch((err) => {
                console.log(err);
            });
    }

    useEffect(() => {
        fetchUserData();
    }, []);

    return (
        <div>
            <div className="bg-white py-6 sm:py-8 lg:py-12">
                <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
                    {/* text - start */}
                    <div className="mb-10 md:mb-16">
                        <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
                            Manage-Slot
                        </h2>
                        <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">

                        </p>
                    </div>
                    {/* text - end */}
                    {/* form - start */}
                    <form
                        onSubmit={slotForm.handleSubmit}
                        className="mx-auto grid max-w-screen-md gap-4 sm:grid-cols-2">

                        <div className="sm:col-span-2">

                            <label
                                htmlFor="time"
                                className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
                            >
                                Time
                            </label>
                            <input
                                name="time"
                                className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
                                onChange={slotForm.handleChange}
                                value={slotForm.values.time}
                            />
                        </div>

                        {
                            (slotForm.touched.time && slotForm.errors.time) &&
                            (
                                <p className=" text-xs text-red-600 mt-2" id="email-error">
                                    {slotForm.errors.time}
                                </p>
                            )
                        }

                        <div className="sm:col-span-2">
                            <label
                                htmlFor="date"
                                className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
                            >
                                Date
                            </label>
                            <input
                                name="date"
                                type='date'
                                className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
                                onChange={slotForm.handleChange}
                                value={slotForm.values.date}
                            />
                        </div>

                        {
                            (slotForm.touched.date && slotForm.errors.date) &&
                            (
                                <p className=" text-xs text-red-600 mt-2" id="email-error">
                                    {slotForm.errors.date}
                                </p>
                            )
                        }

                        <div className="flex items-center justify-between sm:col-span-2">
                            <button
                                disabled={slotForm.isSubmitting}
                                type="submit"
                                className="inline-block rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base">

                                {
                                    slotForm.isSubmitting ? <IconLoader3 className='animate-spin' /> :
                                        <IconSend2 />
                                }
                                Send
                            </button>
                            <span className="text-sm text-gray-500">*Required</span>
                        </div>

                    </form>
                    {/* form - end */}
                </div>

                <div>
                    <div className='max-w[80%] mx-auto'>
                        <h1 className='text-3xl font-bold text-center text-black'>List</h1>
                        <table className='w-full mt-10 border-2 border-blue-200'>
                            <thead className='bg-blue-700 text-white'>
                                <tr>
                                    <th>S.no:</th>
                                    <th>Id</th>
                                    <th>Time</th>
                                    <th>Date</th>
                                </tr>
                            </thead>
                            <tbody className='border-2 text-red-400'>
                                {
                                    slotList.map((slot, index) => {
                                        return <tr key={slot._id} className='text-center border-2 border-blue-200 '>
                                            <td className='p-3'>{index + 1}</td>
                                            <td className='p-3'>{slot._id}</td>
                                            <td className='p-3'>{slot.time}</td>
                                            <td className='p-3'>{slot.date}</td>
                                        </tr>
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        </div>
    )
}


export default manage;
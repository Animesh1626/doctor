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
        axios.get('http://localhost:5000/slot/getslots', {
            headers: {
                'x-auth-token' : token
            }
        })
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
        <div className="bg-gray-50 mt-22 min-h-screen py-12 px-6">
            <div className="max-w-6xl mx-auto">
                {/* Page Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">Manage Slots</h2>
                    <p className="text-gray-600">
                        Add and manage your available slots for appointments.
                    </p>
                </div>

                {/* Form Section */}
                <div className="bg-white shadow-md rounded-lg p-6 mb-12">
                    <h3 className="text-xl font-semibold text-gray-800 mb-6">Add Slot</h3>
                    <form
                        onSubmit={slotForm.handleSubmit}
                        className="grid grid-cols-1 sm:grid-cols-2 gap-6"
                    >
                        {/* Time Input */}
                        <div>
                            <label
                                htmlFor="time"
                                className="block text-sm font-medium text-gray-700 mb-2"
                            >
                                Time
                            </label>
                            <input
                                name="time"
                                type="time"
                                className="w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-2 text-gray-800 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-150"
                                onChange={slotForm.handleChange}
                                value={slotForm.values.time}
                            />
                            {slotForm.touched.time && slotForm.errors.time && (
                                <p className="text-xs text-red-600 mt-2">{slotForm.errors.time}</p>
                            )}
                        </div>

                        {/* Date Input */}
                        <div>
                            <label
                                htmlFor="date"
                                className="block text-sm font-medium text-gray-700 mb-2"
                            >
                                Date
                            </label>
                            <input
                                name="date"
                                type="date"
                                className="w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-2 text-gray-800 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-150"
                                onChange={slotForm.handleChange}
                                value={slotForm.values.date}
                            />
                            {slotForm.touched.date && slotForm.errors.date && (
                                <p className="text-xs text-red-600 mt-2">{slotForm.errors.date}</p>
                            )}
                        </div>

                        {/* Submit Button */}
                        <div className="sm:col-span-2 flex justify-between items-center">
                            <button
                                disabled={slotForm.isSubmitting}
                                type="submit"
                                className="inline-flex items-center justify-center px-6 py-3 bg-indigo-500 text-white font-medium rounded-lg hover:bg-indigo-600 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition duration-150"
                            >
                                {slotForm.isSubmitting ? (
                                    <IconLoader3 className="animate-spin" />
                                ) : (
                                    <IconSend2 />
                                )}
                                <span className="ml-2">Add Slot</span>
                            </button>
                            <span className="text-sm text-gray-500">*Required</span>
                        </div>
                    </form>
                </div>

                {/* Table Section */}
                <div className="bg-white shadow-md rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-gray-800 mb-6">Slot List</h3>
                    <table className="w-full border-collapse border border-gray-200">
                        <thead className="bg-indigo-500 text-white">
                            <tr>
                                <th className="py-3 px-4 text-left">S.No</th>
                                <th className="py-3 px-4 text-left">ID</th>
                                <th className="py-3 px-4 text-left">Time</th>
                                <th className="py-3 px-4 text-left">Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {slotList.map((slot, index) => (
                                <tr
                                    key={slot._id}
                                    className={`${
                                        index % 2 === 0 ? 'bg-gray-50' : 'bg-white'
                                    } hover:bg-gray-100`}
                                >
                                    <td className="py-3 px-4">{index + 1}</td>
                                    <td className="py-3 px-4">{slot._id}</td>
                                    <td className="py-3 px-4">{slot.time}</td>
                                    <td className="py-3 px-4">{slot.date}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}


export default manage;
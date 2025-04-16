'use client';
import axios from 'axios';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

const ManageAppointment = () => {
  const [appointmentList, setAppointmentList] = useState([]);

  // Fetch all appointments
  const fetchUserData = async () => {
    try {
      const res = await axios.get('http://localhost:5000/appointment/getall');
      const updatedAppointments = res.data.map((appointment) => ({
        ...appointment,
        disabled: appointment.cancel, // Initialize disabled state based on the cancel field
      }));
      setAppointmentList(updatedAppointments);
    } catch (error) {
      console.error('Error fetching appointments:', error);
      toast.error('Failed to fetch appointments.');
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <div>
      <div className='max-w-[80%] mx-auto'>
        <h1 className='text-center font-bold text-4xl'>Manage Appointments</h1>

        <table className='w-full mt-10 border-2 border-blue-200'>
          <thead className='bg-blue-400 text-white'>
            <tr>
              <th>S.NO.</th>
              <th>Patient Name</th>
              <th>Doctor Name</th>
              <th>Date</th>
              <th>Time</th>
              <th>Status</th>
              <th>Link</th>
              <th>Report</th>
              <th>View</th>
            </tr>
          </thead>
          <tbody className='border-2'>
            {appointmentList.map((appointment, index) => {
              // Determine row color based on status
              const rowColor = appointment.cancel
                ? 'bg-red-200' // Canceled
                : appointment.status === 'Success'
                ? 'bg-green-200' // Success
                : 'bg-white-200'; // Pending

              return (
                <tr
                  key={appointment._id}
                  className={`text-center border-2 border-blue-200 ${rowColor}`}
                >
                  <td className='p-3'>{index + 1}</td>
                  <td className='p-3'>{appointment?.patient?.name}</td>
                  <td className='p-3'>{appointment?.slot?.doctor?.name}</td>
                  <td className='p-3'>{appointment?.slot?.date.slice(0, 10)}</td>
                  <td className='p-3'>{appointment?.slot?.time}</td>
                  <td className='p-3'>{appointment?.cancel ? 'Canceled' : appointment?.status}</td>
                  <td className='p-3'>
                    <a
                      target='_blank'
                      href={appointment?.slot?.doctor?.meetingLink}
                      className={`${
                        appointment.disabled
                          ? 'text-gray-400 cursor-not-allowed'
                          : 'text-blue-500 hover:underline'
                      }`}
                      onClick={(e) => appointment.disabled && e.preventDefault()}
                    >
                      Join Meeting
                    </a>
                  </td>
                  <td>
                    <Link
                      href={`/user/view-report/${appointment._id}`}
                      className={`bg-green-400 p-2 rounded-md ${
                        appointment.disabled
                          ? 'bg-gray-400 cursor-not-allowed'
                          : 'hover:bg-green-500'
                      }`}
                      onClick={(e) => appointment.disabled && e.preventDefault()}
                    >
                      View Report
                    </Link>
                  </td>
                  <td>
                    <Link
                      href={`/user/view-appointment/${appointment._id}`}
                      className={`bg-green-400 p-2 rounded-md ${
                        appointment.disabled
                          ? 'bg-gray-400 cursor-not-allowed'
                          : 'hover:bg-green-500'
                      }`}
                      onClick={(e) => appointment.disabled && e.preventDefault()}
                    >
                      View Appointment
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageAppointment;
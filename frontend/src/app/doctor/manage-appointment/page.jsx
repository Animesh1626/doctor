'use client';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

const ManageAppointment = () => {
  const router = useRouter();
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

  // Cancel an appointment by setting the "cancel" field to true
  const cancelAppointment = async (id) => {
    try {
      await axios.put(`http://localhost:5000/appointment/update/${id}`, { cancel: true });
      toast.success('Appointment canceled successfully.');

      // Update the disabled state for the canceled appointment
      setAppointmentList((prevList) =>
        prevList.map((appointment) =>
          appointment._id === id ? { ...appointment, cancel: true, disabled: true } : appointment
        )
      );
    } catch (error) {
      console.error('Error canceling appointment:', error);
      toast.error('Failed to cancel appointment.');
    }
  };

  // View or create a report and update the status to "Success"
  const viewReport = async (id) => {
    try {
      // Update the status to "Success"
      await axios.put(`http://localhost:5000/appointment/update/${id}`, { status: 'Success' });

      // Check if a report already exists
      const response = await axios.get(`http://localhost:5000/report/getbyappointment/${id}`);
      if (response.data && response.data._id) {
        router.push(`/doctor/update-report/${response.data._id}`);
      } else {
        // Create a new report if it doesn't exist
        const newReport = await axios.post('http://localhost:5000/report/add', {
          appointment: id,
          prescription: 'Prescription Here...',
        });
        if (newReport.data && newReport.data._id) {
          router.push(`/doctor/update-report/${newReport.data._id}`);
        } else {
          toast.error('Failed to create a new report.');
        }
      }
    } catch (error) {
      console.error('Error processing report:', error);
      toast.error('An error occurred while processing the report.');
    }
  };

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
              <th>Action</th>
              <th>Status</th>
              <th>Report</th>
            </tr>
          </thead>
          <tbody className='border-2'>
            {appointmentList.map((appointment, index) => {
              // Determine row color based on status
              const rowColor = appointment.cancel
                ? 'bg-red-200' // Canceled
                : appointment.status === 'Success'
                ? 'bg-green-200' // Success
                : 'bg-white-100'; // Pending

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
                  <td className='p-3'>
                    <button
                      className={`px-4 py-2 rounded-lg flex items-center justify-center space-x-2 text-white ${
                        appointment.disabled
                          ? 'bg-gray-400 cursor-not-allowed'
                          : 'bg-red-500 hover:bg-red-600'
                      }`}
                      onClick={() => cancelAppointment(appointment._id)}
                      disabled={appointment.disabled} // Disable the button if the appointment is canceled
                    >
                      <span>&#x2716;</span> {/* Unicode for a cancel icon */}
                      <span>Cancel</span>
                    </button>
                  </td>
                  <td className='p-3'>{appointment?.cancel ? 'Canceled' : appointment?.status}</td>
                  <td className='p-3'>
                    <button
                      className={`px-4 py-2 rounded-lg text-white ${
                        appointment.disabled
                          ? 'bg-gray-400 cursor-not-allowed'
                          : 'bg-green-500 hover:bg-green-600'
                      }`}
                      onClick={() => viewReport(appointment._id)}
                      disabled={appointment.disabled} // Disable the button if the appointment is canceled
                    >
                      To Generate a Report
                    </button>
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
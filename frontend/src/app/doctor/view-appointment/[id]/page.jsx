'use client';

import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import toast from 'react-hot-toast';

const ViewAppointment = () => {
  const { id: appointmentId } = useParams(); // Retrieve the appointment ID from the URL
  const [appointmentData, setAppointmentData] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch appointment data
  const fetchAppointmentData = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/appointment/getbyid/${appointmentId}`);
      setAppointmentData(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching appointment data:', error);
      toast.error('Failed to fetch appointment data.');
      setLoading(false);
    }
  };

  useEffect(() => {
    if (appointmentId) {
      fetchAppointmentData();
    }
  }, [appointmentId]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!appointmentData) {
    return <p>No appointment found.</p>;
  }

  return (
    <div className="min-h-screen mt-22 bg-gray-50 p-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">View Appointment</h1>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4 text-gray-700 border-b pb-2">Appointment Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Patient Name</label>
              <p className="text-gray-800">{appointmentData?.patient?.name}</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Doctor Name</label>
              <p className="text-gray-800">Dr. {appointmentData?.slot?.doctor?.name}</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
              <p className="text-gray-800">{appointmentData?.slot?.date?.slice(0, 10)}</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Time</label>
              <p className="text-gray-800">{appointmentData?.slot?.time}</p>
            </div>
          </div>

          <div className="mt-6">
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Status</h3>
            <p className="text-gray-800">{appointmentData?.status}</p>
          </div>

          <div className="mt-6">
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Doctor Specailties</h3>
            <p className="text-gray-800">{appointmentData?.slot?.doctor?.specialties }</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewAppointment;
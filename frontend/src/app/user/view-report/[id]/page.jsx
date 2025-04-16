'use client';

import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import toast from 'react-hot-toast';

const ViewReport = () => {
  const { id: appointmentId } = useParams(); // Retrieve the appointment ID from the URL
  const [reportData, setReportData] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch report data
  const fetchReportData = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/report/getbyappointment/${appointmentId}`);
      console.log(response.data);
      setReportData(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching report data:', error);
      toast.error('Failed to fetch report data.');
      setLoading(false);
    }
  };

  useEffect(() => {
    if (appointmentId) {
      fetchReportData();
    }
  }, [appointmentId]);

  // Download report as a file
  const downloadReport = () => {
    if (!reportData) {
      toast.error('No report data available to download.');
      return;
    }

    const reportContent = `
      Report ID: ${reportData._id}
      Patient Name: ${reportData?.appointment?.patient?.name}
      Doctor Name: ${reportData?.appointment?.slot?.doctor?.name}
      Date: ${new Date(reportData.createdAt).toLocaleDateString()}
      Time: ${new Date(reportData.createdAt).toLocaleTimeString()}
      
      Description:
      ${reportData.description}

      Prescription:
      ${reportData.prescription}

      Suggested Tests:
      ${reportData.suggestedTests}
    `;

    const blob = new Blob([reportContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `Report_${reportData._id}.txt`;
    link.click();
    URL.revokeObjectURL(url);
  };

  if (loading) {
    return <p className="text-center text-gray-600">Loading...</p>;
  }

  if (!reportData) {
    return <p className="text-center text-red-500">No report found.</p>;
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8 text-blue-600">View Report</h1>

        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-6 text-gray-700 border-b pb-4">Report Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <p className="text-sm font-medium text-gray-500">Patient Name</p>
              <p className="text-lg font-semibold text-gray-800">{reportData?.appointment?.patient?.name}</p>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500">Doctor Name</p>
              <p className="text-lg font-semibold text-gray-800">{reportData?.appointment?.slot?.doctor?.name}</p>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500">Date</p>
              <p className="text-lg font-semibold text-gray-800">{new Date(reportData.createdAt).toLocaleDateString()}</p>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500">Time</p>
              <p className="text-lg font-semibold text-gray-800">{new Date(reportData.createdAt).toLocaleTimeString()}</p>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="text-xl font-semibold text-gray-700 mb-4">Description</h3>
            <div className="bg-gray-100 p-4 rounded-lg">
              <p className="text-gray-800">{reportData.description}</p>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="text-xl font-semibold text-gray-700 mb-4">Prescription</h3>
            <div className="bg-gray-100 p-4 rounded-lg">
              <p className="text-gray-800">{reportData.prescription}</p>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="text-xl font-semibold text-gray-700 mb-4">Suggested Tests</h3>
            <div className="bg-gray-100 p-4 rounded-lg">
              <p className="text-gray-800">{reportData.suggestedTests}</p>
            </div>
          </div>

          <div className="mt-8 flex justify-end">
            <button
              onClick={downloadReport}
              className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
            >
              Download Report
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewReport;
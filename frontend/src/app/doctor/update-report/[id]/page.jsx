"use client";

import axios from "axios";
import { Formik } from "formik";
import { useParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function DoctorPage() {
  const router = useRouter();
  const { id } = useParams();

  const [reportData, setReportData] = useState(null);

  // Fetch report data by ID
  const fetchReportData = async () => {
    try {
      const res = await axios.get(`http://localhost:5000/report/getbyid/${id}`);
      setReportData(res.data);
    } catch (error) {
      console.error("Error fetching report data:", error);
      toast.error("Failed to fetch report data.");
    }
  };

  useEffect(() => {
    fetchReportData();
  }, []);

  // Handle form submission
  const handleFormSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      const result = await axios.put(
        `http://localhost:5000/report/update/${id}`,
        values
      );
      toast.success("Report Updated Successfully");
      resetForm();
      router.push("/doctor/manage-appointment");
    } catch (error) {
      console.error("Error updating report:", error);
      setSubmitting(false);
      toast.error("Failed to update report.");
    }
  };

  if (!reportData) {
    return <p>Loading...</p>;
  }

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">
          Doctor's Portal
        </h1>

        {/* Appointment Section */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-6">
          <h2 className="text-xl font-semibold mb-4 text-gray-700 border-b pb-2">
            Appointment
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Patient Name
              </label>
              <input
                type="text"
                value={reportData?.appointment?.patient?.name || ""}
                readOnly
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Patient ID
              </label>
              <input
                type="text"
                value={reportData?.appointment?.patient?._id || ""}
                readOnly
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Date
              </label>
              <input
                type="date"
                value={reportData?.createdAt?.split("T")[0] || ""}
                readOnly
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Time
              </label>
              <input
                type="time"
                value={
                  reportData?.createdAt?.split("T")[1]?.split(".")[0] || ""
                }
                readOnly
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
              />
            </div>
          </div>
        </div>

        {/* Form Section */}
        <Formik
          initialValues={{
            description: reportData.description || "",
            prescription: reportData.prescription || "",
            suggestedTests: reportData.suggestedTests || "",
          }}
          onSubmit={handleFormSubmit}
        >
          {(form) => (
            <form onSubmit={form.handleSubmit}>
              {/* Description Section */}
              <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                <h2 className="text-xl font-semibold mb-4 text-gray-700 border-b pb-2">
                  Description
                </h2>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Medical Notes
                  </label>
                  <textarea
                    name="description"
                    value={form.values.description}
                    onChange={form.handleChange}
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    placeholder="Enter patient's symptoms, observations, and other relevant medical information..."
                  ></textarea>
                </div>
              </div>

              {/* Prescription Section */}
              <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                <h2 className="text-xl font-semibold mb-4 text-gray-700 border-b pb-2">
                  Prescription
                </h2>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Prescription Details
                  </label>
                  <textarea
                    name="prescription"
                    value={form.values.prescription}
                    onChange={form.handleChange}
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    placeholder="Enter prescribed medications, dosages, and instructions..."
                  ></textarea>
                </div>
              </div>

              {/* Suggested Tests Section */}
              <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                <h2 className="text-xl font-semibold mb-4 text-gray-700 border-b pb-2">
                  Suggested Tests
                </h2>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Suggested Tests
                  </label>
                  <textarea
                    name="suggestedTests"
                    value={form.values.suggestedTests}
                    onChange={form.handleChange}
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    placeholder="Enter suggested tests..."
                  ></textarea>
                </div>
              </div>

              {/* Submit Button */}
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
                >
                  Save Record
                </button>
              </div>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
}

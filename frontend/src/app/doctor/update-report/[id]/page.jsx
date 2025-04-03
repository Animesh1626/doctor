"use client"
import { useState } from "react"
import { useRouter } from "next/navigation"

export default function UpdateReportPage() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [activeTab, setActiveTab] = useState("diagnosis")

  const handleSubmit = async e => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      // Navigate back to reports list or show success message
      router.push("/doctor/reports")
    }, 1500)
  }

  return (
    <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900">
          Update Patient Report
        </h1>
        <p className="text-gray-600">
          Review and update the medical report for this patient.
        </p>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="grid gap-6">
          {/* Patient Information Card */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-200">
              <h2 className="text-xl font-semibold text-gray-800">
                Patient Information
              </h2>
              <p className="text-sm text-gray-600">
                Basic information about the patient.
              </p>
            </div>
            <div className="p-6 grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <label
                  htmlFor="patient-id"
                  className="block text-sm font-medium text-gray-700"
                >
                  Patient ID
                </label>
                <input
                  id="patient-id"
                  type="text"
                  defaultValue="PT-20240328-001"
                  readOnly
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-gray-50 text-gray-500 focus:outline-none"
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="patient-name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Patient Name
                </label>
                <input
                  id="patient-name"
                  type="text"
                  defaultValue="John Smith"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="patient-dob"
                  className="block text-sm font-medium text-gray-700"
                >
                  Date of Birth
                </label>
                <input
                  id="patient-dob"
                  type="date"
                  defaultValue="1980-06-15"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="patient-gender"
                  className="block text-sm font-medium text-gray-700"
                >
                  Gender
                </label>
                <select
                  id="patient-gender"
                  defaultValue="male"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
                >
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="border-b border-gray-200">
              <nav className="flex -mb-px">
                <button
                  type="button"
                  onClick={() => setActiveTab("diagnosis")}
                  className={`py-4 px-6 text-center border-b-2 font-medium text-sm ${
                    activeTab === "diagnosis"
                      ? "border-blue-500 text-blue-600"
                      : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                  }`}
                >
                  Diagnosis
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab("treatment")}
                  className={`py-4 px-6 text-center border-b-2 font-medium text-sm ${
                    activeTab === "treatment"
                      ? "border-blue-500 text-blue-600"
                      : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                  }`}
                >
                  Treatment
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab("notes")}
                  className={`py-4 px-6 text-center border-b-2 font-medium text-sm ${
                    activeTab === "notes"
                      ? "border-blue-500 text-blue-600"
                      : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                  }`}
                >
                  Notes
                </button>
              </nav>
            </div>

            {/* Diagnosis Tab Content */}
            <div
              className={`p-6 ${
                activeTab === "diagnosis" ? "block" : "hidden"
              }`}
            >
              <div className="space-y-4">
                <div className="space-y-2">
                  <label
                    htmlFor="primary-diagnosis"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Primary Diagnosis
                  </label>
                  <input
                    id="primary-diagnosis"
                    type="text"
                    defaultValue="Hypertension (I10)"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="secondary-diagnosis"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Secondary Diagnosis
                  </label>
                  <input
                    id="secondary-diagnosis"
                    type="text"
                    defaultValue="Type 2 Diabetes (E11.9)"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="diagnosis-details"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Diagnosis Details
                  </label>
                  <textarea
                    id="diagnosis-details"
                    rows={4}
                    defaultValue="Patient presents with elevated blood pressure readings consistently above 140/90 mmHg over the past three months. Blood glucose levels indicate Type 2 Diabetes with HbA1c of 7.8%."
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
                  />
                </div>
              </div>
            </div>

            {/* Treatment Tab Content */}
            <div
              className={`p-6 ${
                activeTab === "treatment" ? "block" : "hidden"
              }`}
            >
              <div className="space-y-4">
                <div className="space-y-2">
                  <label
                    htmlFor="medications"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Medications
                  </label>
                  <textarea
                    id="medications"
                    rows={3}
                    defaultValue="1. Lisinopril 10mg daily
2. Metformin 500mg twice daily
3. Aspirin 81mg daily"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="procedures"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Procedures
                  </label>
                  <textarea
                    id="procedures"
                    rows={2}
                    defaultValue="No procedures required at this time."
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="follow-up"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Follow-up Plan
                  </label>
                  <textarea
                    id="follow-up"
                    rows={3}
                    defaultValue="1. Return for follow-up in 3 months
2. Blood pressure monitoring twice weekly
3. Blood glucose monitoring daily
4. Dietary consultation recommended"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
                  />
                </div>
              </div>
            </div>

            {/* Notes Tab Content */}
            <div
              className={`p-6 ${activeTab === "notes" ? "block" : "hidden"}`}
            >
              <div className="space-y-4">
                <div className="space-y-2">
                  <label
                    htmlFor="clinical-notes"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Clinical Notes
                  </label>
                  <textarea
                    id="clinical-notes"
                    rows={6}
                    defaultValue="Patient reports improved adherence to medication regimen. Still struggling with dietary recommendations. Discussed importance of sodium restriction and carbohydrate monitoring. Patient expressed interest in joining diabetes support group. Provided resources for local groups and online communities."
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="lab-results"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Lab Results
                  </label>
                  <textarea
                    id="lab-results"
                    rows={4}
                    defaultValue="CBC: Within normal limits
Lipid Panel: Total Cholesterol 210, LDL 130, HDL 45, Triglycerides 175
HbA1c: 7.8%
eGFR: 75 mL/min/1.73m²"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Report Status Card */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-200">
              <h2 className="text-xl font-semibold text-gray-800">
                Report Status
              </h2>
              <p className="text-sm text-gray-600">
                Update the status of this medical report.
              </p>
            </div>
            <div className="p-6 grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <label
                  htmlFor="report-status"
                  className="block text-sm font-medium text-gray-700"
                >
                  Status
                </label>
                <select
                  id="report-status"
                  defaultValue="draft"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
                >
                  <option value="draft">Draft</option>
                  <option value="pending-review">Pending Review</option>
                  <option value="final">Final</option>
                </select>
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="attending-physician"
                  className="block text-sm font-medium text-gray-700"
                >
                  Attending Physician
                </label>
                <input
                  id="attending-physician"
                  type="text"
                  defaultValue="Dr. Sarah Johnson"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
                />
              </div>
            </div>
            <div className="px-6 py-4 bg-gray-50 flex justify-between">
              <button
                type="button"
                onClick={() => router.back()}
                className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={isLoading}
                className={`px-4 py-2 rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${
                  isLoading ? "opacity-70 cursor-not-allowed" : ""
                }`}
              >
                {isLoading ? "Saving..." : "Save Report"}
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}

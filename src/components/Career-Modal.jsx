"use client"

import { useState } from "react"
import { X, Upload } from "lucide-react"
import { Button } from "@/components/ui/button"

export function CareerModal({ isOpen, onClose, job }) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
    cv: null,
  })

  const [submitted, setSubmitted] = useState(false)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleFileChange = (e) => {
    if (e.target.files) {
      setFormData((prev) => ({ ...prev, cv: e.target.files[0] }))
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    setSubmitted(true)
    setTimeout(() => {
      onClose()
      setSubmitted(false)
      setFormData({ name: "", phone: "", email: "", message: "", cv: null })
    }, 2000)
  }

  if (!isOpen || !job) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-h-[90vh] overflow-y-auto w-full max-w-6xl">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-border flex items-center justify-between p-4 md:p-6">
          <h2 className="text-xl md:text-2xl font-bold text-[#293E52]">{job.title}</h2>
          <button
            onClick={onClose}
            className="p-1 hover:bg-gray-100 rounded-md transition-colors"
            aria-label="Close modal"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 p-4 md:p-6">
          {/* Left Side - Job Details */}
          <div className="space-y-6">
            {/* Job ID and Type */}
            <div>
              <p className="text-sm font-medium text-muted-foreground">Job ID</p>
              <p className="text-lg font-semibold text-[#293E52]">{job.jobId}</p>
            </div>

            <div>
              <p className="text-sm font-medium text-muted-foreground">Job Type</p>
              <p className="text-lg font-semibold text-[#293E52]">{job.type}</p>
            </div>

            {/* Job Description */}
            <div>
              <h3 className="text-lg font-semibold text-[#293E52] mb-2">Job Description</h3>
              <p className="text-sm text-[#293E52] leading-relaxed">{job.description}</p>
            </div>

            {/* Responsibilities */}
            <div>
              <h3 className="text-lg font-semibold text-[#293E52] mb-3">Responsibilities</h3>
              <ul className="space-y-2">
                {job.responsibilities.map((responsibility, idx) => (
                  <li key={idx} className="flex gap-3 text-sm text-[#293E52]">
                    <span className="text-[#329ACD] font-bold flex-shrink-0">•</span>
                    <span>{responsibility}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Skills */}
            <div>
              <h3 className="text-lg font-semibold text-[#293E52] mb-3">Required Skills</h3>
              <ul className="space-y-2">
                {job.skills.map((skill, idx) => (
                  <li key={idx} className="flex gap-3 text-sm text-[#293E52]">
                    <span className="text-[#3AB257] font-bold flex-shrink-0">•</span>
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Additional Job Info */}
            <div className="grid grid-cols-3 gap-3 pt-4 border-t border-border">
              <div>
                <p className="text-xs font-medium text-muted-foreground">Level</p>
                <p className="text-sm font-semibold text-[#293E52]">{job.level}</p>
              </div>
              <div>
                <p className="text-xs font-medium text-muted-foreground">Salary</p>
                <p className="text-sm font-semibold text-[#293E52]">{job.salary}</p>
              </div>
              <div>
                <p className="text-xs font-medium text-muted-foreground">Location</p>
                <p className="text-sm font-semibold text-[#293E52]">{job.location}</p>
              </div>
            </div>
          </div>

          {/* Right Side - Application Form */}
          <div className="space-y-4">
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full min-h-96 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-lg font-semibold text-[#293E52] mb-2">Application Submitted!</p>
                <p className="text-sm text-muted-foreground">We will review your application soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-[#293E52] mb-1">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder=""
                    required
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#329ACD] text-sm"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-[#293E52] mb-1">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder=""
                    required
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#329ACD] text-sm"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[#293E52] mb-1">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder=""
                    required
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#329ACD] text-sm"
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-[#293E52] mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder=""
                    rows={4}
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#329ACD] text-sm resize-none"
                  />
                </div>

                {/* CV Upload */}
                <div>
                  <label htmlFor="cv" className="block text-sm font-medium text-[#293E52] mb-2">
                    Upload CV <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="file"
                      id="cv"
                      name="cv"
                      onChange={handleFileChange}
                      accept=".pdf,.doc,.docx"
                      required
                      className="hidden"
                    />
                    <label
                      htmlFor="cv"
                      className="flex items-center justify-center gap-2 px-4 py-3 border-2 border-dashed border-[#329ACD] rounded-lg cursor-pointer hover:bg-blue-50 transition-colors"
                    >
                      <Upload className="w-5 h-5 text-[#329ACD]" />
                      <span className="text-sm font-medium text-[#329ACD]">
                        {formData.cv ? formData.cv.name : "Upload CV file"}
                      </span>
                    </label>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">Supported formats: PDF</p>
                </div>

                {/* Additional Info */}
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-xs text-[#293E52] leading-relaxed">{job.additionalInfo}</p>
                </div>

                {/* Apply Button */}
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#329ACD] to-[#3AB257] hover:opacity-90 text-white font-semibold py-2 rounded-lg transition-opacity"
                >
                  Apply Now
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
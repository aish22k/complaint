import React, { useState } from "react";

function Complaint3({ onClose }) {
  const [title, setTitle] = useState("");
  const [reason, setReason] = useState("");
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");
  const [proof, setProof] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Complaint Submitted:
    Title: ${title}
    Reason: ${reason}
    Location: ${location}
    Date: ${date}
    Proof: ${proof ? proof.name : "No proof uploaded"}`);

    // Clear form after submission
    setTitle("");
    setReason("");
    setLocation("");
    setDate("");
    setProof(null);
    onClose(); // Close the modal after submission
  };

  const handleFileUpload = (e) => {
    setProof(e.target.files[0]);
  };

  return (
    <div className="relative max-w-md mx-auto">
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-3 right-3 text-gray-500 hover:text-red-500 focus:outline-none text-2xl"
      >
        &times;
      </button>

      <h1 className="text-xl font-bold text-indigo-600 text-center mb-6">
        File a Complaint
      </h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Title of Complaint:
            </label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter the complaint title"
              className="w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              required
            />
          </div>
          <div>
            <label
              htmlFor="reason"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Reason for Complaint:
            </label>
            <textarea
              id="reason"
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              placeholder="Enter the reason for the complaint"
              className="w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              rows="3"
              required
            ></textarea>
          </div>
        </div>
        <div>
          <label
            htmlFor="location"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Location:
          </label>
          <input
            type="text"
            id="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Enter the location"
            className="w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            required
          />
        </div>
        <div>
          <label
            htmlFor="date"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Date:
          </label>
          <input
            type="date"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            required
          />
        </div>
        <div>
          <label
            htmlFor="proof"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Proof (Image/Video):
          </label>
          <input
            type="file"
            id="proof"
            accept="image/*,video/*"
            onChange={handleFileUpload}
            className="block w-full text-sm text-gray-600 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:bg-indigo-500 file:text-white hover:file:bg-indigo-600"
          />
        </div>
        <button
          type="submit"
          className="w-full py-3 bg-indigo-500 text-white font-medium rounded-lg shadow-sm hover:bg-indigo-600 transition-all duration-300"
        >
          Submit Complaint
        </button>
      </form>
    </div>
  );
}

export default Complaint3;

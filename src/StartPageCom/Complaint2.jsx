import React, { useState } from "react";

function Complaint2() {
  const [subject, setSubject] = useState("");
  const [status, setStatus] = useState(false);

  const handleEdit = () => {
    alert("Edit functionality coming soon!");
  };

  const handleDelete = () => {
    alert("Complaint deleted successfully!");
    setSubject("");
  };

  const toggleStatus = () => {
    setStatus((prevStatus) => !prevStatus);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-96 bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-xl font-bold text-gray-800 mb-4 text-center">
          My Complaint
        </h1>
        <div className="mb-4">
          <label
            htmlFor="subject"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Complaint Subject:
          </label>
          <input
            type="text"
            id="subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            placeholder="Enter your complaint subject"
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="flex justify-between mt-4">
          <button
            onClick={handleDelete}
            className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
          >
            Delete
          </button>
          <button
            onClick={handleEdit}
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          >
            Edit
          </button>
          <button
            onClick={toggleStatus}
            className={`px-4 py-2 rounded-md ${
              status
                ? "bg-green-500 text-white hover:bg-green-600"
                : "bg-gray-500 text-white hover:bg-gray-600"
            }`}
          >
            {status ? "Checked" : "Not Checked"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Complaint2;
  
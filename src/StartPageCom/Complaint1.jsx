import React from "react";

function Complaint1 () {
  return (
    <div className=" rounded-lg shadow-lg p-6 max-w-md text-center">
      {/* Header */}
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Complaint</h1>

      {/* Image Section */}
      <img
        className="w-full max-h-64 object-contain rounded-lg mb-6"
        src="https://via.placeholder.com/400x300"
        alt="Conversation between police and a person"
      />

      {/* Button */}
      <button className="bg-blue-500 text-white px-4 py-2 rounded-lg text-lg font-semibold hover:bg-blue-700 transition">
        File Complaint
      </button>
    </div>
    
  );
};

export default Complaint1;
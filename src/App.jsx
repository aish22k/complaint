import React, { useState } from 'react';
import Complaint3 from './StartPageCom/Complaint3';
import './App.css';
import Police from "./assets/police_complaint.jpeg";

function App() {
  const [showPopup, setShowPopup] = useState(false);

  const handleClosePopup = () => setShowPopup(false);

  return (
    <div className=" bg-gradient-to-r from-indigo-200 via-purple-150 to-pink-200 text-gray-900">
      <div className={`relative py-16 ${showPopup ? 'blur-sm' : ''}`}>
        <div className="container mx-auto text-center">
          <img
            src={Police}
            alt="Police complaint"
            className="w-3/4 md:w-2/3 h-auto rounded-lg shadow-xl mx-auto transform transition duration-500 hover:scale-105"
          />
          <h1 className="mt-8 text-5xl font-extrabold text-gray-800">
            Welcome to <span className="text-indigo-500">Police Complaint System  </span>
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            File anonymous complaints securely and easily. Your safety and privacy matter to us.
          </p>
          <button
            className="mt-4 px-6 py-3 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600"
            onClick={() => setShowPopup(true)}
          >
            Submit Your Complaint
          </button>
        </div>
      </div>

      {showPopup && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg shadow-lg w-11/12 md:w-1/2 p-6">
            <Complaint3 onClose={handleClosePopup} />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;

// src/components/DonorDetails.js
import React from "react";

const DonorDetails = ({ donor, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded shadow-lg max-w-sm mx-auto">
        <h2 className="text-xl font-bold mb-4">{donor.name}</h2>
        <p>
          <strong>Blood Group:</strong> {donor.bloodGroup}
        </p>
        <p>
          <strong>Contact:</strong> {donor.contact}
        </p>
        <p>
          <strong>Location:</strong> {donor.location}
        </p>
        <button
          onClick={onClose}
          className="mt-4 p-2 bg-red-500 text-white rounded"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default DonorDetails;

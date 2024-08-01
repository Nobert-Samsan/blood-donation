// src/components/DonorList.js
import React from "react";

const DonorList = ({ donors, onSelectDonor }) => {
  return (
    <div className="p-4">
      {donors.length === 0 ? (
        <p>No donors found.</p>
      ) : (
        <ul>
          {donors.map((donor) => (
            <li
              key={donor.id}
              className="p-4 border rounded mb-2 cursor-pointer hover:bg-gray-100"
              onClick={() => onSelectDonor(donor)}
            >
              {donor.name} - {donor.bloodGroup}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DonorList;

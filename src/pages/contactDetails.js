import React, { useEffect, useState } from "react";
import { getStudentByGrNumber } from "../utils/getDataFromGr";

const ContactDetails = () => {
  const [studentData, setStudentData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const grNumber = localStorage.getItem("grNumber");
    if (grNumber) {
      const data = getStudentByGrNumber(grNumber);
      setStudentData(data);
    }
    setLoading(false);
  }, []);

  if (loading) {
    return <p className="text-center">Loading...</p>;
  }

  if (!studentData) {
    return <p className="text-center">No student found with this GR number.</p>;
  }

  const { name, phone, email, address, imageUrl } = studentData.contactInfo;

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md border rounded-lg shadow-lg p-4 bg-white">
        <h2 className="text-2xl font-semibold text-center mb-4">
          Contact Details
        </h2>
        <div className="flex items-center bg-[#618eb8] rounded-[15px] p-4 mb-4">
          <img
            src={imageUrl}
            alt={name}
            className="w-[120px] h-[120px] rounded-lg mr-4"
          />
          <div className="text-white">
            <h4 className="text-xl font-medium">{name}</h4>
            <p className="text-lg font-medium">Phone: {phone}</p>
            <p className="text-lg font-medium">Email: {email}</p>
            <p className="text-lg font-medium">Address: {address}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactDetails;

import React, { useEffect, useState } from "react";
import { getStudentByGrNumber } from "../utils/getDataFromGr";

const Medicals = () => {
  const [medicalInfo, setMedicalInfo] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const grNumber = localStorage.getItem("grNumber");
    if (grNumber) {
      const student = getStudentByGrNumber(grNumber);
      if (student) {
        setMedicalInfo(student.medicalInfo);
      }
    }
    setLoading(false);
  }, []);

  if (loading) {
    return <p className="text-center">Loading...</p>;
  }

  if (!medicalInfo) {
    return (
      <p className="text-center">
        No medical information found for this GR number.
      </p>
    );
  }

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md border rounded-lg shadow-lg p-4 bg-white">
        <h2 className="text-2xl font-semibold text-center mb-4">
          Medical Details
        </h2>
        <div className="bg-[#618eb8] rounded-[15px] p-4 mb-4 text-white">
          <h4 className="text-xl font-medium mb-2">Allergies</h4>
          <ul className="list-disc pl-5">
            {medicalInfo.allergies.map((allergy, index) => (
              <li key={index} className="text-lg font-medium">
                {allergy}
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-[#618eb8] rounded-[15px] p-4 mb-4 text-white">
          <h4 className="text-xl font-medium mb-2">Medications</h4>
          <ul className="list-disc pl-5">
            {medicalInfo.medications.map((medication, index) => (
              <li key={index} className="text-lg font-medium">
                {medication}
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-[#618eb8] rounded-[15px] p-4 text-white">
          <h4 className="text-xl font-medium mb-2">Health History</h4>
          <ul className="list-disc pl-5">
            {medicalInfo.healthHistory.map((history, index) => (
              <li key={index} className="text-lg font-medium">
                {history}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Medicals;

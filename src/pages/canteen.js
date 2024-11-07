import React, { useEffect, useState } from "react";
import { getStudentByGrNumber } from "../utils/getDataFromGr";

const Canteen = () => {
  const [studentData, setStudentData] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchData = async (grNumber) => {
    const data = await getStudentByGrNumber(grNumber);
    setStudentData(data);
  };

  useEffect(() => {
    const grNumber = localStorage.getItem("grNumber");
    if (grNumber) {
      fetchData(grNumber);
    }
    setLoading(false);
  }, []);

  if (loading) {
    return <p className="text-center">Loading...</p>;
  }

  if (!studentData) {
    return <p className="text-center">No student found with this GR number.</p>;
  }

  const { canteen, lunch, lunchFacility } = studentData;

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md border rounded-lg shadow-lg p-4 bg-white">
        <h2 className="text-2xl font-semibold text-center mb-4">
          Canteen Details
        </h2>

        {/* Cash Balance */}
        <div className="bg-[#618eb8] rounded-[15px] p-4 mb-4 text-white">
          <h4 className="text-xl font-medium mb-2">Canteen Cash Balance</h4>
          <p className="text-lg">
            {canteen?.cashBalance
              ? `₹${canteen.cashBalance}`
              : "No balance available"}
          </p>
        </div>

        {/* Lunch Facility */}
        <div className="bg-[#618eb8] rounded-[15px] p-4 mb-4 text-white">
          <h4 className="text-xl font-medium mb-2">Lunch Facility Status</h4>
          <p className="text-lg">
            {lunchFacility ? "Available" : "Not Available"}
          </p>
        </div>

        {/* Lunch Availability */}
        <div className="bg-[#618eb8] rounded-[15px] p-4 text-white">
          <h4 className="text-xl font-medium mb-2">Lunch Availability</h4>
          {Object.keys(lunch).length > 0 ? (
            <div>
              {Object.entries(lunch).map(([id, status]) => (
                <div key={id} className="mb-2">
                  <p className="text-lg">
                    Lunch ID: {id} - {status ? "Available" : "Not Available"}
                  </p>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-lg">No lunch information available.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Canteen;

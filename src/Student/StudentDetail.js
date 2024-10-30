import React from "react";
import "../Student/Student.css";
import { NavLink } from "react-router-dom";

const StudentDetail = () => {
  const buttonLabels = [
    "Contact Details",
    "Medicals",
    "Remarks",
    "Canteen",
    "Consents",
    "Amendments",
    "Miscellaneous",
  ];

  return (
    <>
      <div className="studentdetail_page">
        <div className="container">
          <div className="row justify-content-center py-4">
            <div className="col-xl-4 col-lg-5 col-md-7 border">
              <div className="student_details py-3 d-flex flex-column gap-3">
                <div className="detail_box d-flex align-items-center padding bg_color bor_radius gap-3">
                  <div className="image">
                    <img
                      src="https://img.freepik.com/premium-photo/school-student-white-background_1237858-1224.jpg?w=120"
                      alt=""
                    />
                  </div>
                  <div className="detail text-white">
                    <h4 className="mb-1">Mihir Dhankani</h4>
                    <p className="mb-0">GR:</p>
                    <p className="mb-0">Class: 10th B</p>
                    <p className="mb-0">DOB: 17/01/2009</p>
                    <p className="mb-0">Blood Group: O+</p>
                  </div>
                </div>
                {buttonLabels.map((lable, index) => (
                  <NavLink to="/student" className="padding2 bg_color bor_radius2 border-0 comman_font">
                    {lable}
                  </NavLink>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StudentDetail;

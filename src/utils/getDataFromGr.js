import studentsData from "../pages/Student/students.json";

export const getStudentByGrNumber = (grNumber) => {
  const student = studentsData.students.find((student) => {
    return student.grNumber === grNumber;
  });
  return student || null;
};

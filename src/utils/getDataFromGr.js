import { initializeApp } from "firebase/app";
import { getDatabase, ref, get, set } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBwi5o_yMx8nG_sGkRjaVHZskeXzCIgQRA",
  authDomain: "avm-card.firebaseapp.com",
  databaseURL:
    "https://avm-card-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "avm-card",
  storageBucket: "avm-card.firebasestorage.app",
  messagingSenderId: "479202556710",
  appId: "1:479202556710:web:622426234f396066badfe7",
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export const getStudentByGrNumber = async (grNumber) => {
  const studentRef = ref(database, `students/${grNumber}`);

  try {
    const snapshot = await get(studentRef);

    if (!snapshot.exists()) {
      console.log("No data found for this GR number.");
      return null;
    }

    const student = snapshot.val();
    console.log("Student Data:", student);

    const allergies = student.Medical?.Alergies
      ? Object.keys(student.Medical.Alergies).filter(
          (key) => student.Medical.Alergies[key]
        )
      : [];

    return {
      grNumber,
      name: student.Name,
      class: student.Class,
      dob: student.Dob,
      contactDetails: {
        fatherMobile: student.ContactDetails?.FatherMobile,
        motherMobile: student.ContactDetails?.MotherMobile,
        fatherEmail: student.ContactDetails?.fatherEmail,
        motherEmail: student.ContactDetails?.motherEmail,
      },
      medicalInfo: {
        allergies,
        bloodGroup: student.Medical?.Blood,
        height: student.Medical?.Height,
        sex: student.Medical?.Sex,
      },
      permissions: student.Permisions,
      canteen: { cashBalance: student.canteenCash },
      lunch: student.lunch,
      lunchFacility: student.lunchFacility,
    };
  } catch (error) {
    console.error("Error fetching student data:", error);
    return null;
  }
};

export const insertStudent = async (grNumber, studentData) => {
  const studentRef = ref(database, `students/${grNumber}`);

  try {
    await set(studentRef, studentData);
    console.log("Student data has been successfully inserted.");
  } catch (error) {
    console.error("Error inserting student data:", error);
  }
};

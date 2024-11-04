import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import StudentDetail from "./pages/Student/StudentDetail";
import Student from "./pages/Student/Student";
import ContactPage from "./pages/contactDetails";
import Medicals from "./pages/medicle";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<StudentDetail />} />
          <Route path="/student" element={<Student />} />
          <Route path="/canteen" element={<Student />} />
          <Route path="/contact-details" element={<ContactPage />} />
          <Route path="/medicle" element={<Medicals />} />
          <Route path="/remarks" element={<Student />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

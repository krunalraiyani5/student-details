import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import StudentDetail from "./pages/Student/StudentDetail";
import Student from "./pages/Student/Student";
import ContactPage from "./pages/contactDetails";
import Medicals from "./pages/medicle";
import Consents from "./pages/consents";
import Miscellaneous from "./pages/miscellaneous";
import Remarks from "./pages/remarks";
import Canteen from "./pages/canteen";
import Permissions from "./pages/permission";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<StudentDetail />} />
          <Route path="/student" element={<Student />} />
          <Route path="/canteen" element={<Canteen />} />
          <Route path="/contact-details" element={<ContactPage />} />
          <Route path="/medicle" element={<Medicals />} />
          <Route path="/consents" element={<Consents />} />
          <Route path="/remarks" element={<Remarks />} />
          <Route path="/permission" element={<Permissions />} />
          <Route path="/miscellaneous" element={<Miscellaneous />} />
          <Route path="/canteen" element={<Canteen />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

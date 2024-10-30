
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import StudentDetail from "./Student/StudentDetail";
import Student from "./Student/Student";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<StudentDetail />}/>
          <Route path="/student" element={<Student />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

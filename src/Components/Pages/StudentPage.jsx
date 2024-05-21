import React from 'react'
import NavbarStudent from '../Navbar/NavbarStudent'
import { ViewTeacherSubjects, ViewMarks, StudentCertificate, VerifyCertificate } from '../NavbarComponents';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function StudentPage() {
  return (
    <>
      <div className="flex flex-row ">
        <div>
          <NavbarStudent />
        </div>
        <div className='flex justify-center items-center w-[1300px] bg-blue-950'>
          <Routes>
            <Route
              path="/ViewTeacherSubject"
              element={<ViewTeacherSubjects/>}
            />
            <Route
              path="/ViewMarks"
              element={<ViewMarks/>}
            />
            <Route
              path="/StudentCertificate"
              element={<StudentCertificate/>}
            />
            <Route
              path="/VerifyCertificate"
              element={<VerifyCertificate/>}
            />
          </Routes>
        </div>
      </div>
    </>
  )
}

export default StudentPage
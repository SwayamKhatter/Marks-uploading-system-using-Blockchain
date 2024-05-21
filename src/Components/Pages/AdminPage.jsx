import React from 'react'
import NavbarAdmin from '../Navbar/NavbarAdmin'
import { AddTeacher, ViewTeacherSubjects, AddMentorMentee, AddPanelPanelist, ViewMarks, AssignCertificate, StudentCertificate, VerifyCertificate} from '../NavbarComponents';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function AdminPage() {
  return (
    <>
      <div className="flex flex-row ">
        <div>
          <NavbarAdmin />
        </div>
        <div className='flex justify-center items-center w-[1300px] bg-blue-950'>
          <Routes>
            <Route
              path="/AddTeacher"
              element={<AddTeacher/>}
            />
            <Route
              path="/ViewTeacherSubjects"
              element={<ViewTeacherSubjects/>}
            />
            <Route
              path="/AddMentorMentee"
              element={<AddMentorMentee/>}
            />
            <Route
              path="/AddPanelPanelist"
              element={<AddPanelPanelist/>}
            />
            <Route
              path="/ViewMarks"
              element={<ViewMarks/>}
            />
            <Route
              path="/AssignCertificate"
              element={<AssignCertificate/>}
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

export default AdminPage
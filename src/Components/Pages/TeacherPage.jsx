import React from 'react'
import NavbarTeacher from '../Navbar/NavbarTeacher'

import {ViewTeacherSubjects, AddPanelMarks, AddMenteeMarks, UpdateMarks, ViewMarks, VerifyCertificate} from '../NavbarComponents';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function TeacherPage() {
  return (
    <div className="flex flex-row ">
    <div>
    <NavbarTeacher/>
    </div>
    <div className='flex justify-center items-center w-[1300px] bg-blue-950'>
    <Routes>
      <Route
        path="/ViewTeacherSubjects"
        element={<ViewTeacherSubjects/>}
      />
      <Route
        path="/AddPanelMarks"
        element={<AddPanelMarks/>}
      />
      <Route
        path="/AddMenteeMarks"
        element={<AddMenteeMarks/>}
      />
      <Route
        path="/UpdateMarks"
        element={<UpdateMarks/>}
      />
      <Route
        path="/ViewMarks"
        element={<ViewMarks/>}
      />
      <Route
        path="/VerifyCertificate"
        element={<VerifyCertificate/>}
      />
    </Routes>
  </div>
  </div>
  )
}

export default TeacherPage
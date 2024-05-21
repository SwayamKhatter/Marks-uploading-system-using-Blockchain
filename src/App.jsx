import Login2 from './Components/Pages/Login2'
import AdminPage from './Components/Pages/AdminPage'
import TeacherPage from './Components/Pages/TeacherPage';
import StudentPage from './Components/Pages/StudentPage';
import './App.css'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={<Login2 />}
          />
          <Route
            path="admin/*"
            element={<AdminPage />}
          />
          <Route
            path="teacher/*"
            element={<TeacherPage />}
          />
          <Route
            path="student/*"
            element={<StudentPage />}
          />
        </Routes>
      </Router>
    </>
  )
}

export default App

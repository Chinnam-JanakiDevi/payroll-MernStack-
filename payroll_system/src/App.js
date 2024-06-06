import React from 'react';
import './App.css';
import Login from './component/Login/Login';
import Register from './component/Signup/Signup';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './component/navbar/Navbar';
import AdminNavbar from './component/AdminNavbar/adminnav';
import Attendence from './component/Attendence/Attendence';
import GetYourSalary from './component/GetYourSalary/GetYourSalary';
import AllEmployeeSalaries from './component/AllEmployeeSalaries/allemployeesalries';
// import AdminNavbar from './component/AdminNavbar/adminnav';
import HomePage from './component/Register/Register';
import Employee from './component/employee/Employee';
import Hra from './component/hra/Hra';
import Da from './component/da/Da';
import Home from './component/home/Home';
import Pf from './component/pf/Pf';
function App() {

  return (
    <>
      <Routes>
        <Route path="/Signup" element={<Register />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/GetYourSalary" element={<GetYourSalary />} />
        <Route path="/" element={<HomePage />} />
        <Route exact path="/Employee" element={<Employee />} />
        <Route exact path="/Home" element={<Home />} />
        <Route exact path="/Hra" element={<Hra />} />
        <Route exact path="/Da" element={<Da />} />
        <Route exact path="/Pf" element={<Pf />} />
        <Route path="/Navbar" element={<Navbar />} />
        <Route path="/AdminNavbar" element={<AdminNavbar />} />
        <Route exact path="/Attendence" element={<Attendence />} />
        <Route exact path="/AllEmployeeSalaries" element={<AllEmployeeSalaries />} />
      </Routes>
    </>
  )
}

export default App;
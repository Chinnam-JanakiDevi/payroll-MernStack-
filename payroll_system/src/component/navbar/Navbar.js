import React, { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Employee from '../employee/Employee';
import Home from '../home/Home';
import Hra from '../hra/Hra';
import Da from '../da/Da';
import Pf from '../pf/Pf';
import GetYourSalary from '../GetYourSalary/GetYourSalary';
import HomePage from '../Register/Register';
import Attendence from '../Attendence/Attendence';
import './Navbar.css';

function Navbar() {
  // const [showPfDropdown, setshowPfDropdown] = useState(false);
  // const [showDaDropdown, setShowDaDropdown] = useState(false);
  const [showHraDropdown, setShowHraDropdown] = useState(false);

  // const togglePfDropdown = () => {
  //   setshowPfDropdown(!showPfDropdown);
  // };

  // const toggleDaDropdown = () => {
  //   setShowDaDropdown(!showDaDropdown);
  // };

  const toggleHraDropdown = () => {
    setShowHraDropdown(!showHraDropdown);
  };


  return (
    <>

      <div className="navbar">
        <nav>
          {/* <img src="https://lh3.googleusercontent.com/proxy/47cg-CghK5g7wQgwMxyAknhj96S89Df7tqbQ0UJl7uk9-7kiZpq8Q140qLQ09fZ9UljwJqPn0lSmGN9eGrz5PDwsekQ_nflQp_8Un0Ypm41pnj3WUxM6C5vqMag9nQ" width="100" height="65"></img> */}
          <p>
            MITTAPALI SPINNERS PVT.LTD
          </p>
          <ul>
            <li>
              <Link className="name" to="/Home">
                Home
              </Link>
            </li>
            <li>
              <Link className="name" to="/GetYourSalary">
                GetYourSalary
              </Link>
            </li>
            <li>
              <div className="dropdown" onMouseEnter={toggleHraDropdown} onMouseLeave={toggleHraDropdown}>
                <Link className="name" to="/Employee">Tables</Link>
                {showHraDropdown && (
                  <div className="dropdown-content">
                    <Link to="/Employee">Employee</Link>

                    <Link to="/Hra">HRA</Link>
                    <Link to="/Pf">Pf</Link>
                    <Link to="/Da">Da</Link>
                    {/* Add more links related to DA */}
                  </div>
                )}
              </div>
            </li>
            {/* <li>
              <Link className="name" to="/Attendence">Attendence</Link>
            </li> */}
            <li>
              <Link className="name" to="/HomePage">LogOut</Link>
            </li>
          </ul>
        </nav>
      </div>
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route exact path="/Employee" element={<Employee />} />
        <Route exact path="/Home" element={<Home />} />
        <Route exact path="/Hra" element={<Hra />} />
        <Route exact path="/Da" element={<Da />} />
        <Route exact path="/Pf" element={<Pf />} />
        <Route exact path="/GetYourSalary" element={<GetYourSalary />} />
        <Route exact path="/HomePage" element={<HomePage />} />
        {/* <Route exact path="/Attendence" element={<Attendence />} /> */}

        {/* Add other routes here */}
      </Routes>

    </>
  );
}

export default Navbar;

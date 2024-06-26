import React, { useState, useEffect } from "react";
import axios from "axios";
import './Attendence.css';

function Attendence() {
    const [EmployeeDetails, setEmployeeDetails] = useState([]);
    useEffect(() => {
        get_employee_details();
    }, []);
    const get_employee_details = async () => {
        try {
            const response = await axios.get(`http://localhost:3001/all_employee_details_Read`);
            console.log(response.data);
            setEmployeeDetails(response.data);
        }
        catch (error) {
            console.log(error);
        }
    };

    const handleDelete = async (empCode) => {
        try {
            const response = await axios.delete(`http://localhost:3001/delete_employee/${empCode}`);
            alert("successfully deleted"+empCode);
            get_employee_details();
            // Handle success, such as updating the UI or showing a notification
        } catch (error) {
            console.error(error);
            // Handle error, such as showing an error message
        }
    };

    return (
        <>
            <h2>All Employees</h2>
            <table id="myTable">
                <thead>
                    <tr className="header">
                        <th>Employee code</th>
                        <th>Name</th>
                        <th>Update</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {EmployeeDetails.map((employee, index) => (
                        <tr key={index}>
                            <td>{employee[0]}</td>
                            <td>{employee[1]}</td>
                            <td><button>Update</button></td>
                            <td><button onClick={() => handleDelete(employee[0])}>Delete</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}
export default Attendence
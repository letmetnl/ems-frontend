import React, { useState, useEffect } from "react";
import { listOfEmployees } from "../services/EmployeeService";
import { useNavigate } from "react-router-dom";

const ListEmployeeComponent = () => {
  const [employees, setEmployees] = useState([]);

  const navigator = useNavigate();

  useEffect(() => {
    listOfEmployees()
      .then((response) => {
        setEmployees(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  function handleAddEmployee() {
    navigator("/add-employee");
  }
  return (
    <div className="container">
      <h2 className="text-center"> List of Employees </h2>
      <button className="btn btn-primary mb-2" onClick={handleAddEmployee}>
        Add Employee
      </button>
      <table className="table table-bordered table-striped ">
        <thead>
          <tr>
            <th>EmployeeID</th>
            <th>Employee First Name</th>
            <th>Employee Last Name</th>
            <th>Employee EmailID</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.empId}>
              <td>{employee.empId}</td>
              <td>{employee.firstName}</td>
              <td>{employee.lastName}</td>
              <td>{employee.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListEmployeeComponent;

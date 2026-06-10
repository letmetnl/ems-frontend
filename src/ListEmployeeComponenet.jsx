const ListEmployeeComponent = () => {
  const employees = [
    {
      id: 1,
      firstName: "Mohit",
      lastName: "Yadav",
      email: "mohity@gmail.com",
    },
    {
      id: 2,
      firstName: "Mohini",
      lastName: "Yadav",
      email: "mohiniy@gmail.com",
    },
    {
      id: 3,
      firstName: "Purohit",
      lastName: "Vashisht",
      email: "purohitv@gmail.com",
    },
    {
      id: 4,
      firstName: "Sobhit",
      lastName: "Sharma",
      email: "sobhits@gmail.com",
    },
    {
      id: 5,
      firstName: "Rohit",
      lastName: "Yadav",
      email: "rohity@gmail.com",
    },
  ];

  return (
    <div className="container">
      <h2 className="text-center"> List of Employees </h2>
      <table>
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
            <tr key={employee.id}>
              <td>{employee.id}</td>
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

import "./App.css";
import EmployeeComponent from "./components/EmployeeComponent";
import FooterComponent from "./components/FooterComponent";
import HeaderComponent from "./components/HeaderComponent";
import ListEmployeeComponent from "./components/ListEmployeeComponenet";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
        <HeaderComponent />
        {/* //wrapping routes in the main container tag */}
        <main className="main-content">
          <Routes>
            {/* //Route for base url : http://localhost:8080/ */}
            <Route path="/" element={<ListEmployeeComponent />}></Route>
            {/* // Route for /employees */}
            <Route
              path="/employees"
              element={<ListEmployeeComponent />}
            ></Route>
            {/* // Route for add employee: http://localhost:3000/add-employee */}
            <Route path="/add-employee" element={<EmployeeComponent />}></Route>
            {/* // Route for edit-employee: http://localhost:3000/edit-employee/2 */}
            <Route
              path="/edit-employee/:id"
              element={<EmployeeComponent />}
            ></Route>
          </Routes>
        </main>
        <FooterComponent />
      </BrowserRouter>
    </>
  );
}

export default App;

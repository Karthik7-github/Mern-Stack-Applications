import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "./context/AuthProvider";

const App = () => {
  const [user, setUser] = useState(null);
  const [loggedinuserdata, setLoggedinuserdata] = useState(null);
  const [userdata,setUserdata] = useContext(AuthContext);

  useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedInUser");
    if (loggedInUser) {
      const userdata = JSON.parse(loggedInUser);
      setUser(userdata?.role);
      setLoggedinuserdata(userdata?.data);
    }
  },[]);

  const handleLogin = (email, password) => {
    if (email === "admin@me.com" && password === "123") {
      setUser("admin");
      localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin" }));
    } else if (userdata) {
      const employee = userdata?.find(
        (e) => email === e.email && password === e.password,
      );

      if (employee) {
        setUser("employee");
        setLoggedinuserdata(employee);
        localStorage.setItem(
          "loggedInUser",
          JSON.stringify({ role: "employee", data: employee }),
        );
      } else {
        alert("Invalid credentials");
      }
    }
  };

  const data = useContext(AuthContext);
  // console.log(data)

  return (
    <>
      {!user && <Login handleLogin={handleLogin} />}

      {user === "admin" && <AdminDashboard changeUser={setUser}/>}

      {user === "employee" ? <EmployeeDashboard changeUser={setUser} data={loggedinuserdata} /> : ""}
    </>
  );
};
export default App;

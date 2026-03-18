import React, { createContext, useEffect, useState } from "react";
import { getLocalStorage, setLocalStorage } from "../utils/LocalStorage";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {

  //localStorage.clear()

  const [userdata, setUserdata] = useState(null);

  useEffect(() => {

    
    if (!localStorage.getItem("employees")) {
      setLocalStorage();
    }

    const { employees } = getLocalStorage();
    setUserdata(employees);
  }, []);

  return (
    <AuthContext.Provider value={[userdata,setUserdata]}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
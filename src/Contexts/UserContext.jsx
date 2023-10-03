import { Token } from "../Utils/UserDetails";
import { backendUrl } from "../Utils/Constants";
import axios from "axios";

import React, { createContext, useEffect, useState } from "react";
export const UserContext = createContext({});
const UserProvider = (props) => {
  const [user, setUser] = useState(null);
  const [userType, setUserType] = useState(null);
  const [isAdmin, setIsAdmin] = useState(
    JSON.parse(localStorage.getItem("user"))?.isAdmin === true
  );
  const [isStaff, setIsStaff] = useState(
    JSON.parse(localStorage.getItem("user"))?.isAdmin === false
  );

  const token = Token();
  const getMyData = () => {
    axios
      .get(backendUrl + "/me", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        let data = response.data.data;

        setUser(data);
      })

      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    if (token) {
      getMyData();
    } else {
      console.log("no token");
    }
  }, []);

  const values = {
    token,
    user,
    setUser,
    userType,
    setUserType,
    isAdmin,
    setIsAdmin,
    isStaff,
    setIsStaff,
  };
  return (
    <UserContext.Provider value={values}>{props.children}</UserContext.Provider>
  );
};

export default UserProvider;

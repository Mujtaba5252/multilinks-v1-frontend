import { Token } from "Utils/UserDetails";
import axios from "axios";

import React, { createContext, useEffect, useState } from "react";
export const UserContext = createContext({});
const UserProvider = () => {
  const [user, setUser] = useState(null);
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
    if (token) getMyData();
  }, []);

  const values = {
    token,
    user,
    setUser,
    userType,
  };
  return (
    <UserContext.Provider value={values}>{props.children}</UserContext.Provider>
  );
};

export default UserProvider;

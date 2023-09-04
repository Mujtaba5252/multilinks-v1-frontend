import { Token } from "../Utils/UserDetails";
import { backendUrl } from "../Utils/Constants";
import axios from "axios";

import React, { createContext, useEffect, useState } from "react";
export const UserContext = createContext({});
const UserProvider = (props) => {
  const [user, setUser] = useState(null);
  const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ZDY4Y2E3NTE0Zjg5NDExMDAyOGMyNCIsImxvZ2luX2VtYWlsIjoiYWRtaW5AZ21haWwuY29tIiwic3RhZmZfSUQiOiJzdGFmZl9JRF8xIiwiaWF0IjoxNjkyMTUzMDcxLCJleHAiOjE2OTQ3NDUwNzF9.nYWcBCXCROAZNAjuX8QNIT_AyU4CQy3fc3M3byw6sEU";
  console.log(token);
  console.log(backendUrl);
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
        console.log(data);
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
    // userType,
  };
  return (
    <UserContext.Provider value={values}>{props.children}</UserContext.Provider>
  );
};

export default UserProvider;

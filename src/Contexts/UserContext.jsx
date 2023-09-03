import { Token } from "Utils/UserDetails";
import React, { useEffect, useState } from "react";

const UserContext = () => {
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
        setUserType(
          `${response?.data?.data?.userType
            ?.toLowerCase()
            ?.replaceAll(" ", "")}`
        );
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

export default UserContext;

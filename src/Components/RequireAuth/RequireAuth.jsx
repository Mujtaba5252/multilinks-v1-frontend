import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { routes } from "../../routes";

const RequireAuth = ({ allowedRole }) => {
    const location = useLocation();
    let userDetails = JSON.parse(localStorage.getItem("user")); 
    let role = userDetails.isAdmin ? "admin" : "staff";
    console.log(role,allowedRole)
    return allowedRole.includes(role) ?
        (<Outlet/>) :
        (<Navigate
            component={Link}
            to={routes.login}
            state={{ from: location }}
            replace
        />)
}

export default RequireAuth;
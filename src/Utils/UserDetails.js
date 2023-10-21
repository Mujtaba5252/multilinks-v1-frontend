export const Token = () => JSON.parse(localStorage.getItem("user"))?.token;
export const User = () => JSON.parse(localStorage.getItem("user"));
export const Role = () => JSON.parse(localStorage.getItem("user"))?.isAdmin;

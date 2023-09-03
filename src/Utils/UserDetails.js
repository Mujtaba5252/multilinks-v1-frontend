export const Token = () => JSON.parse(localStorage.getItem("user"))?.token;

export const passwordRegex = new RegExp(
  "^(?=.*d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*s).{8,100}$"
);
export const emailRegex = new RegExp(
  "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$"
);
//uae phone number regex
export const phoneRegex = new RegExp("^\\+971\\d{9}$");
export const nameRegex = new RegExp("^[A-Za-z]+(?: [A-Za-z]+)*$");

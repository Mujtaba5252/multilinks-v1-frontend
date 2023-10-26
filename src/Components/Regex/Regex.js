export const passwordRegex = new RegExp("^(?=.*[A-Z])(?=.*[a-z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$");
export const emailRegex = new RegExp(
  "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$"
);
//uae phone number regex
export const phoneRegex = new RegExp("^\\+971\\d{9}$");
export const nameRegex = new RegExp("^[A-Za-z]+(?: [A-Za-z]+)*$");
export const cnicRegex=new RegExp("^\\d{5}-\\d{7}-\\d$")
export const emiratesIdRegex=new RegExp("^\\d{3}-\\d{4}-\\d{7}-\\d$")

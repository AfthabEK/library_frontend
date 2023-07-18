import * as yup from "yup";


const loginValidation = yup.object().shape({
  username: yup
    .string()
    .max(50, "Please enter a maximum of 50 characters")
    .required("Please enter the username"),
  password: yup
    .string()
    .min(5, "Please enter atleast 5 characters.")
    .required("Password is required."),
});

export default loginValidation;

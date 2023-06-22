import * as Yup from "yup";

const signUpValidation = Yup.object().shape({
  fname: Yup.string().min(2,' First Name should be more than 2 Characters').max(20).required("Please enter your first name"),
  lname: Yup.string().min(2,' Last Name should be more than 2 Characters').max(20).required("Please enter your last name"),
  email: Yup.string().email(' Invalid Email').required("Please enter your email"),
  password: Yup.string()
    .min(8,'Password must be least 8 Characters')
    .max(15)
    .required("Password is required")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      " Password must contain [A-Z,a-z,@#]"
    ),
});
export default signUpValidation;

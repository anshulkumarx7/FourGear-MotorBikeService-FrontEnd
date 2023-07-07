import * as Yup from "yup";

const bookServiceValidation = Yup.object().shape({
  name: Yup.string()
    .min(2, " First Name should be more than 2 Characters")
    .max(20)
    .required("Please enter your first name"),
  phone: Yup.string().min(10,'Invalid Contact number').max(10)
  .matches(/^\+?[1-9]\d{1,14}$/, 'Invalid contact number')
  .required('Contact number is required'),
  email: Yup.string()
    .email(" Invalid Email")
    .required("Please enter your email"),
  city: Yup.string()
    .required("Please select your city").oneOf(['Bhubaneshwar'],"Please choose your city"),
  bike_Company: Yup.string()
    .required("Please select your bike company").oneOf(['Hero','Honda','TVS','Bajaj','Yahama'],"Please choose your bike company"),
  bike_Model: Yup.string()
    .min(2, "Please enter your bike model")
    .max(20)
    .required("Please enter your bike model"),
});
export default bookServiceValidation;

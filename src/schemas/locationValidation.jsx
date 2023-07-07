import * as Yup from "yup";

const locationValidation = Yup.object().shape({
  street: Yup.string()
    .min(2, "Please enter street")
    .required("Street field missing"),
  landmark: Yup.string()
    .min(2, "Please enter landmark")
    .required("Landmark field missing"),
  address: Yup.string()
    .min(2, "Please enter  full address")
    .required("Address field missing"),

});
export default locationValidation;

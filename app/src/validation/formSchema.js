import * as Yup from "yup";

const formSchema = Yup.object().shape({
  name: Yup
    .string()
    .min(3, "Name entry must be at least 3 characters long")
    .max(35, "Name entry may be no longer than 35 characters")
    .required("Name is Required"),
  email: Yup
    .string()
    .email("Must be a valid email address")
    .required("Must include email address"),
  password: Yup
    .string()
    .min(7, "Password must be at least 7 characters long")
    .required("Password is Required"),
  tos: Yup
    .boolean()
    .oneOf([true], 'Must Accept Terms and Conditions')
    .required("Please accept our Terms of Service")
})

export default formSchema

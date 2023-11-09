import * as yup from "yup";

export const signUpSchema = yup.object().shape({
  name: yup.string().required("Name is required"),
  phone: yup.string().required("Phone number is required"),
  email: yup.string().required("Email is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .max(32, "Password must be at most 32 characters")
    .required("Password is required"),
});

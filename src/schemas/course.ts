import * as yup from "yup";

export const courseInformation = yup.object().shape({
  name: yup.string().required("Name is required"),
  description: yup.string().required("Description is required"),
  price: yup.string().required("price is required"),
  estimatedPrice: yup.string().required("estimatedPrice is required"),
  tags: yup.string().required("tags is required"),
  level: yup.string().required("level is required"),
  demoUrl: yup.string().required("demoUrl is required"),
});

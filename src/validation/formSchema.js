import * as yup from "yup";

export default yup.object().shape({
  name: yup
    .string()
    .required("name is required")
    .min(2, "name must be at least 2 chars long"),
  instructions: yup.string(),
  size: yup
    .string()
    .oneOf(["big", "jumbo", "bigdaddy"], "size selection is required"),
  //we are done with checkboxes
  pepperoni: yup.boolean(),
  sausage: yup.boolean(),
  onions: yup.boolean(),
  mushrooms: yup.boolean(),
});

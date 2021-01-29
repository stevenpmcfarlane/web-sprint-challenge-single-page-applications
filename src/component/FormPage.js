import React, { useState, useEffect } from "react";
import * as yup from "yup";
import PizzaForm from "./Form";
import formSchema from "../validation/formSchema";
import axios from "axios";
import "../App.css";

const initialFormValues = {
  name: "",
  size: "",
  pepperoni: false,
  sausage: false,
  onion: false,
  mushroom: false,
  instructions: "",
};
const initialFormErrors = {
  name: "",
  instructions: "",
  size: "",
};

const initialDisabled = true;
const initialOrderInfo = {};
//state values
export default function FormPage() {
  const [orderInfo, setOrderInfo] = useState(initialOrderInfo);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setButtonDisabled] = useState(initialDisabled);
  //post request
  const postNewOrderInfo = (newOrderInfo) => {
    axios
      .post("https://reqres.in/api/pizza", newOrderInfo)
      .then((res) => {
        setOrderInfo(res.data);
        setFormValues(initialFormValues);
        console.log(orderInfo);
      })
      .catch((error) => {
        console.log("there was an error ", error);
      });
  };

  //validation useEffect
  const inputChange = (name, value) => {
    // 🔥 STEP 10- RUN VALIDATION WITH YUP
    yup
      .reach(formSchema, name)
      .validate(value)
      .then(() => {
        setFormErrors({
          ...formErrors,
          [name]: "",
        });
      })
      .catch((error) => {
        setFormErrors({
          ...formErrors,
          [name]: error.errors[0],
        });
      });

    setFormValues({
      ...formValues,
      [name]: value, // NOT AN ARRAY
    });
  };

  const formSubmit = () => {
    const newOrderInfo = {
      username: formValues.name.trim(),
      size: formValues.size.trim(),
      instructions: formValues.instructions.trim(),
      // Checkboxes
      toppings: ["pepperoni", "sausage", "onions", "mushrooms"].filter(
        (toppings) => formValues[toppings]
      ),
    };
    postNewOrderInfo(newOrderInfo);
  };

  //////////////// SIDE EFFECTS ////////////////
  //////////////// SIDE EFFECTS ////////////////
  //////////////// SIDE EFFECTS ////////////////

  useEffect(() => {
    // 🔥 STEP 9- ADJUST THE STATUS OF `disabled` EVERY TIME `formValues` CHANGES
    formSchema.isValid(formValues).then((valid) => {
      setButtonDisabled(!valid);
    });
  }, [formValues]);

  return (
    <div>
      <h1>Lambda Eats</h1>
      <p>Everybody Eats, tm8s!</p>

      <div>
        <PizzaForm
          values={formValues}
          change={inputChange}
          submit={formSubmit}
          disabled={disabled}
          errors={formErrors}
        />
      </div>
    </div>
  );
}

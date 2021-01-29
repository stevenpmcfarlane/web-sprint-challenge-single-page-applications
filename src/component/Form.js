import React from "react";
import { Route, Link, Switch } from "react-router-dom";
import App from "./FormPage";

export default function PizzaForm(props) {
  const { values, submit, change, disabled, errors } = props;

  const onSubmit = (evt) => {
    evt.preventDefault();
    submit();
  };

  const onChange = (evt) => {
    /* 🔥 FIX THIS SO IT ALSO WORKS WITH CHECKBOXES */
    const { name, value, checked, type } = evt.target;
    const valueToUse = type === "checkbox" ? checked : value;
    change(name, valueToUse);
  };

  return (
    <form className="form container" onSubmit={onSubmit}>
      <div className="form submit">
        <h2>Order Form</h2>

        {/* 🔥 DISABLE THE BUTTON */}
        <button name="orderbutton" disabled={disabled}>
          Add to Order
        </button>

        <div className="errors">
          {/* 🔥 RENDER THE VALIDATION ERRORS HERE */}
          <div>{errors.name}</div>
        </div>
      </div>

      <div className="form inputs">
        <h4>General information</h4>

        <label>
          Name
          <input
            value={values.name}
            onChange={onChange}
            name="name"
            type="text"
          />
        </label>

        <label>
          instructions
          <input
            value={values.instructions}
            onChange={onChange}
            name="instructions"
            type="text"
          />
        </label>
        <label>
          Size
          <select onChange={onChange} value={values.size} name="size">
            <option value="">- Select an option -</option>
            <option value="big">Big</option>
            <option value="jumbo">Jumbo</option>
            <option value="bigdaddy">Big Daddy</option>
          </select>
        </label>

        <h4>Toppings</h4>
        <label>
          Pepperoni
          <input
            type="checkbox"
            name="pepperoni"
            checked={values.pepperoni}
            onChange={onChange}
          />
        </label>

        <label>
          Sausage
          <input
            type="checkbox"
            name="sausage"
            checked={values.sausage}
            onChange={onChange}
          />
        </label>

        <label>
          Onions
          <input
            type="checkbox"
            name="onions"
            checked={values.onions}
            onChange={onChange}
          />
        </label>
        <label>
          Mushrooms
          <input
            type="checkbox"
            name="mushrooms"
            checked={values.mushrooms}
            onChange={onChange}
          />
        </label>
      </div>
    </form>
  );
}

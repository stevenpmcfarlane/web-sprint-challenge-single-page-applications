import React from "react";
// We'll need React Router's own version of the History API
import { useHistory } from "react-router-dom";

export default function Home() {
  // 👉 STEP 5 - Build a click handler that will imperatively
  const history = useHistory();

  const routeToPizzaForm = () => {
    console.log(history);
    history.push("/pizza");
  };

  return (
    <div className="home-wrapper">
      <img
        className="home-image"
        //src="https://source.unsplash.com/F6-U5fGAOik"
        alt=""
      />
      <button onClick={routeToPizzaForm} className="pizza form route button">
        Order Pizza Now!
      </button>
    </div>
  );
}

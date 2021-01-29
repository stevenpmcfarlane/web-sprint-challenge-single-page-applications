import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./component/Home";
import FormPage from "./component/FormPage";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/pizza" exact>
          <FormPage />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;

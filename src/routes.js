import React from "react";
import { Router, Routes, Route } from "react-router-dom";

//history
import { history } from "./helpers/history";

//pages
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/Login";

function Routes() {
  return (
    <Router history={history}>
      <Routes>
        <Route exact path="/" component={HomePage} />
        <Route path="/login" component={LoginPage} />
        <Redirect to="/" />
      </Routes>
    </Router>
  );
}

export default Routes;

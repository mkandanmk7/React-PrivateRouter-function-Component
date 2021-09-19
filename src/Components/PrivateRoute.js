import React from "react";

import { Route } from "react-router-dom";

export const PrivateRoute = ({ path, component: Component }) => {
  return (
    <Route
      path={path}
      render={({ history, Name, Course, Institute }) => {
        const isLoggedIn = localStorage.getItem("isLoggedIn");
        return isLoggedIn ? (
          <Component
            history={history}
            Name="Muthu"
            Course="Full Stack Web Developer"
            Institute="Guvi"
          />
        ) : (
          <p>
            Please <b>Login</b> Private component!
          </p>
        );
      }}
    />
  );
};

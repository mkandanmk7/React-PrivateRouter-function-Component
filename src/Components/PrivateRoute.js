import React from "react";

import { Route } from "react-router-dom";

export const PrivateRoute = ({ path, component: Component }) => {
  return (
    <Route
      path={path}
      render={() => {
        const isLoggedIn = localStorage.getItem("isLoggedIn");
        return isLoggedIn ? (
          <Component />
        ) : (
          <p>
            Please <b>Login</b> Private component!{" "}
          </p>
        );
      }}
    />
  );
};

import React from "react";
import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <div>
      <NavLink exact activeStyle={{ color: "Red" }} to="/">
        Home
      </NavLink>
      <NavLink activeStyle={{ color: "red" }} to="/posts">
        Posts
      </NavLink>
      <NavLink activeStyle={{ color: "Red" }} to="/about">
        About
      </NavLink>
    </div>
  );
};

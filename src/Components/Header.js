import React from "react";
import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <div>
      <NavLink to="/home">Home</NavLink>
      <NavLink to="/posts">Posts</NavLink>
      <NavLink to="/about">About</NavLink>
    </div>
  );
};

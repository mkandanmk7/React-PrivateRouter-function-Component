import React from "react";
import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <div>
      <NavLink
        exact
        activeStyle={{
          background: "#acd",
          border: "1px solid red",
          borderRadius: "50%",
          margin: "10px",
          padding: "10px",
          color: "#000",
          fontWeight: "bold",
          textDecoration: "none",
        }}
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        activeStyle={{
          background: "#acd",
          border: "1px solid red",
          borderRadius: "20%",
          margin: "10px",
          padding: "10px",
          color: "#000",
          fontWeight: "bold",
          textDecoration: "none",
        }}
        to="/posts"
      >
        Posts
      </NavLink>
      <NavLink
        activeStyle={{
          background: "#acd",
          border: "1px solid red",
          borderRadius: "50%",
          margin: "10px",
          padding: "10px",
          color: "#000",
          fontWeight: "bold",
          textDecoration: "none",
        }}
        to="/about"
      >
        About
      </NavLink>
      <NavLink
        activeStyle={{
          background: "#acd",
          border: "1px solid red",
          borderRadius: "50%",
          margin: "10px",
          padding: "10px",
          color: "#000",
          fontWeight: "bold",
        }}
        to="/private"
      >
        Private
      </NavLink>
      {/* //set login key and value using local Storage.setItem() */}

      <button
        onClick={() => {
          console.log("Logged In");
          localStorage.setItem("isLoggedIn", true);
        }}
      >
        Login
      </button>
    </div>
  );
};

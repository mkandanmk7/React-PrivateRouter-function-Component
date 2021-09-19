import React from "react";

export const About = ({ history, Name, Course, Institute }) => {
  console.log(history);
  return (
    <>
      <h1>Welcome to About Component !</h1>
      <p>
        <b>Name:</b>
        {Name}
      </p>
      <p>
        <b>Course:</b>
        {Course}
      </p>
      <p>
        <b>Institute:</b>
        {Institute}
      </p>
    </>
  );
};

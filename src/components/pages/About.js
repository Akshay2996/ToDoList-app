import React from "react";

function About() {
  return (
    <>
      <h1 style={{ textAlign: "center" }}>About</h1>
      <p style={{ textAlign: "center" }}>
        This is the ToDoList app made by{" "}
        <a
          href="https://www.developeratease.com/"
          target="_Blank"
          rel="noopener noreferrer"
          style={{ fontWeight: "bold", textDecoration: "underline" }}
        >
          Akshay Sharma
        </a>{" "}
        based on the tutorial from Brad Traversy on youtube
      </p>
    </>
  );
}

export default About;

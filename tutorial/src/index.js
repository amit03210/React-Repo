import React from "react";
import ReactDom from "react-dom/client";

function Greeting() {
  return <h1>My First Component</h1>;
}

const root = ReactDom.createRoot(document.getElementById("root"));

root.render(<Greeting />);

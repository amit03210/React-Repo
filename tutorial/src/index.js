import { React, Component } from "react";
import ReactDom from "react-dom/client";
// function Greeting() {
//   return <h1>My First Component</h1>;
// }

class Greeting extends Component {
  render() {
    return <h1>Hello, JS</h1>;
  }
}

const root = ReactDom.createRoot(document.getElementById("root"));

root.render(<Greeting />);

import { React, Component } from "react";
import ReactDom from "react-dom/client";
 function Greeting() {.
   return <h1>My First Component</h1>;
 }

//class Greeting extends Component {
// render() {
//    return <h1>Hello, JS</h1>;
//  }
//}

import React, { useState } from 'react';

function Counter() {
  // Declare a state variable named "count" starting at 0
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

export default Counter;


const root = ReactDom.createRoot(document.getElementById("root"));

root.render(<Greeting />);

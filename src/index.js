import React from "react";
import ReactDOM from "react-dom";
import ppp, { doublePi, triplePi, quadraasdqweasasPi } from "./math";

ReactDOM.render(
  <ul>
    <li>{ppp}</li>
    <li>{doublePi()}</li>
    <li>{triplePi()}</li>
    <li>{quadraasdqweasasPi}</li>
  </ul>,
  document.getElementById("root")
);

import React from "react";
import ReactDOM from "react-dom";

import { CarTool } from "./components/CarTool";
const carsList = [
  {
    id: 1,
    make: "Ford",
    model: "Ford Hybrid",
    year: 1990,
    color: "red",
    price: 2000,
  },
  {
    id: 2,
    make: "Merc",
    model: "Merc Hybrid",
    year: 1980,
    color: "golden",
    price: 50,
  },
];

ReactDOM.render(<CarTool cars={carsList} />, document.querySelector("#root"));

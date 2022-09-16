import React from "react";
import ReactDOM from "react-dom";
import { AppRouter } from "./AppRouter";
import { BrowserRouter } from "react-router-dom";
import "./index.css";

ReactDOM.render(
<BrowserRouter><AppRouter/></BrowserRouter>, document.getElementById("root"));
import React from "react";
import ReactDOM from "react-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap-icons/font/bootstrap-icons.css";
import "animate.css/animate.min.css";
import "./index.css";

import { NoNameApp } from "./components/NoNameApp";

document.body.style = "min-height: 100vh";

ReactDOM.render(<NoNameApp />, document.querySelector("#root"));

import React from "react";
import ReactDOM from "react-dom/client";
import Router from "./Router";
import "./Main.css";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <BrowserRouter>
    <Router />
  </BrowserRouter>
  // </React.StrictMode>
);

import React from "react";
import ReactDOM from "react-dom/client";
import Router from "./Router";
import "./Main.css";
import { BrowserRouter } from "react-router-dom";
import { store } from "./context/store";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <BrowserRouter>
    <Provider store={store}>
      <Router />
    </Provider>
  </BrowserRouter>
  // </React.StrictMode>
);

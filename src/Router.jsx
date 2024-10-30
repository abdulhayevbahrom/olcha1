import React from "react";
import Header from "./components/header/Header";
import Home from "./routers/home/Home";
import Compare from "./routers/compare/Compare";
import Heart from "./routers/heart/Heart";
import Cart from "./routers/cart/Cart";
import { Routes, Route } from "react-router-dom";

function Router() {
  let routes = [
    { path: "/", component: <Home /> },
    { path: "/compare", component: <Compare /> },
    { path: "/heart", component: <Heart /> },
    { path: "/cart", component: <Cart /> },
  ];

  return (
    <div id="router">
      <Header />
      <Routes>
        {routes?.map((rt, inx) => (
          <Route key={inx} path={rt.path} element={rt.component} />
        ))}
      </Routes>
    </div>
  );
}

export default Router;

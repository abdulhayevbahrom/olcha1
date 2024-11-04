import React from "react";
import "./Home.css";
import Banner from "../../components/banner/Banner";
import Catalogs from "../../components/catalogs/Catalogs";
import Images from "../../components/images/Images";
import Products from "../../components/products/Products";

function Home() {
  return (
    <div className="home">
      <Banner />
      <Catalogs />
      <Images />
      <Products />
    </div>
  );
}

export default Home;

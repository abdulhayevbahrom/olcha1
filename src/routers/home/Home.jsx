import React from "react";
import "./Home.css";
import Banner from "../../components/banner/Banner";
import Catalogs from "../../components/catalogs/Catalogs";
import Images from "../../components/images/Images";
import Products from "../../components/products/Products";
import Products_witdh from "../../components/products_witdh/Products_witdh";
import Products_witdh_for from "../../components/products_witdh_for/Products_witdh_for";

function Home() {
  return (
    <div className="home">
      <Banner />
      <Catalogs />
      <Images />
      <Products />
      <Products_witdh />
      <Products_witdh_for />
    </div>
  );
}

export default Home;

import React from "react";
import "./Home.css";
import Banner from "../../components/banner/Banner";
import Catalogs from "../../components/catalogs/Catalogs";
import Images from "../../components/images/Images";
import Products from "../../components/products/Products";
import ProductWithImages from "../../productWithImages/ProductWithImages";
import SliderCatalog from "../../components/sliderCatalog/SliderCatalog";

function Home() {
  return (
    <div className="home">
      <Banner />
      <Catalogs />
      <Images />
      <Products />
      <Products />
      <ProductWithImages />
      <SliderCatalog />
      <ProductWithImages />
      <SliderCatalog />
      <ProductWithImages />
      <SliderCatalog />
      <ProductWithImages />
      <SliderCatalog />
      <ProductWithImages />
      <ProductWithImages />
    </div>
  );
}

export default Home;

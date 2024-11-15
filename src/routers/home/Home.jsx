import React from "react";
import "./Home.css";
import Banner from "../../components/banner/Banner";
import Catalogs from "../../components/catalogs/Catalogs";
import Images from "../../components/images/Images";
import Products from "../../components/products/Products";
import ProductWithImages from "../../productWithImages/ProductWithImages";
import SliderCatalog from "../../components/sliderCatalog/SliderCatalog";
import CatalogFamily from "../../components/catalogFamily/CatalogFamily";
import Footer from "../../components/footer/Footer";
import ProductsWitdh from "../../components/products_witdh/Products_witdh";
import ProductsWitdhFor from "../../components/products_witdh_for/Products_witdh_for";

function Home() {
  return (
    <div className="home">
      <Banner />
      <Catalogs />
      <Images />
      <Products />
      <Products />
      <ProductsWitdh />
      <ProductWithImages />
      <SliderCatalog />
      <CatalogFamily />
      <ProductWithImages />
      <ProductsWitdhFor />
      <Footer />
    </div>
  );
}

export default Home;

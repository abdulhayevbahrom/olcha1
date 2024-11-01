import React from "react";
import "./Home.css";
import Banner from "../../components/banner/Banner";
import Catalogs from "../../components/catalogs/Catalogs";

function Home() {
  return (
    <div className="home">
      <Banner />
      <Catalogs />
    </div>
  );
}

export default Home;

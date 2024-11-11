import React from "react";
import "./Compare.css";
import { Link } from "react-router-dom";

function Compare() {
  return (
    <div className="compare">
      <h1>Tovarlarni solishtirish</h1>
      <div className="compare_item">
        <img src="https://olcha.uz/_nuxt/empty-icon.DX6S2-bK.png" alt="" />
        <h2>Afsuski, bunday mahsulot hozirda mavjud emas.</h2>
        <p>Mahsulot nomida xatolik yoki bizda hali bunday mahsulot boʻlmasligi mumkin</p>
        <Link to={"/"}>
          <button>Asosiy sahifaga</button>
        </Link>
      </div>
    </div>
  );
}

export default Compare;

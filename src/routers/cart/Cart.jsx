import React, { useState } from "react";
import "./Cart.css";
import { Link } from 'react-router-dom';
import { FiMinus } from "react-icons/fi";
import { FiPlus } from "react-icons/fi";

function Cart() {
  const [phone, setPhone] = useState("");

  const handleChange = (e) => {
    const formattedPhone = e.target.value
      .replace(/\D/g, "")
      .replace(/(\d{3})(\d{3})(\d{2})(\d{2})/, "($1) $2-$3-$4");
    setPhone(formattedPhone);
  };

  return (
    <div className="cart">
      <div className="cart_empty">
        <img src="https://olcha.uz/_nuxt/cart.DYGF4swC.png" alt="" />
        <h2>Savatchangiz bo'sh</h2>
        <p>Lekin siz uni har doim to'ldirishingiz mumkin</p>
        <Link to={"/"}>
          <button className="hom">Asosiy sahifaga</button>
        </Link>
      </div>

      <div className="cart_item">
        <h1>Savatchada 1 mahsulot bor</h1>
        <div className="cart_box">
          <div className="left">
            <img src="https://olcha.uz/image/original/products/cdn_1/supplier/stores/1/2024-10-29/ZceOitABHblx8Wp0HBQo1xdGsuOjYeZwWt3T0yiX9HSXUaE834QbZRYjb8Az.jpg" alt="" />
            <div className="cart_lorme">
              <Link className="oyin_konsoli">O‘yin konsoli Sony PlayStation 5 Slim CD ,1TB (from U.A.E)</Link>
              <p style={{ color: "#999", }}>De Dubai</p>
              <div style={{ display: "flex", color: "#999", }}>
                <img className="dubai" src="https://olcha.uz/image/original/delivery-locations/MnUZSxy2v00wdWE672r1TYUDsqXU5N5rU5QOX96d.png" alt="" />
                <p>Dubaydan</p>
              </div>
              <Link className="sevimlilar">Sevimlilarga qo'shish <p>|</p> Oʻchirish</Link>
            </div>
          </div>
          <div className="right">
            <button><FiMinus /><p>1</p><FiPlus /></button>
            <div>
              <b>7 300 000 so'm</b>
              <p>9 000 000 so'm</p>
            </div>
          </div>
        </div>
      </div>

      <div className="yourinformation">
        <h1>Sizning ma'lumotlaringiz</h1>
        <div>
          <div>
            <p>Ism va familiya</p>
            <input type="text"/>
            <div className="phone-input-container">
              <span className="country-code">+998</span>
              <input
                type="text"
                value={phone}
                onChange={handleChange}
                placeholder="(__) ___-__-__"
                maxLength="14"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
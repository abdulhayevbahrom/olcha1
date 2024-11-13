import React, { useState } from "react";
import "./Cart.css";
import { Link } from 'react-router-dom';
import { FiMinus } from "react-icons/fi";
import { FiPlus } from "react-icons/fi";
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';

function Cart() {
  const [phone, setPhone] = useState('');

  return (
    <div className="cart">
      {/* <div className="cart_empty">
        <img src="https://olcha.uz/_nuxt/cart.DYGF4swC.png" alt="" />
        <h2>Savatchangiz bo'sh</h2>
        <p>Lekin siz uni har doim to'ldirishingiz mumkin</p>
        <Link to={"/"}>
        <button className="hom">Asosiy sahifaga</button>
        </Link>
      </div> */}

      <div>

        <div className="cart_item">
          <h1>Savatchada 1 mahsulot bor</h1>
          <div className="cart_box">
            <div className="cart_d">
              <div className="left">
                <img src="https://olcha.uz/image/original/products/cdn_1/supplier/stores/1/2024-10-28/2LuMm7dzhQZaMZaIEQnJsH7wj3AqG0vt6OJsI1Fy7wAlhVbpcMH6CZrwVm4N.jpg" alt="" />
                <div className="cart_lorme">
                  <Link className="oyin_konsoli">Simsiz minigarnituralar LX 10 Qora</Link>
                  <p style={{ color: "#999", }}>Audio Magaza</p>
                  {/* <div style={{ display: "flex", color: "#999", }}>
                    <img className="dubai" src="https://olcha.uz/image/original/delivery-locations/MnUZSxy2v00wdWE672r1TYUDsqXU5N5rU5QOX96d.png" alt="" />
                    <p>Dubaydan</p>
                  </div> */}
                  <Link className="sevimlilar">Sevimlilarga qo'shish <p>|</p> Oʻchirish</Link>
                </div>
              </div>
              <div className="right">
                <button><FiMinus /><p>1</p><FiPlus /></button>
                <div>
                  <b>195 000 so'm</b>
                  <p>215 000 so'm</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="yourinformation">
          <h1>Sizning ma'lumotlaringiz</h1>
          <div className="coverInput">
            <div>
              <p>Ism va familiya</p>
              <input className="email" type="text" />
            </div>
            <div>
              <p>Telefon</p>
              <PhoneInput className="number" defaultCountry="uz" value={phone} onChange={(phone) => setPhone(phone)} />
            </div>
          </div>
        </div>
      </div>

      <div className="cart_item_left">
        <div className="jami"><h1>Jami:</h1><h1 style={{ fontFamily: "sans-serif" }}>7 300 000 so'm</h1></div>
        <p className="tejov">Tejovingiz:<span style={{ fontFamily: "sans-serif" }}> 1 700 000</span> so'm</p>
        <div className="kiritish">
          <input type="text" placeholder="Promokodni kirgazing" />
          <button>Kiritish</button>
        </div>
        <div className="prise"><b>Qiymati:</b><p>7 300 000 so'm</p></div>
        <div className="prise"><b>Promokod:</b><p>0 so'm</p></div>
        <div className="prise"><b>Ishlatilgan bonus:</b><p>0 so'm</p></div>
        <div className="prise"><b>Naqd pul to'lash uchun <br /> komissiya miqdori:</b><p>0 %</p></div>
        <div className="prise"><b>Yetkazib berish <br /> summasi:</b><p>0 so'm</p></div>
        <div className="prises"><b>Yetkazib berish:</b><p>Kurer orqali yetqazib <br /> berish</p></div>
        <div className="prise"><b>To'lov turi:</b><p></p></div>
        <div className="prise"><b>Buyurtma turi:</b><p>To'liq to'lash</p></div>
        <button>Buyurtma berish</button>
        <p className="shartnoma">"Buyurtma berish" tugmasi bosish orqali <span> ommaviy taklif shartnomasiga</span> roziman</p>
      </div>
    </div >
  );
}

export default Cart;
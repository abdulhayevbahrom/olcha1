import React, { useState } from "react";
import "./Cart.css";
import { Link } from "react-router-dom";
import { FiMinus } from "react-icons/fi";
import { FiPlus } from "react-icons/fi";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import { useSelector, useDispatch } from "react-redux";
import {
  removeFromCart,
  increment,
  decrement,
  clearCart,
} from "../../context/cartSlice";
import { NumberFormat } from "../../hook/numberFormat";

function Cart() {
  const dispatch = useDispatch();
  const cartData = useSelector((s) => s.cart);
  console.log(cartData);

  const [phone, setPhone] = useState("");

  let totalPrice = cartData
    .map((item) => item.price * item.quantity)
    .reduce((a, b) => a + b, 0);

  return (
    <div className="cart">
      {!cartData.length ? (
        <div className="cart_empty">
          <img src="https://olcha.uz/_nuxt/cart.DYGF4swC.png" alt="" />
          <h2>Savatchangiz bo'sh</h2>
          <p>Lekin siz uni har doim to'ldirishingiz mumkin</p>
          <Link to={"/"}>
            <button className="hom">Asosiy sahifaga</button>
          </Link>
        </div>
      ) : (
        <>
          <div>
            <div className="cart_item">
              <h1>Savatchada {cartData.length} mahsulot bor</h1>
              <div className="cart_box">
                {cartData.map((item, index) => (
                  <div key={index} className="cart_d">
                    <div className="left">
                      <img src={item?.url || item?.images[0]} alt="" />
                      <div className="cart_lorme">
                        <Link className="oyin_konsoli">
                          {item.nomi || item.name}
                        </Link>
                        <p style={{ color: "#999" }}>{item?.brend || "-"}</p>
                        <Link className="sevimlilar">
                          Sevimlilarga qo'shish <p>|</p>{" "}
                          <button
                            onClick={() => dispatch(removeFromCart(item.id))}
                          >
                            {" "}
                            Oʻchirish
                          </button>
                        </Link>
                      </div>
                    </div>
                    <div className="right">
                      <div className="cart_right_actions">
                        <button
                          disabled={item.quantity === 1}
                          onClick={() => dispatch(decrement(item.id))}
                        >
                          <FiMinus />
                        </button>
                        <span>{item?.quantity || 1}</span>
                        <button onClick={() => dispatch(increment(item.id))}>
                          <FiPlus />
                        </button>
                      </div>
                      <div>
                        <b>{NumberFormat(item?.price || item?.narxi)} so'm</b>
                        <p>
                          {NumberFormat(
                            item?.price + (item?.price % 10) ||
                              item?.narxi + (item?.narxi % 10)
                          )}{" "}
                          so'm
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
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
                  <PhoneInput
                    className="number"
                    defaultCountry="uz"
                    value={phone}
                    onChange={(phone) => setPhone(phone)}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="cart_item_left">
            <div className="jami">
              <h1>Jami:</h1>
              <h1 style={{ fontFamily: "sans-serif" }}>
                {NumberFormat(totalPrice)} so'm
              </h1>
            </div>
            <p className="tejov">
              Tejovingiz:
              <span style={{ fontFamily: "sans-serif" }}> 1 700 000</span> so'm
            </p>
            <div className="kiritish">
              <input type="text" placeholder="Promokodni kirgazing" />
              <button>Kiritish</button>
            </div>
            <div className="prise">
              <b>Qiymati:</b>
              <p>{NumberFormat(totalPrice)} so'm</p>
            </div>
            <div className="prise">
              <b>Promokod:</b>
              <p>0 so'm</p>
            </div>
            <div className="prise">
              <b>Ishlatilgan bonus:</b>
              <p>0 so'm</p>
            </div>
            <div className="prise">
              <b>
                Naqd pul to'lash uchun <br /> komissiya miqdori:
              </b>
              <p>0 %</p>
            </div>
            <div className="prise">
              <b>
                Yetkazib berish <br /> summasi:
              </b>
              <p>0 so'm</p>
            </div>
            <div className="prises">
              <b>Yetkazib berish:</b>
              <p>
                Kurer orqali yetqazib <br /> berish
              </p>
            </div>
            <div className="prise">
              <b>To'lov turi:</b>
              <p></p>
            </div>
            <div className="prise">
              <b>Buyurtma turi:</b>
              <p>To'liq to'lash</p>
            </div>
            <button onClick={() => dispatch(clearCart())}>
              Buyurtma berish
            </button>
            <p className="shartnoma">
              "Buyurtma berish" tugmasi bosish orqali{" "}
              <span> ommaviy taklif shartnomasiga</span> roziman
            </p>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;

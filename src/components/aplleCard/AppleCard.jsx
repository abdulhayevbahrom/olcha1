import React from "react";
import "./AplleCard.css";
import { FaRegHeart } from "react-icons/fa";
import { IoStatsChart } from "react-icons/io5";
import { BsCart2 } from "react-icons/bs";

function AppleCard() {
  return (
    <div className="aplleCard">
      <h1>
        <h2>Aplle texnikasi</h2> <a href="/">Barchasini korish ></a>
      </h1>
      <div className="cover">
        <div className="aplleLeft">
          <div className="product_item">
            <button className="product_item_like">
              <FaRegHeart />
            </button>
            <button className="product_item_compare">
              <IoStatsChart />
            </button>
            <figure>
              <img
                src="https://olcha.uz/image/220x220/products/oeOsArYZhSFQeIFhNzxJpcrKS6IIfgYx8UAor7Qk51Y9xjkUY3t8zJdu29ve.jpg"
                alt=""
              />
            </figure>
            <p className="product_item_name">Aplle magic mouse 3</p>
            <p className="product_item_price">1 389 370 so'm </p>
            <p className="product_item_credit_price">
              {Math.round(1389370 / 12)} so'm x 12 oy{" "}
            </p>
            <div className="product_item_actions">
              <BsCart2 />
              <button>Muddatli to'lov</button>
            </div>
            <div className="aplleCardBottom">
              <img
                src="https://olcha.uz/image/220x220/products/2022-12-20/smart-chasy-apple-watch-ultra-183720-0.jpeg"
                alt=""
              />
              <div className="rightCard">
                <h2>Aqili soat Apple Watch Ultra</h2>
                <p>11 916 953 so'm </p>
                <h3>1 396 000 so'm x 12 oy</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="aplleRight">
          <div className="appleTop">
            <div className="appleTopLeft">
              <video controls src="https://youtu.be/eDqfg_LexCQ"></video>
            </div>
            <div className="appleTopRight">
              <img
                src="https://olcha.uz/image/220x220/products/2022-12-20/smart-chasy-apple-watch-ultra-183720-0.jpeg"
                alt=""
              />
              <div className="rightCardTop">
                <h2 className="titleA">
                  magic-keyboard-russian-129-inch-2021-belyi
                </h2>
                <p className="priceA">5 863 113 so'm</p>
                <h3 className="credit">1 396 000 so'm x 12 oy</h3>
              </div>
            </div>
          </div>
          <div className="appleBottom"></div>
        </div>
      </div>
    </div>
  );
}

export default AppleCard;

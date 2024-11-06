import React from "react";
import "./Products.css";
import { elektronika } from "../../data/product";
import { FaRegHeart } from "react-icons/fa";
import { IoStatsChart } from "react-icons/io5";
import { BsCart2 } from "react-icons/bs";

function Products() {
  return (
    <div className="products">
      {elektronika?.map((item, index) => (
        <div key={index} className="product_item">
          {item.discount > 0 && (
            <div className="product_item_discount">{item.discount}%</div>
          )}
          <button className="product_item_like">
            <FaRegHeart />
          </button>
          <button className="product_item_compare">
            <IoStatsChart />
          </button>
          <figure>
            <img src={item.images[0]} alt={item.name} />
          </figure>
          <p className="product_item_name">{item.name}</p>
          <p
            style={{ color: !item.discount > 0 ? "#000" : "red" }}
            className="product_item_price"
          >
            {item.price} so'm{" "}
          </p>
          {item.discount > 0 && (
            <p className="product_item_price_old">{item.price} so'm </p>
          )}
          <p className="product_item_credit_price">
            {Math.round(item.price / 12)} so'm x 12 oy{" "}
          </p>
          <div className="product_item_actions">
            <BsCart2 />
            <button>Muddatli to'lov</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Products;

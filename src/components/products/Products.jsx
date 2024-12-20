import React, { useState } from "react";
import "./Products.css";
import { elektronika } from "../../data/product";
import { FaRegHeart } from "react-icons/fa";
import { IoStatsChart } from "react-icons/io5";
import { BsCart2 } from "react-icons/bs";
import InstallmentPayment from "../../routers/installment_payment/Installment_payment";
import { useDispatch, useSelector } from "react-redux";
import { addToCompare, removeFromCompare } from "../../context/compareSlice";
import { addToHeart, removeFromHeart } from "../../context/heartSlise";
import { FaHeart } from "react-icons/fa";

function Products() {
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const heartData = useSelector((state) => state.heart);
  const compareData = useSelector((state) => state.compare);
  console.log(compareData);

  return (
    <div className="products">
      {show && <InstallmentPayment data={show} setShow={setShow} />}
      {elektronika?.map((item, index) => (
        <div key={index} className="product_item">
          {item.discount > 0 && (
            <div className="product_item_discount">{item.discount}%</div>
          )}

          {heartData.some((i) => i.id === item.id) ? (
            <button
              onClick={() => dispatch(removeFromHeart(item.id))}
              style={{ color: "crimson" }}
              className="product_item_like"
            >
              <FaHeart />
            </button>
          ) : (
            <button
              onClick={() => dispatch(addToHeart(item))}
              className="product_item_like"
            >
              <FaRegHeart />
            </button>
          )}

          {!compareData.some((i) => i.id === item.id) ? (
            <button
              onClick={() => dispatch(addToCompare(item))}
              className="product_item_compare"
            >
              <IoStatsChart />
            </button>
          ) : (
            <button
              onClick={() => dispatch(removeFromCompare(item.id))}
              style={{ color: "crimson" }}
              className="product_item_compare"
            >
              <IoStatsChart />
            </button>
          )}
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
            <BsCart2 onClick={() => setShow(item)} />
            <button>Muddatli to'lov</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Products;

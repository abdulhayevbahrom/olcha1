import React from 'react';
import "./ProductWithImages.css"
import rasm1 from "./Image1.png"
import { elektronika } from "../../src/data/product"
import { FaRegHeart } from "react-icons/fa";
import { IoStatsChart } from "react-icons/io5";
import { BsCart2 } from "react-icons/bs";

function ProductWithImages() {
    return (
        <div className='productWithImages'>
                <img src={rasm1} alt="" />
                <div className="productWithImages">

                {elektronika?.map((item, index) => (
                    <div key={index} className="productWithImage_item">
                    {item.discount > 0 && (
                      <div className="productWithImage_item_discount">{item.discount}%</div>
                    )}
                    <button className="productWithImage_item_like">
                      <FaRegHeart />
                    </button>
                    <button className="productWithImage_item_compare">
                      <IoStatsChart />
                    </button>
                    <figure>
                      <img src={item.images[0]} alt={item.name} />
                    </figure>
                    <p className="productWithImage_item_name">{item.name}</p>
                    <p
                      style={{ color: !item.discount > 0 ? "#000" : "red" }}
                      className="productWithImage_item_price"
                    >
                      {item.price} so'm{" "}
                    </p>
                    {item.discount > 0 && (
                      <p className="productWithImage_item_price_old">{item.price} so'm </p>
                    )}
                    <p className="productWithImage_item_credit_price">
                      {Math.round(item.price / 12)} so'm x 12 oy{" "}
                    </p>
                    <div className="productWithImage_item_actions">
                      <BsCart2 />
                      <button>Muddatli to'lov</button>
                    </div>
                  </div>
                ))}
                </div>
        </div>
    );
}

export default ProductWithImages;
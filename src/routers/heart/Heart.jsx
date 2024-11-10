import React from 'react';
import "./Heart.css";
import { sevimlilar } from '../../data/product';
import { FaRegHeart } from 'react-icons/fa';
import { FiMinus } from 'react-icons/fi';
import { FiPlus } from 'react-icons/fi';
import { IoStatsChart } from 'react-icons/io5';
import { BsCart2 } from 'react-icons/bs';

function Heart() {
  return (
    <div className='heart'>
      {/* 
      <div>
      <img src="https://olcha.uz/_nuxt/empty-img.CsNCz2BZ.png" alt="" />
      <h2>Sevimli mahsulotlar yo'q</h2>
    </div> */}

      {sevimlilar?.map((item, index) => (
        <div className="heart_item">
          {item.discount > 0 && (
            <div className="heart_item_discount">{item.discount}%</div>
          )}
          <button className="heart_item_like">
            <FaRegHeart />
          </button>
          <button className="heart_item_compare">
            <IoStatsChart />
          </button>
          <figure>
            <img src={item.images[0]} alt={item.name} />
          </figure>
          <p className="heart_item_name">{item.name}</p>
          <div className='som'>
            <p
              style={{ color: !item.discount > 0 ? "#000" : "red" }}
              className="heart_item_price"
            >
              {item.price} so'm{" "}
            </p>
            {item.discount > 0 && (
              <p className="heart_item_price_old">{item.price} so'm </p>
            )}
          </div>
          <p className="heart_item_credit_price">
            {Math.round(item.price / 12)} so'm x 12 oy{" "}
          </p>
          <div className="heart_item_actions">
            <button><FiMinus /><p>1</p><FiPlus /></button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Heart;
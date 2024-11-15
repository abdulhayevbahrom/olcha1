import React from "react";
import "./Compare.css";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCompare, clearCompare } from "../../context/compareSlice";
import { FaRegTrashAlt } from "react-icons/fa";


function Compare() {
  const dispatch = useDispatch();
  const compareData = useSelector((s) => s.compare || []); 
  console.log(compareData);

  const handleRemove = (id) => {
    dispatch(removeFromCompare(id));
  };

  const handleClear = () => {
    dispatch(clearCompare());
  };

  return (
    <div className="compare">
      {!compareData.length ? (
        <div className="compare_empty">
          <img src="https://olcha.uz/_nuxt/empty-icon.DX6S2-bK.png" alt="Empty" />
          <h2>Afsuski, bunday mahsulot hozirda mavjud emas.</h2>
          <p>Mahsulot nomida xatolik yoki bizda hali bunday mahsulot boʻlmasligi mumkin</p>
          <Link to={"/"}>
            <button>Asosiy sahifaga</button>
          </Link>
        </div>
      ) : (
        <div className="compare_list">
          <h2>Comparison List</h2>
          <button className="clear_button" onClick={handleClear}>
            Tozalash
          </button>
          <div className="compare_items">
            {compareData.map((item, index) => (
              <>
              <a href="">
                <FaRegTrashAlt />
              </a>
              <div key={index} className="compare_item">
                <img className="with" src={item?.url || item?.images[0]} alt={item.name} />
                <div className="item_details">
                  <h3>{item.nomi || item.name}</h3>
                  <p>Price: {item.price} UZS</p>
                  <button onClick={() => handleRemove(item.id)}>Remove</button>
                </div>
              </div>
              </>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Compare;

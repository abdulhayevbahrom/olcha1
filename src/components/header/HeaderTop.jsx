  import React from "react";
import { Link } from "react-router-dom";

function HeaderTop() {
  return (
    <div className="header-top">
      <div className="header_top_left">
        <Link className="bg_white">0% Muddatli tolov</Link>
        <Link className="header_top_left_link">Chegirmalar</Link>
        <Link className="bg_white">Yutuqli o'yinlar</Link>
        <Link>Sayt xaritasi</Link>
      </div>
      <div className="header_top_right">
        <a className="phoneNumber" href="tel:+998939119572">
          +998 (93) 911 9572
        </a>
        <Link className="header_top_left_link header_top_left_link1">Olchada soting</Link>
        <div className="lang">
          <button>Ўзб</button>
          <button className="active">O'z</button>
          <button>Рус</button>
        </div>
      </div>
    </div>
  );
}

export default HeaderTop;

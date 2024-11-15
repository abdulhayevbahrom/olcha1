import React from "react";
import "./Header.css";
import HeaderTop from "./HeaderTop";
import logo from "../../assets/logo.png";
import { FaBars } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { Link } from "react-router-dom";
import { IoStatsChart } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { BsCart2 } from "react-icons/bs";
import { LuUser2 } from "react-icons/lu";
import { useTypewriter } from "react-simple-typewriter";
import { useSelector } from "react-redux";

const Header = () => {
  const heartData = useSelector((state) => state.heart);
  const cartData = useSelector((state) => state.cart);
  const compareData = useSelector((state) => state.compare);

  const [text] = useTypewriter({
    words: [
      "Televizor",
      "Muzlatgich",
      "Kompyuterlar",
      "Konditsionerlar",
      "telefonlar",
      "Smartfonlar",
      "Klaviaturalar",
      "Sichqonchalar",
    ],
    loop: 0,
  });
  return (
    <>
      <HeaderTop />
      <header>
        <Link to={"/"}>
          <img src={logo} alt="" className="logo" />
        </Link>
        <button className="catalogBtn">
          <FaBars />
          Katalog
        </button>
        <div className="searchbar">
          <input type="text" placeholder={text} />
          <button>
            <FiSearch />
          </button>
        </div>
        <div className="nav_links">
          <Link to={"/compare"}>
            {compareData.length ? <span>{compareData.length}</span> : ""}
            <IoStatsChart />
            <p>Taqqoslash</p>
          </Link>
          <Link to={"/heart"}>
            {heartData.length ? <span>{heartData.length}</span> : ""}
            <FaRegHeart />
            <p>Sevimlilar</p>
          </Link>
          <Link to={"/cart"}>
            <span>{cartData.length}</span>
            <BsCart2 />
            <p>Savatcha</p>
          </Link>
          <button>
            <LuUser2 />
            <p>Kirish</p>
          </button>
        </div>
      </header>
    </>
  );
};

export default Header;

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

const Header = () => {
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
        <img src={logo} alt="" className="logo" />
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
            <IoStatsChart />
            <p>Taqqoslash</p>
          </Link>
          <Link to={"/heart"}>
            <FaRegHeart />
            <p>Sevimlilar</p>
          </Link>
          <Link to={"/heart"}>
            <span>0</span>
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

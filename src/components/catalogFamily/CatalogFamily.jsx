import React from 'react';
import "./CatalogFamily.css"
import { FaRegHeart } from "react-icons/fa";
import { IoStatsChart } from "react-icons/io5";
import { BsCart2 } from "react-icons/bs";
import CatalogFamilyLeftImage from "./CatalogFamilyLeftImage1.jpg"

function CatalogFamily() {
    return (
        <div className='catalogFamily'>
            <div className="catalogFamilyLeft">
                <img src={CatalogFamilyLeftImage} alt="" />
            </div>
            <div className="catlogFamilyRight">
                <div className="productWithImage_item">
                    <button className="productWithImage_item_like">
                        <FaRegHeart />
                    </button>
                    <button className="productWithImage_item_compare">
                        <IoStatsChart />
                    </button>
                    <figure>
                        <img src="https://olcha.uz/image/220x220/products/fJUCbjhIo15C5srsC1cWoTcWqPcpSCjtHodfP6MSA7NT8DDE24EsJZRo6Naf.jpg" alt="" />
                    </figure>
                    <p className="productWithImage_item_name">Noutbook MSI Raider GE77HX 12UHS-082USi9  </p>
                    <p
                        className="productWithImage_item_price"
                    >
                        55 733 131 so'm
                    </p>
                    <p className="productWithImage_item_credit_price">
                        {Math.round(55773131 / 12)} so'm x 12 oy{" "}
                    </p>
                 
                </div>
                <div className="productWithImage_item">
                    <button className="productWithImage_item_like">
                        <FaRegHeart />
                    </button>
                    <button className="productWithImage_item_compare">
                        <IoStatsChart />
                    </button>
                    <figure>
                        <img src="https://olcha.uz/image/220x220/products/supplier/stores/1/2023-09-13/pQIvLk5PqlF9p4Wcobtd6rNjLTBo67eltmac4OoVMgVKa2X13vSXN9cITv77.jpg" alt="" />
                    </figure>
                    <p className="productWithImage_item_name">Iphone 15 Pro max 256GB Natural titanum </p>
                    <p
                        className="productWithImage_item_price"
                    >
                        17 473 800 so'm
                    </p>
                    <p className="productWithImage_item_credit_price">
                        {Math.round( 17473800 / 12)} so'm x 12 oy{" "}
                    </p>
                 
                </div>
                <div className="productWithImage_item">
                    <button className="productWithImage_item_like">
                        <FaRegHeart />
                    </button>
                    <button className="productWithImage_item_compare">
                        <IoStatsChart />
                    </button>
                    <figure>
                        <img src="https://olcha.uz/image/220x220/products/cdn_1/supplier/stores/1/2024-06-07/tqGChmLwX0hSVWVgVE9w74jCJgOuFRwgDQ0FXQLMA1mWoJhRi1zG9iOlaKtG.JPG" alt="" />
                    </figure>
                    <p className="productWithImage_item_name">Quloqchin sony brend qora va qimmat</p>
                    <p
                        className="productWithImage_item_price"
                    >
                        1 483 960 so'm
                    </p>
                    <p className="productWithImage_item_credit_price">
                        {Math.round( 1483960 / 12)} so'm x 12 oy{" "}
                    </p>
                 
                </div>
                <div className="productWithImage_item">
                    <button className="productWithImage_item_like">
                        <FaRegHeart />
                    </button>
                    <button className="productWithImage_item_compare">
                        <IoStatsChart />
                    </button>
                    <figure>
                        <img src="https://olcha.uz/image/220x220/products/VyPgqUqD96sheF0OHYCf3rk14n9rMUyBrMaG9zFreCRAepW4k78ktVxIbd8f.jpg" alt="" />
                    </figure>
                    <p className="productWithImage_item_name">Besprovney naushnik Samsung Galaxy Buds 2</p>
                    <p
                        className="productWithImage_item_price"
                    >
                        1 404 587 so'm
                    </p>
                    <p className="productWithImage_item_credit_price">
                        {Math.round(1404587 / 12)} so'm x 12 oy{" "}
                    </p>
                 
                </div>
            </div>
        </div>
    );
}

export default CatalogFamily;
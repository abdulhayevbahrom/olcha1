import React from 'react';
import "./Installment_payment.css";
import { IoStatsChart } from 'react-icons/io5';
import { FaRegHeart } from 'react-icons/fa';
import { LiaShareSolid } from "react-icons/lia";
import { Link } from 'react-router-dom';

function Installment_payment() {
    return (
        <div className='installment_payment'>
            <div className="installment_payment_old">
                <h1>Xiaomi Redmi 14C</h1>
                <div>
                    <Link className='taqqos'>
                        <IoStatsChart />
                        Taqqoslashga qo'shish
                    </Link>
                    <Link className='sarala'>
                        <FaRegHeart />
                        Saralanganlarga qo'shish
                    </Link>
                    <Link className='ulashish'>
                        <LiaShareSolid />
                        Ulashish
                    </Link>
                </div>
                <div className="left">
                    <img src="https://olcha.uz/image/700x700/products/cdn_1/supplier/stores/1/2024-10-29/LDzBeCfxXWQme7AFq4NIjmdttVPUTGLaraNahgbviRrffO73q5EMFRYAZBDg.jpg" alt="" />
                    <div>
                        <img src="https://olcha.uz/image/68x68/products/cdn_1/supplier/stores/1/2024-10-29/LDzBeCfxXWQme7AFq4NIjmdttVPUTGLaraNahgbviRrffO73q5EMFRYAZBDg.jpg" alt="" />
                        <img src="https://olcha.uz/image/68x68/products/cdn_1/supplier/stores/1/2024-09-19/tb6bFQkW07xWbT4Hsk6b6a4OBEKbn4GMbgkFalyVeXTjCLoazEV0sb1nxN3X.png" alt="" />
                    </div>
                </div>
                <div className="rught"></div>
            </div>
        </div>
    )
}

export default Installment_payment;
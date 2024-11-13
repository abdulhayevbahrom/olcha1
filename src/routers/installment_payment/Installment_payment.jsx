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
                <div className='taklif'>
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
                <div style={{ display: "flex" }}>
                    <div className="left">
                        <img className='left_bigimg' src="https://olcha.uz/image/700x700/products/cdn_1/supplier/stores/1/2024-10-29/LDzBeCfxXWQme7AFq4NIjmdttVPUTGLaraNahgbviRrffO73q5EMFRYAZBDg.jpg" alt="" />
                        <div>
                            <img src="https://olcha.uz/image/68x68/products/cdn_1/supplier/stores/1/2024-10-29/LDzBeCfxXWQme7AFq4NIjmdttVPUTGLaraNahgbviRrffO73q5EMFRYAZBDg.jpg" alt="" />
                            <img src="https://olcha.uz/image/68x68/products/cdn_1/supplier/stores/1/2024-09-19/tb6bFQkW07xWbT4Hsk6b6a4OBEKbn4GMbgkFalyVeXTjCLoazEV0sb1nxN3X.png" alt="" />
                        </div>
                    </div>
                    <div className="right">
                        <h1>1 924 502 so'm</h1>
                        <p>Rangi:</p>
                        <div className='rangi'>
                            <img src="https://olcha.uz/image/70x70/products/cdn_1/supplier/stores/1/2024-09-24/YyPd5KMuq0VZ8NZeyPFfP7r64WT1nT3vtkF5ccQdR9dyJPsTKZjgYjliYxgX.jpg" alt="" />
                            <img src="https://olcha.uz/image/70x70/products/cdn_1/supplier/stores/1/2024-09-24/w0h5sec5kX8cGj7QZsYRT62QOaPt8RUyIB9MaUyoISsFGFoiYNsuSz1u2jKR.jpg" alt="" />
                            <img src="https://olcha.uz/image/70x70/products/cdn_1/supplier/stores/1/2024-09-23/OaoVyEkWn6y3HxGopGJj1TNnzERKgyWEhBbWy7FSwLlSGszejIx0FLu2waCs.jpg" alt="" />
                            <img src="https://olcha.uz/image/70x70/products/cdn_1/supplier/stores/1/2024-09-24/bLdPKcS2RtIat8MT80QGNa1iEy8HvPHgt4Bs1w7uV4CdMc3MeUogPwl8J1p3.jpg" alt="" />
                        </div>
                        <div className='xotira'>
                            <p>Xotira:</p>
                            <button>4/128 GB</button>
                            <button>6/128 GB</button>
                            <button>8/256 GB</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Installment_payment;
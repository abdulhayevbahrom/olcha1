import React from 'react';
import "./Products.css"

function Products() {
    return (
        <div className='products'>
          {data?.map((item, imdex) => (
            <div className="product">
                <img src={} alt="" />
            </div>
          ))}
        </div>
    );
}

export default Products;
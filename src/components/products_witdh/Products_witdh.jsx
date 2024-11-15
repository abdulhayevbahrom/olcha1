import React from "react";
import "./Produtcs_witdh.css";
import { elektronikalar } from "../../data/product";
import { FaRegHeart } from "react-icons/fa";
import { IoStatsChart } from "react-icons/io5";
import { BsCart2 } from "react-icons/bs";

function Products_witdh() {
  return (
    <div>
      <div className="products_witdh">
        {elektronikalar?.map((item, index) => (
          <div key={index} className="products_witdh_item">
            {item.discount > 0 && (
              <div className="product_witdh_item_discount">
                {item.discount}%
              </div>
            )}
            <button className="products_witdh_item_like">
              <FaRegHeart />
            </button>
            <button className="products_witdh_item_compare">
              <IoStatsChart />
            </button>
            <figure>
              <img src={item.images[0]} alt={item.name} />
            </figure>
            <p className="products_witdh_item_name">{item.name}</p>
            <p
              style={{ color: !item.discount > 0 ? "#000" : "red" }}
              className="products_witdh_item_price"
            >
              {item.price} so'm{" "}
            </p>
            {item.discount > 0 && (
              <p className="products_witdh_item_price_old">
                {item.price} so'm{" "}
              </p>
            )}
            <p className="products_witdh_item_credit_price">
              {Math.round(item.price / 12)} so'm x 12 oy{" "}
            </p>
            <div className="products_witdh_item_actions">
              <BsCart2 />
              <button>Muddatli to'lov</button>
            </div>
          </div>
        ))}
        <img
          src="https://olcha.uz/image/272x444/homePage/cdn_1/2024-10-21/l8PPzsrJpBNpjXe7ddr8p4tzDwYpSzz2rywiHn29ljRm2CqXBCvHZU52kdly.jpg"
          alt=""
        />
      </div>

      {/* <Swiper
        onSwiper={setSwiperRef}
        slidesPerView={3}
        centeredSlides={true}
        spaceBetween={30}
        // pagination={{
          // type: 'fraction',
        // }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwipers"
      >
        <SwiperSlide className='reklam'>
          <div className='raklams'>
            <img src="https://olcha.uz/image/132x132/category/d4d6t7a1qSh6fBEToCRfVQY5O3w3mMxiChSDsbVALBxjxXGVeDo3qKG10Npi.png" alt="" />
            <h3>Videoregistratorlar va Radar-detektorlar</h3>
          </div>
        </SwiperSlide>
        <SwiperSlide className='reklam'>
          <div className='raklams'>
            <img src="https://olcha.uz/image/132x132/category/VasWe4boWvAg1agTYMzm9oh5SwRyrYcO8PMjks2Tl7n4RhICTS8eoWzm8yVI.png" alt="" />
            <h3>Avtoaksessuarlar</h3>
          </div>
        </SwiperSlide>
        <SwiperSlide className='reklam'>
          <div className='raklams'>
            <img src="https://olcha.uz/image/132x132/category/jsUPuEA9IHAEvkuJAwNGHjYkeVa2yJa6eQWK7EcDIdQMInif8HjQvQ8YlI36.png" alt="" />
            <h3>Minimoyka va yuqori bosimli nasoslar</h3>
          </div>
        </SwiperSlide>
        <SwiperSlide className='reklam'>
          <div className='raklams'>
            <img src="https://olcha.uz/image/132x132/category/1T79CVFM1tfWRjatnqv7RsWiFzFhvAeMEhbMZjc1bNceJR7ara6LAMBrjDb5.png" alt="" />
            <h3>Avto uchun rul</h3>
          </div>
        </SwiperSlide>
        <SwiperSlide className='reklam'>
          <div className='raklams'>
            <img src="https://olcha.uz/image/132x132/category/vlD2n0Fbfx743UyfQLWdKBiHCNHFLORvLwMUl9WaKNhQF6zrkMgvpo40P4tY.png" alt="" />
            <h3>Avtosignalizatsiya</h3>
          </div>
        </SwiperSlide>
        <SwiperSlide className='reklam'>
          <div className='raklams'>
            <img src="https://olcha.uz/image/132x132/category/7HyrXFsEIKJRBBMl4QywNFTtwbj8b58TiR0L8W48W7D2APlfC7YtOR87j27x.png" alt="" />
            <h3>Akkulmalyator</h3>
          </div>
        </SwiperSlide>
        <SwiperSlide className='reklam'>
          <div className='raklams'>
            <img src="https://olcha.uz/image/132x132/category/NnPrDfxRshNwGKZK2EzKgKxRJjNLV64aXAcoQbNkjYajTyQ514NgCnfQXHxL.png" alt="" />
            <h3>Shinalar</h3>
          </div>
        </SwiperSlide>
      </Swiper>
      <p className="append-buttons">
        <button onClick={() => prepend2()} className="prepend-2-slides">
          Prepend 2 Slides
        </button>
        <button onClick={() => prepend()} className="prepend-slide">
          Prepend Slide
        </button>
        <button onClick={() => append()} className="append-slide">
          Append Slide
        </button>
        <button onClick={() => append2()} className="append-2-slides">
          Append 2 Slides
        </button>
      </p> */}
    </div>
  );
}

export default Products_witdh;

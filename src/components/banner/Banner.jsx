import React from "react";
import "./Banner.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import img1 from "../../assets/swiper/1111.jpg";
import img2 from "../../assets/swiper/222.jpg";
import img3 from "../../assets/swiper/3333.jpg";
import img4 from "../../assets/swiper/444.jpg";
import img5 from "../../assets/swiper/5555.jpg";
import img6 from "../../assets/swiper/666.jpg";

function Banner() {
  let swiperData = [img1, img2, img3, img4, img5, img6];
  return (
    <div className="banner">
      <div className="banner_left">
        <Swiper
          cssMode={true}
          navigation={true}
          pagination={true}
          mousewheel={true}
          keyboard={true}
          modules={[Navigation, Pagination, Mousewheel, Keyboard]}
          className="mySwiper"
        >
          {swiperData.map((item, index) => (
            <SwiperSlide key={index}>
              <img src={item} alt="" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="banner_right">
        <div className="banner_right_top">
          <h2>Kun mahsuloti</h2>
          <div className="secund">
            <span>05</span>:<span>22</span>:<span>56</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;

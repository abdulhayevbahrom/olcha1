import React from "react";
import "./SliderCatalog.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules";
import Maishy2 from "./Maishy2.png";
import Maishy3 from "./Maishy3.png";
import Maishy1 from "./Maishy1.png";
import Maishy4 from "./Maishy4.png";
import Maishy5 from "./Maishy5.png";
import Maishy6 from "./Maishy6.png";
import Maishy7 from "./Maishy7.png";
import Maishy8 from "./Maishy8.png";
import Maishy9 from "./Maishy9.png";
import Maishy10 from "./Maishy10.png";
import Maishy11 from "./Maishy11.png";
import Maishy12 from "./Maishy12.png";
import Maishy13 from "./Maishy13.png";
import Maishy14 from "./Maishy14.png";
import Maishy15 from "./Maishy15.png";
import Maishy16 from "./Maishy16.png";
import Maishy17 from "./Maishy17.png";
import Maishy18 from "./Maishy18.png";
import Maishy19 from "./Maishy19.png";

function SliderCatalog() {
  let catalogsData = [
    {
      id: 1,
      img: Maishy1,
      title: "Maishy texnika",
    },
    {
      id: 2,
      img: Maishy2,
      title: "Barchasi oshxona uchun",
    },
    {
      id: 3,
      img: Maishy3,
      title: "Sport anjomlari",
    },
    {
      id: 4,
      img: Maishy4,
      title: "Go'zallik va salomatlik",
    },
    {
      id: 5,
      img: Maishy5,
      title: "Cheteldan tovarlar",
    },
    {
      id: 6,
      img: Maishy6,
      title: "Avto jihozlar",
    },
    {
      id: 7,
      img: Maishy7,
      title: "Barchasi ofis, uy va bog' uchun",
    },
    {
      id: 8,
      img: Maishy8,
      title: "Bolalar uchun o'yinchoqlar va",
    },
    {
      id: 9,
      img: Maishy9,
      title: "Kiyim va pardozlar",
    },
    {
      id: 10,
      img: Maishy10,
      title: "Kitoblar",
    },
    {
      id: 11,
      img: Maishy11,
      title: "Mebel",
    },
    {
      id: 12,
      img: Maishy12,
      title: "Geymerlar uchun",
    },
    {
      id: 13,
      img: Maishy13,
      title: "Barchasi ta'mirlash va qurilish uchun",
    },
    {
      id: 14,
      img: Maishy14,
      title: "Kantselyariya tovarlari",
    },
    {
      id: 15,
      img: Maishy15,
      title: "ELektrontranport",
    },
    {
      id: 16,
      img: Maishy16,
      title: "So'vg'alar va suvenirlar",
    },
    {
      id: 17,
      img: Maishy17,
      title: "Aqlli uy",
    },
    {
      id: 18,
      img: Maishy18,
      title: "Qulay Takliflar",
    },
    {
      id: 19,
      img: Maishy19,
      title: "Qoziq-ovqat mahsulotlari",
    },
  ];
  return (
    <div className="sliderCatalog">
      <Swiper
        slidesPerView={7}
        spaceBetween={10}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        {catalogsData.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="catalog_item">
              <div className="background">
                <img src={item.img} alt="img" />
              </div>
              <p>{item.title}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default SliderCatalog;

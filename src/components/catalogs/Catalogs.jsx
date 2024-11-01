import React from "react";
import "./Catalogs.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules";

function Catalogs() {
  let catalogsData = [
    {
      id: 1,
      img: "https://olcha.uz/image/128x128/category/cdn_1/2024-05-28/B1NA6mAiwsmrVapt6VbrdvPPIllRV2EnjtNEuUvSPhHoZ2beOWGv616dhaKj.png",
      title: "Telvizor, foto- video va audio",
    },
    {
      id: 2,
      img: "https://olcha.uz/image/128x128/category/cdn_1/2024-05-28/n4H7uKvN0pFwsYXSs66rsdUdHxGiRCWn8JVt9O0Qt1ecNl1fOEDJ7j0BHj81.png",
      title: "Noutbuk, printer, kompyuterlar",
    },
    {
      id: 3,
      img: "https://olcha.uz/image/128x128/category/cdn_1/2024-05-28/K83YTs4SqPeI3Ohx1lN0bDnbiV1Z9EnwZHMr2HsjIlDhmT48cBgn4C0Ve9Br.png",
      title: "Smartfon,telefon, gadjetlar",
    },
    {
      id: 4,
      img: "https://olcha.uz/image/128x128/category/cdn_1/2024-05-28/ZiWkDeTfCnCNHDWZnu0xXtxwkZ6Qe3embHveXzJVRXfdnaJB5sRsnJiU22vS.png",
      title: "Barchasi ofis, uy va bog' uchun",
    },
    {
      id: 5,
      img: "https://olcha.uz/image/128x128/category/cdn_1/2024-05-28/xrGNIS4zILNfb5qMXC0nvDLo09QuwdrdXYEKqn7UOEI9PndrjYR1BNX6CQbA.png",
      title: "Avto jihozlar",
    },
    {
      id: 6,
      img: "https://olcha.uz/image/128x128/category/cdn_1/2024-05-28/rMtg5ExOxyyExZageLhA2AZ2CfgYYfkzqtZ5butpO8HCG1oFndTZAYFF8V4M.png",
      title: "Sport anjomlari foydali",
    },
    {
      id: 7,
      img: "https://olcha.uz/image/128x128/category/cdn_1/2024-05-28/D1UNIE2gMBYHkx9XQl452O6I2jtQOpD4kvhOWQCtr9fuPliQWVSAkN9YXjiQ.png",
      title: "Go'zalllik va salomatlik",
    },
    {
      id: 8,
      img: "https://olcha.uz/image/128x128/category/cdn_1/2024-05-28/Lio8FefcAG352o0hPeqHDkd7TVlr2NQ4ljQAQziRlTjWOz08RiB1fncFbe2D.png",
      title: "Chet eldan tovarlar",
    },
    {
      id: 9,
      img: "https://olcha.uz/image/128x128/category/cdn_1/2024-05-28/rMtg5ExOxyyExZageLhA2AZ2CfgYYfkzqtZ5butpO8HCG1oFndTZAYFF8V4M.png",
      title: "Barchasi oshxna uchun",
    },
    {
      id: 1,
      img: "https://olcha.uz/image/128x128/category/cdn_1/2024-05-28/B1NA6mAiwsmrVapt6VbrdvPPIllRV2EnjtNEuUvSPhHoZ2beOWGv616dhaKj.png",
      title: "Telvizor, foto- video va audio",
    },
    {
      id: 2,
      img: "https://olcha.uz/image/128x128/category/cdn_1/2024-05-28/n4H7uKvN0pFwsYXSs66rsdUdHxGiRCWn8JVt9O0Qt1ecNl1fOEDJ7j0BHj81.png",
      title: "Noutbuk, printer, kompyuterlar",
    },
    {
      id: 3,
      img: "https://olcha.uz/image/128x128/category/cdn_1/2024-05-28/K83YTs4SqPeI3Ohx1lN0bDnbiV1Z9EnwZHMr2HsjIlDhmT48cBgn4C0Ve9Br.png",
      title: "Smartfon,telefon, gadjetlar",
    },
    {
      id: 4,
      img: "https://olcha.uz/image/128x128/category/cdn_1/2024-05-28/ZiWkDeTfCnCNHDWZnu0xXtxwkZ6Qe3embHveXzJVRXfdnaJB5sRsnJiU22vS.png",
      title: "Barchasi ofis, uy va bog' uchun",
    },
    {
      id: 5,
      img: "https://olcha.uz/image/128x128/category/cdn_1/2024-05-28/xrGNIS4zILNfb5qMXC0nvDLo09QuwdrdXYEKqn7UOEI9PndrjYR1BNX6CQbA.png",
      title: "Avto jihozlar",
    },
    {
      id: 6,
      img: "https://olcha.uz/image/128x128/category/cdn_1/2024-05-28/rMtg5ExOxyyExZageLhA2AZ2CfgYYfkzqtZ5butpO8HCG1oFndTZAYFF8V4M.png",
      title: "Sport anjomlari foydali",
    },
  ];
  return (
    <div className="catalogs">
      <Swiper
        slidesPerView={10}
        spaceBetween={10}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        {catalogsData.map((item, index) => (
          <SwiperSlide>
            <div key={index} className="catalog_item">
              <img src={item.img} alt="img" />
              <p>{item.title}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Catalogs;

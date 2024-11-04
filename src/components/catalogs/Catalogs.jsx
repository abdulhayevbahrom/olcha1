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
      img: "https://olcha.uz/image/128x128/category/cdn_1/2024-05-28/yfGs0HUuX5wKnXwPbOyEswpZFzzGhmHdpptTriBTKm01HUxMqTBEg1QA2CQr.png",
      title: "Maishy texnika",
    },
    {
      id: 5,
      img: "https://olcha.uz/image/128x128/category/cdn_1/2024-05-28/eCJj0q3ixqzqS3xvZhnMSQnYC1SLTnLB475I5l5ltz6rxi9rUmYauATe5Pa6.png",
      title: "Barchasi oshxona uchun",
    },
    {
      id: 6,
      img: "https://olcha.uz/image/128x128/category/cdn_1/2024-05-28/D1UNIE2gMBYHkx9XQl452O6I2jtQOpD4kvhOWQCtr9fuPliQWVSAkN9YXjiQ.png",
      title: "Sport anjomlari foydali",
    },
    {
      id: 7,
      img: "https://olcha.uz/image/128x128/category/cdn_1/2024-05-28/Lio8FefcAG352o0hPeqHDkd7TVlr2NQ4ljQAQziRlTjWOz08RiB1fncFbe2D.png",
      title: "Go'zalllik va salomatlik",
    },
    {
      id: 8,
      img: "https://olcha.uz/image/128x128/category/cdn_1/2024-05-28/rMtg5ExOxyyExZageLhA2AZ2CfgYYfkzqtZ5butpO8HCG1oFndTZAYFF8V4M.png",
      title: "Chet eldan tovarlar",
    },
    {
      id: 9,
      img: "https://olcha.uz/image/128x128/category/cdn_1/2024-05-28/xrGNIS4zILNfb5qMXC0nvDLo09QuwdrdXYEKqn7UOEI9PndrjYR1BNX6CQbA.png",
      title: "Avto jihozlar",
    },
    {
      id: 10,
      img: "https://olcha.uz/image/128x128/category/cdn_1/2024-05-28/ZiWkDeTfCnCNHDWZnu0xXtxwkZ6Qe3embHveXzJVRXfdnaJB5sRsnJiU22vS.png",
      title: "Barchsi ofis, uy va bog' uchun",
    },
    {
      id: 12,
      img: "https://olcha.uz/image/128x128/category/cdn_1/2024-05-28/e6S4NLdIceYAv1zDvwHPVHFWSEMMgUxMwbOjThhsguSxVUKTY6yKbXvwOJ6M.png",
      title: "Bollalar uchun o'yinchoq va mahsulotlar",
    },
    {
      id: 13,
      img: "https://olcha.uz/image/128x128/category/cdn_1/2024-05-28/kYlDnf1YPCTeu1CukaSt24EaWdr5QpW648eNtpeaFuxiFZLIfUOW9uGlg7df.png",
      title: "Kiyim va poyabzallar",
    },
    {
      id: 14,
      img: "https://olcha.uz/image/128x128/category/cdn_1/2024-05-28/bMNspthi79FTau9LHHWwROUmJxcI9s67zBhAw7hPxONfHOpouAPSz1XBmg0Q.png",
      title: "Kitoblar",
    },
    {
      id: 15,
      img: "https://olcha.uz/image/128x128/category/cdn_1/2024-05-28/adqzcIrhpWBLdv7My9MHp7DblhCNpQg2KkpsoeRQZdvKe5OR01jO2oXkKgcn.png",
      title: "Mebel",
    },
    {
      id: 16,
      img: "https://olcha.uz/image/128x128/category/cdn_1/2024-05-28/H36mM5MMLXtOjeOWB3Qm4FVp2ePbeijqE7VciIfLRsU5E4AAoPmf9avFASAg.png",
      title: "Geymerlar uchun",
    },
    {
      id: 17,
      img: "https://olcha.uz/image/128x128/category/cdn_1/2024-05-28/ioFNdT48mMJa0ARcbtJXbnLZN8CUB9x09SFDzFv06MJXreLROUEhytRsKavH.png",
      title: "Barchsi ta'mirlash va qurilish uchun",
    },
    {
      id: 18,
      img: "https://olcha.uz/image/128x128/category/cdn_1/2024-05-28/4x0BCXOswam7ZF6HtQbbbkBfwFiClO2DCP6jY4F9sGt5P3VG0qUf1u27iCFq.png",
      title: "Kantselyariya tovarlari",
    },
    {
      id: 19,
      img: "https://olcha.uz/image/128x128/category/cdn_1/2024-05-28/ffn8LREBuqMNdbVFBdddB9BtV9eUM3IygL94CozDRxgwgjQiAyzfPtyWWkQe.png",
      title: "Elektrontransport",
    },
    {
      id: 20,
      img: "https://olcha.uz/image/128x128/category/cdn_1/2024-05-28/cBKUy2UyHjgTu7n0E4ZEtbo1Priwsl5oynQrRtxl6MixwxwknCUbTfyDJiKx.png",
      title: "Sovg'alar va suvenirlar",
    },
    {
      id: 21,
      img: "https://olcha.uz/image/128x128/category/cdn_1/2024-05-28/g8nf8o2xpmFB6FaaAy60UUZWKqLzXhEEOqIc2RdAEp7s0r7ETvdBkvkmBvIB.png",
      title: "Aqlli uy",
    },
    {
      id: 22,
      img: "https://olcha.uz/image/128x128/category/cdn_1/2024-05-28/1fxknIjYSCNtNw0XfYPubvN9yhsaSAYsHryekFcTORSOgIcZ81NpuE2E96ee.png",
      title: "Qulay takliflar",
    },
    {
      id: 23,
      img: "https://olcha.uz/image/128x128/category/cdn_1/2024-05-28/Hkq1VNk2xXNORQ17hf2DdCTcix59JdQgR3SfdXEiUJlfCEzzLlImQ3JbIxBh.png",
      title: "Oziq ovqat maxsulotlari"
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

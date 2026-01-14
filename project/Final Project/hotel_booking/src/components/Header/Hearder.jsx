import React from "react";
import headerCSS from "./../Header/Hearder.module.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

export default function Hearder() {
  return (
    <div className={headerCSS.wrapper}>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation={true}
        pagination={{ clickable: true }}
        loop={true}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        className={headerCSS.swiper}
      >
        <SwiperSlide>
          <div className={headerCSS.slide}>
            <img
              src="/pic/photo_2026-01-13_12-13-34.jpg"
              alt="slide1"
              className={headerCSS.img}
            />
            <div className={headerCSS.content}>
              <p>Luxury Hotel & Restaurant</p>
              <h2>
                Enjoy Your Time With <br />
                Luxury Experience With <span>Us</span>
              </h2>
              <p>
                Call Now <span> 923829008</span>
              </p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className={headerCSS.slide}>
            <img
              src="/pic/photo_2026-01-13_12-13-49.jpg"
              alt="slide2"
              className={headerCSS.img}
            />
            <div className={headerCSS.content}>
              <p>Luxury Hotel & Restaurant</p>
              <h2>
                Enjoy Your Time With <br />
                Luxury Experience With <span>Us</span>
              </h2>
              <p>
                Call Now <span> 923829008</span>
              </p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className={headerCSS.slide}>
            <img
              src="/pic/download.jpg"
              alt="slide3"
              className={headerCSS.img}
            />
            <div className={headerCSS.content}>
              <p>Luxury Hotel & Restaurant</p>
              <h2>
                Enjoy Your Time With <br />
                Luxury Experience With <span>Us</span>
              </h2>
              <p>
                Call Now <span> 923829008</span>
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

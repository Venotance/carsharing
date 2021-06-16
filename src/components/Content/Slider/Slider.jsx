import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import ob from './Slider.module.css'
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import "swiper/components/navigation/navigation.min.css"

import "./styles.css";


import Background1 from './img/slide1.jpg';
import Background2 from './img/slide2.jpg';
import Background3 from './img/slide3.jpg';
import Background4 from './img/slide4.jpg';

// import Swiper core and required modules
import SwiperCore, {
  Autoplay, Pagination, Navigation
} from 'swiper/core';

// install Swiper modules
SwiperCore.use([Autoplay, Pagination, Navigation]);


export default function Slider() {
  return (
    <div className={ob.content__slider}>
      <>
        <Swiper spaceBetween={0} centeredSlides={true}
          autoplay={{
            "delay": 2500,
            "disableOnInteraction": false
          }} 
          pagination={{
            "clickable": true
          }} navigation={true} loop={true} className="mySwiper">
          <SwiperSlide className='swiper-sld' style={{
            backgroundImage: `url(${Background1})`,
          }}>
            <div className="swp-sld">
              <div>
                <h3 className="h3">Бесплатная парковка</h3>
                <p className="">Оставляйте машину на платных городских парковках и разрешенных местах, не нарушая ПДД, а также в аэропортах.</p>
                <a style={{}} href="#" className="a1">
                  <div>Подробнее</div>
                </a>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className='swiper-sld' style={{
            backgroundImage: `url(${Background2})`,
          }}>
            <div className="swp-sld">
              <div>
                <h3 className="h3">Страховка</h3>
                <p className="">Полная страховка страховка автомобиля</p>
                <a style={{}} href="#" className="a2">
                  <div>Подробнее</div>
                </a>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className='swiper-sld' style={{
            backgroundImage: `url(${Background3})`,
          }}>
            <div className="swp-sld">
              <div>
                <h3 className="h3">Бензин</h3>
                <p className="">Полный бак на любой заправке города за наш счёт</p>
                <a style={{}} href="#" className="a3">
                  <div>Подробнее</div>
                </a>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className='swiper-sld' style={{
            backgroundImage: `url(${Background4})`,
          }}>
            <div className="swp-sld">
              <div>
                <h3 className="h3">Обслуживание</h3>
                <p className="">Автомобиль проходит еженедельное ТО</p>
                <a style={{}} href="#" className="a4">
                  <div>Подробнее</div>
                </a>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </>
    </div>
  )
}
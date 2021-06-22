import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import ob from './Slider.module.css'
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import "swiper/components/navigation/navigation.min.css"

import "./slider.css";
import Oneslide from './Oneslide/Oneslide'


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
          <SwiperSlide className={ob.swiper__bgrd} style={{
            backgroundImage: `url(${Background1})`,
          }}>
            <Oneslide myClass={ob.a1} texth3="Бесплатная парковка"
            textbody="Оставляйте машину на платных 
            городских парковках и разрешенных местах, 
            не нарушая ПДД, а также в аэропортах."/>
          </SwiperSlide>
          <SwiperSlide className={ob.swiper__bgrd} style={{
            backgroundImage: `url(${Background2})`,
          }}>
            <Oneslide myClass={ob.a2} texth3="Страховка"
            textbody="Полная страховка страховка автомобиля"/>
          </SwiperSlide>
          <SwiperSlide className={ob.swiper__bgrd} style={{
            backgroundImage: `url(${Background3})`,
          }}>
            <Oneslide myClass={ob.a3} texth3="Бензин"
            textbody="Полный бак на любой заправке города за наш счёт"/>
          </SwiperSlide>
          <SwiperSlide className={ob.swiper__bgrd} style={{
            backgroundImage: `url(${Background4})`,
          }}>
            <Oneslide myClass={ob.a4} texth3="Обслуживание"
            textbody="Автомобиль проходит еженедельное ТО"/>
          </SwiperSlide>
        </Swiper>
      </>
    </div>
  )
}
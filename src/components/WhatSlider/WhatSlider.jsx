import classes from './WharSlider.module.scss';
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import sliderData from './sliderData.js';

export default function WhatSlider() {
  const swiperRef = useRef(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const handleSwiper = (swiper) => {
    swiperRef.current = swiper;
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
  };

  const handleSlideChange = () => {
    if (swiperRef.current) {
      setIsBeginning(swiperRef.current.isBeginning);
      setIsEnd(swiperRef.current.isEnd);
    }
  };

  return (
    <section className={classes.sec1}>
      <h1>What our clients say</h1>
      <div className={classes.cont1}>
        <button
          className={`${classes.swiperbuttonPrevcustom} ${isBeginning ? classes.disabled : ''}`}
          disabled={isBeginning}
          aria-disabled={isBeginning}
          tabIndex={isBeginning ? -1 : 0}
        >
          {/* SVG стрелка влево */}
          <svg width="18" height="12" viewBox="0 0 18 12" xmlns="http://www.w3.org/2000/svg">
            <path
              className={isBeginning ? classes.iconDisabled : classes.iconActive}
              fillRule="evenodd"
              clipRule="evenodd"
              d="M6.20711 11.2071C5.81658 11.5976 5.18342 11.5976 4.79289 11.2071L0.292892 6.70711C-0.0976315 6.31658 -0.0976315 5.68342 0.292892 5.29289L4.79289 0.792893C5.18342 0.402369 5.81658 0.402369 6.20711 0.792893C6.59763 1.18342 6.59763 1.81658 6.20711 2.20711L3.41421 5L17 5C17.5523 5 18 5.44772 18 6C18 6.55228 17.5523 7 17 7L3.41421 7L6.20711 9.79289C6.59763 10.1834 6.59763 10.8166 6.20711 11.2071Z"
            />
          </svg>
        </button>

        <Swiper
          modules={[Navigation]}
          navigation={{
            nextEl: `.${classes.swiperbuttonNextcustom}`,
            prevEl: `.${classes.swiperbuttonPrevcustom}`,
          }}
          onSwiper={handleSwiper}
          onSlideChange={handleSlideChange}
          className={classes.swiper}
        >
          {sliderData.map((item, index) => (
            <SwiperSlide key={index} className={classes.swiperslide}>
              <div className={classes.slide}>
                <svg width="28" height="20" viewBox="0 0 28 20" >
                  <path d="M18 8.92534C18 8.63119 18.1295 8.35196 18.3541 8.16195L28 0V19C28 19.5523 27.5523 20 27 20H19C18.4477 20 18 19.5523 18 19V8.92534Z" fill="#7772F1"/>
                  <path d="M0 8.92534C0 8.63119 0.129507 8.35196 0.354058 8.16195L10 0V19C10 19.5523 9.55228 20 9 20H1C0.447715 20 0 19.5523 0 19V8.92534Z" fill="#7772F1"/>
                </svg>
                <div className={classes.text}>
                  <p>{item.text}</p>
                  <div className={classes.avtor}>
                    <img src={item.image} alt={item.author} />
                    <div>
                      <strong>{item.author}</strong>
                      <br />
                      <bt>{item.position}</bt>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <button
          className={`${classes.swiperbuttonNextcustom} ${isEnd ? classes.disabled : ''}`}
          disabled={isEnd}
          aria-disabled={isEnd}
          tabIndex={isEnd ? -1 : 0}
        >
          {/* SVG стрелка вправо */}
          <svg width="18" height="12" viewBox="0 0 18 12" xmlns="http://www.w3.org/2000/svg">
            <path
              className={isEnd ? classes.iconDisabled : classes.iconActive}
              fillRule="evenodd"
              clipRule="evenodd"
              d="M11.7929 0.792893C12.1834 0.402369 12.8166 0.402369 13.2071 0.792893L17.7071 5.29289C18.0976 5.68342 18.0976 6.31658 17.7071 6.70711L13.2071 11.2071C12.8166 11.5976 12.1834 11.5976 11.7929 11.2071C11.4024 10.8166 11.4024 10.1834 11.7929 9.79289L14.5858 7H1C0.447715 7 0 6.55228 0 6C0 5.44772 0.447715 5 1 5H14.5858L11.7929 2.20711C11.4024 1.81658 11.4024 1.18342 11.7929 0.792893Z"
            />
          </svg>
        </button>
      </div>
    </section>
  );
}

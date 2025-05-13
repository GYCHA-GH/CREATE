import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';


import styles from './styles.module.css';
import classes from './CaseStudySlider.module.scss';

import slidesData from './slidesData';


export default function CaseStudySlider() {
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
      <div className={classes.container1}>
        <div className={classes.cont2}>
          <h1>Read our clients' case studies</h1>
          <div className={classes.buttons}>
            <button
              className={`swiper-button-prev-custom ${classes.swiperbuttonprevcustom} ${isBeginning ? classes.disabled : ''}`}
              disabled={isBeginning}
              aria-disabled={isBeginning}
              tabIndex={isBeginning ? -1 : 0}
            >
              <svg width="18" height="12" viewBox="0 0 18 12" xmlns="http://www.w3.org/2000/svg">
                <path
                  className={isBeginning ? classes.iconDisabled : classes.iconActive}
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M6.20711 11.2071C5.81658 11.5976 5.18342 11.5976 4.79289 11.2071L0.292892 6.70711C-0.0976315 6.31658 -0.0976315 5.68342 0.292892 5.29289L4.79289 0.792893C5.18342 0.402369 5.81658 0.402369 6.20711 0.792893C6.59763 1.18342 6.59763 1.81658 6.20711 2.20711L3.41421 5L17 5C17.5523 5 18 5.44772 18 6C18 6.55228 17.5523 7 17 7L3.41421 7L6.20711 9.79289C6.59763 10.1834 6.59763 10.8166 6.20711 11.2071Z"
                />
              </svg>
            </button>

            <button
              className={`swiper-button-next-custom ${classes.swiperbuttonnextcustom} ${isEnd ? classes.disabled : ''}`}
              disabled={isEnd}
              aria-disabled={isEnd}
              tabIndex={isEnd ? -1 : 0}
            >
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
        </div>

        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          modules={[Navigation]}
          navigation={{
            nextEl: '.swiper-button-next-custom',
            prevEl: '.swiper-button-prev-custom',
          }}
          onSwiper={handleSwiper}
          onSlideChange={handleSlideChange}
          className={classes.swiper}
        >
          {slidesData.map((slide, index) => (
            <SwiperSlide className={classes.swiperslide} key={index}>
              <div className={classes.slideCont}>
                <div className={classes.slide}>
                  <div className={classes.logo}>
                    <img src={slide.image} alt={`${slide.title} logo`} />
                    <h5>{slide.title}</h5>
                  </div>
                  <p>{slide.description}</p>
                  <div className={classes.static}>
                    <div className={classes.info1}>
                      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                        <circle opacity="0.3" cx="20" cy="20" r="18" stroke="#F89828" strokeWidth="4" />
                        <path
                          d="M20 36C28.8366 36 36 28.8366 36 20C36 11.1634 28.8366 4 20 4V0C31.0457 0 40 8.9543 40 20C40 31.0457 31.0457 40 20 40C8.9543 40 0 31.0457 0 20C0 14.2928 2.39055 9.14386 6.22496 5.5L8.72317 8.64953C5.80608 11.5478 4 15.563 4 20C4 28.8366 11.1634 36 20 36Z"
                          fill="#F89828"
                        />
                      </svg>
                      <div>
                        <strong>{slide.engagement}</strong>
                        <br />
                        <b>Engagement</b>
                      </div>
                    </div>
                    <div className={classes.info2}>
                      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                        <circle cx="20" cy="20" r="18" stroke="#03CEA4" strokeWidth="4" />
                      </svg>
                      <div>
                        <strong>{slide.deliverability}</strong>
                        <br />
                        <b>Deliverability</b>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className={classes.button}>
          <h3>Explore more case studies</h3>
          <button>View all case studies</button>
        </div>
      </div>
    </section>
  );
}

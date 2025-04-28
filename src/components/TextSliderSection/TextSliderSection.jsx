import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

import icon1 from '../../images/textIcon1.svg'
import icon2 from '../../images/textIcon2.svg'

const TextData = [
   {
      id:1,
      title:'DISCOVER',  
      icon:icon1,    
   },
   {
      id:2,
      title:'INNOVATE',  
      icon:icon2 ,   
   },
   {
      id:3,
      title:'EDUCATION',  
      icon:icon1 ,   
   },
   {
      id:4,
      title:'CASE STUDIES',  
      icon:icon2,    
   },
   {
      id:5,
      title:'CREATE',  
      icon:icon1 ,   
   },
   {
      id:6,
      title:'LEARN',  
      icon:icon2 ,   
   },
   {
      id:7,
      title:'RESEARCH',  
      icon:icon1,    
   }
]

const TextSliderSection = () => {
  return (
    <section className="textSlider-Section section_space">
        <Swiper
          modules={[Autoplay]}
          loop={true}
          freeMode={true}
          slidesPerView={'auto'}
          spaceBetween={30}
          allowTouchMove={false}
          speed={6000}
          autoplay={{
            delay: 1,
            disableOnInteraction: true,
          }}
          className="slider-active"
        >
          {TextData.map((text, index) => (
            <SwiperSlide key={index}>
              <div className="wrap">
                <h3 className="item">
                  {text.title}
                  <span><img src={text.icon} alt="" /></span>
                </h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
    </section>
  );
};

export default TextSliderSection;

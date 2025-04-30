import React, { useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-cards';
import 'swiper/css/navigation';

import img1 from '../../images/testimonil/1.jpg';
import img2 from '../../images/testimonil/2.jpg';
import img3 from '../../images/testimonil/3.jpg';
import start from '../../images/courses/star.png';

const TestimonilSection = () => {
   const prevRef = useRef(null);
   const nextRef = useRef(null);

   return (
      <section className="testimonil_section section_space">
         <div className="container">
            <div className="row justify-content-center">
               <div className="col-lg-8 col-md-12 col-12">
                  <div className="top_title">
                     <span className="fade_bottom">TESTIMONIALS</span>
                     <h2 className="fade_bottom">What they’re talking about Stadum?</h2>
                  </div>
               </div>
            </div>



            <div className="testimonil_wrap">
               <Swiper
                  effect={'cards'}
                  grabCursor={true}
                  modules={[EffectCards, Navigation]}
                  className="mySwiper"
                  navigation={{
                     prevEl: prevRef.current,
                     nextEl: nextRef.current,
                  }}
                  onBeforeInit={(swiper) => {
                     swiper.params.navigation.prevEl = prevRef.current;
                     swiper.params.navigation.nextEl = nextRef.current;
                  }}
               >
                  {[img1, img2, img3].map((img, index) => (
                     <SwiperSlide key={index}>
                        <div className="testimonil-card">
                           <div className="content">
                              <div className="icon">
                                 <svg xmlns="http://www.w3.org/2000/svg" width="68" height="40" viewBox="0 0 68 40" fill="none">
                                    <path d="M63.0966 5.18257C60.179 1.792 55.996 0 50.9999 0C41.9411 0 34.5713 7.36986 34.5713 16.4286C34.5713 25.2386 41.5417 32.451 50.2573 32.8406C50.0127 35.9286 48.2633 38.8869 48.2443 38.9187C48.1121 39.1393 48.1087 39.414 48.2354 39.6377C48.3621 39.8616 48.5996 40 48.857 40C52.2534 40 56.9076 37.4153 60.7137 33.4153C64.981 28.9309 67.4284 23.5204 67.4284 18.5714C67.4284 13.1056 65.9306 8.47586 63.0966 5.18257ZM59.6789 32.4307C56.645 35.619 52.9674 37.8991 50.1021 38.4456C50.7667 37.0449 51.7141 34.615 51.7141 32.1429C51.7141 31.7483 51.3944 31.4286 50.9999 31.4286C42.7289 31.4286 35.9999 24.6996 35.9999 16.4286C35.9999 8.15757 42.7289 1.42857 50.9999 1.42857C60.2523 1.42857 65.9999 7.99729 65.9999 18.5714C65.9999 23.1576 63.6959 28.209 59.6789 32.4307ZM16.9999 0C7.94115 0 0.571289 7.36986 0.571289 16.4286C0.571289 25.2386 7.54172 32.451 16.2573 32.8406C16.0126 35.9286 14.2633 38.8869 14.2443 38.9187C14.1121 39.1393 14.1087 39.414 14.2354 39.6377C14.3623 39.8616 14.5997 40 14.857 40C18.2534 40 22.9076 37.4153 26.7137 33.4153C30.981 28.9309 33.4284 23.5204 33.4284 18.5714C33.4284 13.1056 31.9304 8.47586 29.0966 5.18257C26.179 1.792 21.996 0 16.9999 0ZM25.6789 32.4307C22.645 35.619 18.9674 37.8991 16.102 38.4456C16.7667 37.0449 17.7141 34.615 17.7141 32.1429C17.7141 31.7483 17.3943 31.4286 16.9999 31.4286C8.72886 31.4286 1.99986 24.6996 1.99986 16.4286C1.99986 8.15757 8.72886 1.42857 16.9999 1.42857C26.2521 1.42857 31.9999 7.99729 31.9999 18.5714C31.9999 23.1576 29.696 28.209 25.6789 32.4307Z" fill="white" />
                                 </svg>
                              </div>
                              <p>
                                 At Stadum University, we prepare you to launch your career by providing a supportive, creative, and professional environment from which to learn practical skills and build a network of industry contacts.
                              </p>
                              <ul>
                                 {Array.from({ length: 6 }).map((_, i) => (
                                    <li key={i}><img src={start} alt="star" /></li>
                                 ))}
                              </ul>
                              <h2>Maliha Alizabeth</h2>
                              <span>Student</span>
                           </div>
                           <div className="image">
                              <img src={img} alt={`testimonial ${index + 1}`} />
                           </div>
                        </div>

                     </SwiperSlide>
                  ))}

                  <div className="testimonial-navigation">
                     <button ref={prevRef} className="swiper-button-prev"></button>
                     <button ref={nextRef} className="swiper-button-next"></button>
                  </div>
               </Swiper>
            </div>
         </div>
      </section>
   );
};

export default TestimonilSection;

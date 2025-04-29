import React from 'react';
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

import teamData from '../../api/team';
// import bgShape from '../../images/team/shape.svg';


// import Shape from '../../images/team/bg_shape.png'


const TeamSection = (props) => {
   const ClickHandler = () => {
      window.scrollTo(10, 0);
   }


   const settings = {
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      dots: false,
      arrows: true,
   };
   return (
      <section className="team_section section_space">
         <div className="container">
            <div className="row">
               <div className="col-lg-6 col-12">
                  <div className="top_title">
                     <span>INSTRUCTORS</span>
                     <h2>our experienced <strong>instructors</strong></h2>
                  </div>
               </div>
            </div>
            <div className="team_wrap">
               <Slider {...settings} >
                  {teamData.map((team, index) => (
                     <div key={index}>
                        <div className="team_card">
                           <div className="image">
                              <img src={team.image} alt="" />
                           </div>
                           <div className="content">
                              <div className="bgWrapper">
                                 <div className="bgShape"></div>
                              </div>
                              <div className="icon">
                                 <Link onClick={ClickHandler} to={`/team-single/${team.slug}`}>
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                       <path d="M9.9998 1.76807C9.9998 2.63832 10.8622 3.94057 11.734 5.03423C12.8567 6.44232 14.1965 7.6724 15.734 8.61157C16.8857 9.31482 18.2843 9.9899 19.4078 9.9899M9.9998 18.2321C9.9998 17.3618 10.8622 16.0596 11.734 14.9659C12.8567 13.5579 14.1965 12.3277 15.734 11.3886C16.8857 10.6853 18.2843 10.0102 19.4078 10.0102M19.4078 10.0001H0.591797" stroke="#081933" />
                                    </svg>
                                 </Link>
                              </div>
                              <h2><Link onClick={ClickHandler} to={`/team-single/${team.slug}`}>{team.title}</Link></h2>
                              <span>{team.subtitle}</span>
                              <ul>
                                 <li><Link to="#"><i className="ti-facebook"></i></Link></li>
                                 <li><Link to="#"><i className="ti-twitter-alt"></i></Link></li>
                                 <li><Link to="#"><i className="ti-linkedin"></i></Link></li>
                              </ul>
                           </div>

                        </div>
                     </div>
                  ))}
               </Slider >

            </div>
         </div>
         <div className="bg_shape">
            <svg width="1152" height="882" viewBox="0 0 1152 882" fill="none" >
               <g filter="url(#filter0_f_2044_1207)">
                  <circle cx="575.966" cy="440.966" r="275.966" fill="#F42E75" fillOpacity="0.08" />
               </g>
               <defs>
                  <filter id="filter0_f_2044_1207" x="0" y="-135" width="1151.93" height="1151.93" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                     <feFlood floodOpacity="0" result="BackgroundImageFix" />
                     <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                     <feGaussianBlur stdDeviation="150" result="effect1_foregroundBlur_2044_1207" />
                  </filter>
               </defs>
            </svg>

         </div>
      </section>
   );
};

export default TeamSection;
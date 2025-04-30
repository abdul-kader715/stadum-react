import React from 'react';
import { Link } from 'react-router-dom';
import Check from '../../images/about/mark.svg';
import arrowright from '../../images/arrow-right.png';
import shape from '../../images/categorie/shape-3.png';
import videoBG from '../../images/choose-image.jpg';
import VideoModal from '../ModalVideo/ModalVideo';

const ChooseSection = (props) => {
   const ClickHandler = () => {
      window.scrollTo(10, 0);
   }
   return (
      <section className="choose_section section_space">
         <div className="container">
            <div className="row">
               <div className="col-lg-6 col-12">
                  <div className="content fade_bottom">
                     <div className="top_title">
                        <span>WHY CHOOSE US</span>
                        <h2>The advantages of our Courses</h2>
                        <p>At Stadum, you’ll be welcomed into a diverse community of learners of different races, genders, ages and ethnicities. With online and on-campus learning available.</p>
                     </div>
                     <ul>
                        <li><img src={Check} alt="" /><span>We offer consistently with your-round schedules</span></li>
                        <li><img src={Check} alt="" /><span>We have highly experienced  instructors</span></li>
                        <li><img src={Check} alt="" /><span>We support you to ensure the success</span></li>
                        <li><img src={Check} alt="" /><span>Get live class before start courses</span></li>
                     </ul>
                     <Link to='/' onClick={ClickHandler} className="btn_primary">
                        <span>Get More Info</span>
                        <div className="arrow">
                           <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                              <path d="M12 2.1216C12 3.1659 13.035 4.7286 14.0812 6.041C15.4284 7.7307 17.0362 9.2068 18.8811 10.3338C20.2632 11.1777 21.9414 11.9878 23.2896 11.9878M12 21.8784C12 20.8341 13.035 19.2714 14.0812 17.959C15.4284 16.2694 17.0362 14.7932 18.8811 13.6662C20.2632 12.8223 21.9414 12.0122 23.2896 12.0122M23.2896 12H0.710449" />
                           </svg>
                        </div>
                     </Link>
                     <div className="arrowright float-bob-x">
                        <img src={arrowright} alt="" />
                     </div>
                     <div className="shape float-bob-x">
                        <img src={shape} alt="" />
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div className="video-content">
            <div className="image">
               <img src={videoBG} alt="" />
            </div>
            <VideoModal />
         </div>
      </section>
   )
}
export default ChooseSection
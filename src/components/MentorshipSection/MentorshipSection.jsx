import React from "react";
import { Link } from "react-router-dom";
import Img1 from '../../images/mentorship/1.jpg'
import Img2 from '../../images/mentorship/2.jpg'


const MentorshipSection = () => {
   const ClickHandler = () => {
      window.scrollTo(10, 0);
   }
   return (
      <section className='mentorship_section section_space'>
         <div className="container">
            <div className="row justify-content-center">
               <div className="col-lg-8 col-md-12 col-12">
                  <div className="top_title">
                     <span className="fade_bottom">MENTORSHIP</span>
                     <h2 className="fade_bottom">Read to Join?</h2>
                  </div>
               </div>
            </div>
            <div className="row">
               <div className="col col-lg-6 col-md-6 col-12" >
                  <div className="mentorship-card fade_bottom">
                     <div className="image">
                        <img src={Img1} alt="" />
                     </div>
                     <div className="content">
                        <h2><Link to='/' onClick={ClickHandler}>Become An Instructor</Link></h2>
                        <p>Top 20 courses among our 1350+ free online courses by experts</p>
                        <div className="mebtn">
                           <Link to='/' onClick={ClickHandler} className="btn_primary">
                              <span>Get More Info</span>
                              <div className="arrow">
                                 <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M12 2.1216C12 3.1659 13.035 4.7286 14.0812 6.041C15.4284 7.7307 17.0362 9.2068 18.8811 10.3338C20.2632 11.1777 21.9414 11.9878 23.2896 11.9878M12 21.8784C12 20.8341 13.035 19.2714 14.0812 17.959C15.4284 16.2694 17.0362 14.7932 18.8811 13.6662C20.2632 12.8223 21.9414 12.0122 23.2896 12.0122M23.2896 12H0.710449" />
                                 </svg>
                              </div>
                           </Link>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="col col-lg-6 col-md-6 col-12" >
                  <div className="mentorship-card fade_bottom">
                     <div className="image">
                        <img src={Img2} alt="" />
                     </div>
                     <div className="content">
                        <h2><Link to='/' onClick={ClickHandler}>Access To Inclusive Education</Link></h2>
                        <p>Top 20 courses among our 1350+ free online courses by experts</p>
                        <div className="mebtn">
                           <Link to='/' onClick={ClickHandler} className="btn_primary">
                              <span>Get More Info</span>
                              <div className="arrow">
                                 <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M12 2.1216C12 3.1659 13.035 4.7286 14.0812 6.041C15.4284 7.7307 17.0362 9.2068 18.8811 10.3338C20.2632 11.1777 21.9414 11.9878 23.2896 11.9878M12 21.8784C12 20.8341 13.035 19.2714 14.0812 17.959C15.4284 16.2694 17.0362 14.7932 18.8811 13.6662C20.2632 12.8223 21.9414 12.0122 23.2896 12.0122M23.2896 12H0.710449" />
                                 </svg>
                              </div>
                           </Link>
                        </div>
                     </div>
                  </div>
               </div>
            </div>

         </div>

         {/* <div className="shape">
         <img src={ShapeImg} alt="" />
      </div>
      <div className="shape-2">
         <img src={ShapeImg2} alt="" />
      </div>
      <div className="shape-3">
         <img src={ShapeImg3} alt="" />
      </div> */}
      </section>
   )
}

export default MentorshipSection;
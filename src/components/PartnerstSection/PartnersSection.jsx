import React from 'react';
import { Link } from 'react-router-dom';
import p1 from '../../images/partners/1.png'
import p2 from '../../images/partners/2.png'
import p3 from '../../images/partners/3.png'
import p4 from '../../images/partners/4.png'
import p5 from '../../images/partners/5.png'
import p6 from '../../images/partners/6.png'
import p7 from '../../images/partners/7.png'
import p8 from '../../images/partners/8.png'

const PartnerstSection = (props) => {
   const ClickHandler = () => {
      window.scrollTo(10, 0);
   }
   return (
      <section className='partnerst_section section_space'>
         <div className="container">
            <div className="wrapper">
               <div className="top_title fade_bottom">
                  <span>PARTNERS</span>
                  <h2>Learn with our <strong>partners</strong></h2>
                  <p>At Stadum University we are committed to providing a high-quality education</p>
                  <Link to='/' onClick={ClickHandler} className="btn_primary">
                     Start Learning
                     <div className="arrow">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                           <path d="M12 2.1216C12 3.1659 13.035 4.7286 14.0812 6.041C15.4284 7.7307 17.0362 9.2068 18.8811 10.3338C20.2632 11.1777 21.9414 11.9878 23.2896 11.9878M12 21.8784C12 20.8341 13.035 19.2714 14.0812 17.959C15.4284 16.2694 17.0362 14.7932 18.8811 13.6662C20.2632 12.8223 21.9414 12.0122 23.2896 12.0122M23.2896 12H0.710449" />
                        </svg>
                     </div>
                  </Link>
               </div>
               <div className="partners fade_bottom">
                  <div className="item">
                     <img src={p1} alt="" />
                  </div>
                  <div className="item">
                     <img src={p2} alt="" />
                  </div>
                  <div className="item">
                     <img src={p3} alt="" />
                  </div>
                  <div className="item">
                     <img src={p4} alt="" />
                  </div>
                  <div className="item">
                     <img src={p5} alt="" />
                  </div>
                  <div className="item">
                     <img src={p6} alt="" />
                  </div>
                  <div className="item">
                     <img src={p7} alt="" />
                  </div>
                  <div className="item">
                     <img src={p8} alt="" />
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};

export default PartnerstSection;
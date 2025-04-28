import React from 'react';
import { Link } from 'react-router-dom';

// Image
import AppImg1 from '../../images/cta/playApp.png';
import AppImg2 from '../../images/cta/appStore.png';
import imgleft from '../../images/cta/1.png';
import imgright from '../../images/cta/2.png';
import shape from '../../images/cta/shape.png';
import shape2 from '../../images/cta/shape-2.png';

const CtaSection = (props) => {
   const ClickHandler = () => {
      window.scrollTo(10, 0);
   }

   return (
      <section className="cta-section">
         <div className="container">
            <div className="wrapper">
               <div className="image-left fade_bottom">
                  <img src={imgleft} alt="" />
               </div>
               <div className="content">
                  <h2 className='fade_bottom'>Let’s Find The Right Course For You!</h2>
                  <div className="app-link">
                     <Link to='/' onClick={ClickHandler}  className='fade_bottom'>
                        <img src={AppImg1} alt="" />
                     </Link>
                     <Link to='/' onClick={ClickHandler} className='fade_bottom'>
                        <img src={AppImg2} alt="" />
                     </Link>
                  </div>
               </div>
               <div className="image-right fade_bottom">
                  <img src={imgright} alt="" />
               </div>
            </div>
         </div>

         <div className="shape">
            <img src={shape} alt="" />
         </div>
         <div className="shape-2">
            <img src={shape2} alt="" />
         </div>
      </section>
   );
};

export default CtaSection;
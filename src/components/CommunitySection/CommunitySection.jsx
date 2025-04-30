import React from 'react';

/* image */
 import Ion1 from '../../images/c-icon1.svg'
 import Ion2 from '../../images/c-icon2.svg'
 import Ion3 from '../../images/c-icon3.svg'
 import Ion4 from '../../images/c-icon4.svg'
 import community_bg from '../../images/community_bg.jpg'
import Shape from '../../images/shape.svg'

const CommunitySection = (props) => {
   return (
      <section className="community_section section_space">
         <div className="container">
            <div className="row">
               <div className="content fade_bottom">
                  <div className="top_title ">
                     <span>COMMUNITY</span>
                     <h2>Life long <strong>learning</strong>community</h2>
                     <p>At Stadum University we are committed to providing a high-quality education that is accessible.</p>
                  </div>
                  <div className="Card-wrap">
                     <div className="cards">
                        <div className="icon">
                           <img src={Ion1} alt="" />
                        </div>
                        <div className="text">
                           <h2>Exclusive Coach</h2>
                           <span>We believe in the power of knowledge to transform</span>
                        </div>
                     </div>
                     <div className="cards">
                        <div className="icon">
                           <img src={Ion2} alt="" />
                        </div>
                        <div className="text">
                           <h2>Creative Minds</h2>
                           <span>We believe in the power of knowledge to transform</span>
                        </div>
                     </div>
                     <div className="cards">
                        <div className="icon">
                           <img src={Ion3} alt="" />
                        </div>
                        <div className="text">
                           <h2>Video Tutorials</h2>
                           <span>We believe in the power of knowledge to transform</span>
                        </div>
                     </div>
                     <div className="cards">
                        <div className="icon">
                           <img src={Ion4} alt="" />
                        </div>
                        <div className="text">
                           <h2>Great Resources</h2>
                           <span>We believe in the power of knowledge to transform</span>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div className="side-image">
            <div className="image">
               <img src={community_bg} alt="" />
            </div>
            <div className="shape">
               <img src={Shape} alt="" />
            </div>
         </div>
      </section>
   );
};

export default CommunitySection;
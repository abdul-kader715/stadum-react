import React from 'react';
import { Link } from 'react-router-dom';

/* image */
import shape_line from '../../images/slider/line-shape.png';
import shape from '../../images/slider/shape-7.png';
import VideoModal from '../ModalVideo/ModalVideo';

const HeroSectionS3 = () => {
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }
    return (
        <section className="header_section_s3">
        <div className="container-fluid">
          <div className="header_wrap">
            <div className="content">
              <div className="title">
                <h2>GIVE SOMEONE HAND
                  the people P<span>o</span><span>o</span>r.</h2>
                <div className="line-shape">
                  <img src={shape_line} alt="" />
                </div>
              </div>
              <div className="text">
                <p>Nullam eu nibh vitae est tempor molestie id sed exthe. Quisque dignissim maximus ipsum metus poor the
                  peoole ipsum.</p>
              </div>
              <div className="hero_btn">
                <Link onClick={ClickHandler} to="/contact" className="btn_primary">Contact Us <i className="ti-arrow-right"></i></Link>
                <div className="video_btn">
                <VideoModal/>
                  <span>WATCH VIDEO</span>
                </div>
              </div>
            </div>
            <div className="shape">
              <img src={shape} alt="" />
            </div>
            <div className="shape_line"></div>
          </div>
        </div>
      </section>
  
    );
};

export default HeroSectionS3;
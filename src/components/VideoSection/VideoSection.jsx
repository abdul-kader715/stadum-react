import React from 'react';
import { Link } from 'react-router-dom';
import Img from '../../images/video/1.jpg'
import VideoModal from '../ModalVideo/ModalVideo';
const VideoSection = () => {
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }
    return (
        <section className="video_section">
        <div className="container">
          <div className="video_wrap">
            <div className="content">
              <h2>WELLCOME TO VIDEO!</h2>
              <h3>Find out poor & Get Nonprofit Love.</h3>
              <p>Services address a range of simply application of passages of available, but the.</p>
              <Link onClick={ClickHandler} to="/about" className="btn_primary"> Video More <i className="ti-arrow-right"></i></Link>
            </div>
            <div className="video_btn">
              <VideoModal/>
            </div>
            <div className="left_image">
              <img src={Img} alt="" />
            </div>
          </div>
        </div>
      </section>
    );
};

export default VideoSection;
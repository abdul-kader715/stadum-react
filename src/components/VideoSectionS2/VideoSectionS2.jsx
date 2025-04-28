import React from 'react';
import VideoModal from '../ModalVideo/ModalVideo';
import { Link } from 'react-router-dom';

const VideoSectionS2 = () => {
    const ClickHander = () => {
        window.scrollTo(10, 0);
    }
    return (
        <section className="video_section_s2">
            <div className="container">
                <div className="video_wrap">
                    <div className="content">
                        <div className="video_btn">
                           <VideoModal/>
                        </div>
                        <h2>Our Video more</h2>
                        <h3>Get Involved for Video Nonprofit
                            Poor People.
                        </h3>
                        <p>Services address a range of simply application and infrastructure
                            of passages of available, but the majority have </p>
                        <Link to="/about"  onClick={ClickHander}  className="btn_primary"> Video More <i className="ti-arrow-right"></i></Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default VideoSectionS2;
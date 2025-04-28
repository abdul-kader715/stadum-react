import React from 'react';
import AbImg1 from '../../images/about/about-3.jpg'
import chat from '../../images/about/chat.png'
import chat2 from '../../images/about/c3.png'
import chat3 from '../../images/about/c4.png'
import about3 from '../../images/about/about_s4.jpg'
import about31 from '../../images/about/about_s41.jpg'
import about32 from '../../images/about/shape_s4.png'
import { Link } from 'react-router-dom';
import VideoModal from '../ModalVideo/ModalVideo';

const AboutSectionS4 = () => {
    const ClickHandler = () =>{
        window.scrollTo(10,0)
    }
    return (
        <section className="about_section_s4">
            <div className="container">
                <div className="row justify-content-end">
                    <div className="col-lg-6 col-12">
                        <div className="content">
                            <div className="top_title">
                                <h2>OUR ABOUT US</h2>
                                <h3>We Proved Give believe donate People.</h3>
                                <p>Services address a range of simply application and infrastructure of passages of
                                    available, but the
                                    majority have suffered alteration in some form.</p>
                            </div>
                            <div className="text_qua">
                                <div className="image">
                                    <img src={AbImg1} alt="" />
                                </div>
                                <div className="text">
                                    <img src={chat} alt="" />
                                    <p>We always remained the same: to maximize their marketing accelerate customer best
                                        fat pore to big
                                        the,</p>
                                </div>
                            </div>
                            <ul>
                                <li><img src={chat2} alt="" />We standard chunk of Ipsum used
                                    <span>Poor
                                        People.</span> </li>
                                <li><img src={chat3} alt="" />No matter what problem you face, you
                                    have. </li>
                            </ul>
                            <div className="about_btn">
                                <Link onClick={ClickHandler} to="/about" className="btn_primary"> ABOUT MORE <i className="ti-arrow-right"></i> </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="left_img">
                <img src={about3} alt="" />
            </div>
            <div className="right_img">
                <img src={about31} alt="" />
            </div>
            <div className="line_shape">
                <img src={about32} alt="" />
            </div>
            <div className="video_btn">
                <VideoModal/>
            </div>
        </section>
    );
};

export default AboutSectionS4;
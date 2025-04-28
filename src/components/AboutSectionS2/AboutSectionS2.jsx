import React from 'react';
import { Link } from 'react-router-dom';
import VideoModal from '../../components/ModalVideo/ModalVideo'
import Ab1 from '../../images/about/about-4.png'
import Ab2 from '../../images/about/about-5.png'
import Ab3 from '../../images/about/about-6.png'
import Ab4 from '../../images/about/1.png'
import Ab5 from '../../images/about/2.png'
import Ab6 from '../../images/about/about-4.jpg'
import Ab7 from '../../images/about/c3.png'
import Ab8 from '../../images/about/c4.png'

const AboutSectionS2 = () => {
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }
    return (
        <section className="about_section_s2 section_space">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 order-lg-2 col-12 ">
                        <div className="right_image">
                            <div className="image-1">
                                <img src={Ab1} alt="" />
                            </div>
                            <div className="image-2">
                                <img src={Ab2} alt="" />
                            </div>
                            <div className="image-3">
                                <img src={Ab3} alt="" />
                                <VideoModal/>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 order-lg-1 col-12 ">
                        <div className="about_left-content">
                            <div className="top_title s2">
                                <h2>OUR ABOUT US</h2>
                                <h3>We Proved Give believe
                                    donate People.</h3>
                                <p>Services address a range of simply application and infrastructure
                                    of passages of available, but the majority have suffered
                                    alteration in some form.</p>
                            </div>
                            <div className="feature_wrap">
                                <div className="feature">
                                    <ul>
                                        <li className="item">
                                            <div className="icon">
                                                <img src={Ab4} alt="" />
                                            </div>
                                            <div className="text">
                                                <h2>Medical treatment</h2>
                                                <span>We poor standard chunk
                                                    Denounce righteous</span>
                                            </div>
                                        </li>
                                        <li className="item">
                                            <div className="icon">
                                                <img src={Ab5} alt="" />
                                            </div>
                                            <div className="text">
                                                <h2>Team off project</h2>
                                                <span>We poor standard chunk
                                                    Denounce righteous</span>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div className="feature-right">
                                    <div className="image">
                                        <img src={Ab6} alt="" />
                                    </div>
                                    <ul>
                                        <li><img src={Ab7} alt="" />We standard <span> Poor People.</span> </li>
                                        <li><img src={Ab8} alt="" />what problem face</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="about_btn">
                                <Link onClick={ClickHandler} to="/about" className="btn_primary"> ABOUT MORE <i className="ti-arrow-right"></i> </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSectionS2;
import React from 'react';
import { Link } from 'react-router-dom';
import Ab1 from '../../images/about/about-6.jpg'
import Abicon1 from '../../images/about/c3.png'
import Abicon2 from '../../images/about/c4.png'
import AbShape from '../../images/about/bg_shape.png'
import CountUp from 'react-countup';

const AboutSectionS3 = () => {
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }
    return (
        <section className="about_section_s3 ">
            <div className="container">
                <div className="row g-0">
                    <div className="col-lg-6 col-12 ">
                        <div className="image">
                            <img src={Ab1} alt="" />
                            <div className="supput">
                                <h2><span className="count"><CountUp end={225}></CountUp></span>+</h2>
                                <h3>Support </h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-12 ">
                        <div className="about_left-content">
                            <div className="top_title s3">
                                <h2>OUR ABOUT US</h2>
                                <h3>We Proved Give believe
                                    donate People.</h3>
                                <p>Services address a range of simply application and infrastructure
                                    of passages of available, but the majority have suffered
                                    alteration in some form.</p>
                            </div>
                            <ul>
                                <li><img src={Abicon1} alt="" />We standard chunk of Ipsum used <span>Poor
                                    People.</span> </li>
                                <li><img src={Abicon2} alt="" />No matter what problem you face, you have. </li>
                            </ul>
                            <div className="about_btn">
                                <Link to="/about" onClick={ClickHandler} className="btn_primary"> ABOUT MORE <i className="ti-arrow-right"></i> </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg_shape">
                <img src={AbShape} alt="" />
            </div>
        </section>
    );
};

export default AboutSectionS3;
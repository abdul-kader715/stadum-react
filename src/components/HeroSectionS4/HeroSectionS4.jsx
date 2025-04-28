import React from 'react';
import Sliderimg from '../../images/slider/slider_bg.jpg'
import lineimg from '../../images/slider/line-shape_2.png'
import shapeimg from '../../images/slider/shape-8.png'
import shapeimg2 from '../../images/slider/2.png'
import choose2 from '../../images/choose/1.png'
import choose3 from '../../images/choose/icon.png'
import choose4 from '../../images/choose/1.jpg'
import VideoModal from '../ModalVideo/ModalVideo';
import { Link } from 'react-router-dom';

const ClickHandler = () => {
    window.scrollTo(10, 0);
}
const HeroSectionS4 = () => {
    return (
        <section className="header_section_s4">
        <div className="hero_slider_item">
            <div className="image">
                <img src={Sliderimg} alt=""/>
            </div>
            <div className="container">
                <div className="content">
                    <div className="title">
                        <h2>Children of Money
                            The Importance.</h2>
                        <div className="line-shape">
                            <img src={lineimg} alt=""/>
                        </div>
                    </div>
                    <div className="text">
                        <p>Nullam eu nibh vitae est tempor molestie id sed exthe. Quisque dignissim maximus ipsum
                            metus poor the
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
            </div>
            <div className="shape-1">
                <img src={shapeimg} alt=""/>
            </div>
            <div className="image_s4">
                <img src={shapeimg2} alt=""/>
            </div>
            <div className="tab_content">
                <div className="item">
                    <div className="content">
                        <div className="icon">
                            <img src={choose2} alt=""/>
                        </div>
                        <div className="text">
                            <h2>Coin of Etiam</h2>
                            <ul>
                                <li><img src={choose3} alt=""/> <span>We standard chunk
                                        Poor.</span></li>
                                <li><img src={choose3} alt=""/> <span>No matter what
                                        problem.</span></li>
                            </ul>
                        </div>
                    </div>
                    <div className="image11">
                        <img src={choose4} alt=""/>
                    </div>
                </div>
            </div>

        </div>
    </section>
    );
};

export default HeroSectionS4;
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import HeroImg1 from '../../images/slider/slider-1.jpg'
import HeroImg2 from '../../images/slider/slider-2.jpg'
import HeroImg3 from '../../images/slider/slider-3.jpg'

import HeroShape1 from '../../images/slider/solidarity.png'
import HeroShape2 from '../../images/slider/line-shape.png'
import HeroShape3 from '../../images/slider/shape-2.png'
import HeroShape4 from '../../images/slider/shape.png'


const HeroSection = () => {
    const sliderSettings = {
        autoplay: true,
        speed: 1000,
        lazyLoad: 'progressive',
        fade: true, 
        dots: true,
    };
    return (
        <section className='hero_slider'>
            <Slider {...sliderSettings} >
                <div className="hero_slider_item">
                    <div className="image">
                        <img src={HeroImg1} alt="" />
                    </div>
                    <div className="container">
                        <div className="content">
                            <div className="shado_text animated" data-animation-in="fadeInUp">
                                <span>NONTA</span>
                                <div className="shape-4">
                                    <img src={HeroShape1} alt="" />
                                </div>
                            </div>
                            <div className="title animated" data-animation-in="fadeInUp">
                                <h2>GIVE SOMEONE HAND
                                    the people P<span>o</span><span>o</span>r.</h2>
                                <div className="line-shape">
                                    <img src={HeroShape2} alt="" />
                                </div>
                            </div>
                            <div className="text animated" data-animation-in="fadeInUp">
                                <p>Nullam eu nibh vitae est tempor molestie id sed exthe. Quisque dignissim maximus ipsum metus poor the
                                    peoole ipsum.</p>
                            </div>
                            <div className="hero_btn animated" data-animation-in="fadeInUp">
                                <Link to="/contact" className="btn_primary">Contact Us <i className="ti-arrow-right"></i></Link>
                            </div>
                        </div>
                    </div>
                    <div className="shape-1">
                        <img src={HeroShape3} alt="" />
                    </div>
                    <div className="shape-2">
                        <img src={HeroShape4} alt="" />
                    </div>
                </div>
                <div className="hero_slider_item">
                    <div className="image">
                        <img src={HeroImg2} alt="" />
                    </div>
                    <div className="container">
                        <div className="content">
                            <div className="shado_text animated" data-animation-in="fadeInUp">
                                <span>NONTA</span>
                                <div className="shape-4">
                                    <img src={HeroShape1} alt="" />
                                </div>
                            </div>
                            <div className="title animated" data-animation-in="fadeInUp">
                                <h2>GIVE SOMEONE HAND
                                    the people P<span>o</span><span>o</span>r.</h2>
                                <div className="line-shape">
                                    <img src={HeroShape2} alt="" />
                                </div>
                            </div>
                            <div className="text animated" data-animation-in="fadeInUp">
                                <p>Nullam eu nibh vitae est tempor molestie id sed exthe. Quisque dignissim maximus ipsum metus poor the
                                    peoole ipsum.</p>
                            </div>
                            <div className="hero_btn animated" data-animation-in="fadeInUp">
                                <Link to="/contact" className="btn_primary">Contact Us <i className="ti-arrow-right"></i></Link>
                            </div>
                        </div>
                    </div>
                    <div className="shape-1">
                        <img src={HeroShape3} alt="" />
                    </div>
                    <div className="shape-2">
                        <img src={HeroShape4} alt="" />
                    </div>

                </div>
                <div className="hero_slider_item">
                    <div className="image">
                        <img src={HeroImg3} alt="" />
                    </div>
                    <div className="container">
                        <div className="content">
                            <div className="shado_text animated" data-animation-in="fadeInUp">
                                <span>NONTA</span>
                                <div className="shape-4">
                                    <img src={HeroShape1} alt="" />
                                </div>
                            </div>
                            <div className="title animated" data-animation-in="fadeInUp">
                                <h2>GIVE SOMEONE HAND
                                    the people P<span>o</span><span>o</span>r.</h2>
                                <div className="line-shape">
                                    <img src={HeroShape2} alt="" />
                                </div>
                            </div>
                            <div className="text animated" data-animation-in="fadeInUp">
                                <p>Nullam eu nibh vitae est tempor molestie id sed exthe. Quisque dignissim maximus ipsum metus poor the
                                    peoole ipsum.</p>
                            </div>
                            <div className="hero_btn animated" data-animation-in="fadeInUp">
                                <Link to="/contact" className="btn_primary">Contact Us <i className="ti-arrow-right"></i></Link>
                               
                            </div>
                        </div>
                    </div>
                    <div className="shape-1">
                        <img src={HeroShape3} alt="" />
                    </div>
                    <div className="shape-2">
                        <img src={HeroShape4} alt="" />
                    </div>
                </div>

            </Slider>
          
        </section>

    );


}

export default HeroSection;






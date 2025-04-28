import React from 'react';
import Slider from "react-slick";
/* image */
import Br1 from '../../images/brand/1.png'
import Br2 from '../../images/brand/2.png'
import Br3 from '../../images/brand/3.png'
import Br4 from '../../images/brand/4.png'
import Br5 from '../../images/brand/5.png'

const BrandSection = (props) => {
    const settings = {
        slidesToShow: 5,
        slidesToScroll: 1,
        dots: false,
        arrows: false,
        autoplay: true,
        responsive: [{
            breakpoint: 1199,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 2,
            }
        },
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 2,
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 575,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 399,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
        ]
    };

    return (
        <section className={"" +props.hclass}>
            <h2 className="d-none">display hidden</h2>
            <div className="container">
                <Slider {...settings} className="brand_slider">
                    <div className="item">
                        <div className="image">
                            <img src={Br1} alt="" />
                        </div>
                    </div>
                    <div className="item">
                        <div className="image">
                            <img src={Br2} alt="" />
                        </div>
                    </div>
                    <div className="item">
                        <div className="image">
                            <img src={Br3} alt="" />
                        </div>
                    </div>
                    <div className="item">
                        <div className="image">
                            <img src={Br4} alt="" />
                        </div>
                    </div>
                    <div className="item">
                        <div className="image">
                            <img src={Br5} alt="" />
                        </div>
                    </div>
                    <div className="item">
                        <div className="image">
                            <img src={Br2} alt="" />
                        </div>
                    </div>
                </Slider>
            </div>
        </section>
    );
};

export default BrandSection;
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import Img1 from '../../images/testimonil/tes1.jpg'
import Img2 from '../../images/testimonil/tes2.jpg'
import Img3 from '../../images/testimonil/tes3.jpg'
import Img4 from '../../images/testimonil/tes4.jpg'
import Img5 from '../../images/testimonil/tes5.jpg'
import Img6 from '../../images/testimonil/tes6.jpg'
import Shape from '../../images/testimonil/bg_shape.png'



const testimonials = [
    {
        name: "Porata Barson",
        role: "Manager",
        content: `We are privileged to work with
                                hundreds futurebusinesses,
                                including many of the world’s
                                software, and brands.`,
        image: Img1,
        stars: 5,
    },
    {
        name: "Jacky Stamp",
        role: "Manager",
        content: `We are privileged to work with
                                hundreds futurebusinesses,
                                including many of the world’s
                                software, and brands.`,
        image: Img2,
        stars: 5,
    },
     {
        name: "Philip Louis",
        role: "Manager",
        content: `We are privileged to work with
                                hundreds futurebusinesses,
                                including many of the world’s
                                software, and brands.`,
        image: Img3,
        stars: 5,
    },
     {
        name: "Porata Barson",
        role: "Manager",
        content: `We are privileged to work with
                                hundreds futurebusinesses,
                                including many of the world’s
                                software, and brands.`,
        image: Img4,
        stars: 5,
    }, 
    {
        name: "Juster Tee",
        role: "Manager",
        content: `We are privileged to work with
                                hundreds futurebusinesses,
                                including many of the world’s
                                software, and brands.`,
        image: Img5,
        stars: 5,
    },
    {
        name: "Andree Right",
        role: "Manager",
        content: `We are privileged to work with
                                hundreds futurebusinesses,
                                including many of the world’s
                                software, and brands.`,
        image: Img6,
        stars: 5,
    },
];


const TestimonilSectionS3 = (props) => {

    const settings = {
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
        responsive: [{
            breakpoint: 1199,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 2,
            }
        },
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }

        ]
    };

    return (

        <section className={"" +props.hclass}>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="top_title">
                            <h2>our testimonials</h2>
                            <h3>Look This of a Poor Rambling </h3>
                        </div>
                    </div>
                </div>
                <div className="testimonial_slider_s3 ">
                    <Slider {...settings} className="testimonial_slider">
                        {testimonials.map((t, index) => (
                            <div className="item col-4" key={index}>
                                <div className="image">
                                    <img src={t.image} alt={t.name} />
                                </div>
                                <div className="content">
                                    <h2>{t.name}</h2>
                                    <span>{t.role}</span>
                                    <p>{t.content}</p>
                                    <ul>
                                        {[...Array(t.stars)].map((_, i) => (
                                            <li key={i}><i className="ti-star"></i></li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
            <div className="bg_shape">
                <img src={Shape} alt="" />
            </div>
        </section>

    )
}
export default TestimonilSectionS3





import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import Icon from '../../images/testimonil/icon_3.png'
import Img1 from '../../images/testimonil/img_1.png'
import Img2 from '../../images/testimonil/img_2.png'
import Img3 from '../../images/testimonil/img_3.png'
import Img4 from '../../images/testimonil/img_4.png'
import Shape from '../../images/testimonil/shape_2.png'
import Shape2 from '../../images/testimonil/icon_2.png'
import t_img from '../../images/testimonil/t_img_1.png'
import t_icon from '../../images/testimonil/icon.png'



const testimonials = [
    {
      name: "Porata Barson",
      role: "Manager",
      content: `All the lorem Ipsum generators on the Internet
                predefined as necessary, making this the
                the Internet uses a dictionary
                We’re a full-service digital marketing agency
                who focus on consistent messages`,
      image: t_img,
      icon: t_icon,
      stars: 5,
    },
    {
      name: "Porata Barson",
      role: "Manager",
      content: `All the lorem Ipsum generators on the Internet
                predefined as necessary, making this the
                the Internet uses a dictionary
                We’re a full-service digital marketing agency
                who focus on consistent messages`,
      image: t_img,
      icon: t_icon,
      stars: 5,
    },
  ];


const TestimonilSectionS2 = () => {

    const settings = {
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
    };

    return (

        <section className="testimonil_section_s2 ">
            <div className="testimonil_wrap section_space">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="top_title s3">
                                <h2>our testimonials</h2>
                                <h3>Look This of a Poor Rambling </h3>
                            </div>
                        </div>
                    </div>
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-12">
                            <div className="image_wrap">
                                <div className="image">
                                    <div className="icon">
                                        <img src={Icon} alt="" />
                                    </div>
                                </div>
                                <div className="img_1">
                                    <img src={Img1} alt="" />
                                </div>
                                <div className="img_4">
                                    <img src={Img4} alt="" />
                                </div>
                                <div className="img_3">
                                    <img src={Img3} alt="" />
                                </div>
                                <div className="img_2">
                                    <img src={Img2} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-12">
                            
                                <Slider {...settings} className="testimonial_slider">
                                    {testimonials.map((t, index) => (
                                        <div className="item" key={index}>
                                            <div className="content">
                                                <div className="image">
                                                    <img src={t.image} alt={t.name} />
                                                </div>
                                                <h2>{t.name}</h2>
                                                <span>{t.role}</span>
                                                <h3>{t.content}</h3>
                                                <ul>
                                                    {[...Array(t.stars)].map((_, i) => (
                                                        <li key={i}><i className="ti-star"></i></li>
                                                    ))}
                                                </ul>
                                                <div className="qa_shape">
                                                    <img src={t.icon} alt="Quote Icon" />
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </Slider>
                           
                        </div>
                    </div>
                </div>
                <div className="shape">
                    <img src={Shape} alt="" />
                </div>
            </div>
            <div className="icon_2">
                <img src={Shape2} alt="" />
            </div>
        </section>

    )
}
export default TestimonilSectionS2
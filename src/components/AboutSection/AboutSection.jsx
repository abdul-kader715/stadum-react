import { Link } from "react-router-dom";

// images
import aboutimg1 from '../../images/about/about-2.jpg';
import aboutimg2 from '../../images/about/about-1.jpg';
import aboutimg3 from '../../images/about/about-icon.png';
import aboutimg4 from '../../images/about/about-3.jpg';
import aboutimg5 from '../../images/about/chat.png';
import aboutimg6 from '../../images/about/c3.png';
import aboutimg7 from '../../images/about/c4.png';
import shape from '../../images/about/paint.png';

const AboutSection = () => {


    return (
        <section className="about_section">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-12">
                        <div className="image">
                            <div className="about_img-1">
                                <img src={aboutimg1} alt="" />
                            </div>
                            <div className="about_img-2">
                                <img src={aboutimg2} alt="" />
                            </div>
                            <div className="about_img-3">
                                <img src={aboutimg3} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-12">
                        <div className="content">
                            <div className="top_title">
                                <h2>OUR ABOUT US</h2>
                                <h3>We Proved Give believe donate People.</h3>
                                <p>Services address a range of simply application and infrastructure of passages of available, but the
                                    majority have suffered alteration in some form.</p>
                            </div>
                            <div className="text_qua">
                                <div className="image">
                                    <img src={aboutimg4} alt="" />
                                </div>
                                <div className="text">
                                    <img src={aboutimg5} alt="" />
                                    <p>We always remained the same: to maximize their marketing accelerate customer best fat pore to big
                                        the,</p>
                                </div>
                            </div>
                            <ul>
                                <li><img src={aboutimg6} alt="" />We standard chunk of Ipsum used <span>Poor
                                    People.</span> </li>
                                <li><img src={aboutimg7} alt="" />No matter what problem you face, you have. </li>
                            </ul>
                            <div className="about_btn">
                                <Link to='/about' className="btn_primary"> ABOUT MORE <i className="ti-arrow-right"></i> </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="shape">
                <img src={shape} alt="" />
            </div>
        </section>
    )

}

export default AboutSection
import React from 'react';
import { Link } from 'react-router-dom';

import Shape from '../../images/service/bg_shape_2.png'
import service from '../../api/services';

const ServiceSectionS2 = () => {
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }
    return (
        <section className="service_section_s2 section_space">
            <div className="bg_shape">
                <img src={Shape} alt="" />
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="top_title s2">
                            <h2>OUR BEST SERVICE</h2>
                            <h3>What Best Service talking </h3>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {service.slice(6, 9).map((servic, index) => (
                        <div className="col col-xl-4 col-lg-6 col-md-6 col-12" key={index}>
                            <div className="service_card_s2">
                                <div className="image">
                                    <img src={servic.icon} alt="" />
                                </div>
                                <div className="icon_text">
                                    <div className="icon">
                                        <img src={servic.sicon} alt="" />
                                    </div>
                                    <h2><Link onClick={ClickHandler} to={`/services-single/${servic.slug}`}>{servic.title}</Link></h2>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="service_btn">
                    <Link onClick={ClickHandler} to="/services-s2" className="btn_primary">View ALL SERVICE<i className="ti-arrow-right"></i></Link>
                </div>

            </div>
        </section>
    );
};

export default ServiceSectionS2;
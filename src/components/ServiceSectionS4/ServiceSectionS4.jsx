
import React from 'react';
import { Link } from 'react-router-dom';
import service from '../../api/services';

const ServiceSectionS4 = () => {
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }
    return (
        <section className="service_section_s4 section_space">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="top_title">
                            <h2>OUR BEST SERVICE</h2>
                            <h3>What Best Service talking </h3>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {service.slice(0, 6).map((servic, index) => (
                        <div className="col col-xl-4 col-lg-6 col-md-6 col-12" key={index}>
                            <div className="service_card_s3">
                            <div className="item">
                                <div className="icon">
                                <img src={servic.sicon} alt="" />
                                    <div className="line_shape">
                                        <div className="shape-1"></div>
                                        <div className="shape-2"></div>
                                        <div className="shape-3"></div>
                                    </div>
                                </div>
                                <div className="content">
                                        <h2>{servic.title}</h2>
                                        <p>{servic.description}</p>
                                    </div>
                            </div>
                            <Link onClick={ClickHandler} to={`/services-single/${servic.slug}`}><i className="ti-arrow-top-right"></i></Link>
                        </div>
                        </div>
                    ))}

                </div>
            </div>
        </section>
    );
};

export default ServiceSectionS4;
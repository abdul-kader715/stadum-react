import React, { Fragment } from 'react';
import { useParams } from 'react-router-dom'
import service from "../../api/services";

import Image from "../../images/service.jpg"
import HeaderSectionS2 from '../../components/HeaderSectionS2/HeaderSectionS2';
import PageTitleSection from '../../components/PageTitleSection/PageTitleSection';
import FooterSection from '../../components/FooterSection/FooterSection';

const ServiceSinglePage = (props) => {
    const { slug } = useParams()
    const serviceDetails = service.find(item => item.slug === slug)

    return (

        <Fragment>
            <HeaderSectionS2 />
            <PageTitleSection pageTitle={serviceDetails.title} pagesub={'Services Single Page'} />

            <section className="services_single_section section_space">
                <div className="container">
                    <div className="wrap">
                        <div className="image">
                            <img src={serviceDetails.sSImg} alt="Details" />
                        </div>
                        <div className="content">
                            <h2>{serviceDetails.title}</h2>
                            <p>There are many variations of passages of Lorem Ipsum available, but the majority have
                                suffered alteration in some form, by injected
                                humour, or randomised words which don't look even slightly believable. If you are going to
                                use a passage of Lorem Ipsum, you
                                need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lor
                            </p>
                            <p>We are many variations of passages of Lorem Ipsum available, but the majority have suffered
                                alteration in some form, by injected
                                humour, or randomised words which don't look even slightly believable. If you are going to
                                use a passage.</p>
                        </div>


                        <div className="services_single_item_wrap">
                            <div className="content">
                                <h3>Coin of Poor help Service:</h3>
                                <div className="item_wrap">
                                    <div className="item">
                                        <ul>
                                            <li><i className="ti-check"></i> Joining Hands To Help The World’.</li>
                                            <li><i className="ti-check"></i> We trusted fundraising & charity</li>
                                            <li><i className="ti-check"></i> We standard chunk poor man help.</li>
                                            <li><i className="ti-check"></i> No matter what problem congue .</li>
                                        </ul>
                                    </div>
                                    <div className="item">
                                        <ul>
                                            <li><i className="ti-check"></i> Joining Hands To Help The World’.</li>
                                            <li><i className="ti-check"></i> We trusted fundraising & charity</li>
                                            <li><i className="ti-check"></i> We standard chunk poor man help.</li>
                                            <li><i className="ti-check"></i> No matter what problem congue .</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="images">
                                <img src={Image} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <FooterSection tClass={'footer_section_s2'} />
        </Fragment>

    );
}
export default ServiceSinglePage;
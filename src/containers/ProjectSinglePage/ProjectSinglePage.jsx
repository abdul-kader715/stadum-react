import React, { Fragment } from 'react';
import { useParams } from 'react-router-dom'
import HeaderSectionS2 from '../../components/HeaderSectionS2/HeaderSectionS2';
import PageTitleSection from '../../components/PageTitleSection/PageTitleSection';
import Project from '../../api/project';
import FooterSection from '../../components/FooterSection/FooterSection';
import Image from "../../images/service.jpg"
import BrandSection from '../../components/BrandSection/BrandSection';

const CausesSinglePage = (props) => {
    const { slug } = useParams()
    const ProjectSingle = Project.find(item => item.Slug === slug)
    return (
        <Fragment>
            <HeaderSectionS2 />
            <PageTitleSection pageTitle={ProjectSingle.title} pagesub={'Project Single Page'} />
            <section className="services_single_section section_space">
                <div className="container">
                    <div className="wrap">
                        <div className="image">
                            <img src={ProjectSingle.PsingleImg} alt="Details" />
                        </div>
                        <div className="content">
                            <h2>{ProjectSingle.title}</h2>
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
            <BrandSection hclass={'brand_section'} />
            <FooterSection tClass={'footer_section_s2'} />
        </Fragment>
    );
}
export default CausesSinglePage;
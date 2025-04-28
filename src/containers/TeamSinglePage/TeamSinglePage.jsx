import React, { Fragment } from 'react';
import { Link, useParams } from 'react-router-dom'
import HeaderSectionS2 from '../../components/HeaderSectionS2/HeaderSectionS2';
import PageTitleSection from '../../components/PageTitleSection/PageTitleSection';
import Team from '../../api/team'
import FooterSection from '../../components/FooterSection/FooterSection';

const TeamSinglePage = (props) => {
    const { slug } = useParams()
    const TeamSingle = Team.find(item => item.slug === slug)
    return (
        <Fragment>
            <HeaderSectionS2 />
            <PageTitleSection pageTitle={TeamSingle.title} pagesub={'Team Single Page'} />
            <section className="team_single_section section_space">
                <div className="container">
                    <div className="team_top_wrap">
                        <div className="image">
                            <img src={TeamSingle.image} alt="" />
                        </div>
                        <div className="content">
                            <h2>Team Details:</h2>
                            <ul>
                                <li>Name : <span>{TeamSingle.title}</span></li>
                                <li>About : <span> Phis are bound to ensue; and equal blame belongs to those who
                                    through weakness of will, which is the same as through.We have the
                                    and industry expertise to develop solutions that can connect.</span></li>
                                <li>Call:<span>++5544221556656</span></li>
                                <li>
                                    <span>Follow us:</span>
                                    <ul>
                                        <li><Link to="#"><i className="ti-facebook"></i></Link></li>
                                        <li><Link to="#"><i className="ti-instagram"></i></Link></li>
                                        <li><Link to="#"><i className="ti-twitter-alt"></i></Link></li>
                                        <li><Link to="#"><i className="ti-vimeo-alt"></i></Link></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="team_bottom_wrap">
                        <p>There are many variations of passages of Lorem Ipsum Fasts There are many variations of passages
                            of Lorem Ipsum Fastsby we are the fast to
                            injected humour,by injected humour, or randomised coved ceilings. are bound to ensue; and equal
                            blame belongs can to bo erwtg mont be
                            fao go not be hie best to those who through weakness .....</p>
                        <div className="row">
                            <div className="col-lg-6 col-12">
                                <span>Medical Project</span>
                                <div className="progres">
                                    <div className="bar" style={{ width: '85%' }} >
                                    </div>
                                    <p className="percent">70%</p>
                                </div>
                            </div>
                            <div className="col-lg-6 col-12">
                                <span>Team Support</span>
                                <div className="progres">
                                    <div className="bar"  style={{ width: '40%' }}>
                                    </div>
                                    <p className="percent">40%</p>
                                </div>
                            </div>
                            <div className="col-lg-6 col-12">
                                <span>Medical Engineering</span>
                                <div className="progres">
                                    <div className="bar"  style={{ width: '88%' }}>
                                    </div>
                                    <p className="percent">88%</p>
                                </div>
                            </div>
                            <div className="col-lg-6 col-12">
                                <span>Medicine of Health </span>
                                <div className="progres">
                                    <div className="bar"  style={{ width: '55%' }}>
                                    </div>
                                    <p className="percent">55%</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <FooterSection tClass={'footer_section_s2'} />
        </Fragment>
    );
}
export default TeamSinglePage;
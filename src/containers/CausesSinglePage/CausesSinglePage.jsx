import React, { Fragment } from 'react';
import { useParams } from 'react-router-dom'
import HeaderSectionS2 from '../../components/HeaderSectionS2/HeaderSectionS2';
import PageTitleSection from '../../components/PageTitleSection/PageTitleSection';
import Causes from '../../api/causes';
import FooterSection from '../../components/FooterSection/FooterSection';
import DonationWidget from './DonationWidget';

const CausesSinglePage = (props) => {
    const {slug} = useParams()
    const CausesSingle = Causes.find(item => item.Slug === slug)
    return(
        <Fragment>
            <HeaderSectionS2/>
            <PageTitleSection pageTitle={CausesSingle.title} pagesub={'Causes Details Page'} />
            <section className="causes_single_page section_space">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="title">
                            <h3>Related causes:</h3>
                        </div>
                        <div className="wrap">
                            <div className="image">
                                <img src={CausesSingle.causesSingle} alt=""/>
                            </div>
                            <div className="top_content">
                                <h2>{CausesSingle.title} </h2>
                                <p>We poor standard chunk ofI nibh velitThe COVID-19 epidemic is a once-in-a-generation
                                    event that will take the best of humanity to conquer. Your contribution to this fund
                                    will help with both short- and long-term.</p>
                            </div>
                            <DonationWidget/>
                        </div>
                        <div className="bottom_text">
                            <p>In today’s world many people die without eating and it’s a shame for us that we are not
                                helping them. Money is not always the way to help the poor.
                                ou can get involved by giving them anything that you are capable of. Many a penny makes
                                a pond; drops of water make the ocean. So if we work
                                together we can change the world in a better way.</p>
                            <p>We world many people die without eating and it’s a shame for us that we are not helping
                                them. Money is not always the way to help the poor.
                                ou can get involved by giving them anything that you are capable of. Many a penny makes
                                a pond; drops of water make the ocean. So if we work
                                together we can change the world in a better way.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
            <FooterSection tClass={'footer_section_s2'} />
        </Fragment>
    );
}
export default CausesSinglePage;
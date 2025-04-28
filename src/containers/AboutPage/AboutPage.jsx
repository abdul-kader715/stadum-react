import React, { Fragment } from 'react';
import HeaderSectionS2 from '../../components/HeaderSectionS2/HeaderSectionS2';
import PageTitleSection from '../../components/PageTitleSection/PageTitleSection';
import AboutSectionS2 from '../../components/AboutSectionS2/AboutSectionS2'
import FeaturesSectionS2 from '../../components/FeaturesSectionS2/FeaturesSectionS2'
import ServiceSectionS4 from '../../components/ServiceSectionS4/ServiceSectionS4'
import FooterSection from '../../components/FooterSection/FooterSection';


const AboutPage = () => {
    return (
        <Fragment>
            <HeaderSectionS2/>
            <PageTitleSection pageTitle={'About us'} pagesub={'About'} />
            <AboutSectionS2 />
            <FeaturesSectionS2 />
            <ServiceSectionS4 />
            <FooterSection tClass={'footer_section_s2'} />
        </Fragment>
    );
};

export default AboutPage;
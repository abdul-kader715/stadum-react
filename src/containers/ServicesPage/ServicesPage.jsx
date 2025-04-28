import React, { Fragment } from 'react';
import HeaderSectionS2 from '../../components/HeaderSectionS2/HeaderSectionS2';
import PageTitleSection from '../../components/PageTitleSection/PageTitleSection';
import FooterSection from '../../components/FooterSection/FooterSection';
import ServiceSection from '../../components/ServiceSection/ServiceSection';


const ServicesPage = () => {
    return (
        <Fragment>
            <HeaderSectionS2/>
            <PageTitleSection pageTitle={'Services'} pagesub={'Services Page'} />
            <ServiceSection />
            <FooterSection tClass={'footer_section_s2'} />
        </Fragment>
    );
};

export default ServicesPage;
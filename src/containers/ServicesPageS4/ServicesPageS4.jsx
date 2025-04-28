import React, { Fragment } from 'react';
import HeaderSectionS2 from '../../components/HeaderSectionS2/HeaderSectionS2';
import PageTitleSection from '../../components/PageTitleSection/PageTitleSection';
import FooterSection from '../../components/FooterSection/FooterSection';
import ServiceSectionS4 from '../../components/ServiceSectionS4/ServiceSectionS4';


const ServicesPageS4 = () => {
    return (
        <Fragment>
            <HeaderSectionS2/>
            <PageTitleSection pageTitle={'Services'} pagesub={'Services Page'} />
            <ServiceSectionS4 />
            <FooterSection tClass={'footer_section_s2'} />
        </Fragment>
    );
};

export default ServicesPageS4;
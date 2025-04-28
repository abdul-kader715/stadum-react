import React, { Fragment } from 'react';
import HeaderSectionS2 from '../../components/HeaderSectionS2/HeaderSectionS2';
import PageTitleSection from '../../components/PageTitleSection/PageTitleSection';
import FooterSection from '../../components/FooterSection/FooterSection';
import ServiceSectionS2 from '../../components/ServiceSectionS2/ServiceSectionS2';


const ServicesPageS2 = () => {
    return (
        <Fragment>
            <HeaderSectionS2/>
            <PageTitleSection pageTitle={'Services'} pagesub={'Services Page'} />
            <ServiceSectionS2 />
            <FooterSection tClass={'footer_section_s2'} />
        </Fragment>
    );
};

export default ServicesPageS2;
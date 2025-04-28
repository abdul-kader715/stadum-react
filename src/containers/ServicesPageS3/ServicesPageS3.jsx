import React, { Fragment } from 'react';
import HeaderSectionS2 from '../../components/HeaderSectionS2/HeaderSectionS2';
import PageTitleSection from '../../components/PageTitleSection/PageTitleSection';
import FooterSection from '../../components/FooterSection/FooterSection';
import ServiceSectionS3 from '../../components/ServiceSectionS3/ServiceSectionS3';


const ServicesPageS3 = () => {
    return (
        <Fragment>
            <HeaderSectionS2/>
            <PageTitleSection pageTitle={'Services'} pagesub={'Services Page'} />
            <ServiceSectionS3 />
            <FooterSection tClass={'footer_section_s2'} />
        </Fragment>
    );
};

export default ServicesPageS3;
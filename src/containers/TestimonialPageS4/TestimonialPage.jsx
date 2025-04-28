import React, { Fragment } from 'react';
import HeaderSectionS2 from '../../components/HeaderSectionS2/HeaderSectionS2';
import PageTitleSection from '../../components/PageTitleSection/PageTitleSection';
import FooterSection from '../../components/FooterSection/FooterSection';
import TestimonilSectionS3 from '../../components/TestimonilSectionS3/TestimonilSectionS3';
import FanfactSectionS2 from '../../components/FanfactSectionS2/FanfactSectionS2';


const ServicesPageS4 = () => {
    return (
        <Fragment>
            <HeaderSectionS2/>
            <PageTitleSection pageTitle={'Testimonial'} pagesub={'Testimonial Page'} />
            <TestimonilSectionS3 hclass={'testimonial_section_s4 section_space'}  />
            <FanfactSectionS2/>
            <FooterSection tClass={'footer_section_s2'} />
        </Fragment>
    );
};

export default ServicesPageS4;
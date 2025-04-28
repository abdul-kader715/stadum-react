import React, { Fragment } from 'react';
import HeaderSectionS2 from '../../components/HeaderSectionS2/HeaderSectionS2';
import PageTitleSection from '../../components/PageTitleSection/PageTitleSection';
import FooterSection from '../../components/FooterSection/FooterSection';
import CausesSection from '../../components/CausesSection/CausesSection';


const CausesPage = () => {
    return (
        <Fragment>
            <HeaderSectionS2/>
            <PageTitleSection pageTitle={'Causes'} pagesub={'Causes Page'} />
            <CausesSection hClass={'causes_section section_space'} />
            <FooterSection tClass={'footer_section_s2'} />
        </Fragment>
    );
};

export default CausesPage;
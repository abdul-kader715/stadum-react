import React, { Fragment } from 'react';
import HeaderSectionS2 from '../../components/HeaderSectionS2/HeaderSectionS2';
import PageTitleSection from '../../components/PageTitleSection/PageTitleSection';
import FooterSection from '../../components/FooterSection/FooterSection';
import TeamSection from '../../components/TeamSection/TeamSection';


const AboutPage = () => {
    return (
        <Fragment>
            <HeaderSectionS2/>
            <PageTitleSection pageTitle={'Team'} pagesub={'Team Page'} />
            <TeamSection hclass={'team_section s2 section_space'} />
            <FooterSection tClass={'footer_section_s2'} />
        </Fragment>
    );
};

export default AboutPage;
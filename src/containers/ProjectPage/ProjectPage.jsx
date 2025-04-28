import React, { Fragment } from 'react';
import HeaderSectionS2 from '../../components/HeaderSectionS2/HeaderSectionS2';
import PageTitleSection from '../../components/PageTitleSection/PageTitleSection';
import FooterSection from '../../components/FooterSection/FooterSection';
import ProjectSection from '../../components/ProjectSection/ProjectSection';

const CausesSinglePage = (props) => {

    return (
        <Fragment>
            <HeaderSectionS2 />
            <PageTitleSection pageTitle={'Project'} pagesub={'Project Page'} />
            <ProjectSection  hClass={'project_section'}/>
            <FooterSection tClass={'footer_section_s2'} />
        </Fragment>
    );
}
export default CausesSinglePage;
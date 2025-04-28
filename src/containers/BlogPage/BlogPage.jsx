import React, { Fragment } from 'react';
import HeaderSectionS2 from '../../components/HeaderSectionS2/HeaderSectionS2';
import PageTitleSection from '../../components/PageTitleSection/PageTitleSection';
import FooterSection from '../../components/FooterSection/FooterSection';
import BlogSection from '../../components/BlogSection/BlogSection';


const BlogPage = () => {
   
    return (
        <Fragment>
            <HeaderSectionS2 />
            <PageTitleSection pageTitle={'Blog'} pagesub={'Blog Page'} />
            <BlogSection hClass={'blog_section_s5 section_space'}/>
            <FooterSection tClass={'footer_section_s2'} />
        </Fragment>
    );
};

export default BlogPage;
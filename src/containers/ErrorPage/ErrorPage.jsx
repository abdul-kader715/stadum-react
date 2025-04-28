import React, { Fragment } from 'react';
import HeaderSectionS2 from '../../components/HeaderSectionS2/HeaderSectionS2';
import PageTitleSection from '../../components/PageTitleSection/PageTitleSection';
import FooterSection from '../../components/FooterSection/FooterSection';
import { Link } from 'react-router-dom';
import Error from '../../images/404.png'


const ErrorPage = () => {
    const ClickHandler = () => {
        window.scrollTo(10,0)
    }
    return (
        <Fragment>
            <HeaderSectionS2 />
            <PageTitleSection pageTitle={'Error Page'} pagesub={'Error Page'} />
            <section className="error_page section_space">
                <div className="container">
                    <div className="image">
                        <img src={Error} alt="" />
                    </div>
                    <div className="content">
                        <h2>Page can’t be found</h2>
                        <p>Sorry This Page Not found take a look at our most popular</p>
                        <Link onClick={ClickHandler} to="/" className="btn_primary">GO TO HOME</Link>
                    </div>
                </div>
            </section>
            <FooterSection tClass={'footer_section_s2'} />
        </Fragment>
    );
};

export default ErrorPage;
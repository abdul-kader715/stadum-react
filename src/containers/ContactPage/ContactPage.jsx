import React, { Fragment } from 'react';
import HeaderSectionS2 from '../../components/HeaderSectionS2/HeaderSectionS2';
import PageTitleSection from '../../components/PageTitleSection/PageTitleSection';
import FooterSection from '../../components/FooterSection/FooterSection';
import ContactFrom from '../../components/ContactSection/ContactFrom';
import ContactInfoSection from '../../components/ContactInfoSection/ContactInfoSection';
import ContactImg from '../../images/contact.jpg'

const ContactPage = () => {
    return (
        <Fragment>
        <HeaderSectionS2/>
        <PageTitleSection pageTitle={'Contact Page'} pagesub={'Contact'} />
        <section className="contact_page section_space">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-12">
                        <div className="image">
                            <img src={ContactImg} alt="" />
                        </div>
                    </div>
                    <div className="col-lg-6 col-12">
                        <div className="contact_from">
                            <div className="title">
                                <h2>Request A Quote</h2>
                                <span>24/7 support</span>
                            </div>
                            <ContactFrom/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <ContactInfoSection hClass={'contact_info_section s2'}/>
        <div className="map_right s2">
            <div className="map">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d13249.247068040606!2d151.20960562674117!3d-33.8816236491114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spt-BR!2sbr!4v1468899355787"
                    style={{ border: '0', width: '100%', height:'100%', }}
                    allowFullScreen></iframe>
            </div>
        </div>
        <FooterSection tClass={'footer_section_s2'} />
    </Fragment>
    );
};

export default ContactPage;

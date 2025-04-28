import React from 'react';
import ContactFrom from './ContactFrom';
import Img from '../../images/contact/left.jpg'

const ContactSection = (props) => {
    return (
        <section className={"" + props.hClass}>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-xl-4 col-lg-6 col-md-6 col-12">
                        <div className="left_image">
                            <img src={Img} alt="" />
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-6 col-md-6 col-12">
                        <div className="contact_from">
                            <div className="title">
                                <h2>Request A Quote</h2>
                                <span>24/7 support</span>
                            </div>
                            <ContactFrom/>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-6 col-md-6 col-12">
                        <div className="map_right">
                            <div className="map">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d13249.247068040606!2d151.20960562674117!3d-33.8816236491114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spt-BR!2sbr!4v1468899355787"
                                    title="Google Map"
                                    style={{ border: '0', width: '100%', }}
                                    allowFullScreen
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
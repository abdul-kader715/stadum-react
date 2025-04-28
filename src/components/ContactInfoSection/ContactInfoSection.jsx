import React from 'react';

/* image */
import icon1 from '../../images/contact/phone-call.png'
import icon2 from '../../images/contact/message.png'
import icon3 from '../../images/contact/phone-call.png'

const ContactInfoSection = (props) => {
    return (
        <section className={"" + props.hClass}>
        <div className="container">
          <div className="row">
            <div className="col col-lg-4 col-md-6 col-12">
              <div className="contact_info_card">
                <div className="icon">
                  <img src={icon1} alt="" />
                </div>
                <div className="content">
                  <h2>Call This Now</h2>
                  <span>+584440066953</span>
                  <span>+8265425554811</span>
                </div>
              </div>
            </div>
            <div className="col col-lg-4 col-md-6 col-12">
              <div className="contact_info_card">
                <div className="icon">
                  <img src={icon2} alt=""/>
                </div>
                <div className="content">
                  <h2>Your Message</h2>
                  <span>nonta@gmail.com</span>
                  <span>nonta@gmail.com</span>
                </div>
              </div>
            </div>
            <div className="col col-lg-4 col-md-6 col-12">
              <div className="contact_info_card">
                <div className="icon">
                  <img src={icon3} alt="" />
                </div>
                <div className="content">
                  <h2>Your location</h2>
                  <span>3825 Bee Street <br />
                    MI 49686</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
};

export default ContactInfoSection;
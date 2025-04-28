import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../images/cta/solidarity.png'
const CtaSectionS2 = () => {
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }
    return (
        <section className="cta_section_s2">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <div className="content">
                <div className="icon">
                  <img src={Icon} alt="" />
                </div>
                <h2>The Children of Missions Money
                  Helping Each Change. </h2>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="cta_btn">
                <Link onClick={ClickHandler} to="/contact" className="btn_primary"> CONTACT NOW <i className="ti-arrow-right"></i></Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
};

export default CtaSectionS2;
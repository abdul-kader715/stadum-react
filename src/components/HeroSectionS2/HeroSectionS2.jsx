import React from 'react';
import { Link } from 'react-router-dom';

/* image */
import hero1 from '../../images/slider/1.png';
import hero2 from '../../images/slider/img-1.jpg';
import hero3 from '../../images/slider/shape-4.png';
import hero4 from '../../images/slider/shape-6.png';
import hero5 from '../../images/slider/shape-5.png';
import hero6 from '../../images/slider/shape.png';

const HeroSectionS2 = () => {
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }
    return (
        <section className="static_hero">
        <div className="container">
          <div className="content">
            <h2>Donation Helps Give
              For Children</h2>
            <p>Nullam eu nibh vitae est tempor molestie id sed exthe. Quisque dignissim maximus ipsum metus poor the
              peoole ipsum.</p>
            <div className="hero_btn">
              <div className="btn-1">
                <Link onClick={ClickHandler} to="/causes-single/Get-Inspired" className="btn_primary">Donation Now <i className="ti-arrow-right"></i></Link>
              </div>
              <div className="btn-2">
                <Link onClick={ClickHandler} to="/contact" className="btn_primary">Contact Us <i className="ti-arrow-right"></i></Link>
              </div>
            </div>
          </div>
        </div>
        <div className="image">
          <img src={hero1} alt="" />
        </div>
        <div className="image-2">
          <img src={hero2} alt="" />
        </div>
        <div className="shape-1">
          <img src={hero3} alt="" />
        </div>
        <div className="shape-2">
          <img src={hero3} alt="" />
        </div>
        <div className="shape-3">
          <img src={hero4} alt="" />
        </div>
        <div className="shape-4">
          <img src={hero5} alt="" />
        </div>
        <div className="shape-5">
          <img src={hero6} alt="" />
        </div>
      </section>
    );
};

export default HeroSectionS2;
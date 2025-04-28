import React from 'react';


import Icon from '../../images/choose/icon.png'
import Icon1 from '../../images/choose/1.png'
import Icon2 from '../../images/choose/2.png'
import Icon3 from '../../images/choose/3.png'
import Icon4 from '../../images/choose/4.png'
import Icon5 from '../../images/choose/5.png'
import Img1 from '../../images/choose/1.jpg'
import Img2 from '../../images/choose/2.jpg'
import Img3 from '../../images/choose/3.jpg'
import Img4 from '../../images/choose/4.jpg'
import Img5 from '../../images/choose/5.jpg'
import bg_shape from '../../images/choose/bg_shape.jpg'

const ChooseSection = () => {
    return (
        <section className="choose_section section_space">
        <div className="container">
          <div className="choose_wrap">
            <div className="title">
              <h2>OUR CHoose Report</h2>
              <h3>Make poor goals to help</h3>
              <a href="about.html">READ More <i className="ti-arrow-right"></i></a>
            </div>
            <div className="row">
              <div className="col col-lg-6 col-12"></div>
              <div className="col col-lg-6 col-12">
                <div className="item">
                  <div className="content">
                    <div className="icon">
                      <img src={Icon1} alt="" />
                    </div>
                    <div className="text">
                      <h2>Coin of Etiam</h2>
                      <ul>
                        <li><img src={Icon} alt="" /> <span>We standard chunk Poor.</span></li>
                        <li><img src={Icon} alt="" /> <span>No matter what problem.</span></li>
                      </ul>
                    </div>
                  </div>
                  <div className="image">
                    <img src={Img1} alt="" />
                  </div>
                </div>
              </div>
              <div className="col col-lg-6 col-12">
                <div className="item">
                  <div className="content">
                    <div className="icon">
                      <img src={Icon2} alt="" />
                    </div>
                    <div className="text">
                      <h2>School of Catalog</h2>
                      <ul>
                        <li><img src={Icon} alt="" /> <span>We standard chunk Poor.</span></li>
                        <li><img src={Icon} alt="" /> <span>No matter what problem.</span></li>
                      </ul>
                    </div>
                  </div>
                  <div className="image">
                    <img src={Img2} alt="" />
                  </div>
                </div>
              </div>
              <div className="col col-lg-6 col-12">
                <div className="item">
                  <div className="content">
                    <div className="icon">
                      <img src={Icon3} alt="" />
                    </div>
                    <div className="text">
                      <h2>School of Catalog</h2>
                      <ul>
                        <li><img src={Icon} alt="" /> <span>We standard chunk Poor.</span></li>
                        <li><img src={Icon} alt="" /> <span>No matter what problem.</span></li>
                      </ul>
                    </div>
                  </div>
                  <div className="image">
                    <img src={Img3} alt="" />
                  </div>
                </div>
              </div>
              <div className="col col-lg-6 col-12">
                <div className="item">
                  <div className="content">
                    <div className="icon">
                      <img src={Icon4} alt="" />
                    </div>
                    <div className="text">
                      <h2>Team Support</h2>
                      <ul>
                        <li><img src={Icon} alt="" /> <span>We standard chunk Poor.</span></li>
                        <li><img src={Icon} alt="" /> <span>No matter what problem.</span></li>
                      </ul>
                    </div>
                  </div>
                  <div className="image">
                    <img src={Img4} alt="" />
                  </div>
                </div>
              </div>
              <div className="col col-lg-6 col-12">
                <div className="item">
                  <div className="content">
                    <div className="icon">
                      <img src={Icon5} alt="" />
                    </div>
                    <div className="text">
                      <h2>Completed Cases</h2>
                      <ul>
                        <li><img src={Icon} alt="" /> <span>We standard chunk Poor.</span></li>
                        <li><img src={Icon} alt="" /> <span>No matter what problem.</span></li>
                      </ul>
                    </div>
                  </div>
                  <div className="image">
                    <img src={Img5} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg_shape">
          <img src={bg_shape} alt="" />
        </div>
      </section>
  
    );
};

export default ChooseSection;
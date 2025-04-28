import React from 'react';
import CountUp from 'react-countup';


/* image */
import fun1 from '../../images/funfact/1.png'
import fun2 from '../../images/funfact/2.png'
import fun3 from '../../images/funfact/3.png'
import fun4 from '../../images/funfact/4.png'

const FanfactSectionS2 = () => {
    return (
        <section className="fanfact_section_s2 section_space">
            <div className="container">
            <div className="row">
                    <div className="col-12">
                        <div className="top_title">
                            <h2>OUR BEST COUNTER</h2>
                            <h3>World Poverty Poor Provides </h3>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col col-lg-3 col-md-6 col-12">
                        <div className="item">
                            <div className="icon">
                                <img src={fun1} alt="" />
                            </div>
                            <div className="content">
                                <h2><span className="count"><CountUp end={65}></CountUp></span>k</h2>
                                <h5>Work Poor</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col col-lg-3 col-md-6 col-12">
                        <div className="item">
                            <div className="icon">
                                <img src={fun2} alt="" />
                            </div>
                            <div className="content">
                            <h2><span className="count"><CountUp end={225}></CountUp></span>+</h2>
                                <h5>Donate Updated</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col col-lg-3 col-md-6 col-12">
                        <div className="item">
                            <div className="icon">
                                <img src={fun3} alt="" />
                            </div>
                            <div className="content">
                            <h2><span className="count"><CountUp end={55}></CountUp></span>+</h2>
                                <h5>Monthly Gift</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col col-lg-3 col-md-6 col-12">
                        <div className="item">
                            <div className="icon">
                                <img src={fun4} alt="" />
                            </div>
                            <div className="content">
                            <h2><span className="count"><CountUp end={32}></CountUp></span>k</h2>
                                <h5>Indexed Educate</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FanfactSectionS2;
import React from 'react';
import { Link } from 'react-router-dom';

import Slike from '../../images/slike.png'
import Shape from '../../images/skill-shape.png'

const SkillSection = () => {
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }
    return (
        <section className="skill_section">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-12">
                        <div className="image">
                            <img src={Slike} alt="" />
                        </div>
                    </div>
                    <div className="col-lg-6 col-12">
                        <div className="content">
                            <div className="top_title s2">
                                <h2>OUR SKILL MORE</h2>
                                <h3>We Reasons Why Skill
                                    Should Donate Now
                                </h3>
                                <p>
                                    Services address a range of simply application and infrastructure
                                    of passages of available, but the majority have suffered
                                    alteration in some form.
                                </p>
                            </div>
                            <ul className="skill_item">
                                <li>
                                    <h4>Poor growth (2021)</h4>
                                    <div className="progres">
                                    <div className="bar" style={{width:'85%'}}>
                                        </div>
                                        <p className="percent">85%</p>
                                    </div>
                                </li>
                                <li>
                                    <h4>Team Support (2022)</h4>
                                    <div className="progres">
                                        <div className="bar"  style={{width:'65%'}}>
                                        </div>
                                        <p className="percent">65%</p>
                                    </div>
                                </li>
                                <li>
                                    <h4>Investment Donate (2023)</h4>
                                    <div className="progres">
                                        <div className="bar" style={{width:'78%'}}>
                                        </div>
                                        <p className="percent">78%</p>
                                    </div>
                                </li>
                            </ul>
                            <div className="skill_btn">
                                <Link onClick={ClickHandler} to="/about" className="btn_primary">Skill MORE <i className="ti-arrow-right"></i></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="shape">
                <img src={Shape} alt="" />
            </div>
        </section>
    );
};

export default SkillSection;
import React from 'react';
import { Link } from 'react-router-dom';


import Shape from '../../images/team/bg_shape.png'
import teamData from '../../api/team';


const TeamSection = (props) => {
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }
    return (
        <section className={"" +props.hclass}>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="top_title s2">
                            <h2>OUR TEAM MEMBER</h2>
                            <h3>Happy Team Member Meet</h3>
                        </div>
                    </div>
                </div>
                <div className="team_wrap">
                    <div className="row">
                        {teamData.slice(0, 3).map((team, index) => (
                            <div className="col col-lg-4 col-md-6 col-12" key={index}>
                                <div className="team_card">
                                    <div className="image">
                                        <img src={team.image} alt="" />
                                    </div>
                                    <div className="content">
                                        <h2><Link onClick={ClickHandler} to={`/team-single/${team.slug}`}>{team.title}</Link></h2>
                                        <span>{team.subtitle}</span>
                                        <ul>
                                            <li><Link to="#"><i className="ti-facebook"></i></Link></li>
                                            <li><Link to="#"><i className="ti-instagram"></i></Link></li>
                                            <li><span></span></li>
                                            <li><Link to="#"><i className="ti-twitter-alt"></i></Link></li>
                                            <li><Link to="#"><i className="ti-vimeo-alt"></i></Link></li>
                                        </ul>
                                    </div>
                                    <div className="shape">
                                        <svg version="1.0" viewBox="0 0 370.000000 351.000000" preserveAspectRatio="xMidYMid meet">

                                            <g transform="translate(0.000000,351.000000) scale(0.100000,-0.100000)" stroke="none">
                                                <path d="M891 3499 c-268 -33 -535 -176 -788 -422 l-103 -100 0 -1489 0 -1488
1850 0 1850 0 0 1485 0 1486 -62 -52 c-147 -122 -389 -257 -561 -313 -228 -74
-489 -76 -668 -5 -198 78 -313 167 -513 401 -142 166 -252 265 -386 350 -193
121 -412 173 -619 147z" />
                                            </g>
                                        </svg>

                                    </div>
                                </div>
                            </div>
                        ))}


                    </div>
                    <div className="team_btn">
                        <Link onClick={ClickHandler} to="/team" className="btn_primary">View ALL TEAM<i className="ti-arrow-right"></i></Link>
                    </div>
                </div>
            </div>
            <div className="bg_shape">
                <img src={Shape} alt="" />
            </div>
        </section>
    );
};

export default TeamSection;
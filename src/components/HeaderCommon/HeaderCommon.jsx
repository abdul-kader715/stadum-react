import React from 'react';
import Logo from '../images/logo-s3.png'
import { Link } from 'react-router-dom';

const HeaderCommon = () => {
    return (
        <header className="header_section header_style_s2">
            <div className="header_wrap">
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col-lg-3 col-8">
                            <Link to="home" className="logo">
                                <img src={Logo} alt=""/>
                            </Link>
                        </div>
                        <div className="col-lg-6 col-4">
                            <div className="mobile_menu_btn">
                                <div className="icon">
                                    <i className="ti-align-justify" id="bar_close"></i>
                                </div>
                            </div>
                            <div className="menu_wrap" id="menu_wrap">
                                <ul className="main_menu">
                                    <li className="menu_chaild">
                                        <Link to="#">Home</Link>
                                        <ul className="submenu">
                                            <li><Link to="home">home style 1</Link></li>
                                            <li><Link to="home-2">home style 2</Link></li>
                                            <li><Link to="home-3">home style 3</Link></li>
                                            <li><Link to="home-4">home style 4</Link></li>
                                        </ul>
                                    </li>
                                    <li><Link to="about">about us</Link></li>
                                    <li className="menu_chaild">
                                        <Link to="#">Service</Link>
                                        <ul className="submenu">
                                            <li><Link to="services">Services 1</Link></li>
                                            <li><Link to="services-s2">Services 2</Link></li>
                                            <li><Link to="services-s3">Services 3</Link></li>
                                            <li><Link to="services-s4">Services 4</Link></li>
                                            <li><Link to="services-single">Services single</Link></li>
                                        </ul>
                                    </li>
                                    <li className="menu_chaild">
                                        <Link to="#">Pages</Link>
                                        <ul className="submenu">
                                            <li><Link to="causes">causes</Link></li>
                                            <li><Link to="causes-single">causes single</Link></li>
                                            <li><Link to="project">project</Link></li>
                                            <li><Link to="project-single">project single</Link></li>
                                            <li><Link to="team">team</Link></li>
                                            <li><Link to="testimonial">testimonial</Link></li>
                                            <li><Link to="faq">faq</Link></li>
                                            <li><Link to="404">404</Link></li>
                                        </ul>
                                    </li>
                                    <li className="menu_chaild">
                                        <Link to="#">blog</Link>
                                        <ul className="submenu">
                                            <li><Link to="blog">Blog</Link></li>
                                            <li><Link to="blog-single">Blog Single</Link></li>
                                        </ul>
                                    </li>
                                    <li><Link to="contact">contact</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-12">
                            <div className="header_right">
                                <div className="search_icon">
                                    <i className="ti-search bx-search"></i>
                                    <form className="input-box">
                                        <div>
                                            <input className="search_fild" type="text" placeholder="Search..." />
                                            <button type="button"><i className="ti-search"></i></button>
                                        </div>
                                    </form>
                                </div>
                                <Link to="causes-single" className="btn_primary">DONATE NOW<i
                                        className="ti-arrow-right"></i></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default HeaderCommon;
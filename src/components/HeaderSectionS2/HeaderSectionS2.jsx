import React, { useState } from "react";
import { Link } from 'react-router-dom';
import logo from '../../images/logo-s3.png'
import HeaderSearch from '../HeaderSearch/HeaderSearch';

const HeaderSectionS2 = () => {
  const ClickHandler = () => {
    window.scrollTo(10, 0);
  }


  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };


  const [openSubmenu, setOpenSubmenu] = useState(null);

  const toggleSubmenu = (index) => {
    setOpenSubmenu((prevIndex) => (prevIndex === index ? null : index));
  };


  return (
    <header className="header_section header_style_s2">
      <div className="header_wrap">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-3 col-8">
              <Link onClick={ClickHandler} to="/" className="logo">
                <img src={logo} alt="" />
              </Link>
            </div>
            <div className="col-lg-6 col-4">
              <div className="mobile_menu_btn" onClick={toggleMenu}>
                <div className="icon">
                  <i className={menuOpen ? "ti-close" : "ti-align-justify"} id="bar_close"></i>
                </div>
              </div>
              <div className={`menu_wrap ${menuOpen ? "open-mobilemenu" : ""}`} id="menu_wrap">
                <ul className="main_menu">
                  <li className="menu_chaild" onClick={() => toggleSubmenu(1)}>
                    <Link to="#">Home</Link>
                    <ul className={`submenu ${openSubmenu === 1 ? 'open' : ''}`}>
                      <li><Link to="/home">home style 1</Link></li>
                      <li><Link to="/home-2">home style 2</Link></li>
                      <li><Link to="/home-3">home style 3</Link></li>
                      <li><Link to="/home-4">home style 4</Link></li>
                    </ul>
                  </li>
                  <li><Link to="/about">about us</Link></li>
                  <li className="menu_chaild" onClick={() => toggleSubmenu(2)}>
                    <Link to="#">Service</Link>
                    <ul className={`submenu ${openSubmenu === 2 ? 'open' : ''}`}>
                      <li><Link to="/services">Services 1</Link></li>
                      <li><Link to="/services-s2">Services 2</Link></li>
                      <li><Link to="/services-s3">Services 3</Link></li>
                      <li><Link to="/services-s4">Services 4</Link></li>
                      <li><Link to="/services-single/Program-Export">Services single</Link></li>
                    </ul>
                  </li>
                  <li className="menu_chaild" onClick={() => toggleSubmenu(3)}>
                    <Link to="#">Pages</Link>
                    <ul className={`submenu ${openSubmenu === 3 ? 'open' : ''}`}>
                      <li><Link to="/causes">causes</Link></li>
                      <li><Link to="/causes-single/Get-Inspired">causes single</Link></li>
                      <li><Link to="/project">project</Link></li>
                      <li><Link to="/project-single/project-1">project single</Link></li>
                      <li><Link to="/team">team</Link></li>
                      <li><Link to="/testimonial">testimonial</Link></li>
                      <li><Link to="/404">404</Link></li>
                    </ul>
                  </li>
                  <li className="menu_chaild" onClick={() => toggleSubmenu(4)}>
                    <Link to="#">blog</Link>
                    <ul className={`submenu ${openSubmenu === 4 ? 'open' : ''}`}>
                      <li><Link to="/blog">Blog</Link></li>
                      <li><Link to="/blog-single/Medical-treatment">Blog Single</Link></li>
                    </ul>
                  </li>
                  <li><Link to="/contact">contact</Link></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-12">
              <div className="header_right">
                <HeaderSearch />
                <Link onClick={ClickHandler} to="/causes-single/Get-Inspired" className="btn_primary">DONATE NOW<i className="ti-arrow-right"></i></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderSectionS2;
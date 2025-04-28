import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo_s4.png'

const HeaderSectionS3 = () => {
  const ClickHandler = () => {
    window.scrollTo(10, 0);
  }



  const [isActive, setIsActive] = useState(false);

  const handleToggle = () => {
    setIsActive(!isActive);
  };



  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };


  const [openSubmenu, setOpenSubmenu] = useState(null);

  const toggleSubmenu = (index) => {
    setOpenSubmenu((prevIndex) => (prevIndex === index ? null : index));
  };
  return (
    <header className="header_section header_style_s3">
      <div className="header_top">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7 col-12">
              <div className="contacr_info">
                <ul>
                  <li>
                    <div className="number">
                      <span>NEWS:</span>Give Ready to help us
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-5 col-12">
              <div className="contacr_right">
                <ul>
                  <li><span>Visit our social pages:</span></li>
                  <li>
                    <Link onClick={ClickHandler} to="#">
                      <i className="ti-facebook"></i>
                    </Link>
                  </li>
                  <li>
                    <Link onClick={ClickHandler} to="#">
                      <i className="ti-twitter-alt"></i>
                    </Link>
                  </li>
                  <li>
                    <Link onClick={ClickHandler} to="#">
                      <i className="ti-skype"></i>
                    </Link>
                  </li>
                  <li>
                    <Link onClick={ClickHandler} to="#">
                      <i className="ti-linkedin"></i>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="header_wrap">
        <Link onClick={ClickHandler} to="/home" className="logo">
          <img src={logo} alt="" />
        </Link>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8 col-12">
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
            <div className="col-lg-4 col-12">
              <div className="header_right">
                <div className={`search_icon ${isActive ? 'active' : ''}`}>
                  <i
                    className={isActive ? 'ti-close' : 'ti-search bx-search'}
                    onClick={handleToggle}
                  ></i>
                  <form className="input-box">
                    <div>
                      <input
                        className="search_fild"
                        type="text"
                        placeholder="Search..."
                      />
                      <button type="button">
                        <i className="ti-search"></i>
                      </button>
                    </div>
                  </form>
                </div>
                <Link onClick={ClickHandler} to="/causes-single/Get-Inspired" className="btn_primary">DONATE NOW<i className="ti-arrow-right"></i></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderSectionS3;
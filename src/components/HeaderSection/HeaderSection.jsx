import { Link } from "react-router-dom";
import React, { useState } from "react";
import HeaderTopSection from "../HeaderTopSection/HeaderTopSection";

// images
import Logo from '../../images/logo.png';
import HeaderSearch from "../HeaderSearch/HeaderSearch";




const HeaderSection = () => {


   const ClickHandler = () => {
      window.scrollTo(10, 0);
   }





   return (
      <header className="header_section">
         < HeaderTopSection />

         <div className="menu_bar">
            <div className="container">
               <div className="wraper">
                  <div className="row">
                     <div className="col-lg-2 col-10">
                        <Link onClick={ClickHandler} to="/" className="logo">
                           <img src={Logo} alt="" />
                        </Link>
                     </div>
                     <div className="col-lg-6 col-2">
                        <div className="menu-open">
                           <i className="ti-align-justify" id="bar_close"></i>
                        </div>
                        <div className="menu-wrap">
                           <ul className="menu-main">
                              <li>
                                 <Link onClick={ClickHandler} to="/">Home</Link>
                                 <span className="submenu-open"></span>
                                 <ul className="submenu">
                                    <li><Link onClick={ClickHandler} to="/">Home Style 01</Link></li>
                                    <li><Link onClick={ClickHandler} to="/">Home Style 02</Link></li>
                                    <li><Link onClick={ClickHandler} to="/">Home Style 03</Link></li>
                                 </ul>
                              </li>
                              <li>
                                 <Link onClick={ClickHandler} to="#">Pages</Link>
                                 <span className="submenu-open"></span>
                                 <ul className="submenu">
                                    <li><Link onClick={ClickHandler} to="/t">About</Link></li>
                                    <li><Link onClick={ClickHandler} to="/">Team style 1</Link></li>
                                    <li><Link onClick={ClickHandler} to="/">Team style 2</Link></li>
                                    <li>
                                       <Link onClick={ClickHandler} to="/l">Testiminial style 1</Link>
                                    </li>
                                 </ul>
                              </li>
                              <li>
                                 <Link onClick={ClickHandler} to="#">Services</Link>
                                 <span className="submenu-open"></span>
                                 <ul className="submenu">
                                    <li><Link onClick={ClickHandler} to="/">Services</Link></li>
                                    <li>
                                       <Link onClick={ClickHandler} to="/">Services Single</Link>
                                    </li>
                                 </ul>
                              </li>
                              <li>
                                 <Link onClick={ClickHandler} to="#">Portfolio</Link>
                                 <span className="submenu-open"></span>
                                 <ul className="submenu">
                                    <li><Link onClick={ClickHandler} to="/">Proejcts</Link></li>
                                    <li>
                                       <Link onClick={ClickHandler} to="/">Proejcts Single</Link>
                                    </li>
                                 </ul>
                              </li>
                              <li>
                                 <Link onClick={ClickHandler} to="#">News</Link>
                                 <span className="submenu-open"></span>
                                 <ul className="submenu">
                                    <li><Link onClick={ClickHandler} to="/">News</Link></li>
                                    <li><Link onClick={ClickHandler} to="/">News Single</Link></li>
                                 </ul>
                              </li>
                              <li><Link onClick={ClickHandler} to="/">Contact</Link></li>
                           </ul>
                        </div>
                     </div>
                     <div className="col-lg-4">
                        <div className="header-right">
                           <div className="close-form">
                              <Link onClick={ClickHandler} className="btn_primary" to="/">Get a Quate</Link>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>

      </header>

   )
}
export default HeaderSection
import React, { useState } from "react";
import { Link } from "react-router-dom";
import HeaderTopSection from "../HeaderTopSection/HeaderTopSection";

// Images
import Logo from '../../images/logo.png';

const HeaderSection = () => {
   const [menuOpen, setMenuOpen] = useState(false);
   const [activeSubmenu, setActiveSubmenu] = useState(null);

   const ClickHandler = () => {
      window.scrollTo(10, 0);
   };

   const toggleMenu = () => {
      setMenuOpen(!menuOpen);
   };

   const toggleSubmenu = (index) => {
      setActiveSubmenu(activeSubmenu === index ? null : index);
   };

   const menuItems = [
      {
         label: "Home",
         link: "#",
         submenu: [
            { label: "Home Style 01", link: "/" },
            { label: "Home Style 02", link: "/" },
            { label: "Home Style 03", link: "/" },
         ],
      },
      {
         label: "About us",
         link: "/",
         submenu: [],
      },
       {
         label: "Academics",
         link: "/",
         submenu: [],
      },
      {
         label: "Pages",
         link: "#",
         submenu: [
            { label: "About", link: "/" },
            { label: "Team style 1", link: "/" },
            { label: "Testimonial ", link: "/" },
         ],
      },
      {
         label: "Admission",
         link: "/",
         submenu: [],
      },
      {
         label: "Events",
         link: "/",
         submenu: [],
      },
     
      {
         label: "Contact",
         link: "/",
         submenu: [],
      },
   ];

   return (
      <header className="header_section">
         <HeaderTopSection />

         <div className="menu_bar">
            <div className="container">
               <div className="row align-items-center">
                  <div className="col-lg-3 col-10">
                     <Link onClick={ClickHandler} to="/" className="logo">
                        <img src={Logo} alt="Logo" />
                     </Link>
                  </div>

                  <div className="col-lg-6 col-2">
                     <div className="menu-open" onClick={toggleMenu}>
                        <i className={menuOpen ? "ti-close" : "ti-align-justify"} id="bar_close"></i>
                     </div>

                     <div className={`menu-wrap ${menuOpen ? "open-mobilemenu" : ""}`} id="menu_wrap">
                        <ul className="menu-main">
                           {menuItems.map((item, index) => (
                              <li key={index}>
                                 <Link onClick={ClickHandler} to={item.link}>{item.label}</Link>

                                 {item.submenu.length > 0 && (
                                    <>
                                       <span
                                          className={`submenu-open ${activeSubmenu === index ? "active" : ""}`}
                                          onClick={() => toggleSubmenu(index)}
                                       ></span>
                                       <ul className={`submenu ${activeSubmenu === index ? "open" : ""}`}>
                                          {item.submenu.map((subItem, subIndex) => (
                                             <li key={subIndex}>
                                                <Link onClick={ClickHandler} to={subItem.link}>{subItem.label}</Link>
                                             </li>
                                          ))}
                                       </ul>
                                    </>
                                 )}
                              </li>
                           ))}
                        </ul>
                     </div>
                  </div>
                  <div className="col-lg-3">
                     <div className="header-right">
                        <div className="close-form">
                           <Link to='/' className="btn_primary" onClick={ClickHandler}>
                              <span>Contact Us</span>
                              <div className="arrow">
                                 <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M12 2.1216C12 3.1659 13.035 4.7286 14.0812 6.041C15.4284 7.7307 17.0362 9.2068 18.8811 10.3338C20.2632 11.1777 21.9414 11.9878 23.2896 11.9878M12 21.8784C12 20.8341 13.035 19.2714 14.0812 17.959C15.4284 16.2694 17.0362 14.7932 18.8811 13.6662C20.2632 12.8223 21.9414 12.0122 23.2896 12.0122M23.2896 12H0.710449" />
                                 </svg>
                              </div>
                           </Link>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </header>
   );
};

export default HeaderSection;

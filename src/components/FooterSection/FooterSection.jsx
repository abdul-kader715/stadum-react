import React from 'react'

import { Link } from "react-router-dom"
import location from "../../images/location.svg"
import logo from "../../images/logo-s2.png"
import mail from "../../images/mail.svg"

import instagramImg from "../../images/imstagram.svg"
import inst1 from "../../images/insatagram/1.jpg"
import inst2 from "../../images/insatagram/2.jpg"
import inst3 from "../../images/insatagram/3.jpg"
import inst4 from "../../images/insatagram/4.jpg"
import inst5 from "../../images/insatagram/5.jpg"
import inst6 from "../../images/insatagram/6.jpg"

const instragram = [
   {
      id: '1',
      img: inst1,
   },
   {
      id: '2',
      img: inst2,
   },
   {
      id: '3',
      img: inst3,
   },
   {
      id: '4',
      img: inst4,
   },
   {
      id: '5',
      img: inst5,
   },
   {
      id: '6',
      img: inst6,
   }
]



const FooterSection = (props) => {
   const ClickHandler = () => {
      window.scrollTo(10, 0);
   }
   return (
      <section className="footer-section">
         <div className="footer_top">
            <div className="container">
               <div className="row">
                  <div className="col-lg-3 col-md-6 col-12">
                     <div className="widget_column widget_about">
                        <div className="footer_logo">
                           <Link onClick={ClickHandler} to="home">
                              <img src={logo} alt="img" />
                           </Link>
                        </div>
                        <p>Since 1999, when the newly minted Stadum team embraced its mandate to breathe new life into the downtrodden neighbourhood, East Village’s transformation has been nothing short of remarkable. </p>
                        <ul>
                           <li>
                              <div className="icon">
                                 <img src={location} alt="" />
                              </div>
                              <span>45 New Eskaton Road, Austria</span>
                           </li>
                           <li>
                              <div className="icon">
                                 <img src={mail} alt="" />
                              </div>
                              <span>infomail@example.com</span>
                           </li>
                        </ul>
                     </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-12">
                     <div className="widget_column widget_link">
                        <h2>Useful Links</h2>
                        <ul>
                           <li>
                              <Link onClick={ClickHandler} to='/'>
                                 <i className='ti-angle-right'></i>
                                 <span>Students</span>
                              </Link>
                           </li>
                           <li>
                              <Link onClick={ClickHandler} to='/'>
                                 <i className='ti-angle-right'></i>
                                 <span>Admission</span>
                              </Link>
                           </li>
                           <li>
                              <Link onClick={ClickHandler} to='/'>
                                 <i className='ti-angle-right'></i>
                                 <span>Faculty & Stuffs</span>
                              </Link>
                           </li>
                           <li>
                              <Link onClick={ClickHandler} to='/'>
                                 <i className='ti-angle-right'></i>
                                 <span>Media Relations</span>
                              </Link>
                           </li>
                           <li>
                              <Link onClick={ClickHandler} to='/'>
                                 <i className='ti-angle-right'></i>
                                 <span>All Awards</span>
                              </Link>
                           </li>
                           <li>
                              <Link onClick={ClickHandler} to='/'>
                                 <i className='ti-angle-right'></i>
                                 <span>Alumni</span>
                              </Link>
                           </li>
                           <li>
                              <Link onClick={ClickHandler} to='/'>
                                 <i className='ti-angle-right'></i>
                                 <span>Recent Events</span>
                              </Link>
                           </li>
                        </ul>
                     </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-12">
                     <div className="widget_column widget_link_s2">
                        <h2>Our Programs</h2>
                        <ul>
                           <li>
                              <Link onClick={ClickHandler} to='/'>
                                 <i className='ti-angle-right'></i>
                                 <span>Ungraduate Programs</span>
                              </Link>
                           </li>
                           <li>
                              <Link onClick={ClickHandler} to='/'>
                                 <i className='ti-angle-right'></i>
                                 <span>Graduate Programs</span>
                              </Link>
                           </li>
                           <li>
                              <Link onClick={ClickHandler} to='/'>
                                 <i className='ti-angle-right'></i>
                                 <span>Certificate Programs</span>
                              </Link>
                           </li>
                           <li>
                              <Link onClick={ClickHandler} to='/'>
                                 <i className='ti-angle-right'></i>
                                 <span>Accelerate Programs</span>
                              </Link>
                           </li>
                           <li>
                              <Link onClick={ClickHandler} to='/'>
                                 <i className='ti-angle-right'></i>
                                 <span>Online Programs</span>
                              </Link>
                           </li>
                           <li>
                              <Link onClick={ClickHandler} to='/'>
                                 <i className='ti-angle-right'></i>
                                 <span>Financial Planning</span>
                              </Link>
                           </li>
                           <li>
                              <Link onClick={ClickHandler} to='/'>
                                 <i className='ti-angle-right'></i>
                                 <span>Business Advisory</span>
                              </Link>
                           </li>
                        </ul>
                     </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-12">
                     <div className="widget_column widget_insatagram">
                        <h2>Instagram</h2>
                        <ul>
                           {instragram.map((insta, inkye) => (
                              <li key={inkye}>
                                 <Link to='/' onClick={ClickHandler}>
                                    <img src={insta.img} alt="img" />
                                    <div className="hover-insta">
                                       <img src={instagramImg} alt="" />
                                    </div>
                                 </Link>
                              </li>
                           ))}
                        </ul>
                     </div>
                  </div>

               </div>
            </div>
         </div>
         <div className="footer_bottom">
            <div className="container">
               <div className="row align-items-center">
                  <div className="col-lg-7 col-12">
                     <p>Copyright © 2025 <Link to='/'>Stadum.</Link> All Rights Reserved.</p>
                  </div>
                  <div className="col-lg-5 col-12">
                     <ul className="social_widget">
                        <li>
                           <Link onClick={ClickHandler} to="/">
                              <i className="ti-facebook"></i>
                           </Link>
                        </li>
                        <li>
                           <Link onClick={ClickHandler} to="/">
                              <i className="ti-twitter-alt"></i>
                           </Link>
                        </li>
                        <li>
                           <Link onClick={ClickHandler} to="/">
                              <i className="ti-linkedin"></i>
                           </Link>
                        </li>
                        <li>
                           <Link onClick={ClickHandler} to="/">
                              <i className="ti-instagram"></i>
                           </Link>
                        </li>
                     </ul>
                  </div>
               </div>
            </div>
         </div>


      </section>
   )
}
export default FooterSection
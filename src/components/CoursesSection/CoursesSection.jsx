import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CoursesData from '../../api/courss';

import SemImg from '../../images/courses/1.png';
import Years from '../../images/courses/2.png';
import Seats from '../../images/courses/3.png';
import wish from '../../images/courses/heart.png';
import star from '../../images/courses/star.png';


const CoursesSection = (props) => {
   const ClickHandler = () => {
      window.scrollTo(10, 0);
   }


   const [activeTab, setActiveTab] = useState('tab1');

   return (
      <section className="courses_section section_space">
         <div className="container">
            <div className="top-content">
               <div className="row align-items-center">
                  <div className="col-lg-6 col-12">
                     <div className="top_title mb-0">
                        <span className="fade_bottom">BLOG & NEWS</span>
                        <h2 className="fade_bottom">Get Latest <strong>News</strong> & Blog</h2>
                     </div>
                  </div>
                  <div className="col-lg-6 col-12">
                     <div className="tabs">
                        <button className={`tabBtn ${activeTab === 'tab1' ? 'active' : ''}`} onClick={() => setActiveTab('tab1')}>Undergraduate</button>
                        <button className={`tabBtn ${activeTab === 'tab2' ? 'active' : ''}`} onClick={() => setActiveTab('tab2')}>Graduate</button>
                        <button className={`tabBtn ${activeTab === 'tab3' ? 'active' : ''}`} onClick={() => setActiveTab('tab3')}>Online</button>
                        <button className={`tabBtn ${activeTab === 'tab4' ? 'active' : ''}`} onClick={() => setActiveTab('tab4')}>Online</button>
                     </div>
                  </div>
               </div>
            </div>
         </div>

         <div className="courses_wrapper">
            <div className="container">
               {activeTab === "tab1" &&
                  <div className="row courses_content">
                     {CoursesData.slice(0, 6).map((courses, pitem) => (
                        <div className="col col-lg-4  col-md-6 col-12" key={pitem}>
                           <div className="courses_item">
                              <div className="image">
                                 <img src={courses.img} alt="" />
                                 <button className='wish'>
                                    <img src={wish} alt="" />
                                 </button>
                              </div>
                              <div className="content">
                                 <span>{courses.subjet}</span>
                                 <h2>
                                    <Link onClick={ClickHandler} to={`/courses-single/${courses.slug}`}>
                                       {courses.title}
                                    </Link>
                                 </h2>
                                 <div className="reting">
                                    <ul>
                                       {[...Array(5)].map((_, i) => (
                                          <li key={i}><img src={star} alt="" /></li>
                                       ))}
                                       <li><span>4.9(10k)</span></li>
                                    </ul>
                                 </div>
                                 <div className="features">
                                    <ul>
                                       <li><img src={SemImg} alt="" />{courses.semesters} Semesters</li>
                                       <li><img src={Years} alt="" />{courses.year}  Years</li>
                                       <li><img src={Seats} alt="" />{courses.seats} Seats</li>
                                    </ul>
                                 </div>
                                 <div className="actions">
                                    <div className="ath">
                                       <div className="image">
                                          <img src={courses.athImg} alt="" />
                                       </div>
                                       <h3>By:{courses.ath}</h3>
                                    </div>
                                    <div className="athbtn">
                                       <Link to='/'>Enroll Now
                                          <div className="arrow">
                                             <svg width="8" height="16" viewBox="0 0 8 16" fill="none">
                                                <path d="M0.666701 16C0.496203 16 0.325538 15.9289 0.195373 15.7869C-0.0651243 15.5027 -0.0651243 15.0425 0.195373 14.7585L6.39064 7.99999L0.195373 1.24143C-0.0651243 0.957251 -0.0651243 0.497069 0.195373 0.213068C0.45587 -0.0709319 0.877699 -0.0711137 1.13803 0.213068L7.80463 7.48581C8.06512 7.76999 8.06512 8.23017 7.80463 8.51417L1.13803 15.7869C1.00786 15.9289 0.837199 16 0.666701 16Z" fill="#03060E" />
                                             </svg>
                                          </div>
                                          <div className="hover-arrow">
                                             <svg width="16" height="14" viewBox="0 0 16 14" fill="none">
                                                <path d="M8.00003 0.414429C8.00003 1.11063 8.68997 2.15243 9.38743 3.02736C10.2856 4.15383 11.3574 5.1379 12.5874 5.88923C13.5088 6.45183 14.6276 6.99189 15.5264 6.99189M8.00003 13.5856C8.00003 12.8894 8.68997 11.8476 9.38743 10.9727C10.2856 9.84629 11.3574 8.86216 12.5874 8.11083C13.5088 7.54823 14.6276 7.00816 15.5264 7.00816M15.5264 7.00003H0.473633" stroke="white" />
                                             </svg>
                                          </div>

                                       </Link>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     ))}
                  </div>
               }
               {activeTab === "tab2" &&
                  <div className="row courses_content">
                     {CoursesData.slice(0, 5).map((courses, pitem) => (
                        <div className="col col-lg-4  col-md-6 col-12" key={pitem}>
                           <div className="courses_item">
                              <div className="image">
                                 <img src={courses.img} alt="" />
                                 <button className='wish'>
                                    <img src={wish} alt="" />
                                 </button>
                              </div>
                              <div className="content">
                                 <span>{courses.subjet}</span>
                                 <h2>
                                    <Link onClick={ClickHandler} to={`/courses-single/${courses.slug}`}>
                                       {courses.title}
                                    </Link>
                                 </h2>
                                 <div className="reting">
                                    <ul>
                                       {[...Array(5)].map((_, i) => (
                                          <li key={i}><img src={star} alt="" /></li>
                                       ))}
                                       <li><span>4.9(10k)</span></li>
                                    </ul>
                                 </div>
                                 <div className="features">
                                    <ul>
                                       <li><img src={SemImg} alt="" />{courses.semesters} Semesters</li>
                                       <li><img src={Years} alt="" />{courses.year}  Years</li>
                                       <li><img src={Seats} alt="" />{courses.seats} Seats</li>
                                    </ul>
                                 </div>
                                 <div className="actions">
                                    <div className="ath">
                                       <div className="image">
                                          <img src={courses.athImg} alt="" />
                                       </div>
                                       <h3>By:{courses.ath}</h3>
                                    </div>
                                    <div className="athbtn">
                                       <Link to='/'>Enroll Now
                                          <div className="arrow">
                                             <svg width="8" height="16" viewBox="0 0 8 16" fill="none">
                                                <path d="M0.666701 16C0.496203 16 0.325538 15.9289 0.195373 15.7869C-0.0651243 15.5027 -0.0651243 15.0425 0.195373 14.7585L6.39064 7.99999L0.195373 1.24143C-0.0651243 0.957251 -0.0651243 0.497069 0.195373 0.213068C0.45587 -0.0709319 0.877699 -0.0711137 1.13803 0.213068L7.80463 7.48581C8.06512 7.76999 8.06512 8.23017 7.80463 8.51417L1.13803 15.7869C1.00786 15.9289 0.837199 16 0.666701 16Z" fill="#03060E" />
                                             </svg>
                                          </div>
                                          <div className="hover-arrow">
                                             <svg width="16" height="14" viewBox="0 0 16 14" fill="none">
                                                <path d="M8.00003 0.414429C8.00003 1.11063 8.68997 2.15243 9.38743 3.02736C10.2856 4.15383 11.3574 5.1379 12.5874 5.88923C13.5088 6.45183 14.6276 6.99189 15.5264 6.99189M8.00003 13.5856C8.00003 12.8894 8.68997 11.8476 9.38743 10.9727C10.2856 9.84629 11.3574 8.86216 12.5874 8.11083C13.5088 7.54823 14.6276 7.00816 15.5264 7.00816M15.5264 7.00003H0.473633" stroke="white" />
                                             </svg>
                                          </div>

                                       </Link>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     ))}
                  </div>
               }
               {activeTab === "tab3" &&
                  <div className="row courses_content">
                     {CoursesData.slice(0, 3).map((courses, pitem) => (
                        <div className="col col-lg-4  col-md-6 col-12" key={pitem}>
                           <div className="courses_item">
                              <div className="image">
                                 <img src={courses.img} alt="" />
                                 <button className='wish'>
                                    <img src={wish} alt="" />
                                 </button>
                              </div>
                              <div className="content">
                                 <span>{courses.subjet}</span>
                                 <h2>
                                    <Link onClick={ClickHandler} to={`/courses-single/${courses.slug}`}>
                                       {courses.title}
                                    </Link>
                                 </h2>
                                 <div className="reting">
                                    <ul>
                                       {[...Array(5)].map((_, i) => (
                                          <li key={i}><img src={star} alt="" /></li>
                                       ))}
                                       <li><span>4.9(10k)</span></li>
                                    </ul>
                                 </div>
                                 <div className="features">
                                    <ul>
                                       <li><img src={SemImg} alt="" />{courses.semesters} Semesters</li>
                                       <li><img src={Years} alt="" />{courses.year}  Years</li>
                                       <li><img src={Seats} alt="" />{courses.seats} Seats</li>
                                    </ul>
                                 </div>
                                 <div className="actions">
                                    <div className="ath">
                                       <div className="image">
                                          <img src={courses.athImg} alt="" />
                                       </div>
                                       <h3>By:{courses.ath}</h3>
                                    </div>
                                    <div className="athbtn">
                                       <Link to='/'>Enroll Now
                                          <div className="arrow">
                                             <svg width="8" height="16" viewBox="0 0 8 16" fill="none">
                                                <path d="M0.666701 16C0.496203 16 0.325538 15.9289 0.195373 15.7869C-0.0651243 15.5027 -0.0651243 15.0425 0.195373 14.7585L6.39064 7.99999L0.195373 1.24143C-0.0651243 0.957251 -0.0651243 0.497069 0.195373 0.213068C0.45587 -0.0709319 0.877699 -0.0711137 1.13803 0.213068L7.80463 7.48581C8.06512 7.76999 8.06512 8.23017 7.80463 8.51417L1.13803 15.7869C1.00786 15.9289 0.837199 16 0.666701 16Z" fill="#03060E" />
                                             </svg>
                                          </div>
                                          <div className="hover-arrow">
                                             <svg width="16" height="14" viewBox="0 0 16 14" fill="none">
                                                <path d="M8.00003 0.414429C8.00003 1.11063 8.68997 2.15243 9.38743 3.02736C10.2856 4.15383 11.3574 5.1379 12.5874 5.88923C13.5088 6.45183 14.6276 6.99189 15.5264 6.99189M8.00003 13.5856C8.00003 12.8894 8.68997 11.8476 9.38743 10.9727C10.2856 9.84629 11.3574 8.86216 12.5874 8.11083C13.5088 7.54823 14.6276 7.00816 15.5264 7.00816M15.5264 7.00003H0.473633" stroke="white" />
                                             </svg>
                                          </div>

                                       </Link>
                                    </div>
                                 </div>

                              </div>
                           </div>
                        </div>
                     ))}
                  </div>
               }
               {activeTab === "tab4" &&
                  <div className="row courses_content">
                     {CoursesData.slice(0, 2).map((courses, pitem) => (
                        <div className="col col-lg-4  col-md-6 col-12" key={pitem}>
                           <div className="courses_item">
                              <div className="image">
                                 <img src={courses.img} alt="" />
                                 <button className='wish'>
                                    <img src={wish} alt="" />
                                 </button>
                              </div>
                              <div className="content">
                                 <span>{courses.subjet}</span>
                                 <h2>
                                    <Link onClick={ClickHandler} to={`/courses-single/${courses.slug}`}>
                                       {courses.title}
                                    </Link>
                                 </h2>
                                 <div className="reting">
                                    <ul>
                                       {[...Array(5)].map((_, i) => (
                                          <li key={i}><img src={star} alt="" /></li>
                                       ))}
                                       <li><span>4.9(10k)</span></li>
                                    </ul>
                                 </div>
                                 <div className="features">
                                    <ul>
                                       <li><img src={SemImg} alt="" />{courses.semesters} Semesters</li>
                                       <li><img src={Years} alt="" />{courses.year}  Years</li>
                                       <li><img src={Seats} alt="" />{courses.seats} Seats</li>
                                    </ul>
                                 </div>
                                 <div className="actions">
                                    <div className="ath">
                                       <div className="image">
                                          <img src={courses.athImg} alt="" />
                                       </div>
                                       <h3>By:{courses.ath}</h3>
                                    </div>
                                    <div className="athbtn">
                                       <Link to='/'>Enroll Now
                                          <div className="arrow">
                                             <svg width="8" height="16" viewBox="0 0 8 16" fill="none">
                                                <path d="M0.666701 16C0.496203 16 0.325538 15.9289 0.195373 15.7869C-0.0651243 15.5027 -0.0651243 15.0425 0.195373 14.7585L6.39064 7.99999L0.195373 1.24143C-0.0651243 0.957251 -0.0651243 0.497069 0.195373 0.213068C0.45587 -0.0709319 0.877699 -0.0711137 1.13803 0.213068L7.80463 7.48581C8.06512 7.76999 8.06512 8.23017 7.80463 8.51417L1.13803 15.7869C1.00786 15.9289 0.837199 16 0.666701 16Z" fill="#03060E" />
                                             </svg>
                                          </div>
                                          <div className="hover-arrow">
                                             <svg width="16" height="14" viewBox="0 0 16 14" fill="none">
                                                <path d="M8.00003 0.414429C8.00003 1.11063 8.68997 2.15243 9.38743 3.02736C10.2856 4.15383 11.3574 5.1379 12.5874 5.88923C13.5088 6.45183 14.6276 6.99189 15.5264 6.99189M8.00003 13.5856C8.00003 12.8894 8.68997 11.8476 9.38743 10.9727C10.2856 9.84629 11.3574 8.86216 12.5874 8.11083C13.5088 7.54823 14.6276 7.00816 15.5264 7.00816M15.5264 7.00003H0.473633" stroke="white" />
                                             </svg>
                                          </div>

                                       </Link>
                                    </div>
                                 </div>

                              </div>
                           </div>
                        </div>
                     ))}
                  </div>
               }
            </div>
            <div className="courses_btn">
               <Link to='/' className="btn_primary" onClick={ClickHandler}>
                  <span>Browse All Courses</span>
                  <div className="arrow">
                     <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M12 2.1216C12 3.1659 13.035 4.7286 14.0812 6.041C15.4284 7.7307 17.0362 9.2068 18.8811 10.3338C20.2632 11.1777 21.9414 11.9878 23.2896 11.9878M12 21.8784C12 20.8341 13.035 19.2714 14.0812 17.959C15.4284 16.2694 17.0362 14.7932 18.8811 13.6662C20.2632 12.8223 21.9414 12.0122 23.2896 12.0122M23.2896 12H0.710449" />
                     </svg>
                  </div>
               </Link>
            </div>
         </div>
      </section>
   );
};

export default CoursesSection;
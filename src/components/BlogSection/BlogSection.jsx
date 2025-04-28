import React from 'react';
import { Link } from 'react-router-dom';
import BlogData from '../../api/blog';

import icon1 from '../../images/blog/icon.svg';
import icon2 from '../../images/blog/icon2.svg';


const BlogSection = (props) => {
   const ClickHandler = () => {
      window.scrollTo(10, 0);
   }
   return (
      <section className="blog-section section_space">
         <div className="container">
            <div className="top-content">
               <div className="row justify-content-between align-items-center">
                  <div className="col-lg-6 col-12">
                     <div className="top_title mb-0">
                        <span className="fade_bottom">BLOG & NEWS</span>
                        <h2 className="fade_bottom">Get Latest <strong>News</strong> & Blog</h2>
                     </div>
                  </div>
                  <div className="col-lg-3 col-12">
                     <div className="blog_btn">
                        <Link to='/' className="btn_primary" onClick={ClickHandler}>
                           <span>Explore All </span>
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

            <div className="row">
               {BlogData.slice(0, 3).map((blog, bl) => (
                  <div className="col col-lg-4 col-md-6 col-12 fade_bottom" key={bl}>
                     <div className="blog-card">
                        <div className="image">
                           <img src={blog.imageUrl} alt="" />
                        </div>
                        <div className="content">
                           <div className='Date'>
                              <strong>{blog.date}</strong>
                              <strong>Feb, 25</strong>
                           </div>

                           <ul>
                              <li>
                                 <div className="icon">
                                    <img src={icon1} alt="" />
                                 </div>
                                 <span>By Themeholy</span>
                              </li>
                              <li>
                                 <div className="icon">
                                    <img src={icon2} alt="" />
                                 </div>
                                 <span>0 Comment</span>
                              </li>
                           </ul>
                           <h2><Link onClick={ClickHandler} to={`/blog-single/${blog.slug}`}>{blog.title}</Link></h2>
                           <p>{blog.content}</p>
                           <div className="mebtn">
                              <Link to='/' onClick={ClickHandler} className="btn_primary">
                                 <span>Read More</span>
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
               ))}
            </div>
         </div>
      </section>
   );
};

export default BlogSection;
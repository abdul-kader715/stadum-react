import React, { Fragment } from 'react';
import { Link, useParams } from 'react-router-dom'
import HeaderSectionS2 from '../../components/HeaderSectionS2/HeaderSectionS2';
import PageTitleSection from '../../components/PageTitleSection/PageTitleSection';
import BlogData from '../../api/blog';
import FooterSection from '../../components/FooterSection/FooterSection';
import Bs1 from '../../images/blog-single/img-2.jpg'
import Bs2 from '../../images/blog-single/img-3.jpg'
import Bs3 from '../../images/blog-single/1.jpg'
import Bstar from '../../images/blog/star.png'
import Bqa from '../../images/blog-single/qa.png'
import comment1 from '../../images/blog-single/comment/1.jpg'
import comment2 from '../../images/blog-single/comment/2.jpg'
import recent1 from '../../images/recent-post/1.jpg'
import recent2 from '../../images/recent-post/2.jpg'
import recent3 from '../../images/recent-post/3.jpg'
import ContactForm from './ContactForm';

const ClickHandler = () => {
    window.scrollTo(10,0)
}

const BlogSinglePage = (props) => {
    const { slug } = useParams()
    const BlogSingle = BlogData.find(item => item.slug === slug)
    return (
        <Fragment>
            <HeaderSectionS2 />
            <PageTitleSection pageTitle={BlogSingle.title} pagesub={'Blog Single Page'} />
            <section className="blog_single_page section_space">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-12">
                            <div className="blog_single_wrap">
                                <div className="image">
                                    <img src={BlogSingle.imageUrl} alt="" />
                                </div>
                                <ul>
                                    <li>
                                        <span>EDUCATION</span>
                                    </li>
                                    <li>
                                        Loran Berasa / Jun 4, 2023
                                    </li>
                                </ul>
                                <h2>{BlogSingle.title}</h2>
                                <p>There are many variations of passages agency we have covered many special events such as
                                    fireworks, fairs, parades, races, walks, a Lorem Ipsum Fasts injecte dedicated product
                                    design
                                    team can help you achieve your business goals. Whether you need to craft an idea for a
                                    completely new product or elevate the quality of an existing solution, we’ll help you to
                                    create a product that is laser targeted to your users’ needs and business results</p>
                                <p>There are many variations of passages agency we have covered many special events such as
                                    fireworks, fairs, parades, races, walks, a Lorem Ipsum .</p>
                            </div>
                            <div className="blog_gallery">
                                <div className="row">
                                    <div className="col-6">
                                        <img src={Bs1} alt="" />
                                    </div>
                                    <div className="col-6">
                                        <img src={Bs2} alt="" />
                                    </div>
                                </div>
                            </div>

                            <div className="blog_format_standard">
                                <div className="top_text">
                                    Wesay are many variations of passages of Lorem Ipsum available, but the have suffered
                                    alteration in some form, by injected humour, oris ut. In interdum sem quis congue
                                    accumsan ellentesque convallis eros tiam ultricies finibus. . Nunc ac sem sit amet purus
                                    luctus.
                                </div>
                                <div className="content">
                                    <div className="image">
                                        <img src={Bs3} alt="" />
                                    </div>
                                    <div className="text">
                                        <h2>Morata bara <span>- Founder</span> </h2>
                                        <ul>
                                            <li><img src={Bstar} alt="" /></li>
                                            <li><img src={Bstar} alt="" /></li>
                                            <li><img src={Bstar} alt="" /></li>
                                            <li><img src={Bstar} alt="" /></li>
                                            <li><img src={Bstar} alt="" /></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="shape">
                                    <img src={Bqa} alt="" />
                                </div>
                            </div>
                            <div className="comment_area">
                                <div className="comment_wrap">
                                    <div className="title">
                                        <h2>Comments (3)</h2>
                                    </div>
                                    <ul className="comments">
                                        <li className="comment_one">
                                            <div className="content">
                                                <div className="image">
                                                    <img src={comment1} alt="" />
                                                </div>
                                                <div className="text">
                                                    <h3>Butara Marat</h3>
                                                    <p>Lorem ipsum is simply free textdolor sit amet, consectetur notted
                                                        adipisicing elit sed do iusmod tempor incididu.</p>
                                                    <span>November 16, 2018 at 4:31 am </span>
                                                    <a href="#">Reply</a>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="comment_one">
                                            <div className="content">
                                                <div className="image">
                                                    <img src={comment2} alt="" />
                                                </div>
                                                <div className="text">
                                                    <h3>Laorat Porta</h3>
                                                    <p>Lorem ipsum is simply free textdolor sit amet, consectetur notted
                                                        adipisicing elit sed do iusmod tempor incididu.</p>
                                                    <span>November 16, 2018 at 4:31 am </span>
                                                    <a href="#">Reply</a>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div className="comment_respond">
                                    <div className="title">
                                        <h2>Leave a Contact</h2>
                                    </div>
                                  <ContactForm/>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-12">
                            <div className="blog-rightside">
                                <div className=" widget_search">
                                    <form>
                                        <div>
                                            <input type="text" className="from-contol" placeholder="Search.." />
                                                <button type="submit"><i className="ti-search"></i></button>
                                        </div>
                                    </form>
                                </div>
                                <div className="widget widget_catagory">
                                    <div className="title">
                                        <h2>Categories</h2>
                                    </div>
                                    <ul>
                                        <li><Link onClick={ClickHandler} to='/blog-single/Medical-treatment'><span><i className="ti-arrow-right"></i>Uncategorized
                                        </span><span>(08)</span></Link></li>
                                        <li><Link onClick={ClickHandler} to='/blog-single/Medical-treatment'><span><i
                                            className="ti-arrow-right"></i>Charity</span><span>(18)</span></Link></li>
                                        <li><Link onClick={ClickHandler} to='/blog-single/Medical-treatment'><span><i
                                            className="ti-arrow-right"></i>Professional</span> <span>(09)</span></Link>
                                        </li>
                                        <li><Link onClick={ClickHandler} to='/blog-single/Medical-treatment'><span><i className="ti-arrow-right"></i>Technology</span>
                                            <span>(10)</span></Link></li>
                                        <li><Link onClick={ClickHandler} to='/blog-single/Medical-treatment'><span><i className="ti-arrow-right"></i>Covid-19</span>
                                            <span>(17)</span></Link></li>
                                        <li><Link onClick={ClickHandler} to='/blog-single/Medical-treatment'><span><i className="ti-arrow-right"></i>Coaching</span>
                                            <span>(15)</span></Link></li>
                                    </ul>
                                </div>
                                <div className="widget widget_tag">
                                    <div className="title">
                                        <h2>Tag</h2>
                                    </div>
                                    <ul>
                                        <li><Link onClick={ClickHandler} to='/blog-single/Medical-treatment'>Design</Link></li>
                                        <li><Link onClick={ClickHandler} to='/blog-single/Medical-treatment'>Service</Link></li>
                                        <li><Link onClick={ClickHandler} to='/blog-single/Medical-treatment'>Top</Link></li>
                                        <li><Link onClick={ClickHandler} to='/blog-single/Medical-treatment'>Help</Link></li>
                                        <li><Link onClick={ClickHandler} to='/blog-single/Medical-treatment'>New</Link></li>
                                        <li><Link onClick={ClickHandler} to='/blog-single/Medical-treatment'>Best</Link></li>
                                        <li><Link onClick={ClickHandler} to='/blog-single/Medical-treatment'>Brutie</Link></li>
                                        <li><Link onClick={ClickHandler} to='/blog-single/Medical-treatment'>Sonds</Link></li>
                                    </ul>
                                </div>
                                <div className="widget widget_post">
                                    <div className="title">
                                        <h2>Recent Post</h2>
                                    </div>
                                    <ul>
                                        <li>
                                            <div className="image">
                                                <img src={recent1} alt="" />
                                            </div>
                                            <div className="content">
                                                <span><i className="ti-layout-tab-window"></i>Agu 10, 2023</span>
                                                <h3> <Link onClick={ClickHandler} to='/blog-single/Medical-treatment'>We play chimney pot
                                                    Chip bonne.</Link> </h3>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="image">
                                                <img src={recent2} alt="" />
                                            </div>
                                            <div className="content">
                                                <span><i className="ti-layout-tab-window"></i>Agu 10, 2023</span>
                                                <h3> <Link onClick={ClickHandler} to='/blog-single/Medical-treatment'>We play chimney pot
                                                    Chip bonne.</Link> </h3>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="image">
                                                <img src={recent3} alt="" />
                                            </div>
                                            <div className="content">
                                                <span><i className="ti-layout-tab-window"></i>Agu 10, 2023</span>
                                                <h3> <Link onClick={ClickHandler} to='/blog-single/Medical-treatment'>We play chimney pot
                                                    Chip bonne.</Link> </h3>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <FooterSection tClass={'footer_section_s2'} />
        </Fragment>
    );
}
export default BlogSinglePage;
import React from 'react';
import { Link } from 'react-router-dom';
import BlogData from '../../api/blog';

import Icon from '../../images/blog/shape.png'
import Icon1 from '../../images/blog/star.png'
import Icon2 from '../..//images/blog/star1.png'

const BlogSectionS3 = (props) => {
    const ClickHandle = () => {
        window.scrollTo(10,0);
    }
    return (
        <section className="blog_section_s3">
            <div className="container">
                <div className="row">
                    <div className="top_title s3">
                        <div className="row">
                            <div className="col-12">
                                <h2>OUR LARGEST BLOG</h2>
                                <h3>We Latest news & Blog</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {BlogData.slice(0, 3).map((blog, bl) => (
                        <div className="col col-lg-4 col-md-6 col-12" key={bl}>
                            <div className="blog-card">
                                <div className="image">
                                    <img src={blog.imageUrl} alt="" />
                                    <span>{blog.category}</span>
                                    <div className="overle">
                                        <img src={Icon} alt="" />
                                    </div>
                                </div>
                                <div className="content">
                                    <span>By: {blog.author}, {blog.date}</span>
                                    <h2><Link onClick={ClickHandle} to={`/blog-single/${blog.slug}`}>{blog.title}</Link></h2>
                                    <p>{blog.content}</p>
                                </div>
                                <div className="comment_reting">
                                    <div className="comment">
                                        <span>Comments ({blog.commentsCount})</span>
                                    </div>
                                    <div className="reting">
                                        <ul>
                                            {Array.from({ length: blog.rating }, (_, index) => (
                                                <li key={index}><img src={Icon1} alt="" /></li>
                                            ))}
                                            {Array.from({ length: 5 - blog.rating }, (_, index) => (
                                                <li key={blog.rating + index}><img src={Icon2} alt="" /></li>
                                            ))}
                                        </ul>
                                        <span>({blog.rating})</span>
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

export default BlogSectionS3;
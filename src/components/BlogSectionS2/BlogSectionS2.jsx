import React from 'react';
import { Link } from 'react-router-dom';
import BlogData from '../../api/blog';

const BlogSectionS2 = () => {
    const ClickHandle = () => {
        window.scrollTo(10, 0);
    }
    return (
        <section className="blog_section_s2 section_space">
            <div className="container">
                <div className="row">
                    <div className="top_title s2">
                        <div className="row">
                            <div className="col-12">
                                <h2>OUR LARGEST BLOG</h2>
                                <h3>We Latest news & Blog</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {BlogData.slice(3, 8).map((blog, bl) => (
                        <div className="col col-lg-6 col-md-6 col-12" key={bl}>
                            <div className="blog-card">
                                <div className="image">
                                    <img src={blog.imageUrl} alt="" />
                                    <span>{blog.category}</span>
                                </div>
                                <div className="content">
                                    <span>By: {blog.author}, {blog.date}</span>
                                    <h2><Link onClick={ClickHandle} to={`/blog-single/${blog.slug}`}>{blog.title}</Link></h2>
                                    <p>{blog.content}</p>
                                    <Link onClick={ClickHandle} to={`/blog-single/${blog.slug}`}><span>READ More <i className="ti-arrow-right"></i></span> </Link>
                                </div>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </section>
    );
};

export default BlogSectionS2;
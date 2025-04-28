import React from 'react';
import shape from '../../images/slider/shape-5.png'
import { Link } from 'react-router-dom';

const PageTitleSection = (props) => {
    const ClickHandler = () => {
        window.scrollTo(10,0)
    }
    return (
        <section className="page_title_section">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="content">
                        <h2>{props.pageTitle}</h2>
                        <ul>
                            <li><Link onClick={ClickHandler} to="/">Hone</Link></li>
                            <li>{props.pagesub}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div className="shape">
            <img src={shape} alt="" />
        </div>
    </section>
    );
};

export default PageTitleSection;
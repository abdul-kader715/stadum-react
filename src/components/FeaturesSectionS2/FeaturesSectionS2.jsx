import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const FeaturesSectionS2 = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const featureItems = [
        { id: 1, title: "People are lifted from poverty for this Poor", description: "We poor standard chunk ofI nibh velit auctor aliquet sollic tudin." },
        { id: 2, title: "People are lifted from poverty for this Poor", description: "We poor standard chunk ofI nibh velit auctor aliquet sollic tudin." },
        { id: 3, title: "People are lifted from poverty for this Poor", description: "We poor standard chunk ofI nibh velit auctor aliquet sollic tudin." },
        { id: 4, title: "People are lifted from poverty for this Poor", description: "We poor standard chunk ofI nibh velit auctor aliquet sollic tudin." },
    ];

    const clickHandler = () => {
        window.scrollTo(10, 0);
    }

    const handleHover = (index) => {
        setActiveIndex(index);
    }

    return (
        <section className="features_section_s2">
            <div className="features_wrap feature_slider">
                {featureItems.map((item, index) => (
                    <div
                        key={item.id}
                        className={`feature_item ${activeIndex === index ? 'active' : 'item'}`}
                        onMouseEnter={() => handleHover(index)}
                    >
                        <div className="content">
                            <span>{`0${item.id}`}</span>
                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                            <Link onClick={clickHandler} to="/about">
                                <i className="ti-arrow-right"></i>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default FeaturesSectionS2;

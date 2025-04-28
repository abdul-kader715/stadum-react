import React from "react";
import { Link } from "react-router-dom";

import Pric1 from '../../images/pricing/1.png'
import Pric2 from '../../images/pricing/2.png'
import Pric3 from '../../images/pricing/3.png'

import Img1 from '../../images/pricing/img1.png';
import Img2 from '../../images/pricing/img2.png';

const pricingPlans = [
    {
        title: "Free This Plan",
        price: "$0",
        label: null,
        image: Pric1,
        features: [
            "We are privileged to work with.",
            "24/7 system monitoring",
            "Encourage every team member",
        ],
    },
    {
        title: "Stander This Plan",
        price: "$55",
        label: "STANDER",
        image: Pric2,
        features: [
            "We are privileged to work with.",
            "24/7 system monitoring",
            "Encourage every team member",
            "Remote best support",
        ],
    },
    {
        title: "Popular This Plan",
        price: "$99",
        label: null,
        image: Pric3,
        features: [
            "We are privileged to work with.",
            "24/7 system monitoring",
            "Encourage every team member",
        ],
    },
];
const featureIcons = [Img1, Img2];

const PricingSection = () => {
    return (
        <section className="pricing_section section_space">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="top_title">
                            <h2>OUR PRICING PLAN</h2>
                            <h3>The Plan Product Pricing.</h3>
                        </div>
                    </div>
                </div>
                <div className="row g-0 align-items-center">
                    {pricingPlans.map((plan, index) => (
                        <div className="col col-lg-4 col-md-6 col-12" key={index}>
                            <div className="pricing_card">
                                {plan.label && <span className="title">{plan.label}</span>}
                                <div className="icon">
                                    <img src={plan.image} alt="" />
                                </div>
                                <div className="top_content">
                                    <h2>{plan.title}</h2>
                                    <h3>{plan.price}</h3>
                                </div>
                                <div className="content">
                                    <ul>
                                        {plan.features.map((feature, i) => (
                                            <li key={i}>
                                                <img
                                                    className={`img${(i % 2) + 1}`}
                                                    src={featureIcons[i % 2]}
                                                    alt=""
                                                />
                                                <span>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="prici_btn">
                                    <Link to="/" className="btn_See">
                                        See More <i className="ti-arrow-right"></i>
                                    </Link>
                                </div>
                                <div className="shape_1">
                                    <svg
                                        version="1.0"
                                        width="100%"
                                        height="100%"
                                        viewBox="0 0 400.000000 202.000000"
                                        preserveAspectRatio="xMidYMid meet"
                                    >
                                        <g
                                            transform="translate(0.000000,202.000000) scale(0.100000,-0.100000)"
                                            stroke="none"
                                        >
                                            <path
                                                d="M0 1014 l0 -1006 23 16 c116 84 421 280 538 345 396 219 822 371
                          1167 415 152 20 392 20 532 2 528 -71 1130 -338 1721 -765 19 -13 19 6 19 993
                          l0 1006 -2000 0 -2000 0 0 -1006z"
                                            />
                                        </g>
                                    </svg>
                                </div>
                                <div className="shape_2">
                                    <svg
                                        version="1.0"
                                        width="100%"
                                        height="100%"
                                        viewBox="0 0 400.000000 202.000000"
                                        preserveAspectRatio="xMidYMid meet"
                                    >
                                        <g
                                            transform="translate(0.000000,202.000000) scale(0.100000,-0.100000)"
                                            stroke="none"
                                        >
                                            <path
                                                d="M0 1006 l0 -1006 2000 0 2000 0 0 1006 c0 987 0 1006 -19 993 -591
                        -427 -1193 -694 -1721 -765 -597 -79 -1305 138 -2030 622 -102 68 -195 131
                        -207 140 l-23 16 0 -1006z"
                                            />
                                        </g>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PricingSection;

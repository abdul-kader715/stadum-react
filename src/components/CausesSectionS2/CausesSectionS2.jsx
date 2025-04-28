import React from 'react';
import Slider from "react-slick";
import CausesData from '../../api/causes';
import { Link } from 'react-router-dom';
const ClickHander = () => {
  window.scrollTo(10, 0)
}
const CausesSectionS2 = (props) => {

  const settings = {
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    dots: true,
    arrows: false,
    responsive: [{
      breakpoint: 1399,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }
    ]
  };

  return (
    <section className={"" + props.hclass}>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="top_title">
              <h2>OUR CAUSES GOALS</h2>
              <h3>We Gools Popular Causes</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="causes_slider">
        <Slider {...settings}>
          {CausesData.slice(0, 5).map((causes, item) => (
            <div className="col" key={item}>
              <div className="causes_card">
                <div className="imgage">
                  <img src={causes.img} alt="" />
                  <span>{causes.Catagori}</span>
                </div>
                <div className="content">
                  <h2><Link onClick={ClickHander} to={`/causes-single/${causes.Slug}`}>{causes.title}</Link></h2>
                  <p>{causes.description}</p>
                </div>
                <div className="donet_progres">
                  <div className="progres">
                    <div className="bar" style={{ width: `${(causes.donatedAmount / causes.goalAmount) * 100}%` }}>
                    </div>
                    <p className="percent">{Math.round((causes.donatedAmount / causes.goalAmount) * 100)}%</p>
                  </div>
                  <div className="donet_amaunt">
                    <span>${causes.goalAmount} Goals</span>
                    <span>${causes.donatedAmount} Donat</span>
                  </div>
                </div>
              </div>
            </div>

          ))}
        </Slider>
      </div>
    </section >
  );
};

export default CausesSectionS2;
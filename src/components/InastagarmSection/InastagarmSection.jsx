import React from 'react';

import IMG1 from '../../images/instagram/s3_1.jpg'
import IMG2 from '../../images/instagram/s3_2.jpg'
import IMG3 from '../../images/instagram/s3_3.jpg'
import IMG4 from '../../images/instagram/s3_4.jpg'
import IMG5 from '../../images/instagram/s3_5.jpg'

const InastagarmSection = () => {
    return (
        <section className="inastagarm_section">
        <h2 className="d-none">display hidden</h2>
        <ul>
          <li>
            <div className="image">
              <img src={IMG1} alt="" />
            </div>
          </li>
          <li>
            <div className="image">
              <img src={IMG4} alt="" />
            </div>
          </li>
          <li>
            <div className="image">
              <img src={IMG3} alt="" />
              <a href="/">FOLLOW ME
                INSTAGRAM! </a>
            </div>
          </li>
          <li>
            <div className="image">
              <img src={IMG2} alt="" />
            </div>
          </li>
          <li>
            <div className="image">
              <img src={IMG5} alt="" />
            </div>
          </li>
        </ul>
      </section>
    );
};

export default InastagarmSection;
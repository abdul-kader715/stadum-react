import React from 'react';
import { Link } from 'react-router-dom'

const ServiceCard = ({Sround,Stitle,Sicon,Sdescription,slug}) => {
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }
    return (

        <div className="service_card">
            <div className="image">
                <div className="round">
                    <img src={Sround} alt="simg" />
                </div>
            </div>
            <div className="content">
                <h2><Link onClick={ClickHandler} to={`/services-single/${slug}`}>{Stitle}</Link></h2>
                <div className="icon_text">
                    <div className="icon">
                        <img src={Sicon} alt="simg" />
                    </div>
                    <p>{Sdescription}</p>
                </div>
            </div>
            <div className="line_shape">
                <div className="shape-1"></div>
                <div className="shape-2"></div>
                <div className="shape-3"></div>
            </div>
        </div>

    );
}

export default ServiceCard;
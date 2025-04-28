import React from 'react';
import { Link } from 'react-router-dom';
import ProjectData from '../../api/project';

import ProBg from "../../images/project/project.jpg";
import Proicon from "../../images/project/icon.png";

const ProjectSection = (props) => {
    const ClickHander = () => {
        window.scrollTo(10,0);
    }
    return (
        <section className={"" + props.hClass}>
            <div className="bg-image">
                <img src={ProBg} alt=""/>
            </div>
            <div className="project_top_content">
                <div className="container">
                    <div className="top_title">
                        <div className="row">
                            <div className="col-lg-6 col-12">
                                <h2>OUR BEST PROJECTS</h2>
                                <h3>We Charity Shops Pojects</h3>
                            </div>
                            <div className="col-lg-6 col-12">
                                <p>Services address a range of simply application and infrastructure
                                    of passages of available, but the majority have suffered
                                    alteration in some form.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="project_content">
                <div className="container-fluid">
                    <div className="row ">
                        {ProjectData.slice(0,4).map((project,pitem) => (
                            <div className="col-xl-3 col-md-6 col-md-6 col-12" key={pitem}>
                                <div className="project_item">
                                    <div className="image">
                                        <img src={project.img} alt="" />
                                    </div>
                                    <div className="project_overlay">
                                        <Link onClick={ClickHander} to={`/project-single/${project.Slug}`}>
                                            <img src={Proicon} alt="" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProjectSection;
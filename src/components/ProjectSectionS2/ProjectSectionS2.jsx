import React from 'react';
import { Link } from 'react-router-dom';
import ProjectData from '../../api/project';


const ProjectSectionS2 = (props) => {
    const ClickHander = () => {
        window.scrollTo(10, 0);
    }
    return (
        <section className={"" +props.hClass}>
            <div className="container-fluid">
                <div className="row">
                    {ProjectData.slice(4,7).map((project, pitem) => (
                        <div className="col col-xl-4 col-lg-6 col-md-6 col-12" key={pitem}>
                            <div className="project_card">
                                <div className="image">
                                    <img src={project.img} alt="" />
                                </div>
                                <div className="content">
                                    <div className="text">
                                        <h2><Link onClick={ClickHander} to={`/project-single/${project.Slug}`}>
                                            {project.title}
                                        </Link></h2>
                                        <p>{project.datal}</p>
                                    </div>
                                    <div className="icon">
                                        <img src={project.Icon} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section >
    );
};

export default ProjectSectionS2;





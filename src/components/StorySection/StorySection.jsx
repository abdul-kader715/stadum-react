import React from 'react';
import story_1 from '../../images/story_1.jpg'
import story_2 from '../../images/story_2.jpg'
const StorySection = () => {
    return (
        <section className="story_section">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-12">
                        <div className="left_content">
                            <div className="top_title s2">
                                <h2>OUR STORY MORE</h2>
                                <h3>Poor the best display of
                                    of love true story</h3>
                                <p>Services address a range of simply application and infrastructure
                                    of passages of available.</p>
                                <p>It is a long established fact that a reader will be distracted by treadable content of a page when
                                    looking at its

                                    of simply application and infrastructure
                                    of passages of available, but the majority have suffered
                                    alteration in some form.</p>
                                <span>We standard chunk of Ipsum used Poor People.
                                    <br />
                                    No matter what problem you face.
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-12">
                        <div className="right_content">
                            <div className="image">
                                <div className="image_1">
                                    <img src={story_1} alt="" />
                                </div>
                                <div className="image_1">
                                    <img src={story_2} alt="" />
                                </div>
                            </div>
                            <span>We standard chunk of Ipsum used Poor People.
                                <br />
                                No matter what problem you face.
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default StorySection;
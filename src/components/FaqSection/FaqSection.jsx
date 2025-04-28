import React from "react";
import Accordion from "./Accordion";
import Accordionrigth from "../../images/faq/rigth_img.jpg";
import shape from "../../images/faq/shape.png";

const FAQSection = () => {
    return (
        <section className="faq_section py-5">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-12 mb-4">
                        <div className="faq_content">
                            <div className="top_title s3 mb-4">
                                <h2>Our FAQ Questions</h2>
                                <h3>The Perspective of Your Children Customers</h3>
                                <p>
                                    Services address a range of simple applications and infrastructure issues,
                                    improving access and usability.
                                </p>
                            </div>
                            <Accordion />
                        </div>
                    </div>
                    <div className="col-xl-6 col-12">
                        <div className="image1">
                            <img
                                src={Accordionrigth}
                                alt="Right Illustration"
                                className="img-fluid"
                            />
                        </div>
                    </div>
                </div>
                <div className="shape mt-5">
                    <img src={shape} alt="Decorative Shape" className="img-fluid" />
                </div>
            </div>
        </section>
    );
};



export default FAQSection;

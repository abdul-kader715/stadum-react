
import Service from "../../api/services"
import ServiceCard from "./ServiceCard"

import Shape1 from "../../images/service/shape-1.png"
import Shape2 from "../../images/service/shape-2.png"
import Shape3 from "../../images/service/shape-3.png"


const ServiceSection = () => {
   
    return (
        <section className="service_section section_space">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="top_title">
                            <h2>OUR BEST SERVICE</h2>
                            <h3>What Best Service talking </h3>
                        </div>
                    </div>
                </div>
                <div className="row">
                  {Service.slice(0,6).map((Sitem, Skye) => (
                    <div className="col col-xl-4 col-lg-6 col-md-6 col-12" key={Skye}>
                       <ServiceCard Sround={Sitem.icon} Stitle={Sitem.title}  Sicon={Sitem.sicon} Sdescription={Sitem.description} slug={Sitem.slug}/>
                    </div>
                  ))}
                </div>
            </div>
            <div className="shape-01"><img src={Shape1} alt="simg" /></div>
            <div className="shape-02"><img src={Shape2} alt="simg" /></div>
            <div className="shape-03"><img src={Shape3} alt="simg" /></div>
        </section>
    )
}


export default ServiceSection
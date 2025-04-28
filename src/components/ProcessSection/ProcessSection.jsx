import { Link } from 'react-router-dom'
import Process from "../../api/process";
import ProcessItem from "./ProcessItem";
import Shape from '../../images/process/shape.png'

const ProcessSection = (props) => {
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }
    return (
        <section className="process_section section_space">
            <div className="container">
                <div className="row">
                    <div className="top_title">
                        <div className="row">
                            <div className="col-12">
                                <h2>OUR Working pRoces</h2>
                                <h3>We Donate to Poor childrens</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="process_wrap">
                    <div className="row">
                        {Process.map((processData, pitem) => (
                            <div className="col col-lg-4 col-md-6 col-12" key={pitem}>
                                <ProcessItem  title={processData.title} description={processData.description}
                                 Icon={processData.icon} hovericon={processData.Hicon} />
                            </div>
                        ))}
                    </div>
                    <div className="process_btn">
                        <Link to="/project" onClick={ClickHandler} className="btn_primary">View Work MORE <i className="ti-arrow-right"></i></Link>
                    </div>
                    <div className="shape">
                        <img src={Shape} alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}
export default ProcessSection
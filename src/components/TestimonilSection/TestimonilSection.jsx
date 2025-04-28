
import leftimg from '../../images/testimonil/1.jpg'
import Img from '../../images/testimonil/image.png'
import Shape1 from '../../images/testimonil/shape.png'
import Shape2 from '../../images/testimonil/shape-2.png'

const TestimonilSection = () => {

    return (
        <section className="testimonil_section section_space">
            <div className="container">
                <div className="testimonil_wrap">
                    <div className="left_img">
                        <img src={leftimg} alt="" />
                    </div>
                    <div className="content">
                        <h2>Clients Reviews:</h2>
                        <h4>There are many variations of passages of Lorem Ipsum
                            by injected humour, or randomised ere we have testi
                            must-have solution to satisfy most ..</h4>
                        <div className="image">
                            <img src={Img} alt="" />
                            <span>MORE +</span>
                        </div>
                        <h3>Merata Barat</h3>
                        <span>Founder</span>
                    </div>

                    <div className="shape-1">
                        <img src={Shape1} alt="" />
                    </div>
                    <div className="shape-2">
                        <img src={Shape2} alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}
export default TestimonilSection
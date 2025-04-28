import { Link } from "react-router-dom"





const HeaderTopSection = () => {
    return(
        <div className="header_top">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-7 col-12">
                            <div className="contacr_info">
                                <ul>
                                    <li>
                                        <div className="number">
                                            <span>NEWS:</span>Give Ready to help us
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-5 col-12">
                            <div className="contacr_right">
                                <ul>
                                    <li><span>Visit our social pages:</span></li>
                                    <li>
                                        <Link to="/">
                                            <i className="ti-facebook"></i>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/">
                                            <i className="ti-twitter-alt"></i>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/">
                                            <i className="ti-skype"></i>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/">
                                            <i className="ti-linkedin"></i>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}
export default HeaderTopSection
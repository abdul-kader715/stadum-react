import React from 'react';
import { Link } from 'react-router-dom';
import teamData from '../../api/team';
import bgShape from '../../images/team/shape.svg'


// import Shape from '../../images/team/bg_shape.png'


const TeamSection = (props) => {
   const ClickHandler = () => {
      window.scrollTo(10, 0);
   }
   return (
      <section className="team_section section_space">
         <div className="container">
            <div className="row">
               <div className="col-lg-6 col-12">
                  <div className="top_title">
                     <span>INSTRUCTORS</span>
                     <h2>our experienced <strong>instructors</strong></h2>
                  </div>
               </div>
            </div>
            <div className="team_wrap">
               <div className="row">
                  {teamData.slice(0, 3).map((team, index) => (
                     <div className="col col-lg-4 col-md-6 col-12" key={index}>
                        <div className="team_card">
                           <div className="image">
                              <img src={team.image} alt="" />
                           </div>
                           <div className="content">
                              <div className="bgShape">
                                 <img src={bgShape} alt="" />
                              </div>

                              <div className="icon">
                                 <Link onClick={ClickHandler} to={`/team-single/${team.slug}`}>
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                       <path d="M9.9998 1.76807C9.9998 2.63832 10.8622 3.94057 11.734 5.03423C12.8567 6.44232 14.1965 7.6724 15.734 8.61157C16.8857 9.31482 18.2843 9.9899 19.4078 9.9899M9.9998 18.2321C9.9998 17.3618 10.8622 16.0596 11.734 14.9659C12.8567 13.5579 14.1965 12.3277 15.734 11.3886C16.8857 10.6853 18.2843 10.0102 19.4078 10.0102M19.4078 10.0001H0.591797" stroke="#081933" />
                                    </svg>
                                 </Link>
                              </div>
                              <h2><Link onClick={ClickHandler} to={`/team-single/${team.slug}`}>{team.title}</Link></h2>
                              <span>{team.subtitle}</span>
                              <ul>
                                 <li><Link to="#"><i className="ti-facebook"></i></Link></li>
                                 <li><Link to="#"><i className="ti-twitter-alt"></i></Link></li>
                                 <li><Link to="#"><i className="ti-linkedin"></i></Link></li>
                              </ul>
                           </div>
                           {/* <div className="shape">
                              <svg version="1.0" viewBox="0 0 370.000000 351.000000" preserveAspectRatio="xMidYMid meet">

                                 <g transform="translate(0.000000,351.000000) scale(0.100000,-0.100000)" stroke="none">
                                    <path d="M891 3499 c-268 -33 -535 -176 -788 -422 l-103 -100 0 -1489 0 -1488
1850 0 1850 0 0 1485 0 1486 -62 -52 c-147 -122 -389 -257 -561 -313 -228 -74
-489 -76 -668 -5 -198 78 -313 167 -513 401 -142 166 -252 265 -386 350 -193
121 -412 173 -619 147z" />
                                 </g>
                              </svg>

                           </div> */}
                        </div>
                     </div>
                  ))}


               </div>

            </div>
         </div>
         {/* <div className="bg_shape">
                <img src={Shape} alt="" />
            </div> */}
      </section>
   );
};

export default TeamSection;
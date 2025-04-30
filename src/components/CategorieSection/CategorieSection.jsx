import React from 'react';
import { Link } from 'react-router-dom';
import CategorieData from '../../api/categorie';
import ShapeImg from '../../images/categorie/shape-1.png'
import ShapeImg2 from '../../images/categorie/shape-2.png'
import ShapeImg3 from '../../images/categorie/shape-3.png'

const CategorieSection = () => {
   const ClickHandler = () => {
      window.scrollTo(10, 0);
   }
   return (
      <section className='categorie_section section_space'>
         <div className="container">
            <div className="row justify-content-center">
               <div className="col-lg-8 col-md-12 col-12">
                  <div className="top_title">
                     <span className="fade_bottom">CATEGORIES</span>
                     <h2 className="fade_bottom">Browse Top categories</h2>
                  </div>
               </div>
            </div>
            <div className="row categorie_wrapper">
               {CategorieData.slice(0, 8).map((Categorie, index) => (
                  <div className="col col-lg-3 col-md-6 col-12" key={index}>
                     <div className="categorie_item fade_bottom">
                        <div className="icon">
                           <img src={Categorie.img} alt="" />
                        </div>
                        <div className="text">
                           <h2>{Categorie.title}</h2>
                           <span>{Categorie.Subtitle}</span>
                        </div>
                     </div>
                  </div>
               ))}

            </div>
            <div className="see_all_btn fade_bottom">
               <Link to='/'  className="btn_primary" onClick={ClickHandler}>
                  <span>Browse All Categories</span>
                  <div className="arrow">
                     <svg  width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M12 2.1216C12 3.1659 13.035 4.7286 14.0812 6.041C15.4284 7.7307 17.0362 9.2068 18.8811 10.3338C20.2632 11.1777 21.9414 11.9878 23.2896 11.9878M12 21.8784C12 20.8341 13.035 19.2714 14.0812 17.959C15.4284 16.2694 17.0362 14.7932 18.8811 13.6662C20.2632 12.8223 21.9414 12.0122 23.2896 12.0122M23.2896 12H0.710449"  />
                     </svg>
                  </div>
               </Link>
            </div>
         </div>

         <div className="shape">
            <img src={ShapeImg} alt="" />
         </div>
         <div className="shape-2">
            <img src={ShapeImg2} alt="" />
         </div>
         <div className="shape-3 float-bob-x">
            <img src={ShapeImg3} alt="" />
         </div>
      </section>
   )
}

export default CategorieSection
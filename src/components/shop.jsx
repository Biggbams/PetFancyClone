import Navandhero, { Footer } from "./navandhero";
import './css/shop.scss'
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDownWideShort, faStar } from "@fortawesome/free-solid-svg-icons";
import { useRef,useEffect } from "react";
import product from "./product";

const Shop = () => {
    return (
        <div className="shop-container">
            <Navandhero />
            <ShopGrid 
            product={product}
            />
            <Footer />
        </div>
    );
}


const ShopGrid = ({product}) => {

    const myRefs = {
        filter: useRef(null),
        reviewVisibility: useRef(null)

    }

    const myMethods = {

        overReview: () => {
            myRefs.reviewVisibility.current.style.visibility = 'visible'
        },
        leaveReview: () => {
            myRefs.reviewVisibility.current.style.visibility = 'hidden'
        }


    }
    const   gridproduct=  product.map((products)=>(
        <div className="collection">
        <div class='img-container'>
          <img 
          src={products.image} alt="" srcset=""
           /></div>
             <p className="">{products.name}</p>
         <p className="flex-right">
             <span>{products.price}</span>
             <span>{products.dummy_price}</span>

         </p>
         <div className="pointer" onMouseMove={myMethods.overReview} onMouseLeave={myMethods.leaveReview}>
             <div className="flex-right">
                 <FontAwesomeIcon icon={faStar} color="gold" />
                 <FontAwesomeIcon icon={faStar} color="gold" />
                 <FontAwesomeIcon icon={faStar} color="gold" />
                 <FontAwesomeIcon icon={faStar} color="gold" />
                 <FontAwesomeIcon icon={faStar} color="gold" />
                 <span>22 reviews</span>
             </div>
             <section className="review-pop" ref={myRefs.reviewVisibility} >

                 <p>Overall Rating:4.9/5</p>
                 <ul>
                     <li>
                         <span>1</span>
                         <span><FontAwesomeIcon color="yellow" icon={faStar} /></span>
                         <div>
                             <div></div>
                         </div>
                         <span>90%</span>


                     </li>

                     <li>
                         <span>1</span>
                         <span><FontAwesomeIcon color="yellow" icon={faStar} /></span>
                         <div>
                             <div></div>
                         </div>
                         <span>90%</span>


                     </li>


                     <li>
                         <span>1</span>
                         <span><FontAwesomeIcon color="yellow" icon={faStar} /></span>
                         <div>
                             <div></div>
                         </div>
                         <span>90%</span>


                     </li>



                     <li>
                         <span>1</span>
                         <span><FontAwesomeIcon color="yellow" icon={faStar} /></span>
                         <div>
                             <div></div>
                         </div>
                         <span>90%</span>


                     </li>


                     <li>
                         <span>1</span>
                         <span><FontAwesomeIcon color="gold" icon={faStar} /></span>
                         <div>
                             <div></div>
                         </div>
                         <span>90%</span>


                     </li>
                 </ul>
             </section>
         </div>


     </div>
    )
    )

  
 

    return (
        <div className="shop-grid">

            <div className="shop-grid-header">

                <Link className="link" to='/'>Home</Link>\<span>All</span>
                <p>Products</p>
            </div>
            <div className="filter">
                <div className="custom-select" style={{ width: '200px' }} onClick={() => {

                    myRefs.filter.current.click();
                }}>
                    <FontAwesomeIcon icon={faArrowDownWideShort} />

                    <select name="g" ref={myRefs.filter} >




                        <option value="">
                            Newest
                        </option>

                        <option value="">
                            Oldest
                        </option>

                        <option value="">
                            Alphabet A-Z
                        </option>

                        <option value="">
                            Oldest
                        </option>

                        <option value="">
                            Oldest
                        </option>
                    </select>

                </div>
            </div>
            <div className="main-shop-grid">

{gridproduct}
              
              
                
            </div>


        </div>
    );
}


export default Shop;
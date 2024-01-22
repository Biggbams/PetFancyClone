import Navandhero, { Footer } from "./navandhero";
import './css/shop.scss'
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDownWideShort, faStar } from "@fortawesome/free-solid-svg-icons";
import { useRef,useEffect,useState } from "react";
import product from "./product";

const Shop = () => {
    const [stateProduct,setStateProduct]= useState(product)
    return (
        <div className="shop-container">
            <Navandhero />
            <ShopGrid 
            product={stateProduct}
            sortProduct={()=>{
              setStateProduct([...stateProduct].sort()) 
              console.log(stateProduct);
            }
       
        }
            />
            <Footer />
        </div>
    );
}


const ShopGrid = ({product,sortProduct}) => {
    

    const myRefs = {
        filter: useRef(null),
        reviewVisibility: useRef([])

    }

    const myMethods = {

        overReview: (index) => {
           //vis.current[index].style.visibility = 'visible'
           myRefs.reviewVisibility.current[index].style.visibility='visible'
        },
        leaveReview: (index) => {
            myRefs.reviewVisibility.current[index].style.visibility = 'hidden'
        },
       
        


    }
    const   gridproduct=  product.map((products,index)=>(
        <div className="collection">
        <div class='img-container'>
          <img 
          src={products.image} alt="" srcset=""
           /></div>
             <p className="">{products.name}</p>
         <p className="flex-right star">
             <span>{products.price}</span>
             <span>{products.dummy_price}</span>

         </p>
         <div 
         className="pointer star"
          onMouseMove={()=>{myMethods.overReview(index)}} 
          onMouseLeave={()=>{myMethods.leaveReview(index)}}>
             <div className="flex-right star">
                 <FontAwesomeIcon icon={faStar} color="gold" />
                 <FontAwesomeIcon icon={faStar} color="gold" />
                 <FontAwesomeIcon icon={faStar} color="gold" />
                 <FontAwesomeIcon icon={faStar} color="gold" />
                 <FontAwesomeIcon icon={faStar} color="gold" />
                 <span>22 reviews</span>
             </div>
             <section
             key={index}
              className="review-pop"
               ref={(node) => {
               myRefs.reviewVisibility.current[index]=node
              }}
              >

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

                    <select name="g" ref={myRefs.filter} onChange={sortProduct}  >




                        <option value="newest">
                            Newest
                        </option>

                        <option value="oldest">
                            Oldest
                        </option>

                        <option value="ascending">
                            Alphabet A-Z
                        </option>

                        <option value="descending">
                        Alphabet Z-A
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
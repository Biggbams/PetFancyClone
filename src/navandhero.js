import './navandhero.scss'
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
import { faHamburger, faX } from '@fortawesome/free-solid-svg-icons'

import { useState, useRef } from 'react'
export default function Navandhero() {
    const display = useRef(null)
    const [left, setLeft] = useState('-35%')
    const [top, setTop] = useState('-100%');
    function e(){
        function g(){
            function gg(){
                
            }
        }
    }
    return (
        <div
            className='first-container'
        >
            {/* search container */}
            <div
                className='search-container'
                style={{
                    top: top
                }}

                onClick={(e) => {
                    e.stopPropagation();
                    setTop('-100%');
                }}
            >
                <div
                    onClick={(e) => {
                        e.stopPropagation();

                    }}
                >
                    <div
                    
                    >
                        <span>

                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                            <input />

                        </span>

                        <span
                            onClick={() => {
                                setTop('-100%');
                            }}
                        >Cancel</span>
                    </div>

                    <div>

                        no result found
                    </div>
                </div>
            </div>
            {/* cart */}
            <div
                className='cart-container'

                style={{
                    right: left,

                }}
            >
                <p>
                    <span>Your shopping cart</span>
                    <FontAwesomeIcon
                        onClick={() => {
                            setLeft('-35%');
                        }}

                        icon={faX}
                        style={{
                            cursor:'pointer'
                        }}
                    />

                </p>

                <div>no item in cart yet</div>
            </div>
            {/* first paragrapght athe top  */}
            <p
                className='worldwide-shippin-paragrapgh'
                style={{
                    textAlign: 'center'
                }}
            >
                Worldwide Shipping available
            </p>
            <div
                style={{

                }}
            >
                <div
                    className='nav'
                >
                    {/* brand  */}
                    <div className='brand'>
                        <img src='https://img.thesitebase.net/files/10394844/2023/02/04/180x180_x2@16755159689bea4c82f1.png' alt='Petfancy' />
                    </div>
                    {/* list  */}
                    <div ref={display} className='list-section'>
                        <ul>
                            <li className='active'>Home</li>
                            <li>Shop Now</li>
                            <li>Order Tracking</li>
                            <li>FAQs</li>
                            <li>Contact Us</li>
                            <li className='close'
                                onClick={() => {
                                    display.current.style.display = 'none'

                                }}
                            >close</li>
                        </ul>
                    </div>

                    {/* cart and search section  */}

                    <div
                        className='cart-search'
                    >
                        <ul className='cart'>
                            <li
                                onClick={() => {
                                    display.current.style.display = 'block'

                                }}
                            ><FontAwesomeIcon icon={faHamburger} /></li>
                            <li
                                onClick={() => {
                                    setTop('0');
                                }}
                            ><FontAwesomeIcon icon={faMagnifyingGlass} /></li>
                            <li
                                onClick={() => {
                                    setLeft('0');
                                }}
                            ><FontAwesomeIcon icon={faCartPlus} /></li>

                        </ul>

                    </div>

                </div>
            </div>

            {/* hero section */}
            <div
                className='hero-container'
            >
                <img className="hero-image" src="https://img.thesitebase.net/files/10394844/2023/02/04/878x2048_center@167551005832772d7575.jpeg" alt="Hero Image" />
                <div className="hero-text">
                    <h1>Accesories for Pet</h1>
                    <p >Make Your Pet's Day With Our Range Of Pet Accessories At Petfancy Today. Our Pet Bandanas Are Handmade To The Highest Quality For Your Pet!</p>
                    <a>SHOP NOW</a>
                </div>
            </div>

        </div>

    );

   
    
}

export function Hero({hei,hero_image,hero_title,paragraph,btton}){
        
    return(
        <div
        className='hero-container'
        style={{
            height:hei,
            color:btton
        }}
    >
        <img className="hero-image" src={hero_image} alt="Hero Image" />
        <div className="hero-text">
            <h1>{hero_title}</h1>
            <p >{paragraph}</p>
            <a>{btton}</a>
        </div>
    </div>



    );
}
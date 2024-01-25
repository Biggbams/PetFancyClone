import './css/navandhero.scss'
import ReactDOM from 'react-dom'
import Button from './Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
import { faBars, faX, faGlobe, faCopyright } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { useState, useRef, useEffect } from 'react'
import gsap from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'
import Lenis from '@studio-freight/lenis'
gsap.registerPlugin(ScrollTrigger)
export default function Navandhero() {

    const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)


// let tl = gsap.timeline({
//     // yes, we can add it to an entire timeline!
//     scrollTrigger: {
//       trigger: ".hero-container",
//       pin: true, // pin the trigger element while active
//       start: "top top", // when the top of the trigger hits the top of the viewport
//       end: "+=500", // end after scrolling 500px beyond the start
//       scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
//       snap: {
//         snapTo: "labels", // snap to the closest label in the timeline
//         duration: { min: 0.2, max: 3 }, // the snap animation should be at least 0.2 seconds, but no more than 3 seconds (determined by velocity)
//         delay: 0.2, // wait 0.2 seconds from the last scroll event before doing the snapping
//         ease: "power1.inOut", // the ease of the snap animation ("power3" by default)
//       },
//     },
//   });
    const display = useRef(null)
    const [left, setLeft] = useState('-35%')
    const [top, setTop] = useState('-100%');
    useEffect(() => {
        // tl.addLabel("start")
        // .from(".hero-container", { scale: 1})
        // .addLabel("color")
        // .to(".hero-container", {scale:0 })
        // .addLabel("end");
        // return () => {
        // };
    }, []);
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
                            cursor: 'pointer'
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
                            <li><Link  className='active router-link' to='/'>Home</Link></li>
                            <li><Link  className='router-link' to='/shop'> Shop Now</Link></li>
                            <li>Order Tracking</li>
                            <li><Link  className='router-link' to='/Faq'> FAQ</Link></li>
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
                            ><FontAwesomeIcon icon={faBars} /></li>
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


        </div>

    );



}

export function Hero({ hei, hero_image, hero_title, paragraph, btton }) {

    return (
        <div
            className='hero-container'
            style={{
                height: hei,
                color: btton
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

export function NewArrival({ newData }) {

    const newArrivalData = newData.map(data =>
        <div className="gallarey">
            <img src={data.image} alt={data.title} srcset="" />
            <p>{data.title}</p>
            <p>{data.price}   &nbsp; &nbsp; <span>{data.original_price}</span></p>
        </div>

    );

    return (
        <div
            className='new-arrival-container'
        >
            <div className="new-arrival-first-div">
                <p>New Arrival</p>
                <Button

                />
            </div>

            <div className="new-arrival-gallrey">

                {newArrivalData}

            </div>

        </div>
    );
}


export const GridHero = () => {

    return (
        <div
            className='grid-hero-container'
        >
            <div className="grid-hero-img">
                <img src="https://img.thesitebase.net/files/10394844/2023/02/04/0x1080@1675550974ede531d09d.png" alt="" />
            </div>
            <div className="subscribtion">
                <form>
                    <h1>Subscribe</h1>
                    <p>Sign up to get the latest on sales, new releases and more …</p>
                    <div>
                        <input placeholder='your email' type="text" name="" id="" />
                        <button type="button">SIGN UP</button>
                    </div>
                </form>
            </div>
        </div>

    )
}


export const Footer = () => {

    return (
        <div className="footer">

            <div className="footer-section">

                <div className="footer-section-contact">
                    <img src="https://img.thesitebase.net/files/10394844/2023/02/04/180x180_x2@16755159689bea4c82f1.png" alt="" srcset="" />
                    <ul>
                        <li>+1 (844) 909-4899</li>
                        <li>support@petfancy.shop</li>
                    </ul>
                </div>

                <div className="footer-section-customer-support">
                    <p>Customer Support</p>
                    <ul>
                        <li>Contact Us</li>
                        <li>FAQs</li>
                        <li>Order Tracking</li>
                    </ul>
                </div>


                <div className="footer-section-policies">
                    <p>Policies</p>
                    <ul>
                        <li>Privacy Policy</li>
                        <li>Term of Service</li>
                        <li>Return Policy</li>
                        <li>Shipping Policy</li>
                        <li>Refund Policy</li>
                    </ul>
                </div>

            </div>


            <div className="copyright">

                <span><FontAwesomeIcon icon={faCopyright}></FontAwesomeIcon> {new Date().getFullYear()}</span>


                <div
                    className='copyright-right-container'
                >
                    <span>DCMA REPORT</span>

                    <div>

                        <p>
                            <FontAwesomeIcon icon={faGlobe} /> USA (USD) | EN</p>
                        <div className="card-grid">
                            <img src="https://img.thesitebase.net/files/10088580/2020/06/15/1592212702159c1d36ae.png" alt="" />
                            <img src="https://img.thesitebase.net/files/10088580/2020/06/15/1592212715afd34ddc0e.png" alt="" />
                            <img src="https://img.thesitebase.net/files/10088580/2020/06/15/1592212709e5152d4744.png" alt="" />
                            <img src="https://img.thesitebase.net/files/10088580/2020/06/15/15922126940058f3e369.png" alt="" />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
// {image="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAisAAAIrCAAAAAALxYb0AAAAAmJLR0QA/4ePzL8AAAVwSURBVHja7dzbVqMwGIBR3/8l/4iUGXGQgzzAXLRqW0JN62X29wisvciBkKdVKuvJIxArYkWsiBWxIlYkVsSKWBErYkWsSKyIFbEiVsSKWBErEitiRayIFbEiViRWxIpYEStiRayIFYkVsSJWxIpYESsSK2JFrIgVsSJWxIrEilgRK2JFrIgViRWxIlbEilgRK2JFYkWsiBWxIlbEisSKWBErYkWsiBWJFbEiVsSKWBErYkViRayIFbEiVsSKxIpYEStiRayIFbEisSJWxIpYEStiRWJFrIgVsSJWxIpYkVgRK2JFrIgVsSKxIlbEilgRK2JFrEisiBWxIlbEiliRWBErYkWsiBWxIlY8ArEiVsSKWBErYkViRayIFbEiVsSKxIpYEStiRayIFbEisSJWxIpYEStiRWJFrIgVsSJWxIpYkVgRK2JFrIgVsSKxIlbEilgRK2JFrEisiBWxIlbEiliRWBErYkWsiBWxIlYkVsSKWBErYkWsSKyIFbEiVsSKWJFYEStiRayIFbEiViRWxIpYEStiRaxIrIgVsSJWxIpYESsSK2JFrIgVsSJWJFbEilgRK2JFrIgViRWxIlbEilgRKxIrYkWsiBWxIlbEiu5qbjpWVETlOVpWVEalWVgRKqwUNh0u62ZUWMn20cRVzQcqrOTqYlOHCiuZ3iLTGyqsbBpTzkqaUGHlx8nK1ZSldiqs3JqsXExZqqfCys3JyrF/qNRuZZnOGtK+lTR/UlmmabIOqq65jdIOHycqcxMRcZhZqYtKKqbSHanMJyoRz/b4q+rPvW+VbyoRf1mpqaaUSrulEi+s1FT6BZVoWGFl00uOCiusnFbIh34Yx6E/pD0qrLASEZH6r1MIy2u7ZKmwwspxfXy5tM5RYYWViH4tocIKK6VUWGGlK6TCSvVWUnausr4EK6zcHoFOVNaeFVZuv1Y+qawLK6xcfyPMU1nXlhVW9g/sn1PJDEKsVG7lfYfKOrDCymXTDpX1nRVWLhu/qTTnVFhhZXcMuqKSOeHPSuVW+h0q5ras7P0ydk3FmpmV/F7cloq9OFayg9CWyvrKCiubY9hZKktihZVrAEuOynoIVlgpovIarLDyOBVWqraSp7Ls3MnCSsVWvqjM7dk/H/3ejyGs1Gvlm0oTkbp+mMahv3HnBivVWrmgUhIrtVq5mwortVq5nworlVp5gAordfUJ44jkPiqs1FX3CyruAKurKT1OJc2sVNXYPEqlGVdWatMyfG3sj0N5Y7UPrO471nOfC8UKKqygwgoqrKDCCiqsoKKqraDCSmmosFJaiworYkWsiBWxIlYkVsSKWBErYkWsSKyIFbEiVsSKWBErEitiRayIFbEiViRWxIpYEStiRaxIrIgVsSJWxIpYESsSK2JFrIgVsSJWJFbEilgRK2JFrIgViRWxIlbEilgRKxIrYkWsiBWxIlbEisSKWBErYkWsiBWJFbEiVsSKWBErYkViRayIFbEiVsSKxIpYEStiRayIFbEisSJWxIpYEStiRWJFrIgVsSJWxIrEilgRK2JFrIgVsSKxIlbEilgRK2JFYkWsiBWxIlbEiliRWBErYkWsiBWxIrEiVsSKWBErYkWsSKyIFbEiVsSKWJFYEStiRayIFbEiViRWxIpYEStiRaxIrIgVsSJWxIpYkVgRK2JFrIgVsSJWJFbEilgRK2JFrEisiBWxIlbEilgRKxIrYkWsiBWxIlYkVsSKWBErYkWsiBWJFbEiVsSKWBErEitiRayIFbEiVsSKxIpYEStiRayIFYkVsSJWxIpYEStiRWJFrIgVsSJWxIrEilgRK2JFrIgViRWxIlbEilgRK2JFYkWsiBWxIlbEisSK7us/OyFk/fYyoKEAAAAASUVORK5CYII=",title="loading...",price="$0.00",original_price="$0.00"}
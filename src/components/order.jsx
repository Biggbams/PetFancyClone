import Navandhero,{Footer} from "./navandhero";
import './css/order.scss'
import './css/accordion.scss'
import { useState,useEffect,useRef, Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleExclamation,faCaretDown,faCaretUp } from "@fortawesome/free-solid-svg-icons";
import Faqs_data from './Faqs'
const Order = () => {
   
    return ( 

        <div className="order-container">
            <Navandhero/>
                <OrderTracking/> 
            <Footer/>

        </div>
     );
}
 


const OrderTracking = () => {
    const [showForm,setShowForm]=useState('a')
const trackoption=
    (showForm=='a')?(
  <div className="trackbynumber" >
<input type="text" name="" id="" placeholder="Enter your order name" />
  <input type="text" name="" id="" placeholder="Enter your order mail" />
  <button>
      TRACK ORDER
  </button>
</div>)
    :   (<div className="trackbyname">
    <input type="text" name="" id="" placeholder="Enter your order name" />
      
      <div>
             <input type="text" name="" id="" placeholder="Enter your order mail" />
       <input type="text" name="" id="" placeholder="Enter your order mail" />
 
      </div>
        <button>
          TRACK ORDER
      </button>
    </div>
    )

    return ( 
<div className="order-tracking">
<div className="firstparagraph">
<h1>Order tracking</h1>
</div>


<div className="form-container">
<div className="innerform-container">
   <p>
   Once your order has shipped, you will receive an email from us with a link to track your order. You can also enter the order name and your email in the box below to get the status of your shipment.
    </p> 

<div className="form">
    <form action=""
  
    >

    {trackoption}
    </form>
</div>

<p className="toggle-form" onClick={()=>{
   if(showForm=='a'){
    setShowForm('b')
   }else{
    setShowForm('a')
   }
}}>{(showForm=='a')?'I forgot my order name':'Track by ordeer number'}</p>
<p className="myc"> <span><FontAwesomeIcon   className="icon" icon={faCircleExclamation}/></span>  <p>If you just received a shipment notification, please allow 3 to 5 working days for the tracking information to update.</p> </p>

<Faqs/>

</div>




</div>

</div>

     );
}
 
const Faqs = () => {
    const [icon,setIcon]=useState(faCaretDown)
    const accordion_paragraph=useRef([]);

  const accordion=  Faqs_data.map((data,index)=>
    
  <Fragment>

    <button

key={data.id}
    onClick={()=>{
        openAccordion(index)
    }}
    >
        <p>{data.Heading}</p>
        <FontAwesomeIcon
        icon={icon}
        />
        </button>
    <div className="faq-description" ref={(node)=>{
        accordion_paragraph.current[index]=node
    }}>
        <p>
        {data.Description}
        </p>
    </div>
</Fragment>
    )

    const openAccordion  = (index) => {
      if( accordion_paragraph.current[index].style.maxHeight!='30em')  { 
       accordion_paragraph.current[index].style.maxHeight='30em'
    accordion_paragraph.current[index].style.padding='1em'
    accordion_paragraph.current[index].style.borderBottom='1px solid grey'
    setIcon(faCaretUp)
    }else{
        accordion_paragraph.current[index].style.maxHeight='0em'
        accordion_paragraph.current[index].style.padding='0em'
        accordion_paragraph.current[index].style.borderBottom='0' 
       setIcon(faCaretDown)
    }
}
   
    return ( 

        <div  className="order-faqs">

        <p>faqs</p>
        {accordion}
      </div>
     );
}
 
module.export={Faqs};
export default Order;





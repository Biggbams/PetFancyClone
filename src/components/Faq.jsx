import Navandhero, { Footer } from "./navandhero";
import "./css/faq.css";
import { useState,useRef } from "react";
import Faqs from "./Faqs";
//so now dapo,to make the indiviaual close bottom work you have to use useRef to access the dom
//if you want to use use fer you haveto import it from react
function Faq() {
  return (
    <div>
      <Navandhero />
      <Faqchild 
      
      />
      <Footer />
    </div>
  );
}

export default Faq;

function Faqchild() {
//create a dom reference heere
const closeBtn=useRef([]);
const spanRotate=useRef([])
//the reason we are putting array as an argument in the useref is that we want to mkae the useRef behave like an array so we can allocate 1 useref to each element in the list
//if you dont do it that way the   cloose btn will open all description panel at once



  // const [toggleHeight, setToggleHeight] = useState("5em");
  // const [togglepad, setTogglePad] = useState("1em");

  const myfaqs= Faqs.map((e,index)=>
  <div className="Main3" key={e.id}>
  <h2>
    <span>{e.Heading}</span>
    <span
    ref={(node)=>{
      spanRotate.current[index]=node
    }}
      onClick={()=>{
        togglef(index)
      }}
      className="icon"
      
    >
      +
    </span>
  </h2>
  <p
    className="faq-paragraph"
    ref={(node)=>{
      closeBtn.current[index]=node
    }}
    // style={{
    //   height: toggleHeight,
    //   paddingBottom: togglepad,
      
    // }}
  >
    {e.Description}
  </p>
</div>
  )
  
  
  

  function togglef(index) {
    if ( closeBtn.current[index].style.maxHeight=='5em') {
      closeBtn.current[index].style.maxHeight='0em'
      closeBtn.current[index].style.padding='0em'
      closeBtn.current[index].style.border='0em'
      // setToggleHeight("0em");
      // setTogglePad("0em");
      spanRotate.current[index].style.rotate='0deg'
    } else {
      closeBtn.current[index].style.maxHeight='5em'
      closeBtn.current[index].style.padding='1em'
      closeBtn.current[index].style.borderBottom='.1em solid black'
      // setToggleHeight("5em");
      // setTogglePad("1em");
      spanRotate.current[index].style.rotate='45deg'
    }
  }
  return (
    <div className="Main">
      <div className="Main2">
        <h1>FAQs</h1>
       
{myfaqs}
        
      </div>
    </div>
  );
}

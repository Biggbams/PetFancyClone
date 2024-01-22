import Navandhero, { Footer } from "./navandhero";
import "./css/faq.css";
import { useState } from "react";
import Faqs from "./Faqs";

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
  const [toggleHeight, setToggleHeight] = useState("5em");
  const [togglepad, setTogglePad] = useState("1em");
  const [rotateMe, setRotateMe] = useState("45deg");

  const myfaqs= Faqs.map((e)=>
  <div className="Main3" key={e.id}>
  <h2>
    {e.Heading}
    <span
      onClick={togglef}
      className="icon"
      style={{
        rotate: rotateMe,
      }}
    >
      +
    </span>
  </h2>
  <p
    className="faq-paragraph"
    style={{
      height: toggleHeight,
      paddingBottom: togglepad,
    }}
  >
    {e.Description}
  </p>
</div>
  )
  
  
  

  function togglef() {
    if (toggleHeight == "5em") {
      setToggleHeight("0em");
      setTogglePad("0em");
      setRotateMe("0deg");
    } else {
      setToggleHeight("5em");
      setTogglePad("1em");
      setRotateMe("45deg");
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

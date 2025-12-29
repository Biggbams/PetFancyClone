import Navandhero,{Footer} from "./navandhero";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './css/contact.scoped.scss'
import { faUpload } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
    return ( 

        <div className="contact">
            <Navandhero/>
            <ContactForm/>
            <Footer/>
        </div>
     );
}
 


const ContactForm = () => {
    return ( 
        <div className="contact-form">
<div className="c-form" >
    <div className="header">
        <p>Contact Us</p>
    <p>Feel free to drop us a question, we are happy to assist. By the way, you can take a look at our FAQs here to find some helpful information.</p>
    </div>
   
    <form action="" method="post">
<div className="two-textfield">
   <div className="textfield">
    <label htmlFor="firstname">Name</label>
   <input type="text"placeholder="your name" />
   </div>
   <div className="textfield">
   <label htmlFor="firstname" >Email *</label>
   <input type="email" placeholder="your email"/>
   </div>
</div>


<div className="one-textfield">
   <div className="textfield">
    <label htmlFor="firstname">Phone Number</label>
   <input type="text"placeholder="your phone number" />
   </div>
   
</div>

<div className="one-textfield">
   <div className="textfield">
    <label htmlFor="firstname">Issue type *</label>
   <select name="" id="" placeholder="your phone number">
    <option value="">I have not recieved my order</option>
    <option value="">I want to cliam my order</option>
    <option value="">I want to cancel my order</option>
    <option value="">I want to update my order</option>
    <option value="">I have a question about a product or collection</option>
    <option value="">I have not recieved my confirmation email</option>
    <option value="">Other reasons</option>

   </select>
   </div>
   
</div>


<div className="one-textfield">
   <div className="textfield">
    <label htmlFor="firstname">Order Number</label>
   <input type="text"placeholder="#ab-hdghjjkkd" />
   </div>
   </div>

<div className="one-textfield">
   <div className="textfield">
    <label htmlFor="firstname">Phone Number</label>
<textarea name="" id="" cols="30" rows="7" placeholder="What information should we know? Please provide as much details as possible"></textarea>
   </div>
   
</div>
<p className="p-bold">Attachments</p>
<p>Attach up to 10 files. Max file size: 10 MB. Refer to our guideline on attaching files and providing necessary information to help us resolve your issue faster</p>

<div>
<button className="upload-btn"><FontAwesomeIcon icon={faUpload}/> Upload</button>
 </div>
 <div 
 style={{
    padding:'2em'
 }}
 >
    
 <button className="btn-send">SEND</button> 
 </div>
   </form>
</div>
        </div>
     );
}
 
module.export={  ContactForm};
export default Contact;
import React from "react";
import Button from "./Button";

function WelcomeToPetFancy(){
    return(
        <div className="WelcomeToPetFancy">

            <div className="pet-img">
            
            <img src = "https://img.thesitebase.net/files/10394844/2023/02/04/0x720@1675517534ead679137a.jpeg" alt = "dogs" width={343.33} height={240.33} />
            </div>

            <div className="pet-paragraph">
            <h1>Welcome To Petfancy</h1>
            <p>Petfancy the ultimate pet shop experience. It really is a paradise for pets and pet owners. We have all the pet supplies, pet food, toys and accessories you and your pet need at great value prices. All our store colleagues are fully trained in pet care and dedicated to the welfare of your animals, with most of them being experienced pet owners. 
                
            <br /><br />So when you are a new owner or an expert, our store colleagues are on hand to help you make the right choices. </p>
            <Button margin="1.5em" />
            </div>
        </div>
    )
}

export default WelcomeToPetFancy;
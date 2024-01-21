import React from "react";

function button({margin='0'}){
    return(
        <button 
        className="viewNow"
        style={

            {
                marginTop:margin
            }
        }
        >
            VIEW NOW
        </button>
    );
}

export default button;
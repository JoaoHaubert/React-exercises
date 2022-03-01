import React from "react";
import FamiliaMembro from "./FamiliaMembro";

export default props => {

    return(
        <div>
            <FamiliaMembro nome = "Joao" {...props}/>
            <FamiliaMembro nome = "Ana" {...props}/>
            <FamiliaMembro nome = "Ayla" {...props}/>
        </div>
    ) 
}
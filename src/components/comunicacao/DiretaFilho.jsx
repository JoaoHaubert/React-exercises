import React from 'react';

export default props =>{

    return(

        <div>
            
                <span>{props.name} </span>
                <span><strong>{props.age} anos </strong></span>
                <span>{props.geek ? 'E Nerd' : 'Nao e nerd'}</span>
            
        </div>
    )
}
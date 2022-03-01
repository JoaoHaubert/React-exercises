import React from 'react';
import DiretaFilho from './DiretaFilho'
export default props =>{

    return(
        
        <div>
            <DiretaFilho
            name = 'Roberto'
            age = {25}
            geek ={true} 
            />

            <DiretaFilho
            name = 'Carlos'
            age = {32}
            geek ={false} 
            />

        </div>
    )
}
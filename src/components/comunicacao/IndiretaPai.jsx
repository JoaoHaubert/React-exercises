import React, { useState } from 'react'
import Indiretafilho from './IndiretaFilho'

export default props => {
    
    const [name, setName] = useState('n/a')
    const [age, setAge] = useState(0)
    const [geek, setGeek] = useState(false)

    function fornecerInfo(name, age, geek){
        setName(name)
        setAge(age)
        setGeek(geek)
    }
       

    return(
        <div>
            <div>
                <span>{name} </span>
                <span><strong>{age} </strong></span>
                <span>{geek ? 'GEEK' : 'NO GEEK'} </span>
            </div>

            <Indiretafilho clicking = {fornecerInfo} />

        </div>
    )
}
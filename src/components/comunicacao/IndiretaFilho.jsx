import React from 'react'

export default props => {

    const callBack = props.clicking
    const min = 60
    const max = 74
    const ageGenerator = () => parseInt(Math.random() * (max - min)) + min
    const geekGenerator = () => Math.random() > 0.5
    
    return(

        <div>
            <div>
                Filho
            </div>

            <button onClick={() => {callBack('Roberto', ageGenerator, geekGenerator)}}>
                Fornecer Info
            </button>
        </div>
    )
}
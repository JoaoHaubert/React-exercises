import react from 'react';

export default function result(props){
    const {minimo, maximo} = props
    const result = parseInt(Math.random() * (maximo - minimo) + minimo);

    return(
        <div>
            <p>Primeiro Numero: {minimo} </p>
            <p>Ultimo Numero: {maximo} </p>
            <p>O numero sorteado foi: {result} </p>
        </div>
    )
}
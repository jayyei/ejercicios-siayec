import React, { Fragment, useState, useEffect } from 'react';

const range = (number)=>{
    let array = [];
    for(let i = 1; i<= number; i++){
        array.push(i);
    }
    return array;
}

const styleColors =(element) =>{
    let color;
    let resto = element % 5;
    switch (resto){
        case 0:
            color = 'white';
            break;
        case 1:
            color = 'red'
            break;
        case 2:
            color = 'green'
            break;
        case 3:
            color = 'blue'
            break;
        case 4:
            color = 'black'
            break;
        default:
            color = 'purple' 
            break;
    }

    return {
        textAlign: 'left',
        backgroundColor :color
    }
}

export const Ejercicio1 = ({n}) => {
     const [array, setArray] = useState(range(n));

     useEffect(() => {
         setArray(range(n))
     }, [n])

    return(
        <Fragment>
            {array.map((element, index) =>(
                <div key={index} style={styleColors(element)}>{element}</div>
            ))}
        </Fragment>
    )
}
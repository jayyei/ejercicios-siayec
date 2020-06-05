import React, { Fragment, useState } from 'react';
import { Ejercicio1 } from './Ejercicio1';



export const Ejercicio1V1 = () => {
    const [number, setNumber] = useState(0);
    const handleChange = (e) => {
        console.log("El value", e.target.value);
        console.log(parseInt(e.target.value))
        setNumber(parseInt(e.target.value))
    }
    return(
        <Fragment>
            <label htmlFor="number">Valor inicial:</label>
            <input type='text' name='number'
                onChange={handleChange}></input>
            <Ejercicio1
                n={number}
                />
        </Fragment>
    )
}
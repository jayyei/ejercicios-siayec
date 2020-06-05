import React, { Fragment, useState } from 'react';
import { Ejercicio1 } from './Ejercicio1';



export const Ejercicio1V2 = () => {
    const [number, setNumber] = useState(0);
    const [showError, setShowError] = useState(false)
    const handleChange = (e) => {
        console.log("El value", e.target.value);
        console.log(parseInt(e.target.value))
        if(isNaN(parseInt(e.target.value))){
            setShowError(true);
        }else{
            setShowError(false);
            setNumber(parseInt(e.target.value))
        }
    }
    return(
        <Fragment>
            <label htmlFor="number">Valor inicial:</label>
            <input type='text' name='number'
                onChange={handleChange}></input>
            {showError? 
                <div>This shouldn't happen</div>: 
                <Fragment></Fragment>
            }
            {showError?
                <Fragment></Fragment> :
                <Ejercicio1
                    n={number}
                />
            }
        </Fragment>
    )
}
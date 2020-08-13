import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({ setCategories }) => {

    //Si el useState no tiene algún valor aparecerá warning por ser undefined entonces lo definimos con string vacío
    const [inputValue, setInputValue]=useState('');

    //para yo utilizar el evento de mostrar un valor del input , llamo a los métodos del evento del callback
    //aplicamos destructuring para el e.target.value
    //con esto si podemos cambiar todo
    const handleInputChange=({target})=>{
        const {value}=target
        setInputValue(value);
    }

    /*para el enter del input*/
    const handleSubmit=(e)=>{
        e.preventDefault();//prevenir el comportamiento por defecto del formulario
        //console.log('Submit hecho');


        //Validación
        if(inputValue.trim().length > 2){
            setCategories(cats=>[inputValue,...cats]);
        }
        setInputValue('');//Después del enter queda vacío

       
    }

    
    


    /*El fragment agrupa elementos html o jsx*/

/*El onchange se actualiza cada vez que cambia*/
/*Onsubmit envía un formulario*/
    return (
        <form onSubmit={ handleSubmit }>
       
        <input 
            type="text"
            value={ inputValue }
            onChange={ handleInputChange }
        />
        </form>
    )
}


AddCategory.propTypes={
    setCategories: PropTypes.func.isRequired
}
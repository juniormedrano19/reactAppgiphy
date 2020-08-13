import React,{ useState } from 'react'
import PropTypes from 'prop-types'
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid'

const GifExpert = () => {

    //const categories=['One Punch','Samurai X','Dragon Ball']

    const [categories, setCategories] = useState(['One Punch'])


    /*const handleAdd=()=>{
        //se usa spread para agregar elementos con el botón que se ubica en el return
       // const newArray=[...categories,'China']
        setCategories([...categories,'HunterXHunter']);
       // setCategories(cats=>[...cats,'HunterXHunter']);
    }*/



    //Cuándo tu quieras poner un arreglo dentro del return y del fragment se pone en llaves

    return (
        <>
        <h2>GifExpertApp</h2>
        <AddCategory setCategories={ setCategories } />
        <hr />
        {/*Agregar un elemento al arreglo categories*/}
       {/* <button onClick={handleAdd}>Agregar</button>*/}

        <ol>
            {   //map es una propiedad que regresa un nuevo arreglo sin modificar el actual
                categories.map((category)=>
                    //si no le pongo key sale error en cosola
                    //los paréntesis se igualan al return
                  //( <li key={category}>{category}</li>)
                  ( 
                      <GifGrid 
                      key= { category }
                      category={ category } />
                  )
                )
            }
        </ol>


            
        </>
    )
}

GifExpert.propTypes = {

}

export default GifExpert

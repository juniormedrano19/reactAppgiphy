import React from 'react'

export const GifGridItem = ({id,title,image}) => {

   // console.log({id,title,url})
      /*en vez de class es className*/
    return (
     
        <div className="card animate__animated animate__fadeIn ">
       {/* {img.title}*/}

        <img src={ image } alt={ title } />
        <p> { title } </p>

            
        </div>
    )
}

//colección de elementos que coinciden con esa categoría
//borrar useeffect y usestate
import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
//import { getGifs } from '../helpers/GetGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {



  //  const [images,setImages]=useState([]);
//Importamos el hook useFetchGif
//Desestructurando
 //  const {data, loading}= useFetchGifs();
 const {data:images,loading}= useFetchGifs(category);
   //console.log(data);
   //console.log(loading)
    //HACER PETICIONES HTTP DE ACUERDO A LAS IMAGENES
    //USAMOS POSTMAN PARA REALIZAR prueba API-, peticiones get



    //segundo párametro arreglo de dependencia, el useEffect solo se dispara una única ver porque el arreglo está vacío
    //solo quiero que se ejecute este código cuando el código es renderizado por primera vez
    /*useEffect(()=>{
        //Cómo el getGifs
        getGifs(category)
            //.then(img=>setImages(img))
            .then(setImages)
    },[ category ])*/





 //{id,title}
/* (<li key={ id }>{ title }</li>)*/

/*Card-grid contenedor de cartas*/



    return (
        <>
        <h3 className="animate__animated animate__fadeIn">{ category }</h3>

        { 
            //operador ternario, si el loading es true muestra 'Cargando' sino 'Data Cargada'
            //loading ? 'Cargando...' : 'Data cargada'

            //usamos &&(ampersand) and
            loading && <p className="animate__animated animate__flash">Loading ...</p>
            //se utiliza flash para darle una animación de parpadeo
            
            
            }
        <div className="card-grid">
           
            
                {
                    
                    images.map(( img )=>
                       (<GifGridItem 
                       key={img.id}
                      {...img} />))
                }
            
        </div> 
        </>
    )
}

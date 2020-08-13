import { useState, useEffect } from 'react'
import { getGifs } from '../helpers/GetGifs'

export const useFetchGifs = ( category ) => {
   

    const [state, setState] = useState({
        data:[],
        loading:true,
    });
//los efectos no pueden ser async
//hace el efecto cuàndo cambia la categorìa
  useEffect(() => {
        //peticiòn http
    getGifs( category )
    //traemos las imàgenes
        .then( imgs=>{
           // setTimeout(()=>{
              //  console.log(imgs)
                setState(
                    {
                        data:imgs,
                        loading:false
                    }
                )

         //   },3000)
           
        })


  }, [category])







    /* setTimeout(()=>{

        setState({
            data:[1,2,3,4,5,6,7],
            loading:false
        })


    },3000);
 */
    //a los 3 segundos ejecuta lo que tiene adentro el setTimeout , que en este caso sería el setState con su valor



    return state; // {data:[],loading:true}
}


   export const getGifs= async( category )=>{

        /*Encode URI convierte los espacios en porcentaje o símbolo mas*/

        //IMPORTANTE CUANDO PEGUES DE POSTMAN LOS ESPACIOS SE COMPLETAN CON + Y SE LE PONE HTTPS://
        let url =`https://api.giphy.com/v1/gifs/search?q=${encodeURI( category )}&limit=10&api_key=tOABssXIdHe3QlBdR0TSMB0aGdH8a6PW`;

        const resp=await fetch(url)

        const {data}= await resp.json();

        //de data yo obtendré las imágenes o datos que unicamente necesito utilizando map
        const gifs=data.map(({id,title,images})=>{
           let { downsized_medium }=images
           let {url}=downsized_medium
            return {
                id:id,
                title:title,
                image:url,
            }
        })

        return gifs;
      
//console.log(gifs)
//setImages(gifs)

    }
//getGifs();
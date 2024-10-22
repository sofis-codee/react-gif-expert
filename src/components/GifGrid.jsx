
import { GifItem } from './GifItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

  
export const GifGrid = ({ category } ) => {

    const {images,isLoading} = useFetchGifs (category);

    return (
 <>
 <h3>{category}</h3>
 {
    // si isLoading está en true va a ejecutar el h2
    isLoading && (<h2>cargando...</h2>)
 }


 {/* <h5>{counter}</h5>
 <button onClick ={()=>setCounter(counter+1)}> +1</button>
    */}


    <div className= "card-grid">
        {
        images.map((image)=>( 
           <GifItem 
           key={image.id}
        //   title = {image.title}
        //   url = {image.url}
        {...image }
           />

        ))
        }
       
 
    </div>  
 </>
)
}

 
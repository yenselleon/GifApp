import { GifGridItem } from './GifGridItem';
import '../index.css';
import { useFetchGifs } from '../hooks/useFetchGifs';


export const GifGrid = ({category}) => {

    
    const {data:images, loading} = useFetchGifs( category );
    


    return (

        <>
            { loading && <p>Cargando</p> }

            <div className="wrapper__container">
                
                <h3>{category}</h3>
                
                
                {
                    images.map( (img) => (
                        < GifGridItem 
                            key={img.id}
                            {...img}
                        />
                    ))
                }
            

            </div>

        </>
    )
}



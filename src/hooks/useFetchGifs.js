import { useEffect, useState } from "react"
import { getGif } from "../helpers/getGif";


export const useFetchGifs = ( category ) => {
    
    const [state, setState] = useState({
        data: [],
        loading: true,
    });

    useEffect( () => {


        setTimeout(() => {
            
            getGif( category )
                  .then( imgs =>  {
                        setState({
                            data: imgs,
                            loading: false,
                        });
                  });
            
        }, 3000);

    }, [ category ]);

    return state;

};

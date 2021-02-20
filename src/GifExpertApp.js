import React, { useState } from 'react';
import { AddCategories } from './components/AddCategories';
import {GifGrid} from './components/GifGrid';


const GifExpertApp = () => {

    const [categories, setCategories] = useState(['']);


    return (
        <>
            <h2>GifExpertApp</h2>

            <AddCategories setCategories={ setCategories } />
            <hr />

            <ol>
                {
                    categories.map( category => (
                        <GifGrid 
                            key={ category }
                            category={ category }
                        />
                    ))
                }
            </ol>
        </>
    );


}

export default GifExpertApp;
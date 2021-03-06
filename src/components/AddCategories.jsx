import React, {useState} from 'react'
import PropTypes from 'prop-types';

export const AddCategories = ( {setCategories} ) => {
    
    const [inputValue, setInputValue] = useState('one punch');

    const handleInputChange = (e) => {
        setInputValue( e.target.value);
    };

const handleSubmit = (e) => {
        e.preventDefault();
        
        if(inputValue.trim().length > 2){

            setCategories( cats => [inputValue, ...cats]);
            
            return setInputValue( e.target.value = '');
        };
    };

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

AddCategories.prototypes = {
    setCategories: PropTypes.func.isRequired,
}
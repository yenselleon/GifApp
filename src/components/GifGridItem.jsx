import React from 'react'
import '../index.css'

export const GifGridItem = ({title, url,id}) => {
    return (
        <div className="wrapper__Card">
            <img src={url} alt={title} />
            <h1> {title} </h1>
        </div>
    )
}

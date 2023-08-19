import React from 'react'
import './style.css'

export const Company = ({ company }) => {
    const { image, title } = company
    return (
        <div class='figure-company' >
            <img src={image} alt={image} />
            <p>{title}</p>
        </div>
    )
}

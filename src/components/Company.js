import React from 'react'

export const Company = ({ company }) => {
    const { image, title } = company
    return (
        <figure>
            <img src={image} alt={image} />
            <figcaption>{title}</figcaption>
        </figure>
    )
}

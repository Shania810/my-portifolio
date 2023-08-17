import React from 'react'

export const Person = ({ person }) => {
    const { name, image } = person
    return (
        <figure>
            <img src={image} alt={image} />
            <figcaption>{name}</figcaption>
        </figure>
    )
}

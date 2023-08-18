import React from 'react'

export const Project = ({ project }) => {
    const { title, image, description } = project
    return (
        <div>
            <img src={image} alt={image} />
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    )
}

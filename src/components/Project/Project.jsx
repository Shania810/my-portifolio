import React from 'react'
import './style.css'

export const Project = ({ project }) => {
    const { title, image, description } = project
    return (
        <div class='project' >
            <img src={image} alt={image} />
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    )
}

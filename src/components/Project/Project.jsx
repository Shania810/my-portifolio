import React from 'react'
import './style.css'

export const Project = ({ project }) => {
    const { title, image, description, link } = project
    return (
        <div className='project' >
            <a href={link} target='_blank' rel='noreferrer' >
                <img src={image} alt={image} />
                <h2>{title}</h2>
                <p>{description}</p>
            </a>
        </div>
    )
}

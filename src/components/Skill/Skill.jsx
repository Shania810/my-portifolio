import React from 'react'
import './style.css'

export const Skill = ({ skill }) => {
    const { title, image } = skill
    return (
        <div class='skill'>
            <img src={image} alt={image} />
            <p>{title}</p>
        </div>
    )
}

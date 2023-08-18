import React from 'react'

export const Skill = ({ skill }) => {
    const { title, image } = skill
    return (
        <div>
            <title>{title}</title>
            <img src={image} alt={image} />
        </div>
    )
}

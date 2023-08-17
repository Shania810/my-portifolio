import React from 'react'

export const Badge = ({ skill }) => {
    const { title } = skill
    return (
        <>
            <span>{title}</span>
        </>
    )
}

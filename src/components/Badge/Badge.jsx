import React from 'react'
import './style.css'

export const Badge = ({ skill }) => {
    const { title } = skill
    return (
        <>
            <span className='badge' >{title}</span>
        </>
    )
}

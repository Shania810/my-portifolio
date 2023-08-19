import React from 'react'
import { Person } from '../Person'
import './style.css'

export const Feedback = ({ feedback }) => {
    const { person, description } = feedback
    return (
        <div className='feedback' >
            <Person person={person} />
            <blockquote>{description}</blockquote>
        </div>
    )
}

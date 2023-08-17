import React from 'react'
import { Person } from './Person'

export const Feedback = ({ feedback }) => {
    const { person, description } = feedback
    return (
        <>
            <Person person={person} />
            <blockquote>{description}</blockquote>
        </>
    )
}

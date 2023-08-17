import React from 'react'
import { Company } from './Company'

export const Experience = ({ experience }) => {
    const { company, description, duration } = experience
    return (
        <div>
            <Company value={company} />
            <time>{duration}</time>
            <details>{description}</details>
        </div>
    )
}

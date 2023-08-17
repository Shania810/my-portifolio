import React from 'react'
import { Company } from './Company'
import { Badge } from './Badge'

export const Experience = ({ experience }) => {
    const { company, description, duration, skills } = experience
    return (
        <div>
            <Company value={company} />
            <time>{duration}</time>
            <details>{description}</details>
            {skills.map((skill) => <Badge skill={skill} />)}
        </div>
    )
}

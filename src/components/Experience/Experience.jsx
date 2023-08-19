import React from 'react'
import { Company } from '../Company'
import { Badge } from '../Badge'

export const Experience = ({ experience }) => {
    const { company, description, duration, skills } = experience
    return (
        <div>
            <Company company={company} />
            <time>{duration}</time>
            <p>{description}</p>
            {skills.map((skill) => <Badge skill={skill} />)}
        </div>
    )
}

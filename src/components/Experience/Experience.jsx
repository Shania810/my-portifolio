import React from 'react'
import { Company } from '../Company/Company'
import { Badge } from '../Badge/Badge'
import './style.css'

export const Experience = ({ experience }) => {
    const { company, description, duration, skills } = experience
    return (
        <div id='experience' >
            <Company company={company} />
            <time>{duration}</time>
            <p>{description}</p>
            {skills.map((skill) => <Badge skill={skill} />)}
        </div>
    )
}

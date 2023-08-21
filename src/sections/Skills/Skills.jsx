import React, { useEffect, useState } from 'react'
import api from '../../utils/api.utils'
import { Skill } from '../../components/Skill/Skill'
import { Component } from '../../design/Component/Component'
import './style.css'

export const Skills = () => {
    const [skills, setSkills] = useState([])

    useEffect(() => {
        const allSkills = async () => {
            try {
                const skills = await api.getSkills()
                setSkills(skills)
            } catch (error) {
                console.log(error)
            }
        }
        allSkills()
    }, [])

    return (
        <section id='section-skills' >
            <div>
                <div id='section-skills-title' >
                    <h2>Skills</h2>
                    <Component />
                </div>
                <div id='skills' >
                    {skills.map((skill) => {
                        return <Skill skill={skill} />
                    })}
                </div>
            </div>
        </section>
    )
}

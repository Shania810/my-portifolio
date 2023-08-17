import React, { useEffect, useState } from 'react'
import api from '../../utils/api.utils'
import { Skill } from '../../components/Skill'

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
        <section>
            <title>Skills</title>
            <div>
                {skills.map((skill) => {
                    return <Skill skill={skill} />
                })}
            </div>
        </section>
    )
}

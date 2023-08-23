import React, { useEffect, useState } from 'react'
import api from '../../utils/api.utils'
import { BiSolidCircle } from 'react-icons/bi'
import './style.css'

export const RowSkill = () => {
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
        <div id='rowSkill' >
            {skills.map((skill, index) => {
                return <div>
                    <span>{skill.title}</span>
                    {index !== skills.length - 1 && <BiSolidCircle color='#CECECE' size='15' />}
                </div>
            })}
        </div>
    )
}

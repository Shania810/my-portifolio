import React, { useEffect, useState } from 'react'
import api from '../../utils/api.utils'
import { Experience } from '../../components/Experience'

export const Experiences = () => {
    const [experiences, setExperiences] = useState([])
    useEffect(() => {
        const allExperiences = async () => {
            try {
                const experiences = await api.getExperiences()
                setExperiences(experiences)
            } catch (error) {
                console.log(error)
            }
        }
        allExperiences()
    }, [])

    return (
        <section>
            <div>
                <title>Last Experiences</title>
                <span>Description</span>
            </div>
            <div>
                {experiences.map((experience) => {
                    return <Experience experience={experience} />
                })}
            </div>
        </section>
    )
}

import React, { useEffect, useState } from 'react'
import api from '../../utils/api.utils'
import { Experience } from '../../components/Experience/Experience'
import { BsAsterisk } from 'react-icons/bs'
import './style.css'

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
        <section id='section-experiences' >
            <div>
                <div id='section-experiences-title'>
                    <div >
                        <h2>Last experiences</h2>
                        <span>Description</span>
                    </div>
                    <div>
                        <BsAsterisk color='#83AEFD' size='70' />
                    </div>
                </div>
                <div id='experiences' >
                    {experiences.map((experience) => {
                        return <Experience experience={experience} />
                    })}
                </div>
            </div>
        </section>
    )
}

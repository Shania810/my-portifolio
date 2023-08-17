import React, { useEffect, useState } from 'react'
import api from '../../utils/api.utils'
import { Project } from '../../components/Project'

export const Projects = () => {
    const [projects, setProjects] = useState([])

    useEffect(() => {
        const allProjects = async () => {
            try {
                const projects = await api.getProjects()
                setProjects(projects)
            } catch (error) {
                console.log(error)
            }
        }
        allProjects()
    }, [])

    return (
        <section>
            <title>Projects</title>
            <div>
                {projects.map((project) => {
                    return <Project project={project} />
                })}
            </div>
        </section>
    )
}

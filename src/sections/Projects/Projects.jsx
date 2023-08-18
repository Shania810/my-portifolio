import React, { useEffect, useState } from 'react'
import api from '../../utils/api.utils'
import { Project } from '../../components/Project'
import { Component } from '../../design/Component/Component'
import './style.css'

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
        <section id='section-projects' >
            <div id='section-projects-title' >
                <h2>Projects</h2>
                <Component />
            </div>
            <div id='projects' >
                {projects.map((project) => {
                    return <Project project={project} />
                })}
            </div>
        </section>
    )
}

import React from 'react'
import { Navbar } from '../../sections/Navbar/Navbar'
import { Main } from '../../sections/Main/Main'
import { Projects } from '../../sections/Projects/Projects'
import { Skills } from '../../sections/Skills/Skills'
import { Experiences } from '../../sections/Experiences/Experiences'
import { Feedbacks } from '../../sections/Feedbacks/Feedbacks'

export const Home = () => {
    return (
        <div>
            <Navbar />
            <Main />
            <Projects />
            <Skills />
            <Experiences />
            <Feedbacks />
        </div>
    )
}

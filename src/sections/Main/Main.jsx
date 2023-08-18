import React from 'react'
import imagePerson from '../../images/imagePerson.png'
import { Component } from '../../design/Component/Component'
import './style.css'

export const Main = () => {
    return (
        <section>
            <main>
                <div id='title' >
                    <h1>A junior</h1>
                    <h1>Full-stack developer</h1>
                    <Component />
                </div>
                <div id='image' >
                    <img src={imagePerson} alt={imagePerson} />
                </div>
            </main>
        </section>
    )
}

import React from 'react'
import imagePerson from '../../images/imagePerson.jpeg'

export const Main = () => {
    return (
        <section>
            <main>
                <h1>A junior Full-stack developer</h1>
                <figure>
                    <img src={imagePerson} alt={imagePerson} />
                </figure>
            </main>
        </section>
    )
}

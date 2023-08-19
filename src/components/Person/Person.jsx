import React from 'react'
import './style.css'
import { CgQuote } from 'react-icons/cg'

export const Person = ({ person }) => {
    const { name, image } = person
    return (
        <figure className='figure-person' >
            <div>
                <img src={image} alt={image} />
                <figcaption>{name}</figcaption>
            </div>
            <div>
                <CgQuote size='110' color='#DEDEDE' />
            </div>
        </figure>
    )
}

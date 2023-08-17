import React from 'react';
import { ImArrowUpRight2 } from 'react-icons/im';
import './style.css'

export const Link = ({ url, value }) => {
    return (
        <div>
            <a href={url} target="_blank" rel='noreferrer' >{value}</a>
            <ImArrowUpRight2 />
        </div>
    )
}

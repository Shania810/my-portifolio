import React from 'react';
import { BsArrowUpRight } from 'react-icons/bs';

export const Link = ({ url, value }) => {
    return (
        <div>
            <a href={url}>{value}</a>
            <BsArrowUpRight />
        </div>
    )
}

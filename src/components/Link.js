import React from 'react';
import { BsArrowUpRight } from 'react-icons/bs';

export const link = ({ url, value }) => {
    return (
        <div>
            <a href={url}>{value}</a>
            <BsArrowUpRight />
        </div>
    )
}

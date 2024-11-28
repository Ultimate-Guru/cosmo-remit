/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'

const LinkItem = ({ href, icon: Icon, text }) => {
    return (
        <li>
            <a href={href}
                className='flex items-center p-2'>
                <Icon className='mr-5 text-2xl' />
                <span className='flex-1 me-3 text-xl'>{text}</span>
            </a>
        </li>
    )
}

export default LinkItem;
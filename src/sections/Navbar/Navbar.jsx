import React from 'react'
import logo from '../../images/logo.png'
import { Link } from '../../components/Link/Link'
import './style.css'
import { NavLink } from 'react-router-dom'

export const Navbar = () => {
    return (
        <nav>
            <div>
                <NavLink to='/' >
                    <img src={logo} alt={logo} />
                </NavLink>
                <div id='links'>
                    <Link url="https://github.com/Shania810" value="Github" />
                    <Link url="https://www.linkedin.com/in/shania-antezana/" value="Linkedin" />
                </div>
            </div>
        </nav>
    )
}

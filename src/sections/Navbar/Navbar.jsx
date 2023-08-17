import React from 'react'
import logo from '../../images/logo.png'
import { Link } from '../../components/Link/Link'
import './style.css'

export const Navbar = () => {
    return (
        <nav>
            <div>
                <img src={logo} alt={logo} />
                <div id='links'>
                    <Link url="https://github.com/Shania810" value="Github" />
                    <Link url="https://www.linkedin.com/in/shania-antezana/" value="Linkedin" />
                </div>
            </div>
        </nav>
    )
}

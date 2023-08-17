import React from 'react';
import logo from '../../images/logo.png';
import { Link } from '../../components/Link';

export const Navbar = () => {
    <nav>
        <img src={logo} alt={logo} />
        <Link url="https://github.com/Shania810" value="Github" />
        <Link url="https://www.linkedin.com/in/shania-antezana/" value="Linkedin" />
    </nav>
}

import React from 'react'
import { Link } from 'react-router-dom'
import {Button} from '../design/Design-antd'
import { Nav,NavRight } from '../design/Styled-components'
export const NavBar = () => {
  return (
    <Nav>
        <Button type='primary'><Link to='/'>Home</Link></Button>
        <NavRight>
        <Button type='primary'><Link to='/projects'>Meus projetos</Link></Button>
        <Button type='primary'><Link to='/me'>Sobre mim</Link></Button>
        </NavRight>
    </Nav>
  )
}

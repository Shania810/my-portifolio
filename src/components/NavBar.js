import React from 'react'
import {Button} from '../design/Design-antd'
import { Nav,NavLink,NavRight } from '../design/Styled-components'
export const NavBar = () => {
  return (
    <Nav>
        <Button type='link'><NavLink to='/'>Home</NavLink></Button>
        <NavRight>
        <Button type='link'><NavLink to='/projects'>Meus projetos</NavLink></Button>
        <Button type='link'><NavLink to='/me'>Sobre mim</NavLink></Button>
        </NavRight>
    </Nav>
  )
}

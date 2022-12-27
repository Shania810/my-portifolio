import React from 'react'
import {Button} from '../design/Design-antd'
import { Nav,NavRight } from '../design/Styled-components'
export const NavBar = () => {
  return (
    <Nav>
        <Button type='primary' href='/'>Home</Button>
        <NavRight>
        <Button type='primary' href='/projects' >Meus projetos</Button>
        <Button type='primary' href='/me' >Sobre mim</Button>
        </NavRight>
    </Nav>
  )
}

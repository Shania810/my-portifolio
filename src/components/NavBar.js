import React from 'react'
import {Button} from '../design/Design-antd'
import { Nav } from '../design/Styled-components'
export const NavBar = () => {
  return (
    <Nav>
        <Button href='/'>Home</Button>
        <Button href='/projects' >Meus projetos</Button>
        <Button href='/me' >Sobre mim</Button>
    </Nav>
  )
}

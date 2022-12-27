import ButtonGroup from 'antd/es/button/button-group'
import React from 'react'
import {Button} from '../design/Design-antd'
export const NavBar = () => {
  return (
    <div>
    <ButtonGroup>
        <Button href='/projects' >Meus projetos</Button>
        <Button href='/me' >Sobre mim</Button>
    </ButtonGroup>
    </div>
  )
}

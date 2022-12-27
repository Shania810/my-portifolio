import React from 'react'
import {Title,Button, Space} from '../design/Design-antd'
export const Home = () => {
  return (
    <div>
        <Title>Olá,Meu nome é Shania</Title>
        <Space wrap>
           <Button type='primary' href='/me' size='large'>Sobre mim</Button>
           <Button type='primary' href='/projects' size='large'>Meus projetos</Button>
        </Space>
    </div>
  )
}

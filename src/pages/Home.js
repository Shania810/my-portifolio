import React from 'react'
import {Title} from '../design/Design-antd'
import { Container, ImageProfile } from '../design/Styled-components'
import MyPhoto from  '../images/MyPhoto.jpg'
export const Home = () => {
  return (
    <Container>
        <Title>Olá,Meu nome é Shania</Title>
        <div>
        <ImageProfile src={MyPhoto} />
        </div>
    </Container>
  )
}

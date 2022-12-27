import React from 'react'
import { Title,Divider, Button } from '../design/Design-antd'
import { Card, Container, Icon, ImageProject, Link } from '../design/Styled-components'
import ProjectOne from '../images/ProjectOne.png'
import ProjectTwo from '../images/ProjectTwo.png'
import {GithubOutlined} from '@ant-design/icons';
export const Projects = () => {
  return (
    <Container>
       <Divider><Title>Meus Projetos</Title></Divider>
       <Divider orientation='left'><Title level={2}>Recipes 4U</Title></Divider>
       <div>
        <Card>
        <ImageProject src={ProjectTwo} alt={ProjectOne}/>
        <div>
          <p><b>Descrição:</b> Um site de consulta de receitas</p>
          <p><Link href='https://github.com/DenyNakano/react-project-recipes4u' target="_blank" rel='noreferrer' ><Icon><GithubOutlined /></Icon>Recipes 4U</Link></p>
          <Button href='https://incredible-marshmallow-4076bf.netlify.app/'  target="_blank"  >Confira</Button>
        </div>
        </Card>
       </div>
       <Divider orientation='right'><Title level={2}>Fit In The Wall</Title></Divider>
       <div>
        <Card>
          <div>
            <p><b>Descrição:</b> Jogo inspirado no programa de televisão</p>
            <p><Link href='https://github.com/Shania810/fit-in-the-wall' target="_blank"   rel='noreferrer' ><Icon><GithubOutlined/></Icon>Fit In the Wall</Link></p>
            <Button href='https://shania810.github.io/fit-in-the-wall/'  target="_blank"  >Confira</Button>
          </div>
          <ImageProject src={ProjectOne} alt={ProjectOne}/>
        </Card>
       </div>
    </Container>  
  )
}
